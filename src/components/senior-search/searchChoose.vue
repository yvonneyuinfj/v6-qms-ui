<template>
  <a-drawer
    title="选择方案"
    placement="bottom"
    :closable="false"
    :visible="true"
    :mask="false"
    height="300px"
    :maskClosable="false"
    @close="onClose"
  >
    <div style="display: flex;flex-direction: column">
      <div style="margin-bottom: 30px">
        <a-form v-bind="layout" ref="formRef" :model="queryForm">
          <a-row :gutter="16">
            <a-col v-bind="colLayout.cols">
              <a-form-item label="方案名称">
                <a-input v-model:value="queryForm.schemeName" placeholder="请输入方案名称" :allow-clear="true"
                         @pressEnter="handleQuery"/>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout.cols">
              <a-form-item label="方案类型">
                <a-select v-model:value="queryForm.schemeType"
                          :get-popup-container="triggerNode => triggerNode.parentNode" option-filter-prop="children"
                          :show-search="true" :allow-clear="true" placeholder="请选择密级" @change="handleQuery">
                  <a-select-option v-for="item in schemeTypeList" :key="item.sysLookupTlId" :value="item.lookupCode">
                    {{ item.lookupName }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout.cols" style="margin-left: auto">
              <div class="table-page-search-submitButtons">
                <a-space>
                  <a-button type="primary" @click="handleQuery">
                    <search-outlined/>
                    查询
                  </a-button>
                  <a-button type="primary" @click="resetQuery" ghost>
                    <redo-outlined/>
                    重置
                  </a-button>
                </a-space>
              </div>
            </a-col>
          </a-row>
        </a-form>
        <AvicTable
          ref="mdsAdvancedQueryScheme"
          table-key="mdsAdvancedQueryScheme"
          :columns="columns"
          :row-key="record => record.id"
          :data-source="list"
          :loading="loading"
          rowClickSelectionType="radio"
          :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
          type:'radio',
          columnWidth: 40,
          fixed: true
        }"
          :pageParameter="queryParam.pageParameter"
          :total="totalPage"
          @change="handleTableChange"
          @refresh="getList"
        >
          <template #bodyCell="{ column, text, record, index }">
            <template v-if="column.dataIndex === 'action'">
              <a-button
                type="link"
                class="inner-btn"
                @click.stop="handleDelete([record.id], 'row')">
                删除
              </a-button>
              <a-button
                v-if="record.schemeType !== 'public'"
                type="link"
                class="inner-btn"
                @click.stop="changeDefault([record.id])">
                设为默认方案
              </a-button>
            </template>
            <template v-if="column.dataIndex === 'attribute01'">
              <div class="Default" >
                {{record.attribute01 == 'Y' ? '是' : '否'}}
<!--                <a-radio-group type="primary" v-model:value="record.attribute01"-->
<!--                               @click.stop.once="changeDefault($event,[record.id])">-->
<!--                  <a-radio-button v-for="item in YNList" :key="item.sysLookupTlId" :value="item.lookupCode">-->
<!--                    {{ item.lookupCode}}-->
<!--                  </a-radio-button>-->
<!--                </a-radio-group>-->
              </div>
            </template>
          </template>
        </AvicTable>
      </div>
      <div
        :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
      >
        <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
      </div>
    </div>

  </a-drawer>
</template>

<script setup lang="ts">
import {
  listMdsAdvancedQuerySchemeByPage,
  delMdsAdvancedQueryScheme,
  setDefault
} from '@/api/avic/mms/mds/MdsAdvancedQuerySchemeApi';
import SeniorSearch from '@/components/senior-search/index.vue';

const { proxy } = getCurrentInstance();
const emit = defineEmits(['close', 'getBack']);
const props = defineProps({
  tabName: {
    type: String,
    default: ''
  }
});
const layout = {
  labelCol: { flex: '0 0 120px' },
  wrapperCol: { flex: '1 1 0' }
};
const colLayout = proxy.$colLayout4; // 页面表单响应式布局对象
const loading = ref(false);
const list = ref([]);
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]);
const totalPage = ref(0);
const columns = [
  {
    title: '方案名称',
    dataIndex: 'schemeName',
    key: 'schemeName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '方案类型',
    dataIndex: 'schemeTypeName',
    key: 'schemeTypeName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '默认方案',
    dataIndex: 'attribute01',
    key: 'attribute01',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    width: 240,
    fixed: 'right'
  }
];


const state = reactive({
  searchText: '',
  searchedColumn: ''
});

const queryForm = ref({
  schemeMenu: '',
  schemeTab: ''
});
const schemeTypeList = ref({});
const YNList = ref([]);//默认方案通用代码
let menuUrl = '';

const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 5 // 每页条数
  },
  searchParams: {
    ...queryForm

  },
  keyWord: ref('') // 快速查询数据
});

const lookupParams = [
  { fieldName: 'schemeType', lookUpType: 'MDS_SCHEME_TYPE' },
  { fieldName: 'YN', lookUpType: 'PLATFORM_YES_NO_FLAG' }
];


/** 获取通用代码  */
function getLookupList() {
  proxy.$getLookupByType(lookupParams, result => {
    schemeTypeList.value = result.schemeType;
    YNList.value = result.YN;
  });
}

onMounted(() => {
  /** 获取通用代码 **/
  getLookupList();
  /** 获取菜单 **/
  const url = window.location.href.split('/');
  menuUrl = url[url.length - 2] + '/' + url[url.length - 1];
  // queryForm.schemeMenu = url[url.length - 2] + '/' + url[url.length - 1];
  // queryForm.schemeTab = props.tabName || null;
  /** 获取模板列表 **/
  handleQuery();
});


/** 勾选复选框时触发 */
function onSelectChange(rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
  emit('getBack', rows[0]);
}

/** 获取列表 **/
const getList = () => {
  loading.value = true;
  listMdsAdvancedQuerySchemeByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      // totalPage.value = 0;
      loading.value = false;
    });
};

const handleQuery = () => {
  queryParam.searchParams = { ...queryForm.value, schemeMenu: menuUrl, schemeTab: props.tabName || null };
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
};

/** 高级查询 重置按钮操作 */
function resetQuery() {
  queryForm.value = {
    bpmType: queryForm.value.bpmType,
    bpmState: queryForm.value.bpmState
  };
  queryParam.searchParams = { ...queryForm.value, schemeMenu: menuUrl, schemeTab: props.tabName || null };
  handleQuery();
}


/** 表格排序 */
function handleTableChange(pagination, filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}

/** 删除 */
function handleDelete(ids, type) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  proxy.$confirm({
    title: `确认要删除${type == 'row' ? '当前行的' : '选择的'}数据吗?`,
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delMdsAdvancedQueryScheme(ids)
        .then(res => {
          if (res.success) {
            proxy.$message.success('删除成功！');
            getList();
          }
        });
    }
  });
}

/** 是否默认 **/
function changeDefault(id) {
  loading.value = true;
  setDefault(id).then(res => {
    if(res.success){
      getList();
    }
  });
}

const onClose = () => {
  emit('close');
};

</script>

<style scoped lang="less">
.demo-loadmore-list {
  min-height: 350px;
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.Default {
  ::v-deep .ant-radio-button-wrapper {
    width: 100px;
    text-align: center;
  }

  ::v-deep.ant-radio-button-wrapper .ant-radio-button-wrapper-checked {
    background: #1f76cb;
    color: white;
  }
}
</style>
