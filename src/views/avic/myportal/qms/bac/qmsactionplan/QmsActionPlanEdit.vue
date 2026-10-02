<template>
  <AvicModal
    :visible="true"
    title="编辑"
    width="70%"
    height="560px"
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
          <!-- 承接所级目标 -->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="actionId" label="承接所级目标">
              <AvicModalSelect
                v-model:value="form.actionId"
                title="请选择所级质量目标"
                placeholder="请选择所级质量目标"
                valueField="id"
                showField="objectiveName"
                :selectComponent="QmsQualityObjectiveSelect"
                @selectConfirm="handleSelect"
                :defaultShowValue="form.actionName"
              />
            </a-form-item>
          </a-col>
          <!-- 计划内容 -->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="planContent" label="计划内容">
              <a-textarea
                v-model:value="form.planContent"
                :maxLength="512"
                placeholder="请输入计划内容"
                :auto-size="{ minRows: 2,maxRows:5}"
              />
            </a-form-item>
          </a-col>
          <!-- 交付物 -->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="expectedDeliverable" label="交付物">
              <a-input
                v-model:value="form.expectedDeliverable"
                :maxLength="128"
                placeholder="请输入交付物"
              />
            </a-form-item>
          </a-col>
          <!-- 责任人 -->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserId" label="责任人">
              <AvicCommonSelect
                v-model:value="form.responsibleUserId"
                type="userSelect"
                placeholder="请选择主管所领导"
                :defaultShowValue="form.responsibleUserName"
                @callback="
                      result => {
                        form.responsibleUserName = result.names;
                      }
                    "
              />
            </a-form-item>
          </a-col>
          <!-- 开始时间 -->
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
          <!-- 结束时间 -->
          <a-col v-bind="colLayout.cols">
            <a-form-item name="endTime" label="结束时间">
              <a-date-picker
                v-model:value="form.endTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择结束时间"
              />
            </a-form-item>
          </a-col>
          <!-- 备注 -->
          <a-col v-bind="colLayout.cols2">
            <a-form-item name="remark" label="备注">
              <a-textarea
                v-model:value="form.remark"
                :maxLength="2000"
                :auto-size="{ minRows: 2,maxRows:5}"
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
                form-type="edit"
                ref="uploadFile"
                :allow-download="true"
                :allow-preview="true"
                :allow-delete="true"
                :allow-update-secret-level="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_ACTION_PLAN"
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
import { useQmsActionPlanForm, emits } from './ts/QmsActionPlanForm'; // 引入表单ts
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
} = useQmsActionPlanForm({
  props: props,
  emit: emit
});
</script>

