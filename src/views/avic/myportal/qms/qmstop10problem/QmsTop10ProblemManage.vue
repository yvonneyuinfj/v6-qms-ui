<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm">
        <a-row :gutter="16">
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
            <a-form-item label="问题编号">
              <a-input
                v-model:value="queryForm.topCode"
                placeholder="请输入TOP10问题编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
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
            <a-form-item label="主管副总师ID">
              <a-input
                v-model:value="queryForm.deputyChiefUserId"
                placeholder="请输入主管副总师ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="主管副总师CODE">
              <a-input
                v-model:value="queryForm.deputyChiefUserCode"
                placeholder="请输入主管副总师CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="主管副总师">
              <a-input
                v-model:value="queryForm.deputyChiefUserName"
                placeholder="请输入主管副总师"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="主管部门ID">
              <a-input
                v-model:value="queryForm.responsibleDeptId"
                placeholder="请输入主管部门ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="主管部门CODE">
              <a-input
                v-model:value="queryForm.responsibleDeptCode"
                placeholder="请输入主管部门CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="主管部门">
              <a-input
                v-model:value="queryForm.responsibleDeptName"
                placeholder="请输入主管部门"
                :allow-clear="true"
                @pressEnter="handleQuery"
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
            <a-form-item label="归零节点(起)">
              <a-date-picker
                v-model:value="queryForm.planCloseTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零节点(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.planCloseTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="归零节点(止)">
              <a-date-picker
                v-model:value="queryForm.planCloseTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零节点(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.planCloseTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="用户;空军/海军/其他">
              <a-input
                v-model:value="queryForm.userType"
                placeholder="请输入用户;空军/海军/其他"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="阶段;科研/批产">
              <a-input
                v-model:value="queryForm.problemStage"
                placeholder="请输入阶段;科研/批产"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="级别;集团/所级">
              <a-input
                v-model:value="queryForm.problemLevel"
                placeholder="请输入级别;集团/所级"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="计划完成情况;以分数或进度条形式展现">
              <a-input
                v-model:value="queryForm.planCompletionRate"
                placeholder="请输入计划完成情况;以分数或进度条形式展现"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="周反馈情况;分数或进度条形式展现">
              <a-input
                v-model:value="queryForm.weeklyFeedbackRate"
                placeholder="请输入周反馈情况;分数或进度条形式展现"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="销号状态;攻关中/已销号">
              <a-input
                v-model:value="queryForm.status"
                placeholder="请输入销号状态;攻关中/已销号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="销号时间(起)">
              <a-date-picker
                v-model:value="queryForm.closeTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择销号时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.closeTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="销号时间(止)">
              <a-date-picker
                v-model:value="queryForm.closeTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择销号时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.closeTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量问题编号;非必填，质量问题系统内的编号">
              <a-input
                v-model:value="queryForm.qualityProblemCode"
                placeholder="请输入质量问题编号;非必填，质量问题系统内的编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="问题描述">
              <a-input
                v-model:value="queryForm.problemDesc"
                placeholder="请输入问题描述"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="当前工作进展">
              <a-input
                v-model:value="queryForm.currentProgress"
                placeholder="请输入当前工作进展"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="周反馈开始时间(起)">
              <a-date-picker
                v-model:value="queryForm.weeklyFeedbackStartTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择周反馈开始时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.weeklyFeedbackStartTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="周反馈开始时间(止)">
              <a-date-picker
                v-model:value="queryForm.weeklyFeedbackStartTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择周反馈开始时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.weeklyFeedbackStartTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量主管ID">
              <a-input
                v-model:value="queryForm.qualitySupervisorId"
                placeholder="请输入质量主管ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量主管CODE">
              <a-input
                v-model:value="queryForm.qualitySupervisorCode"
                placeholder="请输入质量主管CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量主管">
              <a-input
                v-model:value="queryForm.qualitySupervisorName"
                placeholder="请输入质量主管"
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
        ref="qmsTop10Problem"
        table-key="qmsTop10Problem"
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
          <div class="aecc-leftbar-title">TOP10问题</div>

        </template>
        <template #toolBarRight>
          <a-space>
            <a-button
              v-hasPermi="['qmsTop10Problem:add']"
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
              v-hasPermi="['qmsTop10Problem:del']"
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
              v-hasPermi="['qmsTop10Problem:import']"
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
              v-hasPermi="['qmsTop10Problem:export']"
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
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
          <template v-else-if="column.dataIndex === 'forYear'">
            <a @click="handleDetail(record)">
              {{ record.forYear }}
            </a>
          </template>
          <template v-else-if="column.dataIndex === 'action'">
            <a-button
              type="link"
              class="inner-btn"
              @click.stop="handleEdit(record.id)">
              编辑
            </a-button>
            <a-button
              v-hasPermi="['qmsTop10Problem:del']"
              type="link"
              class="inner-btn"
              @click.stop="handleDelete([record.id], 'row')">
              删除
            </a-button>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 添加页面弹窗 -->
    <qms-top10-problem-add
      v-if="showAddModal"
      ref="addModal"
      @reloadData="getList"
      @close="showAddModal = false"
    />
    <!-- 编辑页面弹窗 -->
    <qms-top10-problem-edit
      v-if="showEditModal"
      ref="editModal"
      :form-id="formId"
      @reloadData="getList"
      @close="showEditModal = false"
    />
    <!-- 详情页面弹窗 -->
    <qms-top10-problem-detail
      v-if="showDetailModal"
      ref="detailModal"
      :form-id="formId"
      @close="showDetailModal = false"
    />
    <AvicExcelImport
      v-if="showImportModal"
      :formData="excelParams"
      title="单表模板导入"
      importUrl="/myportal/qms/qmstop10problems/importData/v1"
      downloadTemplateUrl="/myportal/qms/qmstop10problems/downloadTemplate/v1"
      @reloadData="getList"
      @close="showImportModal = false"
    />
  </div>
