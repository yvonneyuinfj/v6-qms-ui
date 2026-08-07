<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item label="反哺编号">
              <a-input
                v-model:value="queryForm.feedbackCode"
                placeholder="请输入反哺编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="所属年份">
              <a-input
                v-model:value="queryForm.forYear"
                placeholder="请输入所属年份"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item label="来源问题ID">
              <a-input
                v-model:value="queryForm.sourceProblemId"
                placeholder="请输入来源问题ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="来源更新时间(起)">
              <a-date-picker
                v-model:value="queryForm.sourceUpdateTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择来源更新时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.sourceUpdateTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="来源更新时间(止)">
              <a-date-picker
                v-model:value="queryForm.sourceUpdateTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择来源更新时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.sourceUpdateTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="最近同步时间(起)">
              <a-date-picker
                v-model:value="queryForm.syncTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择最近同步时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.syncTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="最近同步时间(止)">
              <a-date-picker
                v-model:value="queryForm.syncTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择最近同步时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.syncTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="来源系统CODE">
              <a-input
                v-model:value="queryForm.sourceSystemCode"
                placeholder="请输入来源系统CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量问题编号">
              <a-input
                v-model:value="queryForm.problemCode"
                placeholder="请输入质量问题编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="来源问题状态">
              <a-input
                v-model:value="queryForm.sourceStatus"
                placeholder="请输入来源问题状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="问题名称">
              <a-input
                v-model:value="queryForm.problemName"
                placeholder="请输入问题名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="问题类型">
              <a-input
                v-model:value="queryForm.problemType"
                placeholder="请输入问题类型"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="问题分类">
              <a-input
                v-model:value="queryForm.problemCategory"
                placeholder="请输入问题分类"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="型号">
              <a-input
                v-model:value="queryForm.model"
                placeholder="请输入型号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="发生时间(起)">
              <a-date-picker
                v-model:value="queryForm.occurrenceTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择发生时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.occurrenceTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="发生时间(止)">
              <a-date-picker
                v-model:value="queryForm.occurrenceTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择发生时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.occurrenceTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零时间(起)">
              <a-date-picker
                v-model:value="queryForm.closeTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.closeTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零时间(止)">
              <a-date-picker
                v-model:value="queryForm.closeTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.closeTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人ID">
              <a-input
                v-model:value="queryForm.responsibleStaffId"
                placeholder="请输入责任人ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人CODE">
              <a-input
                v-model:value="queryForm.responsibleStaffCode"
                placeholder="请输入责任人CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人">
              <a-input
                v-model:value="queryForm.responsibleStaffName"
                placeholder="请输入责任人"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门ID">
              <a-input
                v-model:value="queryForm.responsibleDeptId"
                placeholder="请输入责任部门ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门CODE">
              <a-input
                v-model:value="queryForm.responsibleDeptCode"
                placeholder="请输入责任部门CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任部门">
              <a-input
                v-model:value="queryForm.responsibleDeptName"
                placeholder="请输入责任部门"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零报告ID">
              <a-input
                v-model:value="queryForm.closeReportId"
                placeholder="请输入归零报告ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零报告编号">
              <a-input
                v-model:value="queryForm.closeReportCode"
                placeholder="请输入归零报告编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零报告名称">
              <a-input
                v-model:value="queryForm.closeReportName"
                placeholder="请输入归零报告名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="问题原因和机理">
              <a-input
                v-model:value="queryForm.causeMechanism"
                placeholder="请输入问题原因和机理"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="改进措施">
              <a-input
                v-model:value="queryForm.improvementMeasure"
                placeholder="请输入改进措施"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="反哺维度">
              <a-input
                v-model:value="queryForm.feedbackDimension"
                placeholder="请输入反哺维度"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="是否启用反哺">
              <a-input
                v-model:value="queryForm.ynStartFeedback"
                placeholder="请输入是否启用反哺"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="反哺意见说明">
              <a-input
                v-model:value="queryForm.feedbackDesc"
                placeholder="请输入反哺意见说明"
                :allow-clear="true"
                @pressEnter="handleQuery"
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
            <a-form-item label="流程实例ID">
              <a-input
                v-model:value="queryForm.processInstanceId"
                placeholder="请输入流程实例ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="流程状态">
              <a-input
                v-model:value="queryForm.processStatus"
                placeholder="请输入流程状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="提交时间(起)">
              <a-date-picker
                v-model:value="queryForm.submitTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择提交时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.submitTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="提交时间(止)">
              <a-date-picker
                v-model:value="queryForm.submitTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择提交时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.submitTimeBegin)"
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
        ref="qmsQualityProblemFeedback"
        table-key="qmsQualityProblemFeedback"
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
          <a-space>
            <div class="aecc-leftbar-title">质量问题归零成果反哺</div>
          </a-space>
        </template>
        <template #toolBarRight>
          <a-space>
            <a-button
              v-hasPermi="['qmsQualityProblemFeedback:add']"
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
              v-hasPermi="['qmsQualityProblemFeedback:edit']"
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
              v-hasPermi="['qmsQualityProblemFeedback:del']"
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
              v-hasPermi="['qmsQualityProblemFeedback:export']"
              title="导出"
              type="primary"
              ghost
              @click="handleExport">
              <template #icon>
                <export-outlined />
              </template>
              导出
            </a-button>
            <!--<AvicBpmFilter-->
            <!--  :allFileAuth="['qmsQualityProblemFeedback:all']"-->
            <!--  :myFileAuth="['qmsQualityProblemFeedback:my']"-->
            <!--  :defaultBpmType = 'queryForm.bpmType'-->
            <!--  :defaultBpmState = 'queryForm.bpmState'-->
            <!--  @change="changeBpmFilter"-->
            <!--/>-->
            <!--<a-input-search-->
            <!--  class="opt-btn-commonsearch"-->
            <!--  style="width: 200px"-->
            <!--  placeholder="请输入反哺编号或所属年份"-->
            <!--  :allow-clear="true"-->
            <!--  @search="handleKeyWordQuery"-->
            <!--/>-->
          </a-space>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
          <template v-else-if="column.dataIndex === 'feedbackCode'">
            <a @click="handleFlowDetail(record)">
              {{ record.feedbackCode }}
            </a>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 添加页面弹窗 -->
    <QmsQualityProblemFeedbackAdd
      v-if="showAddModal"
      ref="addModal"
      :bpmOperatorRefresh="getList"
      @reloadData="getList"
      @close="showAddModal = false"
    />
    <!-- 编辑页面弹窗 -->
    <QmsQualityProblemFeedbackEdit
      v-if="showEditModal"
      ref="editModal"
      :form-id="formId"
      @reloadData="getList"
      @close="showEditModal = false"
    />
  </div>
