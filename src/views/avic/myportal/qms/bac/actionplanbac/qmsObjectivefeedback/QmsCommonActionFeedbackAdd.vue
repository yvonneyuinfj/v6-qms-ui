<template>
  <AvicModal
    :visible="true"
    title="添加"
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
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="planContent" label="目标内容">
              <a-input
                v-model:value="form.planContent"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deadline" label="截止日期">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择实际完成时间"
                disabled=""
              />
            </a-form-item>
          </a-col>
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="progress" label="完成进度">
              <a-slider v-model:value="form.progress" :tip-formatter="formatter"/>
            </a-form-item>
          </a-col>
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
        </a-row>
        <a-row>
          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="feedbackTime" label="反馈时间">-->
          <!--    <a-date-picker-->
          <!--      v-model:value="form.feedbackTime"-->
          <!--      format="YYYY-MM-DD"-->
          <!--      value-format="YYYY-MM-DD"-->
          <!--      placeholder="请选择反馈时间"-->
          <!--      disabled-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->

          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="feedbackUserName" label="反馈人">-->
          <!--    <a-input-->
          <!--      v-model:value="form.feedbackUserName"-->
          <!--      :maxLength="50"-->
          <!--      placeholder="请输入反馈人"-->
          <!--      disabled-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->

          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="ynFinish" label="是否完成">-->
          <!--    <a-input-->
          <!--      v-model:value="form.ynFinish"-->
          <!--      :maxLength="2"-->
          <!--      placeholder="请输入是否完成"-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->
          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="problemDesc" label="存在问题">-->
          <!--    <a-input-->
          <!--      v-model:value="form.problemDesc"-->
          <!--      :maxLength="1000"-->
          <!--      placeholder="请输入存在问题"-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->
          <!--<a-col v-bind="colLayout.cols">-->
          <!--  <a-form-item name="nextMeasure" label="下一步措施">-->
          <!--    <a-input-->
          <!--      v-model:value="form.nextMeasure"-->
          <!--      :maxLength="1000"-->
          <!--      placeholder="请输入下一步措施"-->
          <!--    />-->
          <!--  </a-form-item>-->
          <!--</a-col>-->
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
          <a-col v-bind="colLayout.cols2" v-if="form.ynRisk==='Y'">
            <a-form-item name="riskDesc" label="风险说明">
              <a-input
                v-model:value="form.riskDesc"
                :maxLength="1000"
                placeholder="请输入风险说明"
              />
            </a-form-item>
          </a-col>
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
import { useQmsCommonActionFeedbackForm, emits } from './ts/QmsCommonActionFeedbackForm'; // 引入表单ts
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
