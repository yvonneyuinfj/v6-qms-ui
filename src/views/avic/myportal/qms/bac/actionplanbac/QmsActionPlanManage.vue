<template>
  <AvicSplit horizontal>
    <AvicPane size="65">
      <div class="content-wrapper">
        <!--<div class="top-search-box">-->
        <!--  &lt;!&ndash; 高级查询 &ndash;&gt;-->
        <!--  <a-form v-bind="layout" ref="formRef" :model="queryForm">-->
        <!--    <a-row :gutter="16">-->
        <!--      <a-col v-bind="colLayout.cols">-->
        <!--        <a-form-item label="行动项ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.actionId"-->
        <!--            placeholder="请输入行动项ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols">-->
        <!--        <a-form-item label="行动项标题">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.actionName"-->
        <!--            placeholder="请输入行动项标题"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols">-->
        <!--        <a-form-item label="来源类型">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.sourceType"-->
        <!--            placeholder="请输入来源类型"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="来源ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.sourceId"-->
        <!--            placeholder="请输入来源ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划编号">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.planCode"-->
        <!--            placeholder="请输入计划编号"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划名称">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.planName"-->
        <!--            placeholder="请输入计划名称"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划内容">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.planContent"-->
        <!--            placeholder="请输入计划内容"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划类型">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.planType"-->
        <!--            placeholder="请输入计划类型"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任部门ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleDeptId"-->
        <!--            placeholder="请输入责任部门ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任部门CODE">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleDeptCode"-->
        <!--            placeholder="请输入责任部门CODE"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任部门">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleDeptName"-->
        <!--            placeholder="请输入责任部门"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任人ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleUserId"-->
        <!--            placeholder="请输入责任人ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任人CODE">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleUserCode"-->
        <!--            placeholder="请输入责任人CODE"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="责任人">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.responsibleUserName"-->
        <!--            placeholder="请输入责任人"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="协同部门ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.assistDeptId"-->
        <!--            placeholder="请输入协同部门ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="协同部门CODE">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.assistDeptCode"-->
        <!--            placeholder="请输入协同部门CODE"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="协同部门">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.assistDeptName"-->
        <!--            placeholder="请输入协同部门"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="开始时间(起)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.startTimeBegin"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择开始时间(起)"-->
        <!--            :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.startTimeEnd)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="开始时间(止)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.startTimeEnd"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择开始时间(止)"-->
        <!--            :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.startTimeBegin)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="结束时间(起)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.endTimeBegin"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择结束时间(起)"-->
        <!--            :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.endTimeEnd)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="结束时间(止)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.endTimeEnd"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择结束时间(止)"-->
        <!--            :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.endTimeBegin)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="实际完成时间(起)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.actualFinishTimeBegin"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择实际完成时间(起)"-->
        <!--            :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.actualFinishTimeEnd)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="实际完成时间(止)">-->
        <!--          <a-date-picker-->
        <!--            v-model:value="queryForm.actualFinishTimeEnd"-->
        <!--            format="YYYY-MM-DD"-->
        <!--            value-format="YYYY-MM-DD"-->
        <!--            placeholder="请选择实际完成时间(止)"-->
        <!--            :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.actualFinishTimeBegin)"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="反馈周期">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.feedbackCycle"-->
        <!--            placeholder="请输入反馈周期"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划状态">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.status"-->
        <!--            placeholder="请输入计划状态"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="反馈状态">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.feedbackStatus"-->
        <!--            placeholder="请输入反馈状态"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="是否逾期">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.ynOverdue"-->
        <!--            placeholder="请输入是否逾期"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="密级">-->
        <!--          <a-select-->
        <!--            v-model:value="queryForm.secretLevel"-->
        <!--            :get-popup-container="triggerNode => triggerNode.parentNode"-->
        <!--            option-filter-prop="children"-->
        <!--            :show-search="true"-->
        <!--            :allow-clear="true"-->
        <!--            placeholder="请选择密级"-->
        <!--          >-->
        <!--            <a-select-option-->
        <!--              v-for="item in secretLevelList"-->
        <!--              :key="item.sysLookupTlId"-->
        <!--              :value="item.lookupCode"-->
        <!--            >-->
        <!--              {{ item.lookupName }}-->
        <!--            </a-select-option>-->
        <!--          </a-select>-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="是否已删除">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.ynDeleted"-->
        <!--            placeholder="请输入是否已删除"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="备注">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.remark"-->
        <!--            placeholder="请输入备注"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="父节点ID">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.parentId"-->
        <!--            placeholder="请输入父节点ID"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="计划要求">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.expectedDeliverable"-->
        <!--            placeholder="请输入计划要求"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col v-bind="colLayout.cols" v-show="advanced">-->
        <!--        <a-form-item label="PLAN_REQUIREMENT">-->
        <!--          <a-input-->
        <!--            v-model:value="queryForm.planRequirement"-->
        <!--            placeholder="请输入PLAN_REQUIREMENT"-->
        <!--            :allow-clear="true"-->
        <!--            @pressEnter="handleQuery"-->
        <!--          />-->
        <!--        </a-form-item>-->
        <!--      </a-col>-->
        <!--      <a-col-->
        <!--        v-bind="colLayout.cols"-->
        <!--        style="margin-left: auto"-->
        <!--      >-->
        <!--        <div class="table-page-search-submitButtons">-->
        <!--          <a-space>-->
        <!--            <a-button type="primary" @click="handleQuery">-->
        <!--              <search-outlined />-->
        <!--              查询-->
        <!--            </a-button>-->
        <!--            <a-button type="primary" @click="resetQuery" ghost>-->
        <!--              <redo-outlined />-->
        <!--              重置-->
        <!--            </a-button>-->
        <!--            <a-button type="link" @click="toggleAdvanced" style="margin: 0">-->
        <!--              {{ advanced ? '收起' : '展开' }}-->
        <!--              <up-outlined v-if="advanced" />-->
        <!--              <down-outlined v-else />-->
        <!--            </a-button>-->
        <!--          </a-space>-->
        <!--        </div>-->
        <!--      </a-col>-->
        <!--    </a-row>-->
        <!--  </a-form>-->
        <!--</div>-->
        <!-- 表格组件 -->
        <div class="table-wrapper">
          <AvicTable
            ref="qmsActionPlan"
            table-key="qmsActionPlan"
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
              <div class="aecc-leftbar-title">部门质量目标</div>
            </template>
            <template #toolBarRight>
              <a-space>
                <a-button
                  v-hasPermi="['qmsActionPlan:add']"
                  title="添加"
                  type="primary"
                  @click="handleAdd"
                >
                  <template #icon>
                    <plus-outlined/>
                  </template>
                  添加
                </a-button>
                <a-button
                  v-hasPermi="['qmsActionPlan:del']"
                  title="删除"
                  danger
                  :type="selectedRowKeys.length == 0 ? 'default' : 'primary'"
                  :loading="delLoading"
                  @click="handleDelete(selectedRowKeys, '')"
                >
                  <template #icon>
                    <delete-outlined/>
                  </template>
                  删除
                </a-button>
                <a-button
                  v-hasPermi="['qmsActionPlan:import']"
                  title="导入"
                  type="primary"
                  ghost
                  @click="handleImport">
                  <template #icon>
                    <import-outlined/>
                  </template>
                  导入
                </a-button>
                <a-button
                  v-hasPermi="['qmsActionPlan:export']"
                  title="导出"
                  type="primary"
                  ghost
                  @click="handleExport">
                  <template #icon>
                    <export-outlined/>
                  </template>
                  导出
                </a-button>
              </a-space>
              <!--<a-input-search-->
              <!--  class="opt-btn-commonsearch"-->
              <!--  style="width: 200px"-->
              <!--  placeholder="请输入行动项ID或行动项标题"-->
              <!--  :allow-clear="true"-->
              <!--  @search="handleKeyWordQuery"-->
              <!--/>-->
            </template>
            <template #bodyCell="{ column, text, record, index }">
              <template v-if="column.dataIndex  === 'id'">
                {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
              </template>
              <template v-else-if="column.dataIndex === 'actionId'">
                <a @click="handleDetail(record)">
                  {{ record.actionId }}
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
                <!--<a-button-->
                <!--  v-hasPermi="['qmsActionPlan:del']"-->
                <!--  type="link"-->
                <!--  class="inner-btn"-->
                <!--  @click.stop="handleDelete([record.id], 'row')"-->
                <!--&gt;-->
                <!--  删除-->
                <!--</a-button>-->
                <a-button
                  type="link"
                  class="inner-btn"
                  @click.stop="handleFeedback(record)"
                >
                  反馈
                </a-button>
              </template>
            </template>
          </AvicTable>
        </div>
      </div>
      <!-- 添加页面弹窗 -->
      <qms-action-plan-add
        v-if="showAddModal"
        ref="addModal"
        @reloadData="getList"
        @close="showAddModal = false"
      />
      <!-- 编辑页面弹窗 -->
      <qms-action-plan-edit
        v-if="showEditModal"
        ref="editModal"
        :form-id="formId"
        @reloadData="getList"
        @close="showEditModal = false"
      />
      <!-- 详情页面弹窗 -->
      <qms-action-plan-detail
        v-if="showDetailModal"
        ref="detailModal"
        :form-id="formId"
        @close="showDetailModal = false"
      />
      <AvicExcelImport
        v-if="showImportModal"
        :formData="excelParams"
        title="模板导入"
        importUrl="/myportal/qms/qmsactionplans/importData/v1"
        downloadTemplateUrl="/myportal/qms/qmsactionplans/downloadTemplate/v1"
        @reloadData="getList"
        @close="showImportModal = false"
      />
      <qms-common-action-feedback-add
        v-if="showFeedbackAddModal"
        ref="feedbackModal"
        :mainObj="mainObj"
        @close="showFeedbackAddModal = false"
      />
    </AvicPane>
    <AvicPane>
      <!-- 子表组件 -->
      <qms-common-action-feedback-manage key="qmsCommonActionFeedbackManage" ref="qmsCommonActionFeedbackManage"
                                         :mainId="mainId"/>
    </AvicPane>
  </AvicSplit>
</template>

<script lang="ts" setup>
import type { QmsActionPlanDto } from '@/api/avic/myportal/qms/QmsActionPlanApi'; // 引入模块DTO
import { listQmsActionPlanByPage, delQmsActionPlan, exportExcel } from '@/api/avic/myportal/qms/QmsActionPlanApi'; // 引入模块API
import QmsActionPlanAdd from './QmsActionPlanAdd.vue'; // 引入添加页面组件
import QmsActionPlanEdit from './QmsActionPlanEdit.vue'; // 引入编辑页面组件
import QmsActionPlanDetail from './QmsActionPlanDetail.vue'; // 引入详情页面组件
import QmsCommonActionFeedbackManage from './qmsObjectivefeedback/QmsCommonActionFeedbackManage.vue';
import QmsCommonActionFeedbackAdd
  from './qmsObjectivefeedback/QmsCommonActionFeedbackAdd.vue'; // 引入子表页面组件
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
    title: '所级目标',
    dataIndex: 'actionName',
    ellipsis: true,
    sorter: true,
    width: 250,
    resizable: true,
    align: 'left'
  },
  {
    title: '部门目标',
    dataIndex: 'planContent',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    ellipsis: true,
    width: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '截止时间',
    dataIndex: 'endTime',
    ellipsis: true,
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
    title: '责任人',
    dataIndex: 'responsibleUserName',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '目标状态',
    dataIndex: 'status',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '反馈状态',
    dataIndex: 'feedbackStatus',
    ellipsis: true,
    sorter: true,
    width: 120,
    resizable: true,
    align: 'left'
  },
  {
    title: '操作',
    dataIndex: 'action',
    ellipsis: true,
    width: 120,
    align: 'center',
    fixed: 'right'
  }
];
const queryForm = ref<QmsActionPlanDto>({});
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
const excelParams = ref({ tableName: 'qmsActionPlan' }); // 必填参数tableName全局唯一，与tableKey保持一致
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
});

