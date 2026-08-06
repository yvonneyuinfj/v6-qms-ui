<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyCode')">
          <a-form-item name="applyCode" label="申请编号" :rules="fieldRequired('applyCode')" has-feedback>
            <a-input
              v-model:value="form.applyCode"
              :auto-focus="true"
              :disabled="fieldDisabled('applyCode')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualificationGroupId')">
          <a-form-item name="qualificationGroupId" label="资质归组ID" :rules="fieldRequired('qualificationGroupId')" has-feedback>
            <a-input
              v-model:value="form.qualificationGroupId"
              :disabled="fieldDisabled('qualificationGroupId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualificationTypeCode')">
          <a-form-item name="qualificationTypeCode" label="资质类型CODE" :rules="fieldRequired('qualificationTypeCode')" has-feedback>
            <a-input
              v-model:value="form.qualificationTypeCode"
              :disabled="fieldDisabled('qualificationTypeCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualificationTypeName')">
          <a-form-item name="qualificationTypeName" label="资质类型名称" :rules="fieldRequired('qualificationTypeName')" has-feedback>
            <a-input
              v-model:value="form.qualificationTypeName"
              :disabled="fieldDisabled('qualificationTypeName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('productName')">
          <a-form-item name="productName" label="产品名称" :rules="fieldRequired('productName')" has-feedback>
            <a-input
              v-model:value="form.productName"
              :disabled="fieldDisabled('productName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ugencyLevel')">
          <a-form-item name="ugencyLevel" label="紧急度" :rules="fieldRequired('ugencyLevel')" has-feedback>
            <a-input
              v-model:value="form.ugencyLevel"
              :disabled="fieldDisabled('ugencyLevel')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('capabilityDesc')">
          <a-form-item name="capabilityDesc" label="能力情况" :rules="fieldRequired('capabilityDesc')" has-feedback>
            <a-input
              v-model:value="form.capabilityDesc"
              :disabled="fieldDisabled('capabilityDesc')"
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
            table-name="QMS_MILITARY_QUAL_ADD_APPLY"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsMilitaryQualAddApplyForm, emits } from './ts/QmsMilitaryQualAddApplyForm'; // 引入表单ts
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
} = useQmsMilitaryQualAddApplyForm({
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
