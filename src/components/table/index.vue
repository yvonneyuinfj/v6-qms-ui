<!-- eslint-disable max-len -->
<template>
  <div
    :id="advancedTableId"
    ref="wrapper"
    class="advanced-table"
    :class="[
      props.lineField ? 'tree-grid' : '',
      showCustomPageSize && !paginationSimple ? 'customPageClass' : '',
      rowSelection ? 'has-rowSelection' : ''
    ]"
  >
    <a-spin :spinning="loading">
      <div v-if="showToolbar" :class="toolbarClass">
        <div v-if="$slots['toolBarLeft']" class="toolBarLeft">
          <slot name="toolBarLeft">{{ $slots['toolBarLeft'] }}</slot>
        </div>
        <div v-if="$slots['toolBarRight']" class="toolBarRight">
          <slot name="toolBarRight">{{ $slots['toolBarRight'] }}</slot>
        </div>
      </div>
      <div class="inner-table-wrapper">
        <s-table
          ref="table"
          v-bind="attrs"
          v-model:pagination="computPagination"
          :size="tableSize"
          :bordered="bordered"
          :stripe="stripe"
          :height="height"
          :columns="visibleColumns"
          :row-key="rowKey"
          :row-height="tableRowHeight"
          :header-height="headerHeight"
          :indent-size="indentSize"
          :data-source="dataSource"
          :row-selection="rowSelection"
          :custom-row="customRowInner"
          :animate-rows="false"
          @expand="handleExpand"
          @change="handleTableChange"
          :auto-height="autoHeight"
        >
          <template
            v-for="(_, scopeSlotName) in $slots"
            :key="scopeSlotName"
            #[scopeSlotName]="scope"
          >
            <template
              v-if="
                $props.lineField &&
                $props.showLine &&
                scope.column &&
                scope.column.dataIndex === $props.lineField
              "
            >
              {{ getCellTreeLine(scope.record, scope.index) }}
              <span v-if="scope.record" :class="{ firstNodeClass: scope.record.firstNodeFlag }">
                <div v-for="(item, index) in scope.record.lineArray" :key="index">
                  <span
                    v-if="item != undefined && item.hasLine && !item.childrenFlag"
                    class="tableTreeLine"
                    :style="{ left: item.left }"
                  />
                  <span
                    v-if="item != undefined && item.hasLine && item.childrenFlag"
                    class="tableTreeLine"
                    :style="{ left: item.left, height: item.lineHeight }"
                  />
                </div>
                <span class="treeGridLineClass">
                  <span class="line-ver" :style="{ width: '17px', left: '-17px' }" />
                  <span
                    class="line-hor"
                    :style="{ height: scope.record.lineHeight, left: '-17px' }"
                  />
                </span>
              </span>
            </template>
            <slot
              v-if="!['toolBarLeft', 'toolBarRight', 'bodyCell'].includes(scopeSlotName.toString())"
              :name="scopeSlotName"
              v-bind="scope"
            />
            <!-- 增加treeGrid连线高度计算逻辑 -->
            <slot
              v-if="['bodyCell'].includes(scopeSlotName.toString())"
              :name="scopeSlotName"
              v-bind="scope"
            >
              <template v-if="scope.column && scope.column.dataIndex === $props.lineField">
                {{ scope.text }}
              </template>
            </slot>
          </template>
        </s-table>
        <div v-if="showTableSetting" class="actions tableSet">
          <a-tooltip title="列配置">
            <TableSetting
              class="action"
              :default-size="tableSize"
              :size-list="sizeList"
              :columns="tableSettingColumns"
              :table-header-height="tableHeaderHeight"
              @sizeChange="onSizeChange"
              @columnsChange="onColumnsChange"
              @columnsReset="onColumnsReset"
            />
          </a-tooltip>
        </div>
        <div v-if="showCustomPageSize && !paginationSimple" class="tableCustomPage">
          <a-dropdown v-model:visible="pageSizeVisible">
            <template #overlay>
              <a-menu size="small">
                <a-menu-item>
                  <a-input
                    v-model:value="customPageSize"
                    style="width: 80px"
                    :max-length="5"
                    placeholder="回车查询"
                    @pressEnter="handleMenuClick(customPageSize)"
                  />
                </a-menu-item>
                <a-menu-item
                  v-for="item in getPageSizeOptions"
                  :key="item"
                  @click="handleMenuClick(item)"
                >
                  <span
                    style="font-size: 14px"
                    :style="{ fontWeight: currentPageSize == item ? 'bold' : '' }"
                  >
                    {{ item }}条/页
                  </span>
                </a-menu-item>
              </a-menu>
            </template>
            <a-button size="small" style="width: 100px">
              <span style="font-size: 12px">{{ currentPageSize }}条/页</span>
              <DownOutlined />
            </a-button>
          </a-dropdown>
          <span style="font-size: 12px">
            跳至
            <a-input
              v-model:value="jumperPage"
              style="width: 44px"
              size="small"
              :max-length="25"
              @pressEnter="handleJumper"
            />
            页
          </span>
        </div>
        <div v-if="pagination !== false" class="tableRefresh">
          <a-tooltip title="刷新">
            <loading-outlined v-if="loading" class="action" />
            <reload-outlined v-else class="action" @click="refresh" />
          </a-tooltip>
        </div>
        <div v-if="pagination !== false && rowSelection" class="tableSelection">
          已选择{{
            rowSelection && rowSelection.selectedRowKeys ? rowSelection.selectedRowKeys.length : 0
          }}项
        </div>
        <div
          v-if="paginationSimple"
          :class="{ tableSelectionTotal: true, tableSelectionTotalNoSelection: !rowSelection }"
        >
          第
          {{
            total > 0
              ? pageParameter.page === 1
                ? 1
                : (pageParameter.page - 1) * pageParameter.rows + 1
              : total
          }}
          -
          {{ (pageParameter.page - 1) * pageParameter.rows + dataSource.length }} 条， 共
          {{ total }} 条记录
        </div>
      </div>
    </a-spin>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false // 阻止自动透传给唯一的根组件
};
</script>
<script setup lang="ts">
import cloneDeep from 'lodash.clonedeep';
import type { ScrollPosition } from '@surely-vue/table';
import { useUserStore, SET_USER_CUSTOMED_CONFIG, GET_USER_CUSTOMED_CONFIG } from '@/store/user';
import TableSetting from './TableSetting.vue';
import { settings } from '@/settings';

