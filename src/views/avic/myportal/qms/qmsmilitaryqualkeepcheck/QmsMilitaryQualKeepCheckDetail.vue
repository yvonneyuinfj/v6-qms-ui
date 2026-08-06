<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('forYear')">
          <a-form-item name="forYear" label="所属年份" :rules="fieldRequired('forYear')" has-feedback>
            <a-input
              v-model:value="form.forYear"
              :auto-focus="true"
              :disabled="fieldDisabled('forYear')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('startTime')">
          <a-form-item name="startTime" label="开始时间" :rules="fieldRequired('startTime')" has-feedback>
            <a-date-picker
              v-model:value="form.startTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('startTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('endTime')">
          <a-form-item name="endTime" label="结束时间" :rules="fieldRequired('endTime')" has-feedback>
            <a-date-picker
              v-model:value="form.endTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('endTime')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('itemCode')">
          <a-form-item name="itemCode" label="自查内容编码" :rules="fieldRequired('itemCode')" has-feedback>
            <a-input
              v-model:value="form.itemCode"
              :disabled="fieldDisabled('itemCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('checkContent')">
          <a-form-item name="checkContent" label="自查内容" :rules="fieldRequired('checkContent')" has-feedback>
            <a-input
              v-model:value="form.checkContent"
              :disabled="fieldDisabled('checkContent')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('checkConclusion')">
          <a-form-item name="checkConclusion" label="自查结论;正常/异常" :rules="fieldRequired('checkConclusion')" has-feedback>
            <a-input
              v-model:value="form.checkConclusion"
              :disabled="fieldDisabled('checkConclusion')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('matterDesc')">
          <a-form-item name="matterDesc" label="事项说明;结论为“异常”时必填" :rules="fieldRequired('matterDesc')" has-feedback>
            <a-input
              v-model:value="form.matterDesc"
              :disabled="fieldDisabled('matterDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('periodCode')">
          <a-form-item name="periodCode" label="自查周期CODE" :rules="fieldRequired('periodCode')" has-feedback>
            <a-input
              v-model:value="form.periodCode"
              :disabled="fieldDisabled('periodCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('itemNo')">
          <a-form-item name="itemNo" label="显示序号" :rules="fieldRequired('itemNo')" has-feedback>
            <a-input
              v-model:value="form.itemNo"
              :disabled="fieldDisabled('itemNo')"
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
            table-name="QMS_MILITARY_QUAL_KEEP_CHECK"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { useQmsMilitaryQualKeepCheckForm, emits } from './ts/QmsMilitaryQualKeepCheckForm'; // 引入表单ts
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
} = useQmsMilitaryQualKeepCheckForm({
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
