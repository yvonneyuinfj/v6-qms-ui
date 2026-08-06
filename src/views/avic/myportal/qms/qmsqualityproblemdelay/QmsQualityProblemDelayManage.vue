<template>
  <AvicSplit horizontal>
    <AvicPane size="55">
      <div class="content-wrapper">
        <div class="top-search-box">
          <!-- 高级查询 -->
          <a-form v-bind="layout" ref="formRef" :model="queryForm">
            <a-row :gutter="16">
              <a-col v-bind="colLayout.cols">
                <a-form-item label="延期编号">
                  <a-input
                    v-model:value="queryForm.delayCode"
                    placeholder="请输入延期编号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols">
                <a-form-item label="质量问题ID">
                  <a-input
                    v-model:value="queryForm.problemId"
                    placeholder="请输入质量问题ID"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols">
                <a-form-item label="质量问题反馈单的编号">
                  <a-input
                    v-model:value="queryForm.problemCode"
                    placeholder="请输入质量问题反馈单的编号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="质量问题反馈单标题;系统自动，同步质量问题反馈单的标题">
                  <a-input
                    v-model:value="queryForm.problemTitle"
                    placeholder="请输入质量问题反馈单标题;系统自动，同步质量问题反馈单的标题"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="质量延期申请单标题;系统自动，关于xxx的延期申请">
                  <a-input
                    v-model:value="queryForm.delayTitle"
                    placeholder="请输入质量延期申请单标题;系统自动，关于xxx的延期申请"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="原关闭时间(起)">
                  <a-date-picker
                    v-model:value="queryForm.originalCloseTimeBegin"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择原关闭时间(起)"
                    :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.originalCloseTimeEnd)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="原关闭时间(止)">
                  <a-date-picker
                    v-model:value="queryForm.originalCloseTimeEnd"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择原关闭时间(止)"
                    :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.originalCloseTimeBegin)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请关闭时间(起)">
                  <a-date-picker
                    v-model:value="queryForm.newCloseTimeBegin"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择申请关闭时间(起)"
                    :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.newCloseTimeEnd)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请关闭时间(止)">
                  <a-date-picker
                    v-model:value="queryForm.newCloseTimeEnd"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择申请关闭时间(止)"
                    :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.newCloseTimeBegin)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）">
                  <a-input
                    v-model:value="queryForm.delayReason"
                    placeholder="请输入延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="问题概述;系统自动，同步质量问题反馈单的问题概述">
                  <a-input
                    v-model:value="queryForm.problemSummary"
                    placeholder="请输入问题概述;系统自动，同步质量问题反馈单的问题概述"
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
                <a-form-item label="应急措施">
                  <a-input
                    v-model:value="queryForm.emergencyMeasure"
                    placeholder="请输入应急措施"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="延期原因详细说明">
                  <a-input
                    v-model:value="queryForm.delayReasonDetail"
                    placeholder="请输入延期原因详细说明"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="科研平台任务编号">
                  <a-input
                    v-model:value="queryForm.ppmPlanCode"
                    placeholder="请输入科研平台任务编号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="型号;系统自动，同步质量问题反馈单的型号">
                  <a-input
                    v-model:value="queryForm.model"
                    placeholder="请输入型号;系统自动，同步质量问题反馈单的型号"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请人ID">
                  <a-input
                    v-model:value="queryForm.applicantStaffId"
                    placeholder="请输入申请人ID"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请人CODE">
                  <a-input
                    v-model:value="queryForm.applicantStaffCode"
                    placeholder="请输入申请人CODE"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请人姓名">
                  <a-input
                    v-model:value="queryForm.applicantStaffName"
                    placeholder="请输入申请人姓名"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请部门ID">
                  <a-input
                    v-model:value="queryForm.applicantDeptId"
                    placeholder="请输入申请部门ID"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请部门CODE">
                  <a-input
                    v-model:value="queryForm.applicantDeptCode"
                    placeholder="请输入申请部门CODE"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请部门">
                  <a-input
                    v-model:value="queryForm.applicantDeptName"
                    placeholder="请输入申请部门"
                    :allow-clear="true"
                    @pressEnter="handleQuery"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请时间(起)">
                  <a-date-picker
                    v-model:value="queryForm.applyTimeBegin"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择申请时间(起)"
                    :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.applyTimeEnd)"
                  />
                </a-form-item>
              </a-col>
              <a-col v-bind="colLayout.cols" v-show="advanced">
                <a-form-item label="申请时间(止)">
                  <a-date-picker
                    v-model:value="queryForm.applyTimeEnd"
                    format="YYYY-MM-DD"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择申请时间(止)"
                    :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.applyTimeBegin)"
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
                <a-form-item label="所属年度;方便查询">
                  <a-input
                    v-model:value="queryForm.forYear"
                    placeholder="请输入所属年度;方便查询"
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
            ref="qmsQualityProblemDelay"
            table-key="qmsQualityProblemDelay"
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
          <a-space>
            <a-button
              v-hasPermi="['qmsQualityProblemDelay:add']"
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
              v-hasPermi="['qmsQualityProblemDelay:edit']"
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
              v-hasPermi="['qmsQualityProblemDelay:del']"
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
              v-hasPermi="['qmsQualityProblemDelay:export']"
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
            <template #toolBarRight>
              <a-space>
                <AvicBpmFilter
                  :allFileAuth="['qmsQualityProblemDelay:all']"
                  :myFileAuth="['qmsQualityProblemDelay:my']"
                  :defaultBpmType = 'queryForm.bpmType'
                  :defaultBpmState = 'queryForm.bpmState'
                  @change="changeBpmFilter"
                />
                <a-input-search
                  class="opt-btn-commonsearch"
                  style="width: 200px"
                  placeholder="请输入延期编号或质量问题ID"
                  :allow-clear="true"
                  @search="handleKeyWordQuery"
                />
              </a-space>
            </template>
            <template #bodyCell="{ column, text, record, index }">
              <template v-if="column.dataIndex === 'id'">
                {{
                  index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1)
                }}
              </template>
              <template v-else-if="column.dataIndex === 'delayCode'">
                <a @click="handleFlowDetail(record)">
                  {{ record.delayCode }}
                </a>
              </template>
            </template>
          </AvicTable>
        </div>
      </div>
      <!-- 添加页面弹窗 -->
      <QmsQualityProblemDelayAdd
        v-if="showAddModal"
        ref="addModal"
        :bpmOperatorRefresh="getList"
        @reloadData="getList"
        @close="showAddModal = false"
      />
      <!-- 编辑页面弹窗 -->
      <QmsQualityProblemDelayEdit
        v-if="showEditModal"
        ref="editModal"
        :form-id="formId"
        @reloadData="getList"
        @close="showEditModal = false"
      />
      <!-- 详情页面弹窗 -->
      <QmsQualityProblemDelayDetail
        v-if="showDetailModal"
        ref="detailModal"
        :form-id="formId"
        @close="showDetailModal = false"
      />
    </AvicPane>
    <AvicPane>
      <!--子表组件-->
      <QmsQualityProblemDelayMilestoneManage
        key="qmsQualityProblemDelayMilestoneManage"
        ref="qmsQualityProblemDelayMilestoneManage"
        :mainId="mainId"
      />
    </AvicPane>
  </AvicSplit>
