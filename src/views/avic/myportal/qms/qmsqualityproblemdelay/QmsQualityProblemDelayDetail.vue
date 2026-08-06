<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      layout="horizontal"
      class="form-excel-style"
    >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('delayCode')">
          <a-form-item name="delayCode" label="延期编号" :rules="fieldRequired('delayCode')" has-feedback>
            <a-input
              v-model:value="form.delayCode"
              :auto-focus="true"
              :disabled="fieldDisabled('delayCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemId')">
          <a-form-item name="problemId" label="质量问题ID" :rules="fieldRequired('problemId')" has-feedback>
            <a-input
              v-model:value="form.problemId"
              :disabled="fieldDisabled('problemId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemCode')">
          <a-form-item name="problemCode" label="质量问题反馈单的编号" :rules="fieldRequired('problemCode')" has-feedback>
            <a-input
              v-model:value="form.problemCode"
              :disabled="fieldDisabled('problemCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemTitle')">
          <a-form-item name="problemTitle" label="质量问题反馈单标题;系统自动，同步质量问题反馈单的标题" :rules="fieldRequired('problemTitle')" has-feedback>
            <a-input
              v-model:value="form.problemTitle"
              :disabled="fieldDisabled('problemTitle')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('delayTitle')">
          <a-form-item name="delayTitle" label="质量延期申请单标题;系统自动，关于xxx的延期申请" :rules="fieldRequired('delayTitle')" has-feedback>
            <a-input
              v-model:value="form.delayTitle"
              :disabled="fieldDisabled('delayTitle')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('delayTimes')">
          <a-form-item name="delayTimes" label="延期次数" :rules="fieldRequired('delayTimes')" has-feedback>
            <a-input-number
              v-model:value="form.delayTimes"
              :min="0"
              :max="9999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('delayTimes')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('originalCloseTime')">
          <a-form-item name="originalCloseTime" label="原关闭时间" :rules="fieldRequired('originalCloseTime')" has-feedback>
            <a-date-picker
              v-model:value="form.originalCloseTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('originalCloseTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('newCloseTime')">
          <a-form-item name="newCloseTime" label="申请关闭时间" :rules="fieldRequired('newCloseTime')" has-feedback>
            <a-date-picker
              v-model:value="form.newCloseTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('newCloseTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('delayReason')">
          <a-form-item name="delayReason" label="延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）" :rules="fieldRequired('delayReason')" has-feedback>
            <a-input
              v-model:value="form.delayReason"
              :disabled="fieldDisabled('delayReason')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemSummary')">
          <a-form-item name="problemSummary" label="问题概述;系统自动，同步质量问题反馈单的问题概述" :rules="fieldRequired('problemSummary')" has-feedback>
            <a-input
              v-model:value="form.problemSummary"
              :disabled="fieldDisabled('problemSummary')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('currentProgress')">
          <a-form-item name="currentProgress" label="当前工作进展" :rules="fieldRequired('currentProgress')" has-feedback>
            <a-input
              v-model:value="form.currentProgress"
              :disabled="fieldDisabled('currentProgress')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('emergencyMeasure')">
          <a-form-item name="emergencyMeasure" label="应急措施" :rules="fieldRequired('emergencyMeasure')" has-feedback>
            <a-input
              v-model:value="form.emergencyMeasure"
              :disabled="fieldDisabled('emergencyMeasure')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('delayReasonDetail')">
          <a-form-item name="delayReasonDetail" label="延期原因详细说明" :rules="fieldRequired('delayReasonDetail')" has-feedback>
            <a-input
              v-model:value="form.delayReasonDetail"
              :disabled="fieldDisabled('delayReasonDetail')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ppmPlanCode')">
          <a-form-item name="ppmPlanCode" label="科研平台任务编号" :rules="fieldRequired('ppmPlanCode')" has-feedback>
            <a-input
              v-model:value="form.ppmPlanCode"
              :disabled="fieldDisabled('ppmPlanCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('model')">
          <a-form-item name="model" label="型号;系统自动，同步质量问题反馈单的型号" :rules="fieldRequired('model')" has-feedback>
            <a-input
              v-model:value="form.model"
              :disabled="fieldDisabled('model')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantStaffId')">
          <a-form-item name="applicantStaffId" label="申请人ID" :rules="fieldRequired('applicantStaffId')" has-feedback>
            <a-input
              v-model:value="form.applicantStaffId"
              :disabled="fieldDisabled('applicantStaffId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantStaffCode')">
          <a-form-item name="applicantStaffCode" label="申请人CODE" :rules="fieldRequired('applicantStaffCode')" has-feedback>
            <a-input
              v-model:value="form.applicantStaffCode"
              :disabled="fieldDisabled('applicantStaffCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantStaffName')">
          <a-form-item name="applicantStaffName" label="申请人姓名" :rules="fieldRequired('applicantStaffName')" has-feedback>
            <a-input
              v-model:value="form.applicantStaffName"
              :disabled="fieldDisabled('applicantStaffName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantDeptId')">
          <a-form-item name="applicantDeptId" label="申请部门ID" :rules="fieldRequired('applicantDeptId')" has-feedback>
            <a-input
              v-model:value="form.applicantDeptId"
              :disabled="fieldDisabled('applicantDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantDeptCode')">
          <a-form-item name="applicantDeptCode" label="申请部门CODE" :rules="fieldRequired('applicantDeptCode')" has-feedback>
            <a-input
              v-model:value="form.applicantDeptCode"
              :disabled="fieldDisabled('applicantDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applicantDeptName')">
          <a-form-item name="applicantDeptName" label="申请部门" :rules="fieldRequired('applicantDeptName')" has-feedback>
            <a-input
              v-model:value="form.applicantDeptName"
              :disabled="fieldDisabled('applicantDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyTime')">
          <a-form-item name="applyTime" label="申请时间" :rules="fieldRequired('applyTime')" has-feedback>
            <a-date-picker
              v-model:value="form.applyTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('applyTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('status')">
          <a-form-item name="status" label="业务状态" :rules="fieldRequired('status')" has-feedback>
            <a-input
              v-model:value="form.status"
              :disabled="fieldDisabled('status')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('processInstanceId')">
          <a-form-item name="processInstanceId" label="流程实例ID" :rules="fieldRequired('processInstanceId')" has-feedback>
            <a-input
              v-model:value="form.processInstanceId"
              :disabled="fieldDisabled('processInstanceId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('processStatus')">
          <a-form-item name="processStatus" label="流程状态" :rules="fieldRequired('processStatus')" has-feedback>
            <a-input
              v-model:value="form.processStatus"
              :disabled="fieldDisabled('processStatus')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('forYear')">
          <a-form-item name="forYear" label="所属年度;方便查询" :rules="fieldRequired('forYear')" has-feedback>
            <a-input
              v-model:value="form.forYear"
              :disabled="fieldDisabled('forYear')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('secretLevel')">
          <a-form-item name="secretLevel" label="密级" :rules="fieldRequired('secretLevel')" has-feedback>
            <a-select
              v-model:value="form.secretLevel"
              :get-popup-container="triggerNode => triggerNode.parentNode"
              option-filter-prop="children"
              :show-search="true"
              :allow-clear="true"
              :disabled="fieldDisabled('secretLevel')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynDeleted')">
          <a-form-item name="ynDeleted" label="是否已删除" :rules="fieldRequired('ynDeleted')" has-feedback>
            <a-input
              v-model:value="form.ynDeleted"
              :disabled="fieldDisabled('ynDeleted')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('remark')">
          <a-form-item name="remark" label="备注" :rules="fieldRequired('remark')" has-feedback>
            <a-input
              v-model:value="form.remark"
              :disabled="fieldDisabled('remark')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('orderBy')">
          <a-form-item name="orderBy" label="排序" :rules="fieldRequired('orderBy')" has-feedback>
            <a-input-number
              v-model:value="form.orderBy"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('orderBy')"
            />
          </a-form-item>
        </a-col>
      <a-col v-bind="colLayout.cols2">
        <a-form-item label="上传附件" type="attachment" :rules="attachmentRequired('uploadFile')">
          <AvicUploader
            element-id="1"
            ref="uploadFile"
            label="上传附件"
            :form-id="form.id"
            :bpm-instance-object="props.bpmInstanceObject"
            :form-secret-level="form.secretLevel"
            :allow-download="true"
            table-name="QMS_QUALITY_PROBLEM_DELAY"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
    <QmsQualityProblemDelayMilestoneEdit
      v-if="fieldVisible('QMS_QUALITY_PROBLEM_DELAY_MILESTONE')"
      ref="qmsQualityProblemDelayMilestoneEdit"
      :mainId="formId || form.id"
      :bpmInstanceObject="bpmInstanceObject"
      :bpmParams="bpmParams"
    />
    <!--子表按钮的流程解析，用于权限控制-->
    <a-button
      class="eform_subtable_bpm_button_auth table-handle-button"
      for="addSubTableButton"
      label="添加"
      title="添加"
      style="display: none"
    >
      添加
    </a-button>
    <a-button
      class="eform_subtable_bpm_button_auth table-handle-button"
      for="deleteSubTableButton"
      label="删除"
      title="删除"
      style="display: none"
    >
      删除
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import { useQmsQualityProblemDelayForm, emits } from './ts/QmsQualityProblemDelayForm'; // 引入表单ts
import QmsQualityProblemDelayMilestoneEdit from '@/views/avic/myportal/qms/qmsqualityproblemdelaymilestone/QmsQualityProblemDelayMilestoneEdit.vue'; // 引入子表组件

const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  bpmInstanceObject: {
    type: Object
  },
  // 以弹窗方式打开流程详情页时，以组件传参时使用
  params: {
    type: Object,
    required: false,
    default: null
  },
  // 启动流程后，刷新列表的回调函数
  bpmOperatorRefresh: {
    type: Function
  }
});
const emit = defineEmits(emits);
const {
  form,
  formRef,
  bpmParams,
  layout,
  colLayout,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  attachmentRequired,
  qmsQualityProblemDelayMilestoneEdit,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsQualityProblemDelayForm({
  props: props,
  emit: emit
});
defineExpose({
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
});
</script>


