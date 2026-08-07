<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('planId')">
          <a-form-item name="planId" label="审核计划ID;关联年度计划" :rules="fieldRequired('planId')" has-feedback>
            <a-input
              v-model:value="form.planId"
              :auto-focus="true"
              :disabled="fieldDisabled('planId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('noticeId')">
          <a-form-item name="noticeId" label="审核通知单ID;关联已批准通知单" :rules="fieldRequired('noticeId')" has-feedback>
            <a-input
              v-model:value="form.noticeId"
              :disabled="fieldDisabled('noticeId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('recordId')">
          <a-form-item name="recordId" label="审核记录ID;关联审核记录" :rules="fieldRequired('recordId')" has-feedback>
            <a-input
              v-model:value="form.recordId"
              :disabled="fieldDisabled('recordId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('summaryCode')">
          <a-form-item name="summaryCode" label="综述编号;系统生成" :rules="fieldRequired('summaryCode')" has-feedback>
            <a-input
              v-model:value="form.summaryCode"
              :disabled="fieldDisabled('summaryCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptId')">
          <a-form-item name="auditeeDeptId" label="受审部门ID;通知单带入" :rules="fieldRequired('auditeeDeptId')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptId"
              :disabled="fieldDisabled('auditeeDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptCode')">
          <a-form-item name="auditeeDeptCode" label="受审部门CODE;通知单带入" :rules="fieldRequired('auditeeDeptCode')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptCode"
              :disabled="fieldDisabled('auditeeDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeDeptName')">
          <a-form-item name="auditeeDeptName" label="受审部门;通知单带入" :rules="fieldRequired('auditeeDeptName')" has-feedback>
            <a-input
              v-model:value="form.auditeeDeptName"
              :disabled="fieldDisabled('auditeeDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('executionDesc')">
          <a-form-item name="executionDesc" label="内审计划执行情况" :rules="fieldRequired('executionDesc')" has-feedback>
            <a-input
              v-model:value="form.executionDesc"
              :disabled="fieldDisabled('executionDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('documentSuitablilityEval')">
          <a-form-item name="documentSuitablilityEval" label="体系文件适宜性评价" :rules="fieldRequired('documentSuitablilityEval')" has-feedback>
            <a-input
              v-model:value="form.documentSuitablilityEval"
              :disabled="fieldDisabled('documentSuitablilityEval')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('systemOperationEval')">
          <a-form-item name="systemOperationEval" label="体系运行情况评价" :rules="fieldRequired('systemOperationEval')" has-feedback>
            <a-input
              v-model:value="form.systemOperationEval"
              :disabled="fieldDisabled('systemOperationEval')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('otherSituationDesc')">
          <a-form-item name="otherSituationDesc" label="其他情况说明" :rules="fieldRequired('otherSituationDesc')" has-feedback>
            <a-input
              v-model:value="form.otherSituationDesc"
              :disabled="fieldDisabled('otherSituationDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('status')">
          <a-form-item name="status" label="业务状态;草稿、审批中、整改中、已关闭等" :rules="fieldRequired('status')" has-feedback>
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('chiefAuditorId')">
          <a-form-item name="chiefAuditorId" label="主审ID" :rules="fieldRequired('chiefAuditorId')" has-feedback>
            <a-input
              v-model:value="form.chiefAuditorId"
              :disabled="fieldDisabled('chiefAuditorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('chiefAuditorCode')">
          <a-form-item name="chiefAuditorCode" label="主审CODE" :rules="fieldRequired('chiefAuditorCode')" has-feedback>
            <a-input
              v-model:value="form.chiefAuditorCode"
              :disabled="fieldDisabled('chiefAuditorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('chiefAuditorName')">
          <a-form-item name="chiefAuditorName" label="主审" :rules="fieldRequired('chiefAuditorName')" has-feedback>
            <a-input
              v-model:value="form.chiefAuditorName"
              :disabled="fieldDisabled('chiefAuditorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('evaluationSupervisorId')">
          <a-form-item name="evaluationSupervisorId" label="审核评价主管ID" :rules="fieldRequired('evaluationSupervisorId')" has-feedback>
            <a-input
              v-model:value="form.evaluationSupervisorId"
              :disabled="fieldDisabled('evaluationSupervisorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('evaluationSupervisorCode')">
          <a-form-item name="evaluationSupervisorCode" label="审核评价主管CODE" :rules="fieldRequired('evaluationSupervisorCode')" has-feedback>
            <a-input
              v-model:value="form.evaluationSupervisorCode"
              :disabled="fieldDisabled('evaluationSupervisorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('evaluationSupervisorName')">
          <a-form-item name="evaluationSupervisorName" label="审核评价主管NAME" :rules="fieldRequired('evaluationSupervisorName')" has-feedback>
            <a-input
              v-model:value="form.evaluationSupervisorName"
              :disabled="fieldDisabled('evaluationSupervisorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditLeaderId')">
          <a-form-item name="auditLeaderId" label="审核组长ID" :rules="fieldRequired('auditLeaderId')" has-feedback>
            <a-input
              v-model:value="form.auditLeaderId"
              :disabled="fieldDisabled('auditLeaderId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditLeaderCode')">
          <a-form-item name="auditLeaderCode" label="审核组长CODE" :rules="fieldRequired('auditLeaderCode')" has-feedback>
            <a-input
              v-model:value="form.auditLeaderCode"
              :disabled="fieldDisabled('auditLeaderCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditLeaderName')">
          <a-form-item name="auditLeaderName" label="审核组长" :rules="fieldRequired('auditLeaderName')" has-feedback>
            <a-input
              v-model:value="form.auditLeaderName"
              :disabled="fieldDisabled('auditLeaderName')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('parentId')">
          <a-form-item name="parentId" label="父节点ID" :rules="fieldRequired('parentId')" has-feedback>
            <a-input
              v-model:value="form.parentId"
              :disabled="fieldDisabled('parentId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('treeSort')">
          <a-form-item name="treeSort" label="本级排序" :rules="fieldRequired('treeSort')" has-feedback>
            <a-input-number
              v-model:value="form.treeSort"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('treeSort')"
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
import { useQmsAuditSummaryForm, emits } from './ts/QmsAuditSummaryForm'; // 引入表单ts
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
