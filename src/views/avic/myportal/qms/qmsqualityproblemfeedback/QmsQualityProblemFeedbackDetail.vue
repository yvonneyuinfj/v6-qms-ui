<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('feedbackCode')">
          <a-form-item name="feedbackCode" label="反哺编号" :rules="fieldRequired('feedbackCode')" has-feedback>
            <a-input
              v-model:value="form.feedbackCode"
              :auto-focus="true"
              :disabled="fieldDisabled('feedbackCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('forYear')">
          <a-form-item name="forYear" label="所属年份" :rules="fieldRequired('forYear')" has-feedback>
            <a-input
              v-model:value="form.forYear"
              :disabled="fieldDisabled('forYear')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('sourceProblemId')">
          <a-form-item name="sourceProblemId" label="来源问题ID" :rules="fieldRequired('sourceProblemId')" has-feedback>
            <a-input
              v-model:value="form.sourceProblemId"
              :disabled="fieldDisabled('sourceProblemId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('sourceUpdateTime')">
          <a-form-item name="sourceUpdateTime" label="来源更新时间" :rules="fieldRequired('sourceUpdateTime')" has-feedback>
            <a-date-picker
              v-model:value="form.sourceUpdateTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('sourceUpdateTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('syncTime')">
          <a-form-item name="syncTime" label="最近同步时间" :rules="fieldRequired('syncTime')" has-feedback>
            <a-date-picker
              v-model:value="form.syncTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('syncTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('sourceSystemCode')">
          <a-form-item name="sourceSystemCode" label="来源系统CODE" :rules="fieldRequired('sourceSystemCode')" has-feedback>
            <a-input
              v-model:value="form.sourceSystemCode"
              :disabled="fieldDisabled('sourceSystemCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemCode')">
          <a-form-item name="problemCode" label="质量问题编号" :rules="fieldRequired('problemCode')" has-feedback>
            <a-input
              v-model:value="form.problemCode"
              :disabled="fieldDisabled('problemCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('sourceStatus')">
          <a-form-item name="sourceStatus" label="来源问题状态" :rules="fieldRequired('sourceStatus')" has-feedback>
            <a-input
              v-model:value="form.sourceStatus"
              :disabled="fieldDisabled('sourceStatus')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemName')">
          <a-form-item name="problemName" label="问题名称" :rules="fieldRequired('problemName')" has-feedback>
            <a-input
              v-model:value="form.problemName"
              :disabled="fieldDisabled('problemName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemType')">
          <a-form-item name="problemType" label="问题类型" :rules="fieldRequired('problemType')" has-feedback>
            <a-input
              v-model:value="form.problemType"
              :disabled="fieldDisabled('problemType')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('problemCategory')">
          <a-form-item name="problemCategory" label="问题分类" :rules="fieldRequired('problemCategory')" has-feedback>
            <a-input
              v-model:value="form.problemCategory"
              :disabled="fieldDisabled('problemCategory')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('model')">
          <a-form-item name="model" label="型号" :rules="fieldRequired('model')" has-feedback>
            <a-input
              v-model:value="form.model"
              :disabled="fieldDisabled('model')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('occurrenceTime')">
          <a-form-item name="occurrenceTime" label="发生时间" :rules="fieldRequired('occurrenceTime')" has-feedback>
            <a-date-picker
              v-model:value="form.occurrenceTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('occurrenceTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('closeTime')">
          <a-form-item name="closeTime" label="归零时间" :rules="fieldRequired('closeTime')" has-feedback>
            <a-date-picker
              v-model:value="form.closeTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('closeTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleStaffId')">
          <a-form-item name="responsibleStaffId" label="责任人ID" :rules="fieldRequired('responsibleStaffId')" has-feedback>
            <a-input
              v-model:value="form.responsibleStaffId"
              :disabled="fieldDisabled('responsibleStaffId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleStaffCode')">
          <a-form-item name="responsibleStaffCode" label="责任人CODE" :rules="fieldRequired('responsibleStaffCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleStaffCode"
              :disabled="fieldDisabled('responsibleStaffCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleStaffName')">
          <a-form-item name="responsibleStaffName" label="责任人" :rules="fieldRequired('responsibleStaffName')" has-feedback>
            <a-input
              v-model:value="form.responsibleStaffName"
              :disabled="fieldDisabled('responsibleStaffName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptId')">
          <a-form-item name="responsibleDeptId" label="责任部门ID" :rules="fieldRequired('responsibleDeptId')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptId"
              :disabled="fieldDisabled('responsibleDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptCode')">
          <a-form-item name="responsibleDeptCode" label="责任部门CODE" :rules="fieldRequired('responsibleDeptCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptCode"
              :disabled="fieldDisabled('responsibleDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptName')">
          <a-form-item name="responsibleDeptName" label="责任部门" :rules="fieldRequired('responsibleDeptName')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptName"
              :disabled="fieldDisabled('responsibleDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('closeReportId')">
          <a-form-item name="closeReportId" label="归零报告ID" :rules="fieldRequired('closeReportId')" has-feedback>
            <a-input
              v-model:value="form.closeReportId"
              :disabled="fieldDisabled('closeReportId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('closeReportCode')">
          <a-form-item name="closeReportCode" label="归零报告编号" :rules="fieldRequired('closeReportCode')" has-feedback>
            <a-input
              v-model:value="form.closeReportCode"
              :disabled="fieldDisabled('closeReportCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('closeReportName')">
          <a-form-item name="closeReportName" label="归零报告名称" :rules="fieldRequired('closeReportName')" has-feedback>
            <a-input
              v-model:value="form.closeReportName"
              :disabled="fieldDisabled('closeReportName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('causeMechanism')">
          <a-form-item name="causeMechanism" label="问题原因和机理" :rules="fieldRequired('causeMechanism')" has-feedback>
            <a-input
              v-model:value="form.causeMechanism"
              :disabled="fieldDisabled('causeMechanism')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('improvementMeasure')">
          <a-form-item name="improvementMeasure" label="改进措施" :rules="fieldRequired('improvementMeasure')" has-feedback>
            <a-input
              v-model:value="form.improvementMeasure"
              :disabled="fieldDisabled('improvementMeasure')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('feedbackDimension')">
          <a-form-item name="feedbackDimension" label="反哺维度" :rules="fieldRequired('feedbackDimension')" has-feedback>
            <a-input
              v-model:value="form.feedbackDimension"
              :disabled="fieldDisabled('feedbackDimension')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynStartFeedback')">
          <a-form-item name="ynStartFeedback" label="是否启用反哺" :rules="fieldRequired('ynStartFeedback')" has-feedback>
            <a-input
              v-model:value="form.ynStartFeedback"
              :disabled="fieldDisabled('ynStartFeedback')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('feedbackDesc')">
          <a-form-item name="feedbackDesc" label="反哺意见说明" :rules="fieldRequired('feedbackDesc')" has-feedback>
            <a-input
              v-model:value="form.feedbackDesc"
              :disabled="fieldDisabled('feedbackDesc')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('submitTime')">
          <a-form-item name="submitTime" label="提交时间" :rules="fieldRequired('submitTime')" has-feedback>
            <a-date-picker
              v-model:value="form.submitTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('submitTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('completeTime')">
          <a-form-item name="completeTime" label="完成时间" :rules="fieldRequired('completeTime')" has-feedback>
            <a-date-picker
              v-model:value="form.completeTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('completeTime')"
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
            table-name="QMS_QUALITY_PROBLEM_FEEDBACK"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsQualityProblemFeedbackForm, emits } from './ts/QmsQualityProblemFeedbackForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  bpmInstanceObject: {
    type: Object
  },
  params: {
    type: Object,
    required: false,
    default: null
  },
  bpmOperatorRefresh: {
    type: Function
  }
});
const emit = defineEmits(emits);
const {
  form,
  formRef,
  layout,
  colLayout,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  attachmentRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsQualityProblemFeedbackForm({
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