</template>
<script lang="ts" setup>
import type { QmsQualityProblemDelayDto } from '@/api/avic/myportal/qms/QmsQualityProblemDelayApi'; // 引入模块DTO
import { listQmsQualityProblemDelayByPage, delQmsQualityProblemDelay, exportExcel } from '@/api/avic/myportal/qms/QmsQualityProblemDelayApi'; // 引入模块API
import QmsQualityProblemDelayAdd from './QmsQualityProblemDelayAdd.vue'; // 引入添加页面组件
import QmsQualityProblemDelayEdit from './QmsQualityProblemDelayEdit.vue'; // 引入编辑页面组件
import QmsQualityProblemDelayDetail from './QmsQualityProblemDelayDetail.vue'; // 引入详情页面组件
import QmsQualityProblemDelayMilestoneManage from '../qmsqualityproblemdelaymilestone/QmsQualityProblemDelayMilestoneManage.vue'; // 引入子表页面组件
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
    width: 60,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '延期编号',
    dataIndex: 'delayCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '质量问题ID',
    dataIndex: 'problemId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '质量问题反馈单的编号',
    dataIndex: 'problemCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '质量问题反馈单标题;系统自动，同步质量问题反馈单的标题',
    dataIndex: 'problemTitle',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '质量延期申请单标题;系统自动，关于xxx的延期申请',
    dataIndex: 'delayTitle',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '延期次数',
    dataIndex: 'delayTimes',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
  },
  {
    title: '原关闭时间',
    dataIndex: 'originalCloseTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '申请关闭时间',
    dataIndex: 'newCloseTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）',
    dataIndex: 'delayReason',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '问题概述;系统自动，同步质量问题反馈单的问题概述',
    dataIndex: 'problemSummary',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '当前工作进展',
    dataIndex: 'currentProgress',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '应急措施',
    dataIndex: 'emergencyMeasure',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '延期原因详细说明',
    dataIndex: 'delayReasonDetail',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '科研平台任务编号',
    dataIndex: 'ppmPlanCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '型号;系统自动，同步质量问题反馈单的型号',
    dataIndex: 'model',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请人ID',
    dataIndex: 'applicantStaffId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请人CODE',
    dataIndex: 'applicantStaffCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请人姓名',
    dataIndex: 'applicantStaffName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门ID',
    dataIndex: 'applicantDeptId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门CODE',
    dataIndex: 'applicantDeptCode',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请部门',
    dataIndex: 'applicantDeptName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '申请时间',
    dataIndex: 'applyTime',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '业务状态',
    dataIndex: 'status',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '流程实例ID',
    dataIndex: 'processInstanceId',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '流程状态',
    dataIndex: 'processStatus',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '所属年度;方便查询',
    dataIndex: 'forYear',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '密级',
    dataIndex: 'secretLevelName',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '是否已删除',
    dataIndex: 'ynDeleted',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '排序',
    dataIndex: 'orderBy',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'right'
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
    fixed: 'right'
  },
  {
    title: '当前处理人',
    dataIndex: 'assigneenames_',
    ellipsis: true,
    width: 130,
    align: 'left',
    fixed: 'right'
  }
];
const queryForm = ref<QmsQualityProblemDelayDto>({
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
  listQmsQualityProblemDelayByPage(queryParam)
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
    delayCode: value,
    problemId: value
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
      delQmsQualityProblemDelay(ids)
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
</script>

