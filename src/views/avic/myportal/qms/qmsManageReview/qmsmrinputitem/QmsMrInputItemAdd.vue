<template>
  <AvicModal
    :visible="true"
    title="添加"
    width="80%"
    height="640px"
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
              <a-select
                v-model:value="form.forYear"
                :get-popup-container="triggerNode => triggerNode.parentNode"
                option-filter-prop="children"
                placeholder="请选择所属年份"
                @select="handleQuery"
              >
                <a-select-option
                  v-for="item in yearList"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </a-select-option>
              </a-select>
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
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="materalName" label="材料">
              <a-input
                v-model:value="form.materalName"
                :maxLength="256"
                placeholder="请输入材料"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="mainRequirement" label="主要要求">
              <a-textarea
                v-model:value="form.mainRequirement"
                :maxLength="512"
                placeholder="请输入主要要求"
                :auto-size="{ minRows: 3}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="主责部门">
              <AvicCommonSelect
                v-model:value="form.responsibleDeptId"
                type="deptSelect"
                placeholder="请选择受主责部门"
                :defaultShowValue="form.responsibleDeptName"
                @callback="
                      result => {
                        form.responsibleDeptName = result.names;
                      }
                    "
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserId" label="责任人">
              <AvicCommonSelect
                v-model:value="form.responsibleUserId"
                type="userSelect"
                placeholder="请选择责任人"
                :defaultShowValue="form.responsibleUserName"
                @callback="
                      result => {
                        form.responsibleUserName = result.names;
                      }
                    "
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
            <a-form-item name="deadline" label="截止时间">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择截止时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="remark" label="备注">
              <a-textarea
                v-model:value="form.remark"
                :maxLength="2000"
                :auto-size="{ minRows: 2}"
                placeholder="请输入备注"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item
              label="附件"
            >
              <AvicUploader
                element-id="1"
                form-type="add"
                ref="uploadFile"
                :allow-download="true"
                :allow-preview="true"
                :allow-delete="true"
                :allow-update-secret-level="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_MR_INPUT_ITEM"
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
import { useQmsMrInputItemForm, emits } from './ts/QmsMrInputItemForm'; // 引入表单ts
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
  closeModal,
  yearList
} = useQmsMrInputItemForm({
  props: props,
  emit: emit
});
</script>

