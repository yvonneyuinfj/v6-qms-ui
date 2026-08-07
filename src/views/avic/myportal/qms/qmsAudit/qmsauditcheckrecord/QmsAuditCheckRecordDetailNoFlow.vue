QmsAuditCheckRecordEdit.vue<template>
  <AvicModal
    :visible="true"
    title="检查单"
    width="95%"
    height="80%"
    :centered="true"
    @cancel="closeModal"
  >
    <a-spin :spinning="loading">
      <a-form
        ref="formRef"
        :model="form"
        :rules="rules"
        v-bind="layout"
        layout="horizontal"
        class="form-excel-style"
      >
        <a-row :gutter="0">
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审部门">
              <a-input
                v-model:value="form.auditeeDeptName"
                disabled
              />
            </a-form-item>
          </a-col>

          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditTime" label="审核时间">
              <a-date-picker
                v-model:value="form.auditTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择审核时间"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorName" label="审核员">
              <a-input
                v-model:value="form.auditorName"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserName" label="陪同人员">
              <a-input
                v-model:value="form.auditeeUserName"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditClause" label="标准条款">
              <a-input
                v-model:value="form.auditClause"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="secretLevel" label="密级" has-feedback>
              <a-select
                v-model:value="form.secretLevel"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                :show-search="true"
                :allow-clear="true"
                placeholder="请选择密级"
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
            <a-form-item
              label="附件"
            >
              <AvicUploader
                element-id="1"
                form-type="detail"
                ref="uploadFile"
                :allow-download="true"
                :allow-add="false"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_AUDIT_CHECK_RECORD"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <QmsAuditCheckDetailEdit ref="qmsAuditCheckDetailEdit" :mainId="formId || form.id" :read-only="true"/>
    </a-spin>
    <template #footer>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
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
  rules,
  layout,
  colLayout,
  loading,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  saveForm,
  closeModal,
  qmsAuditCheckDetailEdit
} = useQmsAuditCheckRecordForm({
  props: props,
  emit: emit
});
</script>