const { proxy } = getCurrentInstance();
const userStore = useUserStore();
const attrs = useAttrs();
/**
 * 组件回调事件
 * refresh 刷新回调
 * columnsReset 列设置重置回调
 * expand 树表格展开收起回调
 */
const $emit = defineEmits(['refresh', 'columnsReset', 'expand', 'change', 'changeColumns']);
const props = defineProps({
  /** 是否有边框 */
  bordered: { type: Boolean, default: true },
  /** 是否有斑马纹 */
  stripe: { type: Boolean, default: true },
  /** 表格尺寸 */
  size: {
    type: String as PropType<'small' | 'middle' | 'default'>,
    default: settings.table.size || 'middle'
  },
  /** 表格高度 */
  height: { type: Number, default: 300 },
  /** 加载动画 */
  loading: Boolean,
  /** 是否显示工具栏 */
  showToolbar: { type: Boolean, default: true },
  /** 分页对象 */
  pagination: { type: [Boolean, Object], default: undefined },
  /** 是否简约风格分页 */
  paginationSimple: { type: Boolean, default: false },
  /** 分页信息对象 */
  pageParameter: {
    type: Object,
    default: () => ({
      page: 1,
      rows: settings?.table?.pageSize || 20
    })
  },
  /** 分页总数 */
  total: { type: Number, default: 0 },
  /** 表格列数组 */
  columns: { type: Array, default: () => [] },
  /** 是否显示列配置 */
  showTableSetting: { type: Boolean, default: true },
  /** 表格行 key 的取值，可以是字符串或一个函数 */
  rowKey: { type: [String, Function], required: true },
  /** 数据数组  */
  dataSource: { type: Array, default: () => [] },
  /** 列表项是否可选择 */
  rowSelection: { type: Object, default: null },
  /** 设置行属性 */
  customRow: { type: Function, default: null },
  /** 单击行选中处理：不选no 单选radio 多选checkbox */
  rowClickSelectionType: {
    type: String as PropType<'no' | 'radio' | 'checkbox'>,
    default: 'checkbox'
  },
  /** 表格行高 */
  rowHeight: {
    type: Number,
    default: settings?.table?.rowHeight || 36
  },
  /** treeGird树节点连线字段名称 */
  lineField: { type: String, default: '' },
  /** treeGird树是否存在连线，需和lineField配套使用 */
  showLine: { type: Boolean, default: false },
  /** treeGird是否显示默认根节点，用于计算连线时使用 */
  showRootNode: { type: Boolean, default: false },
  /** treeGrid树节点层级间距 */
  indentSize: {
    type: Number,
    default: settings?.table?.indentSize || 24
  },
  /** 行编辑时提示信息颜色，默认为红色，默认值在RowEdit组件中 */
  editRowMsgColor: { type: String, default: '' },
  /** 行编辑时是否标记变更字段，默认为false，默认值在RowEdit组件中 */
  editRowIsShowChanged: { type: Boolean, default: undefined },
  /** 表格key，用于个性化列配置 */
  tableKey: { type: String, default: '' },
  /** 开启自定义可输可选分页条数 */
  showCustomPageSize: { type: Boolean, default: false },
  /** stable自带属性，自动行高 */
  autoHeight: { type: Boolean, default: false },
  headerHeight: { type: Number, default: 36 }
});
const advancedTableId = ref(`advanced-${props.tableKey}`);
provide('editRowMsgColor', props.editRowMsgColor);
provide('editRowIsShowChanged', props.editRowIsShowChanged);
const isShowLine = ref(false);
// 表头插槽
const toolbarClass = ref(['header-bar', props.size]);
// 分页
const getPageSizeOptions = settings?.table?.pageSizeOptions || ['10', '20', '30', '40', '50'];
const computPagination = computed(() => {
  const defaultPagination = {
    current: props.pageParameter.page,
    pageSize: props.pageParameter.rows,
    pageSizeOptions: getPageSizeOptions,
    total: props.total,
    showSizeChanger: !props.showCustomPageSize,
    showLessItems: true,
    showQuickJumper: !props.showCustomPageSize,
    simple: props.paginationSimple,
    showTotal: (total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条记录`
  };
  return typeof props.pagination === 'undefined' ? defaultPagination : props.pagination;
});
const pageSizeVisible = ref(false);
const customPageSize = ref();
const jumperPage = ref();
const currentPageSize = ref(props.pageParameter.rows);
function handleJumper() {
  const current = parseInt(jumperPage.value);
  if (!isNaN(current) && current > 0) {
    const pagination = {
      pageSize: currentPageSize.value,
      current
    };
    const sorter = {
      field: null
    };
    $emit('change', pagination, null, sorter);
  }
  jumperPage.value = null;
}
function handleMenuClick(value) {
  const pageSize = parseInt(value);
  if (!isNaN(pageSize) && pageSize > 0) {
    currentPageSize.value = pageSize;
    const pagination = {
      pageSize: value,
      current: props.pageParameter.page
    };
    const sorter = {
      field: null
    };
    $emit('change', pagination, null, sorter);
  }
  pageSizeVisible.value = false;
  customPageSize.value = null;
}
function handleTableChange(pagination, filters, sorter) {
  $emit('change', pagination, filters, sorter);
}
// 刷新
function refresh() {
  $emit('refresh');
}
// 配置图标高度
const tableHeaderHeight = ref(0);
const wrapper = ref();
onMounted(() => {
  nextTick(() => {
    getTableHeaderHeight();
  });
});
function getTableHeaderHeight() {
  if (wrapper.value) {
    tableHeaderHeight.value = wrapper.value.querySelector(
      '.surely-table .surely-table-header'
    )?.offsetHeight;
    if (tableHeaderHeight.value === 0) {
      // 处理默认表格隐藏无法获取header高度时赋值为行高
      tableHeaderHeight.value = tableRowHeight.value;
    }
  }
}
// 表格尺寸配置
const sizeList = {
  small: {
    title: '紧凑'
  },
  middle: {
    title: '中等'
  },
  default: {
    title: '宽松'
  }
};
const changedTableSize = ref('');
const settedTableSize = ref('');
const initTableSize = computed(() => props.size || 'middle');
const tableRowHeight = ref(props.rowHeight);
const tableSize = computed(() => {
  const size = changedTableSize.value || settedTableSize.value || initTableSize.value;
  // 表格行高这里不使用size控制，通过表格size动态计算s-table行高属性控制
  // 列配置高度计算不再使用获取元素高度计算，当表格默认不展示时获取高度为0，这里直接通过表格尺寸写死
  if (props.autoHeight && !props.showLine) {
    // 开启自动行高，并且没有树连线时设置行高为undefined实现自动行高
    // 如果有树连线不能开启自动行高否则无法计算连线
    tableRowHeight.value = undefined;
  } else {
    if (size === 'middle') {
      tableRowHeight.value = props.rowHeight;
      // tableHeaderHeight.value = 36;
    } else if (size === 'default') {
      tableRowHeight.value = props.rowHeight + 6;
      // tableHeaderHeight.value = 42;
    } else if (size === 'small') {
      tableRowHeight.value = props.rowHeight - 6;
      // tableHeaderHeight.value = 30;
    }
  }
  return size;
});
function onSizeChange(val) {
  changedTableSize.value = val;
  // getRowHeight(val);
  setTableSet();
  nextTick(() => {
    getTableHeaderHeight();
  });
}
// 表格列配置
const tableColumns = ref([]);
const tableSettingColumns = ref([]);
const setData = ref([]);
onBeforeMount(async () => {
  if (props.showTableSetting) {
    await getTableSet();
  }
  setTableColumns(setData.value);
});
const visibleColumns = computed(() =>
  tableColumns.value.filter(col => typeof col.visible === 'undefined' || col.visible === true)
);
/** 获取个性化列配置 */
async function getTableSet() {
  const currentUserId = proxy.$getLoginUser().id;
  const customedCode = `${currentUserId}_` + `MN_${props.tableKey}`;
  const res = await userStore[GET_USER_CUSTOMED_CONFIG](customedCode);
  if (res) {
    if (res.MK_COLUMNS_SORT) {
      setData.value = [...res.MK_COLUMNS_SORT];
    }
    if (res.MK_TABLE_SIZE) {
      settedTableSize.value = res.MK_TABLE_SIZE;
    }
    nextTick(() => {
      getTableHeaderHeight();
    });
  }
}
/** 设置个性化列配置 */
function setTableSet() {
  const currentUserId = proxy.$getLoginUser().id;
  const customedCode = `${currentUserId}_` + `MN_${props.tableKey}`;
  const customedContent = { MK_COLUMNS_SORT: setData.value, MK_TABLE_SIZE: tableSize.value };
  userStore[SET_USER_CUSTOMED_CONFIG](customedCode, customedContent);
}
function setTableColumns(setDatas) {
  const columns = [...props.columns];
  // 根据配置获取表格列显隐权限，表格列校验code格式为：tableKey:列dataIndex
  // 在菜单管理模块配置列校验code（菜单权限接口中permissionColumnList里存在该code）且设置为禁止访问（该code对应的isAuth字段为0），则隐藏该列
  const columnsFilter = [];
  for (let i = 0; i < columns.length; i++) {
    const column = Object.assign({}, columns[i]);
    const permissionCode = [`${props.tableKey}:${column.dataIndex}`];
    if (proxy.$hasColumnPermi(permissionCode)) {
      column.visible = true;
      columnsFilter.push(column);
    }
  }
  // 深拷贝
  const newColumns = cloneDeep(columnsFilter);
  newColumns.map(item => {
    item.visible = typeof item.visible === 'undefined' ? true : item.visible;
    return item;
  });
  // 结合个性化配置处理列配置
  let sameColumnsNum = 0; // 列配置与个性化配置重合数量
  const order = []; // 个性化配置列 用于排序
  for (let i = 0; i < setDatas.length; i++) {
    for (let j = 0; j < newColumns.length; j++) {
      if (newColumns[j].dataIndex === setDatas[i].key) {
        newColumns[j].visible = setDatas[i].visible;
        newColumns[j].fixed = setDatas[i].fixed;
        order.push(setDatas[i].key);
        sameColumnsNum += 1;
      }
    }
  }
  // 列配置与个性化配置没有重合 个性化配置又有值 则进行个性化配置清空
  if (!sameColumnsNum && setDatas.length) {
    setData.value = [];
    setTableSet();
  }
  // 按个性化配置列进行排序
  if (order.length > 0) {
    newColumns.sort((preValue, nextValue) => {
      if (order.indexOf(preValue.dataIndex) < 0 || order.indexOf(nextValue.dataIndex) < 0) {
        return 0;
      }
      return order.indexOf(preValue.dataIndex) - order.indexOf(nextValue.dataIndex);
    });
  }
  // 按固定列左右排列
  const sortedColumns = [];
  newColumns.map(item => {
    if (item.fixed === 'left') {
      sortedColumns.push(item);
    }
    return item;
  });
  newColumns.map(item => {
    if (!item.fixed) {
      sortedColumns.push(item);
    }
    return item;
  });
  newColumns.map(item => {
    if (item.fixed === 'right') {
      sortedColumns.push(item);
    }
    return item;
  });
  tableColumns.value = sortedColumns;
  // eslint-disable-next-line max-len
  tableSettingColumns.value = newColumns.filter(
    item => item.dataIndex && item.dataIndex !== 'action' && item.dataIndex !== props.lineField
  );
}
/* 列配置变化回调 */
function onColumnsChange(val: any, _columnItem: any) {
  const newColumns = [];
  for (let i = 0; i < val.length; i++) {
    newColumns.push({
      key: val[i].dataIndex,
      name: val[i].title,
      visible: val[i].visible,
      fixed: val[i].fixed || null
    });
  }
  setData.value = [...newColumns];
  setTableColumns(setData.value);
  setTableSet();
  $emit('changeColumns', val);
}
/** 手动触发表格列配置方法 */
function changeColumnsSetting(columnsSetting) {
  columnsSetting.map(item => {
    setData.value.map(tim => {
      if (item.dataIndex === tim.key) {
        tim.visible = typeof item.visible === 'undefined' ? tim.visible : item.visible;
        tim.fixed = typeof item.fixed === 'undefined' ? tim.fixed : item.fixed || null;
      }
      return tim;
    });
    return item;
  });
  const keys = [];
  setData.value.map(tim => {
    keys.push(tim.key);
    return tim;
  });
  columnsSetting
    .filter(item => !keys.includes(item.dataIndex))
    .map(item => {
      setData.value.push({
        key: item.dataIndex,
        name: item.title,
        visible: item.visible,
        fixed: item.fixed || null
      });
      return item;
    });
  setTableColumns(setData.value);
  setTableSet();
}
/* 列配置重置回调 */
function onColumnsReset() {
  setData.value = [];
  setTableColumns(setData.value);
  setTableSet();
  $emit('columnsReset');
}
// 单击行 选中处理
const tempMap = new Map(); // 创建map对象
const dblclickFlag = ref(false);
function customRowInner(record, index) {
  const tempCustomRow = props.customRow instanceof Function ? props.customRow(record, index) : {};
  if (!tempCustomRow.onClick) {
    tempCustomRow.onClick = e => {
      rowClick(e, record, index);
    };
  }
  if (!tempCustomRow.onDblclick) {
    tempCustomRow.onDblclick = e => {
      rowDblClick(e, record, index);
    };
  }
  if (!tempCustomRow.onContextmenu) {
    tempCustomRow.onContextmenu = e => {
      rowContextmenu(e, record, index);
    };
  }
  return tempCustomRow;
}
function rowClick(e, record, index) {
  e.stopPropagation(); // 阻止冒泡
  dblclickFlag.value = false; // 双击标志设为false
  const tmpRowKey = props.rowKey instanceof Function ? props.rowKey(record) : record[props.rowKey];
  selectRow(tmpRowKey, record);
  setTimeout(() => {
    // 利用延时规避双击
    if (!dblclickFlag.value) {
      // 执行自定义单击事件
      tempMap.set(record.id, null);
      const customRowOuter =
        props.customRow instanceof Function ? props.customRow(record, index) : {};
      if (customRowOuter?.onClick) {
        customRowOuter.onClick(e, record, index);
      }
    }
  }, 300);
}
function rowDblClick(e, record, index) {
  // console.log('🚀 ~ rowDblClick ~ e, record, index:', e, record, index);

  tempMap.set(record.id, null);
  dblclickFlag.value = true; // 双击标志设为true
  // 执行自定义双击事件
  const customRowOuter = props.customRow instanceof Function ? props.customRow(record, index) : {};
  if (customRowOuter?.onDblclick) {
    customRowOuter.onDblclick(e, record, index);
  }
}
function selectRow(rowKey, record) {
  const selectTime = tempMap.get(record.id);
  // eslint-disable-next-line newline-per-chained-call
  const time = parseInt(new Date().getTime().toString());
  if (selectTime === null) {
    tempMap.set(record.id, time);
  } else {
    if (time - selectTime < 300) {
      return;
    }
  }
  if (props.rowSelection && props.rowSelection.onChange && props.rowClickSelectionType !== 'no') {
    let selectedRowKeys = cloneDeep(props.rowSelection.selectedRowKeys);
    // 可选 && 表格选择需要点击行触发
    if (!props.rowSelection.type || props.rowSelection.type === 'checkbox') {
      // 多选
      if (props.rowClickSelectionType === 'radio') {
        // 表格多选点击行做单选处理
        if (selectedRowKeys.length === 0) {
          selectedRowKeys.push(rowKey);
        } else if (selectedRowKeys.length === 1) {
          if (selectedRowKeys.includes(rowKey)) {
            // 取消选中
            selectedRowKeys = [];
          } else {
            // 选中
            selectedRowKeys = [rowKey];
          }
        } else {
          // 选中
          selectedRowKeys = [rowKey];
        }
      } else {
        // 表格多选点击行做多选处理
        if (selectedRowKeys.includes(rowKey)) {
          // 取消选中
          selectedRowKeys.splice(
            selectedRowKeys.findIndex(item => item === rowKey),
            1
          );
        } else {
          // 选中
          selectedRowKeys.push(rowKey);
        }
      }
    } else {
      // 单选 必然做单选处理
      if (selectedRowKeys.includes(rowKey)) {
        // 取消选中
        selectedRowKeys = [];
      } else {
        // 选中
        selectedRowKeys = [rowKey];
      }
    }
    // 处理selectedRows，并调取外部onChange
    const selectedRows = [];
    props.dataSource.map(item => {
      const itemRowKey = props.rowKey instanceof Function ? props.rowKey(item) : item[props.rowKey];
      if (selectedRowKeys.includes(itemRowKey)) {
        selectedRows.push(item);
      }
      return item;
    });
    props.rowSelection.onChange(selectedRowKeys, selectedRows);
  }
}
function rowContextmenu(e, record, index) {
  const customRowOuter = props.customRow instanceof Function ? props.customRow(record, index) : {};
  if (customRowOuter?.onContextmenu) {
    customRowOuter.onContextmenu(e, record, index);
  }
}
const table = ref();
defineExpose({
  scrollTo,
  advancedTableId,
  changeColumnsSetting
});
function scrollTo(pos: ScrollPosition, behavior?: 'auto' | 'smooth') {
  table.value.scrollTo(pos, behavior);
}
const lock = ref(false);
// 记录一屏数据集合，这里无法获取一屏数据只能存储定长集合
const treeDataLength = 100;
let treeDataArray = [];
function handleExpand(expanded, record) {
  if (isShowLine.value) {
    lock.value = true;
    if (!expanded && isShowLine.value) {
      // 折叠，移除当前节点下所有子孙节点，便于后面计算连线高度
      treeDataArray = treeDataArray.filter(item => item.newPath.indexOf(record.id) < 0);
    }
    setTimeout(() => {
      lock.value = false;
      // getTreeLine(record, undefined);
      if (expanded) {
        // 展开时需要重新计算节点子节点连线，否则需要滑动鼠标触发计算
        let index = 0;
        record.children.forEach(item => {
          item.index = index;
          treeDataArray.push(item);
          index += 1;
        });
        record.children.forEach(item => {
          getCellTreeLine(item, item.index);
        });
      }
      getCellTreeLine(record, undefined);
    }, 100);
  }
  $emit('expand', expanded, record);
}
// 确定第一个节点数据
const firstNodeId = ref(String);
const getFirstNodeFlag = ref(false);
function getFirstNodeId() {
  const { dataSource } = toRefs(props);
  if (dataSource.value && dataSource.value.length > 0) {
    firstNodeId.value = dataSource.value[0].id;
  }
}
let reloadTreeLineIndex = 0;
watch(
  () => props.dataSource,
  newVal => {
    if (isShowLine.value) {
      // 树表格数据变化时重新迭代计算连线
      if (newVal && newVal.length > 0) {
        getFirstNodeFlag.value = false;
        treeDataArray = [];
        reloadTreeLineIndex = 0;
        reloadTreeLine(newVal);
      }
    }
  },
  { immediate: true }
);
function reloadTreeLine(treeList) {
  let index = 0;
  for (let i = 0; i < treeList.length; i++) {
    const item = treeList[i];
    getCellTreeLine(item, index);
    index += 1;
    reloadTreeLineIndex += 1;
    if (item.children && item.children.length > 0) {
      reloadTreeLine(item.children);
    }
    // 这里仅迭代计算50条数据（一屏数据），避免大数量计算
    if (reloadTreeLineIndex >= 50) {
      break;
    }
  }
}
/**
 * 计算每条数据需要在单元格中绘制的竖线
 * @param record
 * @param index
 */
function getCellTreeLine(record, index) {
  if (lock.value) {
    return;
  }
  if (!record || (record && !record.treePath)) {
    return;
  }
  isShowLine.value = true;
  if (!getFirstNodeFlag.value) {
    getFirstNodeId();
  }
  if (record.id === firstNodeId.value) {
    record.firstNodeFlag = true;
    getFirstNodeFlag.value = true;
  }
  // 这里需要借助数据treePath属性
  record.newPath = record.treePath.replace(record.id, '');
  if (typeof index !== 'undefined') {
    record.index = `${record.newPath}-${index}`;
  }
  if (treeDataArray.length === treeDataLength) {
    treeDataArray.splice(0, 1);
  }
  // 移除重复记录
  treeDataArray = treeDataArray.filter(item => item.id !== record.id);
  treeDataArray.push(record);
  // const newPath = record.newPath;
  const newPath = record.treePath;
  if (newPath) {
    let newPathArray = [];
    newPathArray = newPath.split('/');
    if (!props.showRootNode) {
      // 不显示默认根节点时需要冲treePath中移除一级节点id
      newPathArray = newPathArray.splice(1, newPathArray.length - 1);
    }
    // newPathArray = newPathArray.splice(0, newPathArray.length - 1);
    if (newPathArray.length > 0) {
      newPathArray.forEach((item, index) => {
        if (item) {
          const queryRecords = treeDataArray.filter(data => data.id === item);
          if (queryRecords.length > 0) {
            getNextNodeLine(record, queryRecords[0], index + 1);
          }
        }
      });
      // 当前行数据存在子节点时，绘制数据下短线，用于和下级节点连线连接
      const hasChildren = treeDataArray.filter(data => data.parentId === record.id);
      if (hasChildren != null && hasChildren.length > 0) {
        if (record.lineArray <= newPathArray.length) {
          record.lineArray.push({
            hasLine: false
          });
        }
        record.lineArray[newPathArray.length] = {
          hasLine: true,
          childrenFlag: true,
          left: `${computerLineSize(newPathArray.length)}px`,
          lineHeight: `${tableRowHeight.value / 2 - 10}px`
        };
      } else {
        if (record.lineArray <= newPathArray.length) {
          record.lineArray.push({
            hasLine: false
          });
        }
        record.lineArray[newPathArray.length] = {
          hasLine: false,
          childrenFlag: true
        };
      }
    }
  }
}
function getNextNode(record) {
  if (record) {
    const currentNodeIndexs = record.index.split('-');
    let nextIndex = currentNodeIndexs[1];
    // 获取当前行同级下一行index
    nextIndex = parseInt(nextIndex) + 1;
    // 组装当前行上一个兄弟节点坐标
    const nextNodeIndex = `${currentNodeIndexs[0]}-${nextIndex}`;
    const nextNodes = treeDataArray.filter(item => item.index === nextNodeIndex);
    return nextNodes;
  }
  return null;
}
function getNextNodeLine(record, queryRecord, queryLevel) {
  const nextNodes = getNextNode(queryRecord);
  const { lineArray } = record;
  if (!lineArray) {
    record.lineArray = [];
  }
  if (nextNodes != null && nextNodes.length > 0) {
    if (record.lineArray.length >= queryLevel) {
      record.lineArray[queryLevel - 1] = {
        hasLine: true,
        childrenFlag: false,
        left: `${computerLineSize(queryLevel - 1)}px`,
        lineHeight: `${tableRowHeight.value}px`
      };
    } else {
      record.lineArray.push({
        hasLine: true,
        childrenFlag: false,
        left: `${computerLineSize(queryLevel - 1)}px`,
        lineHeight: `${tableRowHeight.value}px`
      });
    }
    // 存在下一个兄弟节点
  } else {
    if (record.lineArray.length >= queryLevel) {
      record.lineArray[queryLevel - 1] = {
        hasLine: false
      };
    } else {
      record.lineArray.push({
        hasLine: false
      });
    }
  }
}
/**
 * 计算连线尺寸
 */
function computerLineSize(level) {
  let lineSize = 0;
  if (level >= 0) {
    lineSize = 12 + props.indentSize * level;
  } else {
    lineSize = 12;
  }
  return lineSize;
}
/** 监听columns, 动态修改columns */
watch(
  () => props.columns,
  _newVal => {
    setTableColumns(setData.value);
  },
  { deep: true }
);
// let tableLineHeight = ref();
// getRowHeight(props.size);
// function getRowHeight(size) {
//   if (props.rowHeight) {
//     tableLineHeight.value = props.rowHeight;
//   } else {
//     if (size == 'small') {
//       //紧凑
//       tableLineHeight.value = 34;
//     } else if (size == 'middle') {
//       //中等
//       tableLineHeight.value = 40;
//     } else if (size == 'default') {
//       //宽松
//       tableLineHeight.value = 46;
//     }
//   }
// }
// function getTreeLine(record, index) {
//   if (lock.value) {
//     return;
//   }
//   isShowLine.value = true;
//   //这里需要借助数据treePath属性
//   record.newPath = record.treePath.replace(record.id, '');
//   if (index != undefined) {
//     record.index = record.newPath + '-' + index;
//   }
//   if (treeDataArray.length == treeDataLength) {
//     treeDataArray.splice(0, 1);
//   }
//   //移除重复记录
//   treeDataArray = treeDataArray.filter(item => item.id != record.id);
//   treeDataArray.push(record);
//   //分隔行坐标，坐标0标识行treepath剔除行id,坐标1标识行所在层index
//   let currentNodeIndexs = record.index.split('-');
//   let lastIndex = currentNodeIndexs[1];
//   if (lastIndex > 0) {
//     //获取当前行同级上一行index
//     lastIndex = lastIndex - 1;
//     //组装当前行上一个兄弟节点坐标
//     let lastNodeIndex = currentNodeIndexs[0] + '-' + lastIndex;
//     const lastNodes = treeDataArray.filter(item => item.index == lastNodeIndex);
//     if (lastNodes != null && lastNodes.length > 0) {
//       //查找子孙节点个数
//       const childrenNods = treeDataArray.filter(item => {
//         return item.newPath.indexOf(lastNodes[0].id) != -1;
//       });
//       if (childrenNods != null) {
//         record.expandSize = childrenNods.length + 1;
//       }
//     } else {
//       //存在兄弟节点但是缓存数据中未找到兄弟节点，说明兄弟节点直接数据过多导致超出缓存集合
//       record.expandSize = 0;
//     }
//   } else {
//     if (!record.expandSize) {
//       record.expandSize = 1;
//     }
//   }
//   record.lineHeight = record.expandSize * tableLineHeight.value + 'px';
// }
</script>
<style lang="less">
@import './style/table.less';
</style>
