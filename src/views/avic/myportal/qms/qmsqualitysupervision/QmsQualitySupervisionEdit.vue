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
            <a-form-item name="supervisionCode" label="监督CODE">
              <a-input
                v-model:value="form.supervisionCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入监督CODE"
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
            <a-form-item name="supervisionTime" label="监督时间;质量部手动选择">
              <a-date-picker
                v-model:value="form.supervisionTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择监督时间;质量部手动选择"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptId" label="被监督单位ID">
              <a-input
                v-model:value="form.supervisedDeptId"
                :maxLength="64"
                placeholder="请输入被监督单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptCode" label="被监督单位CODE">
              <a-input
                v-model:value="form.supervisedDeptCode"
                :maxLength="10"
                placeholder="请输入被监督单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="supervisedDeptName" label="被监督单位">
              <a-input
                v-model:value="form.supervisedDeptName"
                :maxLength="128"
                placeholder="请输入被监督单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffId" label="检查员ID;多人，逗号分隔">
              <a-input
                v-model:value="form.inspectorStaffId"
                :maxLength="512"
                placeholder="请输入检查员ID;多人，逗号分隔"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffCode" label="检查员CODE">
              <a-input
                v-model:value="form.inspectorStaffCode"
                :maxLength="50"
                placeholder="请输入检查员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorStaffName" label="检查员">
              <a-input
                v-model:value="form.inspectorStaffName"
                :maxLength="128"
                placeholder="请输入检查员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCount" label="问题数量;质量部手写">
              <a-input-number
                v-model:value="form.problemCount"
                :min="0"
                :max="9999999999"
                :precision="0"
                :step="1"
                placeholder="请输入问题数量;质量部手写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completionTime" label="完成时间;全部问题完成时填写">
              <a-date-picker
                v-model:value="form.completionTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择完成时间;全部问题完成时填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="监督状态;业务状态">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入监督状态;业务状态"
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
                table-name="QMS_QUALITY_SUPERVISION"
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
  rules,
  layout,
  colLayout,
  loading,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  saveForm,
  closeModal
} = useQmsQualitySupervisionForm({
  props: props,
  emit: emit
});
</script>

