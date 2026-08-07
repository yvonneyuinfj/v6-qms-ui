<template>
  <AvicSplit horizontal>
    <AvicPane size="70">
      <div class="content-wrapper">
        <div class="top-search-box">
          <!-- 高级查询 -->
          <a-form v-bind="layout" ref="formRef" :model="queryForm">
            <a-row :gutter="16">
              <!--<a-col v-bind="colLayout.cols">-->
              <!--  <a-form-item label="审核计划ID;关联年度计划">-->
              <!--    <a-input-->
              <!--      v-model:value="queryForm.planId"-->
              <!--      placeholder="请输入审核计划ID;关联年度计划"-->
              <!--      :allow-clear="true"-->
              <!--      @pressEnter="handleQuery"-->
              <!--    />-->
              <!--  </a-form-item>-->
              <!--</a-col>-->
              <a-col v-bind="colLayout.cols">
                <a-form-item label="受审核部门">
                  <AvicCommonSelect
                    v-model:value="queryForm.responsibleDeptId"
                    type="deptSelect"
                    placeholder="请选择受审核部门"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols">
                <a-form-item label="审核日期">
                  <a-range-picker
                    v-model:value="dateRange"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    @change="handleDateRangeChange"
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
            ref="qmsAuditCheckRecord"
            table-key="qmsAuditCheckRecord"
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
            rowClickSelectionType="radio"
            :pageParameter="queryParam.pageParameter"
            :total="totalPage"
            @change="handleTableChange"
            @refresh="getList"
          >
            <template #toolBarLeft>
              <div class="aecc-leftbar-title">检查记录</div>

            </template>
            <template #toolBarRight>
              <a-space>
                <a-button
                  v-hasPermi="['qmsAuditCheckRecord:add']"
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
                  v-hasPermi="['qmsAuditCheckRecord:edit']"
                  title="编辑"
                  type="primary"
                  ghost
                  @click="handleEdit"
                >
                  <template #icon>
                    <edit-outlined />
                  </template>
                  编辑
                </a-button>
                <a-button
                  v-hasPermi="['qmsAuditCheckRecord:del']"
                  title="删除"
                  danger
                  :type="selectedRowKeys.length == 0 ? 'default' : 'primary'"
                  :loading="delLoading"
                  @click="handleDelete(selectedRows, selectedRowKeys)"
                >
                  <template #icon>
                    <delete-outlined />
                  </template>
                  删除
                </a-button>
                <a-button
                  v-hasPermi="['qmsAuditCheckRecord:export']"
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
              <a-space>
                <AvicBpmFilter
                  :allFileAuth="['qmsAuditCheckRecord:all']"
                  :myFileAuth="['qmsAuditCheckRecord:my']"
                  :defaultBpmType = 'queryForm.bpmType'
                  :defaultBpmState = 'queryForm.bpmState'
                  @change="changeBpmFilter"
                />
                <!--<a-input-search-->
                <!--  class="opt-btn-commonsearch"-->
                <!--  style="width: 200px"-->
                <!--  placeholder="请输入审核计划ID;关联年度计划或审核通知单ID;关联已批准通知单"-->
                <!--  :allow-clear="true"-->
                <!--  @search="handleKeyWordQuery"-->
                <!--/>-->
              </a-space>
            </template>
            <template #bodyCell="{ column, text, record, index }">
              <template v-if="column.dataIndex === 'id'">
                {{
                  index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1)
                }}
              </template>
              <template v-else-if="column.dataIndex === 'planId'">
                <a @click="handleFlowDetail(record)">
                  {{ record.planId }}
                </a>
              </template>
            </template>
          </AvicTable>
        </div>
      </div>
      <!-- 添加页面弹窗 -->
      <QmsAuditCheckRecordAdd
        v-if="showAddModal"
        ref="addModal"
        :bpmOperatorRefresh="getList"
        @reloadData="getList"
        @close="showAddModal = false"
      />
      <!-- 编辑页面弹窗 -->
      <QmsAuditCheckRecordEdit
        v-if="showEditModal"
        ref="editModal"
        :form-id="formId"
        @reloadData="getList"
        @close="showEditModal = false"
      />
      <!-- 详情页面弹窗 -->
      <QmsAuditCheckRecordDetail
        v-if="showDetailModal"
        ref="detailModal"
        :form-id="formId"
        @close="showDetailModal = false"
      />
    </AvicPane>
    <AvicPane>
      <!--子表组件-->
      <QmsAuditCheckDetailManage
        key="qmsAuditCheckDetailManage"
        ref="qmsAuditCheckDetailManage"
        :mainId="mainId"
      />
    </AvicPane>
  </AvicSplit>
