<template>
  <AvicModal
    :visible="true"
    title="编辑"
    width="960px"
    height="520px"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planId" label="审核计划ID">
              <a-input
                v-model:value="form.planId"
                :maxLength="64"
                :auto-focus="true"
                placeholder="请输入审核计划ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="noticeCode" label="通知单编号;系统生成">
              <a-input
                v-model:value="form.noticeCode"
                :maxLength="50"
                placeholder="请输入通知单编号;系统生成"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="noticeName" label="通知单名称">
              <a-input
                v-model:value="form.noticeName"
                :maxLength="50"
                placeholder="请输入通知单名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditPurpose" label="审核目的;主审填写">
              <a-input
                v-model:value="form.auditPurpose"
                :maxLength="512"
                placeholder="请输入审核目的;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditBasis" label="审核依据的标准和文件;主审填写">
              <a-input
                v-model:value="form.auditBasis"
                :maxLength="512"
                placeholder="请输入审核依据的标准和文件;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditClause" label="审核条款">
              <a-input
                v-model:value="form.auditClause"
                :maxLength="512"
                placeholder="请输入审核条款"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelProject" label="型号/项目">
              <a-input
                v-model:value="form.modelProject"
                :maxLength="512"
                placeholder="请输入型号/项目"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditScope" label="审核范围">
              <a-input
                v-model:value="form.auditScope"
                :maxLength="512"
                placeholder="请输入审核范围"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="coveredProduct" label="审核覆盖产品;主审填写">
              <a-input
                v-model:value="form.coveredProduct"
                :maxLength="512"
                placeholder="请输入审核覆盖产品;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditTime" label="审核日期;主审填写">
              <a-date-picker
                v-model:value="form.auditTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择审核日期;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="durationDays" label="审核持续天数">
              <a-input-number
                v-model:value="form.durationDays"
                :min="0"
                :max="999"
                :precision="0"
                :step="1"
                placeholder="请输入审核持续天数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptId" label="受审部门ID">
              <a-input
                v-model:value="form.auditeeDeptId"
                :maxLength="64"
                placeholder="请输入受审部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptCode" label="受审部门CODE">
              <a-input
                v-model:value="form.auditeeDeptCode"
                :maxLength="10"
                placeholder="请输入受审部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审部门">
              <a-input
                v-model:value="form.auditeeDeptName"
                :maxLength="50"
                placeholder="请输入受审部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeLeaderId" label="单位负责人ID">
              <a-input
                v-model:value="form.auditeeLeaderId"
                :maxLength="64"
                placeholder="请输入单位负责人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeLeaderCode" label="单位负责人CODE">
              <a-input
                v-model:value="form.auditeeLeaderCode"
                :maxLength="10"
                placeholder="请输入单位负责人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeLeaderName" label="单位负责人">
              <a-input
                v-model:value="form.auditeeLeaderName"
                :maxLength="50"
                placeholder="请输入单位负责人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorId" label="审核员ID;主审填写">
              <a-input
                v-model:value="form.auditorId"
                :maxLength="512"
                placeholder="请输入审核员ID;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorCode" label="审核员CODE;主审填写">
              <a-input
                v-model:value="form.auditorCode"
                :maxLength="200"
                placeholder="请输入审核员CODE;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorName" label="审核员;主审填写">
              <a-input
                v-model:value="form.auditorName"
                :maxLength="200"
                placeholder="请输入审核员;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="chiefAuditorId" label="主审ID">
              <a-input
                v-model:value="form.chiefAuditorId"
                :maxLength="64"
                placeholder="请输入主审ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="chiefAuditorCode" label="主审CODE">
              <a-input
                v-model:value="form.chiefAuditorCode"
                :maxLength="10"
                placeholder="请输入主审CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="chiefAuditorName" label="主审">
              <a-input
                v-model:value="form.chiefAuditorName"
                :maxLength="50"
                placeholder="请输入主审"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="evaluationSupervisorId" label="审核评价主管ID">
              <a-input
                v-model:value="form.evaluationSupervisorId"
                :maxLength="64"
                placeholder="请输入审核评价主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="evaluationSupervisorCode" label="审核评价主管CODE">
              <a-input
                v-model:value="form.evaluationSupervisorCode"
                :maxLength="10"
                placeholder="请输入审核评价主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="evaluationSupervisorName" label="审核评价主管NAME">
              <a-input
                v-model:value="form.evaluationSupervisorName"
                :maxLength="50"
                placeholder="请输入审核评价主管NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditLeaderId" label="审核组长ID">
              <a-input
                v-model:value="form.auditLeaderId"
                :maxLength="64"
                placeholder="请输入审核组长ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditLeaderCode" label="审核组长CODE">
              <a-input
                v-model:value="form.auditLeaderCode"
                :maxLength="10"
                placeholder="请输入审核组长CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditLeaderName" label="审核组长">
              <a-input
                v-model:value="form.auditLeaderName"
                :maxLength="50"
                placeholder="请输入审核组长"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserId" label="受审方人员ID">
              <a-input
                v-model:value="form.auditeeUserId"
                :maxLength="512"
                placeholder="请输入受审方人员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserCode" label="受审方人员CODE">
              <a-input
                v-model:value="form.auditeeUserCode"
                :maxLength="200"
                placeholder="请输入受审方人员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserName" label="受审方人员">
              <a-input
                v-model:value="form.auditeeUserName"
                :maxLength="200"
                placeholder="请输入受审方人员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="业务状态">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入业务状态"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processInstanceId" label="流程实例ID">
              <a-input
                v-model:value="form.processInstanceId"
                :maxLength="64"
                placeholder="请输入流程实例ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processStatus" label="流程状态">
              <a-input
                v-model:value="form.processStatus"
                :maxLength="10"
                placeholder="请输入流程状态"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynDeleted" label="是否已删除">
              <a-input
                v-model:value="form.ynDeleted"
                :maxLength="2"
                placeholder="请输入是否已删除"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="remark" label="备注">
              <a-input
                v-model:value="form.remark"
                :maxLength="2000"
                placeholder="请输入备注"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="orderBy" label="排序">
              <a-input-number
                v-model:value="form.orderBy"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入排序"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="parentId" label="父节点ID">
              <a-input
                v-model:value="form.parentId"
                :maxLength="64"
                placeholder="请输入父节点ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="treeSort" label="本级排序" has-feedback>
              <a-input-number
                v-model:value="form.treeSort"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入本级排序"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item
              label="附件"
            >
              <AvicUploader
                element-id="1"
                form-type="edit"
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
      <a-button title="保存" type="primary" :loading="loading" @click="saveForm">保存</a-button>
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
  closeModal
} = useQmsAuditNoticeForm({
  props: props,
  emit: emit
});
</script>
