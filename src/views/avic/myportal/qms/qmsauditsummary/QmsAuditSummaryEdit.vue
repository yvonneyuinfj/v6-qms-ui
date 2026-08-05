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
            <a-form-item name="planId" label="审核计划ID;关联年度计划">
              <a-input
                v-model:value="form.planId"
                :maxLength="64"
                :auto-focus="true"
                placeholder="请输入审核计划ID;关联年度计划"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="noticeId" label="审核通知单ID;关联已批准通知单">
              <a-input
                v-model:value="form.noticeId"
                :maxLength="64"
                placeholder="请输入审核通知单ID;关联已批准通知单"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="recordId" label="审核记录ID;关联审核记录">
              <a-input
                v-model:value="form.recordId"
                :maxLength="64"
                placeholder="请输入审核记录ID;关联审核记录"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="summaryCode" label="综述编号;系统生成">
              <a-input
                v-model:value="form.summaryCode"
                :maxLength="64"
                placeholder="请输入综述编号;系统生成"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptId" label="受审部门ID;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptId"
                :maxLength="64"
                placeholder="请输入受审部门ID;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptCode" label="受审部门CODE;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptCode"
                :maxLength="10"
                placeholder="请输入受审部门CODE;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审部门;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptName"
                :maxLength="50"
                placeholder="请输入受审部门;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="executionDesc" label="内审计划执行情况">
              <a-input
                v-model:value="form.executionDesc"
                :maxLength="1024"
                placeholder="请输入内审计划执行情况"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="documentSuitablilityEval" label="体系文件适宜性评价">
              <a-input
                v-model:value="form.documentSuitablilityEval"
                :maxLength="1024"
                placeholder="请输入体系文件适宜性评价"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="systemOperationEval" label="体系运行情况评价">
              <a-input
                v-model:value="form.systemOperationEval"
                :maxLength="1024"
                placeholder="请输入体系运行情况评价"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="otherSituationDesc" label="其他情况说明">
              <a-input
                v-model:value="form.otherSituationDesc"
                :maxLength="1024"
                placeholder="请输入其他情况说明"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="业务状态;草稿、审批中、整改中、已关闭等">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入业务状态;草稿、审批中、整改中、已关闭等"
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
                table-name="QMS_AUDIT_SUMMARY"
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
  rules,
  layout,
  colLayout,
  loading,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  saveForm,
  closeModal
} = useQmsAuditSummaryForm({
  props: props,
  emit: emit
});
</script>