</template>
<script lang="ts" setup>
import type { QmsAuditCheckRecordDto } from '@/api/avic/myportal/qms/QmsAuditCheckRecordApi'; // 引入模块DTO
import { listQmsAuditCheckRecordByPage, delQmsAuditCheckRecord, exportExcel } from '@/api/avic/myportal/qms/QmsAuditCheckRecordApi'; // 引入模块API
import QmsAuditCheckRecordAdd from './QmsAuditCheckRecordAdd.vue'; // 引入添加页面组件
import QmsAuditCheckRecordEdit from './QmsAuditCheckRecordEdit.vue'; // 引入编辑页面组件
import QmsAuditCheckRecordDetail from './QmsAuditCheckRecordDetail.vue'; // 引入详情页面组件
import QmsAuditCheckDetailManage from '../qmsauditcheckdetail/QmsAuditCheckDetailManage.vue'; // 引入子表页面组件
import flowUtils from '@/views/avic/bpm/bpmutils/FlowUtils.js';

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
    width: 50,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '受审核部门',
    dataIndex: 'auditeeDeptName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核时间',
    dataIndex: 'auditTime',
    ellipsis: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核员',
    dataIndex: 'auditorName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '检查明细数量',
    dataIndex: 'detailCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  {
    title: '不符合项明细数量',
    dataIndex: 'ncDetailCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  {
    title: '有建议明细数量',
    dataIndex: 'adviceDetailCount',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  // {
  //   title: '业务状态',
  //   dataIndex: 'status',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '流程状态',
  //   dataIndex: 'businessstate_',
  //   ellipsis: true,
  //   width: 120,
  //   align: 'center',
  //   fixed: 'right'
  // },
  // {
  //   title: '流程当前步骤',
  //   dataIndex: 'activityalias_',
  //   width: 120,
  //   fixed: 'right'
  // },
  // {
  //   title: '当前处理人',
  //   dataIndex: 'assigneenames_',
  //   ellipsis: true,
  //   width: 130,
  //   align: 'left',
  //   fixed: 'right'
  // }
];
const queryForm = ref<QmsAuditCheckRecordDto>({
  bpmState: 'all',
  bpmType: 'my'
}); // 高级查询对象
const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 20 // 每页条数
  },
  searchParams: {
    ...queryForm.value
  },
  keyWord: ref(''), // 快速查询数据
  sidx: null, // 排序字段
  sord: null // 排序方式: desc降序 asc升序
});
const showAddModal = ref(false); // 是否展示添加弹窗
const showEditModal = ref(false); // 是否展示编辑弹窗
const showDetailModal = ref(false); // 是否展示详情弹窗
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); //表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); //选中数据主键集合
const selectedRows = ref([]); //选中行集合
const loading = ref(false); // 表格loading状态
const delLoading = ref(false); // 删除按钮loading状态
const totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码
const mainId = computed(() => {
  return selectedRowKeys.value.length === 1 ? selectedRowKeys.value[0] : ''; // 主表传入子表的id
});

onMounted(() => {
  // 加载表格数据
  getList();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
});

/** 查询数据  */
function getList() {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = [];
  loading.value = true;
  listQmsAuditCheckRecordByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      // 设置表格初始选中项
      if (list.value.length > 0) {
        selectedRowKeys.value = [list.value[0]['id']];
        selectedRows.value = [list.value[0]];
      } else {
        selectedRowKeys.value = [];
        selectedRows.value = [];
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
/** 根据流程状态及发起人查询数据 */
function changeBpmFilter({ bpmType, bpmState }) {
  queryForm.value.bpmType = bpmType;
  queryForm.value.bpmState = bpmState;
  queryParam.searchParams = queryForm.value;
  getList();
}
/** 高级查询 查询按钮操作 */
function handleQuery() {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}
/** 高级查询 重置按钮操作 */
function resetQuery() {
  queryForm.value = {
    bpmType: queryForm.value.bpmType,
    bpmState: queryForm.value.bpmState
  };
  handleQuery();
}
/** 高级查询 展开/收起 */
function toggleAdvanced() {
  advanced.value = !advanced.value;
}
/** 快速查询逻辑 */
function handleKeyWordQuery(value) {
  const keyWord = {
    planId: value,
    noticeId: value
  };
  queryParam.keyWord = JSON.stringify(keyWord);
  queryParam.pageParameter.page = 1;
  getList();
}
/** 添加 */
function handleAdd() {
  showAddModal.value = true;
}
/** 编辑 */
function handleEdit() {
  if (selectedRows.value.length !== 1) {
    proxy.$message.warning('请选择一条要编辑的数据！');
    return;
  }
  formId.value = selectedRows.value[0].id;
  showEditModal.value = true;
}
/** 打开流程详情页面 */
function handleFlowDetail(record) {
  if (record.id) {
    flowUtils.detailByOptions({
      formId: record.id,
      bpmOperatorRefresh: getList
    });
  }
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
function handleDelete(rows, ids) {
  if (ids.length == 0) {
    proxy. $message.warning('请选择要删除的数据！');
    return;
  }
  if (rows.filter(row => row.bpmState !== 'start')?.length > 0) {
    proxy. $message.warning('只有拟稿中的数据才可以删除！');
    return;
  }
  proxy. $confirm({
    title: '确定删除已选数据及关联的子表数据吗？',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsAuditCheckRecord(ids)
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
function onSelectChange(rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
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

const dateRange = ref([]);
const handleDateRangeChange = dateRange => {
  queryForm.value.auditTimeBegin = dateRange[0];
  queryForm.value.auditTimeEnd = dateRange[1];
};
</script>

