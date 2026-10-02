<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item label="审核计划ID">-->
          <!--    <a-input-->
          <!--      v-model:value="queryForm.planId"-->
          <!--      placeholder="请输入审核计划ID"-->
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
          <!--<a-col v-bind="colLayout.cols" v-show="advanced">-->
          <!--  <a-form-item label="状态">-->
          <!--    <a-input-->
          <!--      v-model:value="queryForm.status"-->
          <!--      placeholder="请输入状态"-->
          <!--      :allow-clear="true"-->
          <!--      @pressEnter="handleQuery"-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->
          <a-col
            v-bind="colLayout.cols"
            style="margin-left: auto"
          >
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
                <!--<a-button type="link" @click="toggleAdvanced" style="margin: 0">-->
                <!--  {{ advanced ? '收起' : '展开' }}-->
                <!--  <up-outlined v-if="advanced" />-->
                <!--  <down-outlined v-else />-->
                <!--</a-button>-->
              </a-space>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 表格组件 -->
    <div class="table-wrapper">
      <AvicTable
        ref="qmsAuditNotice"
        table-key="qmsAuditNotice"
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
        @change="handleTableChange"
        @refresh="getList"
      >
        <template #toolBarLeft>
          <div class="aecc-leftbar-title">质量体系审核实施通知单</div>
        </template>
        <template #toolBarRight>
          <a-space>
            <a-button
              v-hasPermi="['qmsAuditNotice:add']"
              title="提交审批"
              type="primary"
              :loading="submitLoading"
              @click="handleStartFlow"
            >
              <template #icon>
                <check-circle-outlined/>
              </template>
              提交审批
            </a-button>
            <!--<a-button-->
            <!--  v-hasPermi="['qmsAuditNotice:add']"-->
            <!--  title="添加"-->
            <!--  type="primary"-->
            <!--  @click="handleAdd"-->
            <!--&gt;-->
            <!--  <template #icon>-->
            <!--    <plus-outlined/>-->
            <!--  </template>-->
            <!--  添加-->
            <!--</a-button>-->
            <a-button
              v-hasPermi="['qmsAuditNotice:edit']"
              title="编辑"
              type="primary"
              ghost
              @click="handleEdit"
            >
              <template #icon>
                <edit-outlined/>
              </template>
              编辑
            </a-button>
            <a-button
              v-hasPermi="['qmsAuditNotice:del']"
              title="删除"
              danger
              :type="selectedRowKeys.length == 0 ? 'default' : 'primary'"
              :loading="delLoading"
              @click="handleDelete(selectedRows, selectedRowKeys)"
            >
              <template #icon>
                <delete-outlined/>
              </template>
              删除
            </a-button>
            <!--<a-button-->
            <!--  v-hasPermi="['qmsAuditNotice:export']"-->
            <!--  title="导出"-->
            <!--  type="primary"-->
            <!--  ghost-->
            <!--  @click="handleExport">-->
            <!--  <template #icon>-->
            <!--    <export-outlined />-->
            <!--  </template>-->
            <!--  导出-->
            <!--</a-button>-->
          </a-space>
          <!--<a-space>-->
          <!--  <AvicBpmFilter-->
          <!--    :allFileAuth="['qmsAuditNotice:all']"-->
          <!--    :myFileAuth="['qmsAuditNotice:my']"-->
          <!--    :defaultBpmType = 'queryForm.bpmType'-->
          <!--    :defaultBpmState = 'queryForm.bpmState'-->
          <!--    @change="changeBpmFilter"-->
          <!--  />-->
          <!--</a-space>-->
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
          <template v-else-if="column.dataIndex === 'auditeeDeptName'">
            <a @click="handleFlowDetail(record)">
              {{ record.auditeeDeptName }}
            </a>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 添加页面弹窗 -->
    <QmsAuditNoticeAdd
      v-if="showAddModal"
      ref="addModal"
      :bpmOperatorRefresh="getList"
      @reloadData="getList"
      @close="showAddModal = false"
    />
    <!-- 编辑页面弹窗 -->
    <QmsAuditNoticeEdit
      v-if="showEditModal"
      ref="editModal"
      :form-id="formId"
      @reloadData="getList"
      @close="showEditModal = false"
    />
    <qms-audit-notice-detail-no-flow
      v-if="showDetailModal"
      :form-id="formId"
      @close="showDetailModal = false"
    />
  </div>
</template>
<script lang="ts" setup>
import type { QmsAuditNoticeDto } from '@/api/avic/myportal/qms/QmsAuditNoticeApi'; // 引入模块DTO
import { delQmsAuditNotice, exportExcel, listQmsAuditNoticeByPage, saveFormAndStartProcess } from '@/api/avic/myportal/qms/QmsAuditNoticeApi'; // 引入模块API
import QmsAuditNoticeAdd from './QmsAuditNoticeAdd.vue'; // 引入添加页面组件
import QmsAuditNoticeEdit from './QmsAuditNoticeEdit.vue'; // 引入编辑页面组件
import flowUtils,{startFlowByFormCode} from '@/views/avic/bpm/bpmutils/FlowUtils.js';
import QmsAuditNoticeDetailNoFlow
  from '@/views/avic/myportal/qms/qmsAudit/qmsauditnotice/QmsAuditNoticeDetailNoFlow.vue';

