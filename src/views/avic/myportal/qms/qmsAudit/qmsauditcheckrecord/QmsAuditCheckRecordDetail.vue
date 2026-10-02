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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptName')">
          <a-form-item name="auditeeDeptName" label="受审核部门" :rules="fieldRequired('auditeeDeptName')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptName"
              disabled
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditTime')">
          <a-form-item name="auditTime" label="审核时间" :rules="fieldRequired('auditTime')" has-feedback>
            <a-date-picker
              v-model:value="form.auditTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              disabled
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditorName')">
          <a-form-item name="auditorName" label="审核人员" :rules="fieldRequired('auditorName')" has-feedback>
            <a-input
              v-model:value="form.auditorName"
              :disabled="fieldDisabled('auditorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeUserName')">
          <a-form-item name="auditeeUserName" label="陪同人员" :rules="fieldRequired('auditeeUserName')" has-feedback>
            <a-input
              v-model:value="form.auditeeUserName"
              :disabled="fieldDisabled('auditeeUserName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols2" v-if="fieldVisible('auditClause')">
          <a-form-item name="auditClause" label="标准条款" :rules="fieldRequired('auditClause')" >
            <a-input
              v-model:value="form.auditClause"
              disabled
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
            table-name="QMS_AUDIT_CHECK_RECORD"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
    <QmsAuditCheckDetailEdit
      v-if="fieldVisible('QMS_AUDIT_CHECK_DETAIL')"
      ref="qmsAuditCheckDetailEdit"
      :mainId="formId || form.id"
      :bpmInstanceObject="bpmInstanceObject"
      :bpmParams="bpmParams"
      :read-only="true"
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
import { useQmsAuditCheckRecordForm, emits } from './ts/QmsAuditCheckRecordForm'; // 引入表单ts
import QmsAuditCheckDetailEdit from '@/views/avic/myportal/qms/qmsAudit/qmsauditcheckdetail/QmsAuditCheckDetailRowEdit.vue'; // 引入子表组件

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
  qmsAuditCheckDetailEdit,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsAuditCheckRecordForm({
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


