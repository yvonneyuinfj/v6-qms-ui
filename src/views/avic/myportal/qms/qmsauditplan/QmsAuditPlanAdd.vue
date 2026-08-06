<template>
  <AvicModal
    :visible="true"
    title="添加"
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
            <a-form-item name="auditeeDeptId" label="受审核部门">
              <AvicCommonSelect
                v-model:value="form.auditeeDeptId"
                type="deptSelect"
                placeholder="请选择受审核部门"
                :defaultShowValue="form.auditeeDeptName"
                @callback="
                      result => {
                        form.auditeeDeptName = result.names;
                      }
                    "
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditTime" label="审核时间">
              <a-date-picker
                v-model:value="form.auditTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择审核时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="auditClause" label="审核条款">
              <a-input
                v-model:value="form.auditClause"
                :maxLength="512"
                placeholder="请输入审核条款"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelProject" label="型号/项目">
              <a-input
                v-model:value="form.modelProject"
                :maxLength="512"
                placeholder="请输入型号/项目"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorId" label="审核员">
              <AvicCommonSelect
              v-model:value="form.auditorId"
              type="userSelect"
              placeholder="请选择审核员"
              :defaultShowValue="form.auditorName"
              @callback="
                      result => {
                        form.auditorName = result.names;
                      }
                    "
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
            <a-form-item name="orderBy" label="排序">
              <a-input-number
                v-model:value="form.orderBy"
                :min="1"
                :precision="0"
                :step="1"
                placeholder="请输入排序"
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
                table-name="QMS_AUDIT_PLAN"
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
import { useQmsAuditPlanForm, emits } from './ts/QmsAuditPlanForm'; // 引入表单ts
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
} = useQmsAuditPlanForm({
  props: props,
  emit: emit
});
</script>