const { proxy } = getCurrentInstance();
const layout = {
  labelCol: { flex: '0 0 120px' },
  wrapperCol: { flex: '1 1 0' }
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
    title: '受审核单位',
    dataIndex: 'auditeeDeptName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核目的',
    dataIndex: 'auditPurpose',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核依据的标准和文件',
    dataIndex: 'auditBasis',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核覆盖产品',
    dataIndex: 'coveredProduct',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核日期',
    dataIndex: 'auditTime',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '持续天数',
    dataIndex: 'durationDays',
    ellipsis: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '审核人员',
    dataIndex: 'auditorName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '陪同人员',
    dataIndex: 'auditeeUserName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '流程状态',
    dataIndex: 'businessstate_',
    ellipsis: true,
    width: 120,
    align: 'center',
    fixed: 'right'
  },
  {
    title: '流程当前步骤',
    dataIndex: 'activityalias_',
    ellipsis: true,
    width: 120,
    align: 'center',
    fixed: 'right'
  },
  {
    title: '当前处理人',
    dataIndex: 'assigneenames_',
    ellipsis: true,
    width: 120,
    align: 'center',
    fixed: 'right'
  }
];
const queryForm = ref<QmsAuditNoticeDto>({
  bpmState: 'all',
  bpmType: 'all'
});
// 高级查询对象
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
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]); // 选中行集合
const loading = ref(false); // 表格loading状态
const delLoading = ref(false); // 删除按钮loading状态
const totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码

onMounted(() => {
  // 加载表格数据
  getList();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
});

/** 查询数据 */
function getList() {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = [];
  loading.value = true;
  listQmsAuditNoticeByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      totalPage.value = 0;
      loading.value = false;
    });
}

/** 获取当前用户对应的文档密级 */
function getUserFileSecretList() {
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
    noticeCode: value
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
  if (selectedRows.value.filter(row => row.bpmState && row.bpmState !== 'start')?.length > 0) {
    proxy.$message.warning('只有拟稿中的数据才可以删除！');
    return;
  }
  formId.value = selectedRows.value[0].id;
  showEditModal.value = true;
}

const showDetailModal = ref(false);

/** 打开流程详情页面 */
function handleFlowDetail(record) {
  if (!record) return;
  if (record.id) {
    if (!record.dbid_) {
      formId.value = record.id;
      showDetailModal.value = true;
    } else {
      flowUtils.detailByOptionsAll({
        formId: record.id,
        bpmOperatorRefresh: getList
      });
    }
  }
}

const formCode = 'QmsAuditNotice';
const submitLoading = ref(false);

/** 提交流程 */
function handleStartFlow() {
  if (selectedRows.value.length !== 1) {
    proxy.$message.warning('请选择一条要提交流程的数据！');
    return;
  }
  // 流程已存在，打开表单
  if (selectedRows.value[0].businessstate_ != '') {
    handleFlowDetail(selectedRows.value[0]);
    return;
  }
  proxy.$confirm({
    title: '确定提交流程吗？',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      submitLoading.value = true;
      startFlowByFormCode({
        formCode: formCode,
        formData: selectedRows.value[0],
        callback: bpmDefinedInfo => {
          // 处理数据
          const postData = proxy.$lodash.cloneDeep(selectedRows.value[0]);
          const params = {
            processDefId: bpmDefinedInfo.dbid || bpmDefinedInfo.value.defineId,
            formCode: formCode,
            postData
          };
          saveFormAndStartProcess(params)
            .then(res => {
              if (res.success) {
                // handleFlowDetail(postData);
                flowUtils.detailByOptions({
                  formId: postData.id,
                  bpmOperatorRefresh: getList
                });
                proxy.$message.info('提交流程成功！');
                handleQuery();
              } else {
                proxy.$message.info('提交流程失败！');
              }
            })
            .catch(error => {
              proxy.$message.warning(error.message);
              proxy.$message.info('提交流程失败！');
            })
            .finally(() => (submitLoading.value = false));
        }
      });
    }
  });
}

/** 删除 */
function handleDelete(rows, ids) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  if (rows.filter(row => row.bpmState && row.bpmState !== 'start')?.length > 0) {
    proxy.$message.warning('只有拟稿中的数据才可以删除！');
    return;
  }
  proxy.$confirm({
    title: '确认要删除选择的数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsAuditNotice(ids)
        .then(res => {
          if (res.success) {
            proxy.$message.success('删除成功！');
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

/** 导出 */
function handleExport() {
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
