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
            <a-form-item name="planName" label="实施计划名称">
              <a-input
                v-model:value="form.planName"
                :maxLength="256"
                :auto-focus="true"
                placeholder="请输入实施计划名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="actualFinishTime" label="实际完成时间">
              <a-date-picker
                v-model:value="form.actualFinishTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择实际完成时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackContent" label="完成情况说明">
              <a-input
                v-model:value="form.feedbackContent"
                :maxLength="1000"
                placeholder="请输入完成情况说明"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackTime" label="反馈时间">
              <a-date-picker
                v-model:value="form.feedbackTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择反馈时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackUserId" label="反馈人ID">
              <a-input
                v-model:value="form.feedbackUserId"
                :maxLength="64"
                placeholder="请输入反馈人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackUserCode" label="反馈人CODE">
              <a-input
                v-model:value="form.feedbackUserCode"
                :maxLength="10"
                placeholder="请输入反馈人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="feedbackUserName" label="反馈人">
              <a-input
                v-model:value="form.feedbackUserName"
                :maxLength="50"
                placeholder="请输入反馈人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="progress" label="本次进度">
              <a-input-number
                v-model:value="form.progress"
                :min="0"
                :max="99"
                :precision="0"
                :step="1"
                placeholder="请输入本次进度"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynFinish" label="是否完成">
              <a-input
                v-model:value="form.ynFinish"
                :maxLength="2"
                placeholder="请输入是否完成"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemDesc" label="存在问题">
              <a-input
                v-model:value="form.problemDesc"
                :maxLength="1000"
                placeholder="请输入存在问题"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="nextMeasure" label="下一步措施">
              <a-input
                v-model:value="form.nextMeasure"
                :maxLength="1000"
                placeholder="请输入下一步措施"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynRisk" label="是否存在风险">
              <a-input
                v-model:value="form.ynRisk"
                :maxLength="2"
                placeholder="请输入是否存在风险"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="riskDesc" label="风险说明">
              <a-input
                v-model:value="form.riskDesc"
                :maxLength="1000"
                placeholder="请输入风险说明"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="approvalStatus" label="审批状态">
              <a-input
                v-model:value="form.approvalStatus"
                :maxLength="10"
                placeholder="请输入审批状态"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="parentId" label="父节点ID">
              <a-input
                v-model:value="form.parentId"
                :maxLength="64"
                placeholder="请输入父节点ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="treeSort" label="本级排序" has-feedback>
              <a-input-number
                v-model:value="form.treeSort"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入本级排序"
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
