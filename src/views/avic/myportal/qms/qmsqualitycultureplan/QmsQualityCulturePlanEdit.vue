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
            <a-form-item name="planCode" label="计划编号">
              <a-input
                v-model:value="form.planCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入计划编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="workItem" label="主要工作事项">
              <a-input
                v-model:value="form.workItem"
                :maxLength="512"
                placeholder="请输入主要工作事项"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deliverable" label="交付物">
              <a-input
                v-model:value="form.deliverable"
                :maxLength="128"
                placeholder="请输入交付物"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizingDeptId" label="组织部门ID">
              <a-input
                v-model:value="form.organizingDeptId"
                :maxLength="64"
                placeholder="请输入组织部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizingDeptCode" label="组织部门CODE">
              <a-input
                v-model:value="form.organizingDeptCode"
                :maxLength="10"
                placeholder="请输入组织部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizingDeptName" label="组织部门">
              <a-input
                v-model:value="form.organizingDeptName"
                :maxLength="64"
                placeholder="请输入组织部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizerStaffId" label="组织人ID">
              <a-input
                v-model:value="form.organizerStaffId"
                :maxLength="64"
                placeholder="请输入组织人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizerStaffCode" label="组织人CODE">
              <a-input
                v-model:value="form.organizerStaffCode"
                :maxLength="10"
                placeholder="请输入组织人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="organizerStaffName" label="组织人">
              <a-input
                v-model:value="form.organizerStaffName"
                :maxLength="20"
                placeholder="请输入组织人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="implementDeptId" label="实施部门ID">
              <a-input
                v-model:value="form.implementDeptId"
                :maxLength="2000"
                placeholder="请输入实施部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="implementDeptCode" label="实施部门CODE">
              <a-input
                v-model:value="form.implementDeptCode"
                :maxLength="1000"
                placeholder="请输入实施部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="implementDeptName" label="实施部门">
              <a-input
                v-model:value="form.implementDeptName"
                :maxLength="2000"
                placeholder="请输入实施部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="startTime" label="开始时间">
              <a-date-picker
                v-model:value="form.startTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择开始时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deadline" label="结束时间">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择结束时间"
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
import { useQmsQualityCulturePlanForm, emits } from './ts/QmsQualityCulturePlanForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  mainId: {
    // 主表选中项的id
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
  saveForm,
  closeModal
} = useQmsQualityCulturePlanForm({
  props: props,
  emit: emit
});
</script>

