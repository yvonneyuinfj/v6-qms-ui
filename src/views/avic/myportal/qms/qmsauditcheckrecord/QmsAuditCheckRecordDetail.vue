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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('recordCode')">
          <a-form-item name="recordCode" label="审核记录编号;系统生成" :rules="fieldRequired('recordCode')" has-feedback>
            <a-input
              v-model:value="form.recordCode"
              :disabled="fieldDisabled('recordCode')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditTime')">
          <a-form-item name="auditTime" label="审核时间;通知单带入" :rules="fieldRequired('auditTime')" has-feedback>
            <a-date-picker
              v-model:value="form.auditTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('auditTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditorId')">
          <a-form-item name="auditorId" label="审核员ID" :rules="fieldRequired('auditorId')" has-feedback>
            <a-input
              v-model:value="form.auditorId"
              :disabled="fieldDisabled('auditorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditorCode')">
          <a-form-item name="auditorCode" label="审核员CODE" :rules="fieldRequired('auditorCode')" has-feedback>
            <a-input
              v-model:value="form.auditorCode"
              :disabled="fieldDisabled('auditorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditorName')">
          <a-form-item name="auditorName" label="审核员" :rules="fieldRequired('auditorName')" has-feedback>
            <a-input
              v-model:value="form.auditorName"
              :disabled="fieldDisabled('auditorName')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeUserId')">
          <a-form-item name="auditeeUserId" label="受审方人员ID;通知单带入" :rules="fieldRequired('auditeeUserId')" has-feedback>
            <a-input
              v-model:value="form.auditeeUserId"
              :disabled="fieldDisabled('auditeeUserId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeUserCode')">
          <a-form-item name="auditeeUserCode" label="受审方人员CODE;通知单带入" :rules="fieldRequired('auditeeUserCode')" has-feedback>
            <a-input
              v-model:value="form.auditeeUserCode"
              :disabled="fieldDisabled('auditeeUserCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('auditeeUserName')">
          <a-form-item name="auditeeUserName" label="受审方人员;通知单带入" :rules="fieldRequired('auditeeUserName')" has-feedback>
            <a-input
              v-model:value="form.auditeeUserName"
              :disabled="fieldDisabled('auditeeUserName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('detailCount')">
          <a-form-item name="detailCount" label="检查明细数量;自动统计" :rules="fieldRequired('detailCount')" has-feedback>
            <a-input-number
              v-model:value="form.detailCount"
              :min="0"
              :max="999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('detailCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ncDetailCount')">
          <a-form-item name="ncDetailCount" label="不符合项明细数量;自动统计" :rules="fieldRequired('ncDetailCount')" has-feedback>
            <a-input-number
              v-model:value="form.ncDetailCount"
              :min="0"
              :max="999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('ncDetailCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('adviceDetailCount')">
          <a-form-item name="adviceDetailCount" label="有建议明细数量;自动统计" :rules="fieldRequired('adviceDetailCount')" has-feedback>
            <a-input-number
              v-model:value="form.adviceDetailCount"
              :min="0"
              :max="999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('adviceDetailCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('status')">
          <a-form-item name="status" label="业务状态;草稿，审批中，已批准，已退回，作废" :rules="fieldRequired('status')" has-feedback>
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
import QmsAuditCheckDetailEdit from '@/views/avic/myportal/qms/qmsauditcheckdetail/QmsAuditCheckDetailEdit.vue'; // 引入子表组件

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


