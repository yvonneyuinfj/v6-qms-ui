<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
    >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptName')">
          <a-form-item name="auditeeDeptName" label="受审核部门" :rules="fieldRequired('auditeeDeptName')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptName"
              :disabled="fieldDisabled('auditeeDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('summaryCode')">
          <a-form-item name="summaryCode" label="综述编号" :rules="fieldRequired('summaryCode')" has-feedback>
            <a-input
              v-model:value="form.summaryCode"
              :disabled="fieldDisabled('summaryCode')"
            />
          </a-form-item>
        </a-col>

        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('executionDesc')">
          <a-form-item name="executionDesc" label="内审计划执行情况" :rules="fieldRequired('executionDesc')" has-feedback>
            <a-textarea
              v-model:value="form.executionDesc"
              :auto-size="{ minRows: 3}"
              :disabled="fieldDisabled('executionDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('documentSuitablilityEval')">
          <a-form-item name="documentSuitablilityEval" label="体系文件适宜性评价"
                       :rules="fieldRequired('documentSuitablilityEval')" has-feedback>
            <a-textarea
              v-model:value="form.documentSuitablilityEval"
              :auto-size="{ minRows: 3}"
              :disabled="fieldDisabled('documentSuitablilityEval')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('systemOperationEval')">
          <a-form-item name="systemOperationEval" label="体系运行情况评价" :rules="fieldRequired('systemOperationEval')"
                       has-feedback>
            <a-textarea
              v-model:value="form.systemOperationEval"
              :disabled="fieldDisabled('systemOperationEval')"
              :auto-size="{ minRows: 3}"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('otherSituationDesc')">
          <a-form-item name="otherSituationDesc" label="其他情况说明" :rules="fieldRequired('otherSituationDesc')"
                       has-feedback>
            <a-textarea
              v-model:value="form.otherSituationDesc"
              :disabled="fieldDisabled('otherSituationDesc')"
              :auto-size="{ minRows: 3}"
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
              table-name="QMS_AUDIT_SUMMARY"
              @afterUpload="afterUploadEvent"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { emits, useQmsAuditSummaryForm } from './ts/QmsAuditSummaryForm'; // 引入表单ts
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
} = useQmsAuditSummaryForm({
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