</template>
<script lang="ts" setup>
import type { QmsQualityProblemFeedbackDto } from '@/api/avic/myportal/qms/QmsQualityProblemFeedbackApi'; // 引入模块DTO
import { listQmsQualityProblemFeedbackByPage, delQmsQualityProblemFeedback, exportExcel } from '@/api/avic/myportal/qms/QmsQualityProblemFeedbackApi'; // 引入模块API
import QmsQualityProblemFeedbackAdd from './QmsQualityProblemFeedbackAdd.vue'; // 引入添加页面组件
import QmsQualityProblemFeedbackEdit from './QmsQualityProblemFeedbackEdit.vue'; // 引入编辑页面组件
import flowUtils from '@/views/avic/bpm/bpmutils/FlowUtils.js';
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
    width: 60,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '问题名称',
    dataIndex: 'problemName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '问题编号',
    dataIndex: 'problemCode',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '型号',
    dataIndex: 'model',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '归零时间',
    dataIndex: 'closeTime',
    ellipsis: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '责任人',
    dataIndex: 'responsibleStaffName',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '责任部门',
    dataIndex: 'responsibleDeptName',
    ellipsis: true,
    sorter: true,
    width: 150,
    resizable: true,
    align: 'center'
  },
  {
    title: '归零报告',
    dataIndex: 'closeReport',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
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
const queryForm = ref<QmsQualityProblemFeedbackDto>({
  bpmState: 'all',
  bpmType: 'my'
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
  listQmsQualityProblemFeedbackByPage(queryParam)
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
    feedbackCode: value,
    forYear: value
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
/** 删除 */
function handleDelete(rows, ids) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  if (rows.filter(row => row.bpmState !== 'start')?.length > 0) {
    proxy.$message.warning('只有拟稿中的数据才可以删除！');
    return;
  }
  proxy.$confirm({
    title: '确认要删除选择的数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsQualityProblemFeedback(ids)
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
</script>
