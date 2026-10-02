<template>
  <AvicModal
    :visible="true"
    title="详情"
    width="960px"
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
            <a-form-item name="sequenceCode" label="序号">
              <a-input-number
                v-model:value="form.sequenceCode"
                :maxLength="50"
                placeholder="请输入序号"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="clauseNo" label="条款号">
              <a-input
                v-model:value="form.clauseNo"
                :maxLength="512"
                placeholder="请输入条款号"
                disabled/>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="checkContent" label="检查内容">
              <a-textarea
                v-model:value="form.checkContent"
                :maxLength="512"
                placeholder="请输入检查内容"
                :auto-size="{minRows:2}"
                disabled/>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="checkModel" label="检查型号">
              <a-select
                ref="select"
                mode="multiple"
                v-model:value="modelArr"
                :options="modelList"
                :field-names="{ label: 'model', value: 'model'}"
                @change="(val)=>{form.checkModel=val.join(',');}"
                disabled
              ></a-select>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="checkRecord" label="检查记录">
              <a-textarea
                v-model:value="form.checkRecord"
                :maxLength="512"
                placeholder="请输入检查记录"
                :auto-size="{minRows:2}"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="conformityResult" label="符合情况">
              <a-select v-model:value="form.conformityResult" placeholder="请选择符合情况" disabled>
                <a-select-option
                  v-for="select in conformityResultList"
                  :key="select.sysLookupTlId"
                  :value="select.lookupCode"
                  :title="select.lookupName"
                  :disabled="select.disabled === true"
                >
                  {{ select.lookupName }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2" v-if="form.conformityResult==='5'">
            <a-form-item name="adviceContent" label="建议内容">
              <a-textarea
                v-model:value="form.adviceContent"
                :maxLength="512"
                placeholder="请输入建议内容;符合：有建议时必填"
                :auto-size="{minRows:2}"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols2">
            <a-form-item
              label="附件"
            >
              <AvicUploader
                element-id="1"
                form-type="detail"
                ref="uploadFile"
                :allow-add="false"
                :allow-download="true"
                :allow-preview="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_AUDIT_CHECK_DETAIL"
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
import { useQmsAuditCheckDetailForm, emits } from './ts/QmsAuditCheckDetailForm'; // 引入表单ts
import QmsBasicModelInfoSelect from '@/views/avic/myportal/qms/qmsBasic/qmsbasicmodelinfo/QmsBasicModelInfoSelect.vue';

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
  conformityResultList,
  modelList,
  modelArr
} = useQmsAuditCheckDetailForm({
  props: props,
  emit: emit
});

function handleChange(a, b) {
  console.log(a, b);
}
</script>


