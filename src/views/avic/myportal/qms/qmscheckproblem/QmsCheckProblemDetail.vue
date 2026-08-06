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
            <a-form-item name="problemCode" label="问题编号">
              <a-input v-model:value="form.problemCode" :auto-focus="true" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份">
              <a-input v-model:value="form.forYear" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemDesc" label="问题描述">
              <a-input v-model:value="form.problemDesc" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCategory" label="问题分类">
              <a-input v-model:value="form.problemCategory" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptId" label="整改单位ID">
              <a-input v-model:value="form.rectificationDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptCode" label="整改单位CODE">
              <a-input v-model:value="form.rectificationDeptCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptName" label="整改单位">
              <a-input v-model:value="form.rectificationDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserIds" label="责任人ID">
              <a-input v-model:value="form.responsibleUserIds" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserCodes" label="责任人CODE">
              <a-input v-model:value="form.responsibleUserCodes" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserNames" label="责任人姓名">
              <a-input v-model:value="form.responsibleUserNames" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeadline" label="整改期限">
              <a-date-picker
                v-model:value="form.rectificationDeadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="问题状态">
              <a-input v-model:value="form.status" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processInstanceId" label="流程实例ID">
              <a-input v-model:value="form.processInstanceId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processStatus" label="流程状态">
              <a-input v-model:value="form.processStatus" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completeTime" label="整改完成时间">
              <a-date-picker
                v-model:value="form.completeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="submitTime" label="整改提交时间">
              <a-date-picker
                v-model:value="form.submitTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceType" label="来源类型;字典：INTERNAL_AUDIT;QUALITY_SUPERVISION;QUALITY_INSPECTION;QUALIFICATION_REVIEW;OTHER_CHECK">
              <a-input v-model:value="form.sourceType" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceId" label="来源业务ID;关联监督、检查、审核活动">
              <a-input v-model:value="form.sourceId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceCode" label="来源业务编号;检查编号、监督编号等">
              <a-input v-model:value="form.sourceCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceName" label="来源业务名称;检查名称、审核名称等">
              <a-input v-model:value="form.sourceName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemLevel" label="问题等级">
              <a-input v-model:value="form.problemLevel" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="baisisClause" label="依据条款">
              <a-input v-model:value="form.baisisClause" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="foundTime" label="发现时间">
              <a-date-picker
                v-model:value="form.foundTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="涉及型号">
              <a-input v-model:value="form.model" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffId" label="发现人ID">
              <a-input v-model:value="form.discovererStaffId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffCode" label="发现人CODE">
              <a-input v-model:value="form.discovererStaffCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffName" label="发现人">
              <a-input v-model:value="form.discovererStaffName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynRectification" label="是否需要整改">
              <a-input v-model:value="form.ynRectification" disabled />
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
import { useQmsCheckProblemForm, emits } from './ts/QmsCheckProblemForm'; // 引入表单ts
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
} = useQmsCheckProblemForm({
  props: props,
  emit: emit
});
</script>

