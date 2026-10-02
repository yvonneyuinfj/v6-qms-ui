<template>
  <AvicSplit horizontal>
    <AvicPane size="65">
      <div class="content-wrapper">
        <div class="top-search-box">
          <!-- 高级查询 -->
          <a-form v-bind="layout" ref="formRef" :model="queryForm">
            <a-row :gutter="16">
              <a-col v-bind="colLayout.cols">
                <a-form-item label="检查编号">
                  <a-input
                    v-model:value="queryForm.inspectionCode"
                    placeholder="请输入检查编号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols">
                <a-form-item label="所属年份">
                  <a-select
                    v-model:value="queryForm.forYear"
                    :get-popup-container="triggerNode => triggerNode.parentNode"
                    option-filter-prop="children"
                    placeholder="请选择所属年度"
                    @select="handleQuery"
                  >
                    <a-select-option
                      v-for="item in yearList"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols">
                <a-form-item label="检查名称">
                  <a-input
                    v-model:value="queryForm.inspectName"
                    placeholder="请输入检查名称"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="被检查单位ID;检查单位名称/代号">
                  <a-input
                    v-model:value="queryForm.inspectedDeptId"
                    placeholder="请输入被检查单位ID;检查单位名称/代号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="涉及型号">
                  <a-input
                    v-model:value="queryForm.model"
                    placeholder="请输入涉及型号;多选，逗号分隔"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查时间(起)">
                  <a-date-picker
                    v-model:value="queryForm.inspectionTimeBegin"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择检查时间(起)"
                    :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.inspectionTimeEnd)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查时间(止)">
                  <a-date-picker
                    v-model:value="queryForm.inspectionTimeEnd"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择检查时间(止)"
                    :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.inspectionTimeBegin)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组长ID">
                  <a-input
                    v-model:value="queryForm.leaderStaffId"
                    placeholder="请输入检查组长ID"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组长CODE">
                  <a-input
                    v-model:value="queryForm.leaderStaffCode"
                    placeholder="请输入检查组长CODE"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组长">
                  <a-input
                    v-model:value="queryForm.leaderStaffName"
                    placeholder="请输入检查组长"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组成员ID">
                  <a-input
                    v-model:value="queryForm.memberStaffId"
                    placeholder="请输入检查组成员ID"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组成员CODE">
                  <a-input
                    v-model:value="queryForm.memberStaffCode"
                    placeholder="请输入检查组成员CODE"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="检查组成员">
                  <a-input
                    v-model:value="queryForm.memberStaffName"
                    placeholder="请输入检查组成员"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="完成时间(起)">
                  <a-date-picker
                    v-model:value="queryForm.completeTimeBegin"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择完成时间(起)"
                    :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.completeTimeEnd)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="完成时间(止)">
                  <a-date-picker
                    v-model:value="queryForm.completeTimeEnd"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择完成时间(止)"
                    :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.completeTimeBegin)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="业务状态">
                  <a-input
                    v-model:value="queryForm.status"
                    placeholder="请输入业务状态"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="密级">
                  <a-select
                    v-model:value="queryForm.secretLevel"
                    :get-popup-container="triggerNode => triggerNode.parentNode"
                    option-filter-prop="children"
                    :show-search="true"
                    :allow-clear="true"
                    placeholder="请选择密级"
                  >
                    <a-select-option
                      v-for="item in secretLevelList"
                      :key="item.sysLookupTlId"
                      :value="item.lookupCode"
                    >
                      {{ item.lookupName }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="是否已删除">
                  <a-input
                    v-model:value="queryForm.ynDeleted"
                    placeholder="请输入是否已删除"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="备注">
                  <a-input
                    v-model:value="queryForm.remark"
                    placeholder="请输入备注"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col
                v-bind="colLayout.cols"
                style="margin-left: auto"
              >
                <div class="table-page-search-submitButtons">
                  <a-space>
                    <a-button type="primary" @click="handleQuery">
                      <search-outlined />
                      查询
                    </a-button>
                    <a-button type="primary" @click="resetQuery" ghost>
                      <redo-outlined />
                      重置
                    </a-button>
                    <a-button type="link" @click="toggleAdvanced" style="margin: 0">
                      {{ advanced ? '收起' : '展开' }}
                      <up-outlined v-if="advanced" />
                      <down-outlined v-else />
                    </a-button>
                  </a-space>
                </div>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <!-- 表格组件 -->
        <div class="table-wrapper">
          <AvicTable
            ref="qmsQualityInspection"
            table-key="qmsQualityInspection"
            :columns="columns"
            :row-key="record => record.id"
            :data-source="list"
            :loading="loading"
            :row-selection="{
              selectedRowKeys: selectedRowKeys,
              onChange: onSelectChange,
              columnWidth: 40,
              fixed: true
            }"
            :pageParameter="queryParam.pageParameter"
            :total="totalPage"
            rowClickSelectionType="radio"
            @change="handleTableChange"
            @refresh="getList"
          >
            <template #toolBarLeft>
              <div class="aecc-leftbar-title">质量检查</div>
            </template>
            <template #toolBarRight>
              <a-space>
                <a-button
                  v-hasPermi="['qmsQualityInspection:add']"
                  title="添加"
                  type="primary"
                  @click="handleAdd"
                >
                  <template #icon>
                    <plus-outlined />
                  </template>
                  添加
                </a-button>
                <a-button
                  v-hasPermi="['qmsQualityInspection:del']"
                  title="删除"
                  danger
                  :type="selectedRowKeys.length == 0 ? 'default' : 'primary'"
                  :loading="delLoading"
                  @click="handleDelete(selectedRowKeys, '')"
                >
                  <template #icon>
                    <delete-outlined />
                  </template>
                  删除
                </a-button>
                <a-button
                  v-hasPermi="['qmsQualityInspection:import']"
                  title="导入"
                  type="primary"
                  ghost
                  @click="handleImport">
                  <template #icon>
                    <import-outlined />
                  </template>
                  导入
                </a-button>
                <a-button
                  v-hasPermi="['qmsQualityInspection:export']"
                  title="导出"
                  type="primary"
                  ghost
                  @click="handleExport">
                  <template #icon>
                    <export-outlined />
                  </template>
                  导出
                </a-button>
              </a-space>
              <!--<a-input-search-->
              <!--  class="opt-btn-commonsearch"-->
              <!--  style="width: 200px"-->
              <!--  placeholder="请输入检查编号;检查编号+3位数流水号或所属年份"-->
              <!--  :allow-clear="true"-->
              <!--  @search="handleKeyWordQuery"-->
              <!--/>-->
            </template>
            <template #bodyCell="{ column, text, record, index }">
              <template v-if="column.dataIndex  === 'id'">
                {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
              </template>
              <template v-else-if="column.dataIndex === 'inspectionCode'">
                <a @click="handleDetail(record)">
                  {{ record.inspectionCode }}
                </a>
              </template>
              <template v-else-if="column.dataIndex  === 'action'">
                <a-button
                  type="link"
                  class="inner-btn"
                  @click.stop="handleEdit(record.id)"
                >
                  编辑
                </a-button>
                <a-button
                  v-hasPermi="['qmsQualityInspection:del']"
                  type="link"
                  class="inner-btn"
                  @click.stop="handleDelete([record.id], 'row')"
                >
                  删除
                </a-button>
              </template>
            </template>
          </AvicTable>
        </div>
      </div>
      <!-- 添加页面弹窗 -->
      <qms-quality-inspection-add
        v-if="showAddModal"
        ref="addModal"
        @reloadData="getList"
        @close="showAddModal = false"
      />
      <!-- 编辑页面弹窗 -->
      <qms-quality-inspection-edit
        v-if="showEditModal"
        ref="editModal"
        :form-id="formId"
        @reloadData="getList"
        @close="showEditModal = false"
      />
      <!-- 详情页面弹窗 -->
      <qms-quality-inspection-detail
        v-if="showDetailModal"
        ref="detailModal"
        :form-id="formId"
        @close="showDetailModal = false"
      />
      <AvicExcelImport
        v-if="showImportModal"
        :formData="excelParams"
        title="模板导入"
        importUrl="/myportal/qms/qmsqualityinspections/importData/v1"
        downloadTemplateUrl="/myportal/qms/qmsqualityinspections/downloadTemplate/v1"
        @reloadData="getList"
        @close="showImportModal = false"
      />
    </AvicPane>
    <AvicPane>
      <!-- 子表组件 -->
      <qms-check-problem-manage key="qmsCheckProblemManage" ref="qmsCheckProblemManage" :mainId="mainId" />
    </AvicPane>
  </AvicSplit>
</template>

<script lang="ts" setup>
import type { QmsQualityInspectionDto } from '@/api/avic/myportal/qms/QmsQualityInspectionApi'; // 引入模块DTO
import { listQmsQualityInspectionByPage, delQmsQualityInspection, exportExcel } from '@/api/avic/myportal/qms/QmsQualityInspectionApi'; // 引入模块API
import QmsQualityInspectionAdd from './QmsQualityInspectionAdd.vue'; // 引入添加页面组件
import QmsQualityInspectionEdit from './QmsQualityInspectionEdit.vue'; // 引入编辑页面组件
import QmsQualityInspectionDetail from './QmsQualityInspectionDetail.vue'; // 引入详情页面组件
import QmsCheckProblemManage from '../qmscheckproblem/QmsCheckProblemManage.vue'; // 引入子表页面组件
const { proxy } = getCurrentInstance();
const layout = {
  labelCol: { flex: '120px' },
  wrapperCol: { flex: '1' }
};
const colLayout = proxy.$colLayout4; // 页面表单响应式布局对象
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    ellipsis: true,
    width: 60,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '检查编号',
    dataIndex: 'inspectionCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '所属年份',
    dataIndex: 'forYear',
    ellipsis: true,
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查名称',
    dataIndex: 'inspectName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '被检查单位',
    dataIndex: 'inspectedDeptName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '涉及型号',
    dataIndex: 'model',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查时间',
    dataIndex: 'inspectionTime',
    sorter:true,
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查投入',
    dataIndex: 'inspectionWorkload',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '检查组长',
    dataIndex: 'leaderStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '检查组成员',
    dataIndex: 'memberStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '问题数',
    dataIndex: 'problemCount',
    sorter:true,
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '完成整改数',
    dataIndex: 'completeCount',
    sorter:true,
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '完成时间',
    dataIndex: 'completeTime',
    sorter:true,
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    width: 120,
    fixed: 'right'
  }
 ];