</template>
<script lang="ts" setup>
import type { QmsTop10ProblemDto } from '@/api/avic/myportal/qms/QmsTop10ProblemApi'; // 引入模块DTO
import { listQmsTop10ProblemByPage, delQmsTop10Problem, exportExcel } from '@/api/avic/myportal/qms/QmsTop10ProblemApi'; // 引入模块API
import QmsTop10ProblemAdd from './QmsTop10ProblemAdd.vue'; // 引入添加页面组件
import QmsTop10ProblemEdit from './QmsTop10ProblemEdit.vue'; // 引入编辑页面组件
import QmsTop10ProblemDetail from './QmsTop10ProblemDetail.vue'; // 引入详情页面组件
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
    title: '编号',
    dataIndex: 'topCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '所属年份',
    dataIndex: 'forYear',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '问题名称',
    dataIndex: 'problemName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '主管副总师',
    dataIndex: 'deputyChiefUserName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '主管部门',
    dataIndex: 'responsibleDeptName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '责任人',
    dataIndex: 'responsibleStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '归零节点',
    dataIndex: 'planCloseTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '用户',
    dataIndex: 'userTypeName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '阶段',
    dataIndex: 'problemStageName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '级别',
    dataIndex: 'problemLevel',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  // {
  //   title: '计划完成情况;以分数或进度条形式展现',
  //   dataIndex: 'planCompletionRate',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '周反馈情况;分数或进度条形式展现',
  //   dataIndex: 'weeklyFeedbackRate',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '销号状态;攻关中/已销号',
  //   dataIndex: 'status',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '销号时间',
  //   dataIndex: 'closeTime',
  //   ellipsis: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'center'
  // },
  // {
  //   title: '质量问题编号;非必填，质量问题系统内的编号',
  //   dataIndex: 'qualityProblemCode',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '问题描述',
  //   dataIndex: 'problemDesc',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '当前工作进展',
  //   dataIndex: 'currentProgress',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '周反馈开始时间',
  //   dataIndex: 'weeklyFeedbackStartTime',
  //   ellipsis: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'center'
  // },
  // {
  //   title: '质量主管ID',
  //   dataIndex: 'qualitySupervisorId',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '质量主管CODE',
  //   dataIndex: 'qualitySupervisorCode',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '质量主管',
  //   dataIndex: 'qualitySupervisorName',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '型号',
  //   dataIndex: 'model',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '密级',
  //   dataIndex: 'secretLevelName',
  //   ellipsis: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'center'
  // },
  //
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  //   ellipsis: true,
  //   sorter: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'left'
  // },
  // {
  //   title: '排序',
  //   dataIndex: 'orderBy',
  //   ellipsis: true,
  //   minWidth: 120,
  //   resizable: true,
  //   align: 'right'
  // },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    width: 120,
    fixed: 'right'
  }
];
const queryForm = ref<QmsTop10ProblemDto>({});
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
const excelParams = ref({ tableName: 'qmsTop10Problem' }); // 导入Excel数据过滤参数
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); // 选中数据主键集合
const loading = ref(false);
const delLoading = ref(false);
const totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码

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
  loading.value = true;
  listQmsTop10ProblemByPage(queryParam)
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
function getUserFileSecretList () {
  proxy.$getUserFileSecretLevelList(result => {
    secretLevelList.value = result;
  });
}
/** 高级查询 查询按钮操作 */
function handleQuery () {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}
/** 高级查询 重置按钮操作 */
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
    forYear: value,
    topCode: value
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
/** 详细 */
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
    title: `确认要删除${type == 'row' ? '当前行的' : '选择的'}数据吗?`,
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsTop10Problem(ids)
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
/** 勾选复选框时触发 */
function onSelectChange (rowKeys) {
  selectedRowKeys.value = rowKeys;
}
/** 表格排序 */
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