/** 查询数据  */
function getList() {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = [];
  loading.value = true;
  listQmsActionPlanByPage(queryParam)
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
function getUserFileSecretList() {
  proxy.$getUserFileSecretLevelList(result => {
    secretLevelList.value = result;
  });
}

/** 高级搜索按钮操作 */
function handleQuery() {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}

/** 高级查询重置按钮操作  */
function resetQuery() {
  queryForm.value = {};
  handleQuery();
}

/** 高级查询 展开/收起 */
function toggleAdvanced() {
  advanced.value = !advanced.value;
}

/** 快速查询逻辑 */
function handleKeyWordQuery(value) {
  const keyWord = {
    actionId: value,
    actionName: value
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
function handleEdit(id) {
  formId.value = id;
  showEditModal.value = true;
}

/** 详情 */
function handleDetail(record) {
  formId.value = record.id;
  showDetailModal.value = true;
}

/** 导入 */
function handleImport() {
  showImportModal.value = true;
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

/** 删除 */
function handleDelete(ids, type) {
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
      delQmsActionPlan(ids)
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

/** 表头排序 */
function handleTableChange(pagination, filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}

const mainObj = ref(null);
const showFeedbackAddModal = ref(false);
const handleFeedback = (row) => {
  mainObj.value = row;
  showFeedbackAddModal.value = true;
};

</script>

