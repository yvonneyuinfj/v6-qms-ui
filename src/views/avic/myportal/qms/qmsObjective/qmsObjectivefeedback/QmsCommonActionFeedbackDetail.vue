<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
    >
      <a-row>
        <!--反馈人-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('feedbackUserName')">
          <a-form-item name="feedbackUserName" label="反馈人">
            <a-input
              v-model:value="form.feedbackUserName"
              disabled
            />
          </a-form-item>
        </a-col>
        <!--反馈时间-->
        <a-col v-bind="colLayout.cols">
          <a-form-item name="feedbackTime" label="反馈时间">
            <a-input
              v-model:value="form.feedbackTime"
              disabled
            />
          </a-form-item>
        </a-col>
        <!--考核指标-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('sourceName')">
          <a-form-item name="sourceName" label="考核指标">
            <a-input
              v-model:value="form.sourceName"
              disabled
            />
          </a-form-item>
        </a-col>
        <!--进展说明-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('feedbackContent')">
          <a-form-item name="feedbackContent" label="进展说明" :rules="fieldRequired('feedbackContent')" has-feedback>
            <a-textarea
              v-model:value="form.feedbackContent"
              :disabled="fieldDisabled('feedbackContent')"
            />
          </a-form-item>
        </a-col>
        <!--完成进度-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('progress')">
          <a-form-item name="progress" label="完成进度" :rules="fieldRequired('progress')" has-feedback>
            <a-input-number
              v-model:value="form.progress"
              :min="0"
              :max="99"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('progress')"
              addon-after="%"
              style="width: 100%"
            />
          </a-form-item>
        </a-col>
        <!--实际完成时间-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('actualFinishTime')">
          <a-form-item name="actualFinishTime" label="实际完成时间" :rules="fieldRequired('actualFinishTime')" has-feedback>
            <a-date-picker
              v-model:value="form.actualFinishTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('actualFinishTime')"
            />
          </a-form-item>
        </a-col>
        <!--是否存在风险-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynRisk')">
          <a-form-item name="ynRisk" label="是否存在风险" :rules="fieldRequired('ynRisk')" has-feedback>
            <a-switch
              v-model:checked="form.ynRisk"
              checked-value="Y"
              un-checked-value="N"
              checked-children="是"
              un-checked-children="否"
              :disabled="fieldDisabled('ynRisk')"
            />
          </a-form-item>
        </a-col>
        <!--风险说明-->
        <a-col v-bind="colLayout.cols" v-if="form.ynRisk==='Y' && fieldVisible('riskDesc')">
          <a-form-item name="riskDesc" label="风险说明" :rules="fieldRequired('riskDesc')" has-feedback>
            <a-textarea
              v-model:value="form.riskDesc"
              :disabled="fieldDisabled('riskDesc')"
            />
          </a-form-item>
        </a-col>
        <!--解决措施-->
        <a-col v-bind="colLayout.cols" v-if="form.ynRisk==='Y' && fieldVisible('nextMeasure')">
          <a-form-item name="nextMeasure" label="下一步措施" :rules="fieldRequired('nextMeasure')" has-feedback>
            <a-textarea
              v-model:value="form.nextMeasure"
              :disabled="fieldDisabled('nextMeasure')"
            />
          </a-form-item>
        </a-col>
        <!--附件-->
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
              table-name="QMS_COMMON_ACTION_FEEDBACK"
              @afterUpload="afterUploadEvent"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { emits, useQmsCommonActionFeedbackForm } from './ts/QmsCommonActionFeedbackForm'; // 引入表单ts
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
  },
  mainId: {
    // 主表选中项的id
    type: String,
    default: ''
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
} = useQmsCommonActionFeedbackForm({
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
<style lang="less" scoped>
/deep/ .ant-input-number-group-addon{
  border: none;
}
</style>