const queryForm = ref<QmsQualityInspectionDto>({});
const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 20 // 每页条数
  },
  searchParams: {
    ...queryForm
  },
  keyWord: ref(''), // 快速查询数据
  sidx: null, // 排序字段
  sord: null // 排序方式: desc降序 asc升序
});
const showAddModal = ref(false); // 是否展示添加弹窗
const showEditModal = ref(false); // 是否展示编辑弹窗
const showDetailModal = ref(false); // 是否展示详情弹窗
const showImportModal = ref(false); // 是否展示导入弹窗
const excelParams = ref({ tableName: 'qmsQualityInspection' }); // 必填参数tableName全局唯一，与tableKey保持一致
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]); // 选中行集合
const loading = ref(false);
const delLoading = ref(false);
const totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码

// 主表传入子表的id
const mainId = computed(() => {
  return selectedRowKeys.value.length === 1 ? selectedRowKeys.value[0] : '';
});

onMounted(() => {
  // 加载表格数据
  getList();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
  getYearList();
});

/** 查询数据  */
function getList () {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = [];
  loading.value = true;
  listQmsQualityInspectionByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      // 设置表格初始选中项
      if (list.value.length > 0) {
        selectedRowKeys.value = [list.value[0]['id']];
      } else {
        selectedRowKeys.value = [];
      }
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      totalPage.value = 0;
      loading.value = false;
    });
}
/** 获取当前用户对应的文档密级 */
function getUserFileSecretList () {
  proxy.$getUserFileSecretLevelList(result => {
    secretLevelList.value = result;
  });
}
/** 高级搜索按钮操作 */
function handleQuery () {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}
/** 高级查询重置按钮操作  */
function resetQuery () {
  queryForm.value = {};
  handleQuery();
}
/** 高级查询 展开/收起 */
function toggleAdvanced () {
  advanced.value = !advanced.value;
}
/** 快速查询逻辑 */
function handleKeyWordQuery (value) {
  const keyWord = {
    inspectionCode: value,
    forYear: value
  };
  queryParam.keyWord = JSON.stringify(keyWord);
  queryParam.pageParameter.page = 1;
  getList();
}
/** 添加 */
function handleAdd () {
  showAddModal.value = true;
}
/** 编辑 */
function handleEdit (id) {
  formId.value = id;
  showEditModal.value = true;
}
/** 详情 */
function handleDetail (record) {
  formId.value = record.id;
  showDetailModal.value = true;
}
/** 导入 */
function handleImport () {
  showImportModal.value = true;
}
/** 导出 */
function handleExport () {
  proxy.$confirm({
    title: '确认导出数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      loading.value = true;
      queryParam.searchParams = queryForm.value;
      exportExcel(queryParam).then(() => {
        loading.value = false;
        proxy.$message.info('导出成功！');
      });
    }
  });
}
/** 删除 */
function handleDelete (ids, type) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  proxy.$confirm({
    title: `确认要删除${type == 'row' ? '当前行的' : '已选数据及关联的子表'}数据吗?`,
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsQualityInspection(ids)
        .then(res => {
          if (res.success) {
            proxy.$message.success('删除成功！');
            // 清空选中
            selectedRowKeys.value = [];
            selectedRows.value = [];
            getList();
          }
          delLoading.value = false;
        })
        .catch(() => {
          delLoading.value = false;
        });
    }
  });
}
/** 勾选复选框时触发 */
function onSelectChange (rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
}
/** 表头排序 */
function handleTableChange (pagination, filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}

const yearList = ref([]);
const getYearList = () => {
  const currentYear = proxy.$dayjs().year();
  yearList.value = [
    (currentYear - 1).toString(),
    currentYear.toString(),
    (currentYear + 1).toString()
  ];
  return yearList;
};
</script>

