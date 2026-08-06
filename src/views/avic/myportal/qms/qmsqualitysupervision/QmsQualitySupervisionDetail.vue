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
            <a-form-item name="supervisionCode" label="监督CODE">
              <a-input v-model:value="form.supervisionCode" :auto-focus="true" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份">
              <a-input v-model:value="form.forYear" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisionTime" label="监督时间;质量部手动选择">
              <a-date-picker
                v-model:value="form.supervisionTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptId" label="被监督单位ID">
              <a-input v-model:value="form.supervisedDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptCode" label="被监督单位CODE">
              <a-input v-model:value="form.supervisedDeptCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptName" label="被监督单位">
              <a-input v-model:value="form.supervisedDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffId" label="检查员ID;多人，逗号分隔">
              <a-input v-model:value="form.inspectorStaffId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffCode" label="检查员CODE">
              <a-input v-model:value="form.inspectorStaffCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffName" label="检查员">
              <a-input v-model:value="form.inspectorStaffName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCount" label="问题数量;质量部手写">
              <a-input-number
                v-model:value="form.problemCount"
min="0"
                :max="9999999999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completionTime" label="完成时间;全部问题完成时填写">
              <a-date-picker
                v-model:value="form.completionTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="监督状态;业务状态">
              <a-input v-model:value="form.status" disabled />
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
import { useQmsQualitySupervisionForm, emits } from './ts/QmsQualitySupervisionForm'; // 引入表单ts
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
} = useQmsQualitySupervisionForm({
  props: props,
  emit: emit
});
</script>

