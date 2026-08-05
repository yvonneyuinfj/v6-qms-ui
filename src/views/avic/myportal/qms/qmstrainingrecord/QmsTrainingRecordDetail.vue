<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingNumber')">
          <a-form-item name="trainingNumber" label="培训编号" :rules="fieldRequired('trainingNumber')" has-feedback>
            <a-input
              v-model:value="form.trainingNumber"
              :auto-focus="true"
              :disabled="fieldDisabled('trainingNumber')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingTitle')">
          <a-form-item name="trainingTitle" label="培训题目" :rules="fieldRequired('trainingTitle')" has-feedback>
            <a-input
              v-model:value="form.trainingTitle"
              :disabled="fieldDisabled('trainingTitle')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingDate')">
          <a-form-item name="trainingDate" label="培训日期" :rules="fieldRequired('trainingDate')" has-feedback>
            <a-date-picker
              v-model:value="form.trainingDate"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('trainingDate')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingPositionType')">
          <a-form-item name="trainingPositionType" label="培训地点类型" :rules="fieldRequired('trainingPositionType')" has-feedback>
            <a-input
              v-model:value="form.trainingPositionType"
              :disabled="fieldDisabled('trainingPositionType')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingPosition')">
          <a-form-item name="trainingPosition" label="培训地点" :rules="fieldRequired('trainingPosition')" has-feedback>
            <a-input
              v-model:value="form.trainingPosition"
              :disabled="fieldDisabled('trainingPosition')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingId')">
          <a-form-item name="trainingId" label="培训教师ID" :rules="fieldRequired('trainingId')" has-feedback>
            <a-input
              v-model:value="form.trainingId"
              :disabled="fieldDisabled('trainingId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingTeacherCode')">
          <a-form-item name="trainingTeacherCode" label="培训教师职工号" :rules="fieldRequired('trainingTeacherCode')" has-feedback>
            <a-input
              v-model:value="form.trainingTeacherCode"
              :disabled="fieldDisabled('trainingTeacherCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('trainingTeacher')">
          <a-form-item name="trainingTeacher" label="培训教师" :rules="fieldRequired('trainingTeacher')" has-feedback>
            <a-input
              v-model:value="form.trainingTeacher"
              :disabled="fieldDisabled('trainingTeacher')"
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
            table-name="QMS_TRAINING_RECORD"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsTrainingRecordForm, emits } from './ts/QmsTrainingRecordForm'; // 引入表单ts
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
} = useQmsTrainingRecordForm({
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
