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
        layout="horizontal"
       >
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份">
              <a-input
                v-model:value="form.forYear"
                :maxLength="10"
                :auto-focus="true"
                placeholder="请输入所属年份"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="topCode" label="编号;2025-TOP-001">
              <a-input
                v-model:value="form.topCode"
                :maxLength="50"
                placeholder="请输入编号;2025-TOP-001"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemName" label="问题名称">
              <a-input
                v-model:value="form.problemName"
                :maxLength="256"
                placeholder="请输入问题名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserId" label="主管副总师ID">
              <a-input
                v-model:value="form.deputyChiefUserId"
                :maxLength="64"
                placeholder="请输入主管副总师ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserCode" label="主管副总师CODE">
              <a-input
                v-model:value="form.deputyChiefUserCode"
                :maxLength="10"
                placeholder="请输入主管副总师CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserName" label="主管副总师">
              <a-input
                v-model:value="form.deputyChiefUserName"
                :maxLength="128"
                placeholder="请输入主管副总师"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="主管部门ID">
              <a-input
                v-model:value="form.responsibleDeptId"
                :maxLength="64"
                placeholder="请输入主管部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="主管部门CODE">
              <a-input
                v-model:value="form.responsibleDeptCode"
                :maxLength="10"
                placeholder="请输入主管部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="主管部门">
              <a-input
                v-model:value="form.responsibleDeptName"
                :maxLength="128"
                placeholder="请输入主管部门"
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
            <a-form-item name="planCloseTime" label="归零节点">
              <a-date-picker
                v-model:value="form.planCloseTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择归零节点"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="userType" label="用户;空军/海军/其他">
              <a-input
                v-model:value="form.userType"
                :maxLength="10"
                placeholder="请输入用户;空军/海军/其他"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemStage" label="阶段;科研/批产">
              <a-input
                v-model:value="form.problemStage"
                :maxLength="10"
                placeholder="请输入阶段;科研/批产"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemLevel" label="级别;集团/所级">
              <a-input
                v-model:value="form.problemLevel"
                :maxLength="10"
                placeholder="请输入级别;集团/所级"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planCompletionRate" label="计划完成情况;以分数或进度条形式展现">
              <a-input
                v-model:value="form.planCompletionRate"
                :maxLength="10"
                placeholder="请输入计划完成情况;以分数或进度条形式展现"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="weeklyFeedbackRate" label="周反馈情况;分数或进度条形式展现">
              <a-input
                v-model:value="form.weeklyFeedbackRate"
                :maxLength="10"
                placeholder="请输入周反馈情况;分数或进度条形式展现"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="销号状态;攻关中/已销号">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入销号状态;攻关中/已销号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeTime" label="销号时间">
              <a-date-picker
                v-model:value="form.closeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择销号时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityProblemCode" label="质量问题编号;非必填，质量问题系统内的编号">
              <a-input
                v-model:value="form.qualityProblemCode"
                :maxLength="50"
                placeholder="请输入质量问题编号;非必填，质量问题系统内的编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemDesc" label="问题描述">
              <a-input
                v-model:value="form.problemDesc"
                :maxLength="2000"
                placeholder="请输入问题描述"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="currentProgress" label="当前工作进展">
              <a-input
                v-model:value="form.currentProgress"
                :maxLength="2000"
                placeholder="请输入当前工作进展"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="weeklyFeedbackStartTime" label="周反馈开始时间">
              <a-date-picker
                v-model:value="form.weeklyFeedbackStartTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择周反馈开始时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorId" label="质量主管ID">
              <a-input
                v-model:value="form.qualitySupervisorId"
                :maxLength="64"
                placeholder="请输入质量主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorCode" label="质量主管CODE">
              <a-input
                v-model:value="form.qualitySupervisorCode"
                :maxLength="10"
                placeholder="请输入质量主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorName" label="质量主管">
              <a-input
                v-model:value="form.qualitySupervisorName"
                :maxLength="50"
                placeholder="请输入质量主管"
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
                table-name="QMS_TOP10_PROBLEM"
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
import { useQmsTop10ProblemForm, emits } from './ts/QmsTop10ProblemForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
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
} = useQmsTop10ProblemForm({
  props: props,
  emit: emit
});
</script>


