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
            <a-form-item name="planId" label="审核计划">
              <AvicModalSelect
                v-model:value="form.planId"
                title="请选择审核计划"
                placeholder="请选择审核计划"
                valueField="id"
                showField="modelProject"
                :selectComponent="QmsAuditPlanSelect"
                :isMultiSelection="false"
                :allow-clear="true"
                @selectConfirm="handleSelect"
              />
            </a-form-item>
          </a-col>
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
            <a-form-item name="summaryCode" label="综述编号">
              <a-input
                v-model:value="form.summaryCode"
                :maxLength="64"
                placeholder="请输入综述编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="executionDesc" label="内审计划执行情况">
              <a-textarea
                v-model:value="form.executionDesc"
                :maxLength="1024"
                placeholder="请输入内审计划执行情况"
                :auto-size="{ minRows: 3}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="documentSuitablilityEval" label="体系文件适宜性评价">
              <a-textarea
                v-model:value="form.documentSuitablilityEval"
                :maxLength="1024"
                placeholder="请输入体系文件适宜性评价"
                :auto-size="{ minRows: 3}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="systemOperationEval" label="体系运行情况评价">
              <a-textarea
                v-model:value="form.systemOperationEval"
                :maxLength="1024"
                placeholder="请输入体系运行情况评价"
                :auto-size="{ minRows: 3}"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="otherSituationDesc" label="其他情况说明">
              <a-textarea
                v-model:value="form.otherSituationDesc"
                :maxLength="1024"
                placeholder="请输入其他情况说明"
                :auto-size="{ minRows: 3}"
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
  closeModal,
  handleSelect
} = useQmsAuditSummaryForm({
  props: props,
  emit: emit
});
</script>
