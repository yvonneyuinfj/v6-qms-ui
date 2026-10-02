<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
      :colon="false"
    >
      <a-row>
        <!--受审核部门-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptName')">
          <a-form-item name="auditeeDeptName" label="受审核部门" :rules="fieldRequired('auditeeDeptName')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptName"
              :disabled="fieldDisabled('auditeeDeptName')"
            />
          </a-form-item>
        </a-col>
        <!--主审人员-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('chiefAuditorName')">
          <a-form-item name="chiefAuditorName" label="主审人员" :rules="fieldRequired('chiefAuditorName')" has-feedback>
            <a-input
              v-model:value="form.chiefAuditorName"
              :disabled="fieldDisabled('chiefAuditorName')"
            />
          </a-form-item>
        </a-col>
        <!--审核条款-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditClause')">
          <a-form-item name="auditClause" label="审核条款" :rules="fieldRequired('auditClause')" has-feedback>
            <a-input
              v-model:value="form.auditClause"
              :disabled="fieldDisabled('auditClause')"
            />
          </a-form-item>
        </a-col>
        <!--型号/项目-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('modelProject')">
          <a-form-item name="modelProject" label="型号/项目" :rules="fieldRequired('modelProject')" has-feedback>
            <a-input
              v-model:value="form.modelProject"
              :disabled="fieldDisabled('modelProject')"
            />
          </a-form-item>
        </a-col>
        <!--审核目的-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditPurpose')">
          <a-form-item name="auditPurpose" label="审核目的" :rules="fieldRequired('auditPurpose')" has-feedback>
            <a-textarea
              v-model:value="form.auditPurpose"
              :disabled="fieldDisabled('auditPurpose')"
            />
          </a-form-item>
        </a-col>
        <!--依据的标准和文件-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditBasis')">
          <a-form-item name="auditBasis" label="审核依据的标准和文件" :rules="fieldRequired('auditBasis')" has-feedback>
            <a-input
              v-model:value="form.auditBasis"
              :disabled="fieldDisabled('auditBasis')"
            />
          </a-form-item>
        </a-col>
        <!--审核覆盖产品-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('coveredProduct')">
          <a-form-item name="coveredProduct" label="审核覆盖产品" :rules="fieldRequired('coveredProduct')" has-feedback>
            <a-input
              v-model:value="form.coveredProduct"
              :disabled="fieldDisabled('coveredProduct')"
            />
          </a-form-item>
        </a-col>
        <!--审核日期-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditTime')">
          <a-form-item name="auditTime" label="审核日期" :rules="fieldRequired('auditTime')" has-feedback>
            <a-date-picker
              v-model:value="form.auditTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('auditTime')"
            />
          </a-form-item>
        </a-col>
        <!--持续审核天数-->
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('durationDays')">
          <a-form-item name="durationDays" label="审核持续天数" :rules="fieldRequired('durationDays')" has-feedback>
            <a-input-number
              v-model:value="form.durationDays"
              :min="0"
              :max="999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('durationDays')"
            />
          </a-form-item>
        </a-col>
        <!--审核组成员-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditorName')">
          <a-form-item name="auditorName" label="审核组成员" :rules="fieldRequired('auditorName')" has-feedback>
            <AvicCommonSelect
              v-model:value="form.auditorId"
              type="userSelect"
              placeholder="请选择审核组成员"
              :default-show-value="form.auditorName"
              @callback="res => (form.auditorName = res.names)"
              :userSelectTabs="['dept']"

              select-model="multi"
              :disabled="fieldDisabled('auditorName')"
            />
          </a-form-item>
        </a-col>
        <!--陪同人员-->
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditeeUserId')">
          <a-form-item name="auditeeUserId" label="陪同人员" :rules="fieldRequired('auditeeUserId')" has-feedback>
            <AvicCommonSelect
              v-model:value="form.auditeeUserId"
              type="userSelect"
              placeholder="请选择陪同人员"
              :default-show-value="form.auditeeUserName"
              @callback="res => (form.auditeeUserName = res.names)"
              :userSelectTabs="['dept']"
              select-model="multi"
              :disabled="fieldDisabled('auditeeUserId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('secretLevel')">
          <a-form-item name="secretLevel" label="密级">
            <a-select
              v-model:value="form.secretLevel"
              :get-popup-container="triggerNode => triggerNode.parentNode"
              option-filter-prop="children"
              :show-search="true"
              :allow-clear="true"
              disabled
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
              table-name="QMS_AUDIT_NOTICE"
              @afterUpload="afterUploadEvent"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsAuditNoticeForm, emits } from './ts/QmsAuditNoticeForm'; // 引入表单ts
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
} = useQmsAuditNoticeForm({
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
