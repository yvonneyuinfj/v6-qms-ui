<template>
  <AvicModal
    :visible="true"
    title="添加"
    width="80%"
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
        class="form-excel-style"
      >
        <a-row>
          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="noticeCode" label="通知单编号">-->
          <!--    <a-input-->
          <!--      v-model:value="form.noticeCode"-->
          <!--      :maxLength="50"-->
          <!--      placeholder="请输入通知单编号"-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->

          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审核单位">
              <a-input
                v-model:value="form.auditeeDeptName"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="chiefAuditorId" label="主审人员">
              <AvicCommonSelect
                v-model:value="form.chiefAuditorId"
                type="userSelect"
                placeholder="请选择主审人员"
                :default-show-value="form.chiefAuditorName"
                @callback="res => (form.chiefAuditorName = res.names)"
                :userSelectTabs="['dept']"
                :moreUserInfo="['no']"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditPurpose" label="审核目的">
              <a-textarea
                v-model:value="form.auditPurpose"
                :maxLength="512"
                placeholder="请输入审核目的(主审填写)"
                :auto-size="{ minRows: 2}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditBasis" label="依据的标准和文件">
              <a-textarea
                v-model:value="form.auditBasis"
                :maxLength="512"
                placeholder="请输入审核依据的标准和文件(主审填写)"
                :auto-size="{ minRows: 2}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="coveredProduct" label="审核覆盖产品">
              <a-textarea
                v-model:value="form.coveredProduct"
                :maxLength="512"
                placeholder="请输入审核覆盖产品(主审填写)"
                :auto-size="{ minRows: 2}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditTime" label="审核日期">
              <a-date-picker
                v-model:value="form.auditTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择审核日期(主审填写)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="durationDays" label="审核持续天数">
              <a-input-number
                v-model:value="form.durationDays"
                :min="1"
                :max="999"
                :precision="0"
                :step="1"
                placeholder="请输入审核持续天数"
              />
            </a-form-item>
          </a-col>

          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditorId" label="审核组成员">
              <AvicCommonSelect
                v-model:value="form.auditorId"
                type="userSelect"
                placeholder="请选择审核组成员(主审填写)"
                :default-show-value="form.auditorName"
                @callback="res => (form.auditorName = res.names)"
                :userSelectTabs="['dept']"
                :moreUserInfo="['no']"
                select-model="multi"
              />
            </a-form-item>
          </a-col>

          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditeeUserId" label="受审核方人员">
                <AvicCommonSelect
                  v-model:value="form.auditeeUserId"
                  type="userSelect"
                  placeholder="请选择受审核方人员"
                  :default-show-value="form.auditeeUserName"
                  @callback="res => (form.auditeeUserName = res.names)"
                  :userSelectTabs="['dept']"
                  :moreUserInfo="['no']"
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
                form-type="add"
                ref="uploadFile"
                :allow-download="true"
                :allow-preview="true"
                :allow-delete="true"
                :allow-update-secret-level="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_AUDIT_NOTICE"
                @afterUpload="afterUploadEvent"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="保存并启动流程" type="primary" :loading="loading" @click="saveAndStartProcess">保存并启动流程</a-button>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
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
  },
  planObj:{
    type: Object
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
  saveAndStartProcess,
  closeModal
} = useQmsAuditNoticeForm({
  props: props,
  emit: emit
});

</script>
