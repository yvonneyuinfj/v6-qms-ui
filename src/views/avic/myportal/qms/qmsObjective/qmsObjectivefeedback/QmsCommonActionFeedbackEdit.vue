<template>
  <AvicModal
    :visible="true"
    title="编辑"
    width="70%"
    height="580px"
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
          <!--考核指标-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="sourceName" label="考核指标">
              <a-input
                v-model:value="form.sourceName"
                disabled
              />
            </a-form-item>
          </a-col>
          <!--进展说明-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="feedbackContent" label="进展说明">
              <a-textarea
                v-model:value="form.feedbackContent"
                :maxLength="1000"
                placeholder="请输入完成情况说明"
                :auto-size="{ minRows: 2,maxRows:3}"
              />
            </a-form-item>
          </a-col>
          <!--完成进度-->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="progress" label="完成进度">
              <a-slider v-model:value="form.progress" :tip-formatter="formatter" :tooltip-visible="true"/>
            </a-form-item>
          </a-col>
          <!--实际完成时间-->
          <a-col v-bind="colLayout.cols" v-if="form.progress===100">
            <a-form-item name="actualFinishTime" label="实际完成时间">
              <a-date-picker
                v-model:value="form.actualFinishTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择实际完成时间"
              />
            </a-form-item>
          </a-col>
          <!--是否存在风险-->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynRisk" label="是否存在风险">
              <a-switch
                v-model:checked="form.ynRisk"
                checked-value="Y"
                un-checked-value="N"
                checked-children="是"
                un-checked-children="否"
              />
            </a-form-item>
          </a-col>
          <!--风险说明-->
          <a-col v-bind="colLayout.cols2" v-if="form.ynRisk==='Y'">
            <a-form-item name="riskDesc" label="风险说明">
              <a-input
                v-model:value="form.riskDesc"
                :maxLength="1000"
                placeholder="请输入风险说明"
              />
            </a-form-item>
          </a-col>
          <!--解决措施-->
          <a-col v-bind="colLayout.cols2" v-if="form.ynRisk==='Y'">
            <a-form-item name="nextMeasure" label="解决措施">
              <a-textarea
                v-model:value="form.nextMeasure"
                :maxLength="1000"
                placeholder="请输入解决措施"
                :auto-size="{ minRows: 2,maxRows:3}"
              />
            </a-form-item>
          </a-col>
          <!--附件-->
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
                table-name="QMS_COMMON_ACTION_FEEDBACK"
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
import { emits, useQmsCommonActionFeedbackForm } from './ts/QmsCommonActionFeedbackForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  mainId: {
    // 主表选中项的id
    type: String,
    default: ''
  },
  mainObj: {
    type: Object
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
} = useQmsCommonActionFeedbackForm({
  props: props,
  emit: emit
});
</script>

