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
            <a-form-item name="feedbackCode" label="反哺编号">
              <a-input
                v-model:value="form.feedbackCode"
                :maxLength="128"
                :auto-focus="true"
                placeholder="请输入反哺编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份">
              <a-input
                v-model:value="form.forYear"
                :maxLength="10"
                placeholder="请输入所属年份"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceProblemId" label="来源问题ID">
              <a-input
                v-model:value="form.sourceProblemId"
                :maxLength="64"
                placeholder="请输入来源问题ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceUpdateTime" label="来源更新时间">
              <a-date-picker
                v-model:value="form.sourceUpdateTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择来源更新时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="syncTime" label="最近同步时间">
              <a-date-picker
                v-model:value="form.syncTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择最近同步时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceSystemCode" label="来源系统CODE">
              <a-input
                v-model:value="form.sourceSystemCode"
                :maxLength="50"
                placeholder="请输入来源系统CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCode" label="质量问题编号">
              <a-input
                v-model:value="form.problemCode"
                :maxLength="50"
                placeholder="请输入质量问题编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceStatus" label="来源问题状态">
              <a-input
                v-model:value="form.sourceStatus"
                :maxLength="10"
                placeholder="请输入来源问题状态"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemName" label="问题名称">
              <a-input
                v-model:value="form.problemName"
                :maxLength="128"
                placeholder="请输入问题名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemType" label="问题类型">
              <a-input
                v-model:value="form.problemType"
                :maxLength="50"
                placeholder="请输入问题类型"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCategory" label="问题分类">
              <a-input
                v-model:value="form.problemCategory"
                :maxLength="50"
                placeholder="请输入问题分类"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="型号">
              <a-input
                v-model:value="form.model"
                :maxLength="128"
                placeholder="请输入型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="occurrenceTime" label="发生时间">
              <a-date-picker
                v-model:value="form.occurrenceTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择发生时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeTime" label="归零时间">
              <a-date-picker
                v-model:value="form.closeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffId" label="责任人ID">
              <a-input
                v-model:value="form.responsibleStaffId"
                :maxLength="64"
                placeholder="请输入责任人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffCode" label="责任人CODE">
              <a-input
                v-model:value="form.responsibleStaffCode"
                :maxLength="10"
                placeholder="请输入责任人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffName" label="责任人">
              <a-input
                v-model:value="form.responsibleStaffName"
                :maxLength="50"
                placeholder="请输入责任人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="责任部门ID">
              <a-input
                v-model:value="form.responsibleDeptId"
                :maxLength="64"
                placeholder="请输入责任部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="责任部门CODE">
              <a-input
                v-model:value="form.responsibleDeptCode"
                :maxLength="10"
                placeholder="请输入责任部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="责任部门">
              <a-input
                v-model:value="form.responsibleDeptName"
                :maxLength="128"
                placeholder="请输入责任部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeReportId" label="归零报告ID">
              <a-input
                v-model:value="form.closeReportId"
                :maxLength="64"
                placeholder="请输入归零报告ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeReportCode" label="归零报告编号">
              <a-input
                v-model:value="form.closeReportCode"
                :maxLength="50"
                placeholder="请输入归零报告编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeReportName" label="归零报告名称">
              <a-input
                v-model:value="form.closeReportName"
                :maxLength="128"
                placeholder="请输入归零报告名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="causeMechanism" label="问题原因和机理">
              <a-input
                v-model:value="form.causeMechanism"
                :maxLength="2000"
                placeholder="请输入问题原因和机理"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="improvementMeasure" label="改进措施">
              <a-input
                v-model:value="form.improvementMeasure"
                :maxLength="2000"
                placeholder="请输入改进措施"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackDimension" label="反哺维度">
              <a-input
                v-model:value="form.feedbackDimension"
                :maxLength="256"
                placeholder="请输入反哺维度"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynStartFeedback" label="是否启用反哺">
              <a-input
                v-model:value="form.ynStartFeedback"
                :maxLength="2"
                placeholder="请输入是否启用反哺"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackDesc" label="反哺意见说明">
              <a-input
                v-model:value="form.feedbackDesc"
                :maxLength="2000"
                placeholder="请输入反哺意见说明"
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
            <a-form-item name="submitTime" label="提交时间">
              <a-date-picker
                v-model:value="form.submitTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择提交时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completeTime" label="完成时间">
              <a-date-picker
                v-model:value="form.completeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择完成时间"
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
                table-name="QMS_QUALITY_PROBLEM_FEEDBACK"
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
import { useQmsQualityProblemFeedbackForm, emits } from './ts/QmsQualityProblemFeedbackForm'; // 引入表单ts
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
} = useQmsQualityProblemFeedbackForm({
  props: props,
  emit: emit
});
</script>
