<template>
  <AvicModal
    :visible="true"
    title="详情"
    width="960px"
    height="520px"
    :centered="true"
    @cancel="closeModal"
  >
    <a-spin :spinning="loading">
      <a-form
        ref="formRef"
        :model="form"
        v-bind="layout"
        layout="horizontal"
       >
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份">
              <a-input v-model:value="form.forYear" :auto-focus="true" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="topCode" label="编号;2025-TOP-001">
              <a-input v-model:value="form.topCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemName" label="问题名称">
              <a-input v-model:value="form.problemName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserId" label="主管副总师ID">
              <a-input v-model:value="form.deputyChiefUserId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserCode" label="主管副总师CODE">
              <a-input v-model:value="form.deputyChiefUserCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deputyChiefUserName" label="主管副总师">
              <a-input v-model:value="form.deputyChiefUserName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="主管部门ID">
              <a-input v-model:value="form.responsibleDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="主管部门CODE">
              <a-input v-model:value="form.responsibleDeptCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="主管部门">
              <a-input v-model:value="form.responsibleDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffId" label="责任人ID">
              <a-input v-model:value="form.responsibleStaffId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffCode" label="责任人CODE">
              <a-input v-model:value="form.responsibleStaffCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffName" label="责任人">
              <a-input v-model:value="form.responsibleStaffName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planCloseTime" label="归零节点">
              <a-date-picker
                v-model:value="form.planCloseTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="userType" label="用户;空军/海军/其他">
              <a-input v-model:value="form.userType" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemStage" label="阶段;科研/批产">
              <a-input v-model:value="form.problemStage" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemLevel" label="级别;集团/所级">
              <a-input v-model:value="form.problemLevel" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planCompletionRate" label="计划完成情况;以分数或进度条形式展现">
              <a-input v-model:value="form.planCompletionRate" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="weeklyFeedbackRate" label="周反馈情况;分数或进度条形式展现">
              <a-input v-model:value="form.weeklyFeedbackRate" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="销号状态;攻关中/已销号">
              <a-input v-model:value="form.status" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="closeTime" label="销号时间">
              <a-date-picker
                v-model:value="form.closeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityProblemCode" label="质量问题编号;非必填，质量问题系统内的编号">
              <a-input v-model:value="form.qualityProblemCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemDesc" label="问题描述">
              <a-input v-model:value="form.problemDesc" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="currentProgress" label="当前工作进展">
              <a-input v-model:value="form.currentProgress" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="weeklyFeedbackStartTime" label="周反馈开始时间">
              <a-date-picker
                v-model:value="form.weeklyFeedbackStartTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorId" label="质量主管ID">
              <a-input v-model:value="form.qualitySupervisorId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorCode" label="质量主管CODE">
              <a-input v-model:value="form.qualitySupervisorCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualitySupervisorName" label="质量主管">
              <a-input v-model:value="form.qualitySupervisorName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="型号">
              <a-input v-model:value="form.model" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="secretLevel" label="密级">
              <a-select
                v-model:value="form.secretLevel"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                :show-search="true"
                :allow-clear="true"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynDeleted" label="是否已删除">
              <a-input v-model:value="form.ynDeleted" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="remark" label="备注">
              <a-input v-model:value="form.remark" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="orderBy" label="排序">
              <a-input-number
                v-model:value="form.orderBy"
min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item label="附件">
              <AvicUploader
                element-id="1"
                form-type="detail"
                :allow-add="false"
                :allow-download="true"
                :allow-preview="true"
                :form-id="form.id"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
    <template #footer>
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
  layout,
  colLayout,
  loading,
  secretLevelList,
  closeModal
} = useQmsTop10ProblemForm({
  props: props,
  emit: emit
});
</script>


