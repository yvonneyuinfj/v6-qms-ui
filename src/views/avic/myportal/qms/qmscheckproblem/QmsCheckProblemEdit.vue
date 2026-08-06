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
            <a-form-item name="problemCode" label="问题编号">
              <a-input
                v-model:value="form.problemCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入问题编号"
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
            <a-form-item name="problemDesc" label="问题描述">
              <a-input
                v-model:value="form.problemDesc"
                :maxLength="256"
                placeholder="请输入问题描述"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCategory" label="问题分类">
              <a-input
                v-model:value="form.problemCategory"
                :maxLength="50"
                placeholder="请输入问题分类"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptId" label="整改单位ID">
              <a-input
                v-model:value="form.rectificationDeptId"
                :maxLength="64"
                placeholder="请输入整改单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptCode" label="整改单位CODE">
              <a-input
                v-model:value="form.rectificationDeptCode"
                :maxLength="10"
                placeholder="请输入整改单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptName" label="整改单位">
              <a-input
                v-model:value="form.rectificationDeptName"
                :maxLength="50"
                placeholder="请输入整改单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserIds" label="责任人ID">
              <a-input
                v-model:value="form.responsibleUserIds"
                :maxLength="64"
                placeholder="请输入责任人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserCodes" label="责任人CODE">
              <a-input
                v-model:value="form.responsibleUserCodes"
                :maxLength="10"
                placeholder="请输入责任人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserNames" label="责任人姓名">
              <a-input
                v-model:value="form.responsibleUserNames"
                :maxLength="50"
                placeholder="请输入责任人姓名"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeadline" label="整改期限">
              <a-date-picker
                v-model:value="form.rectificationDeadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择整改期限"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="问题状态">
              <a-input
                v-model:value="form.status"
                :maxLength="30"
                placeholder="请输入问题状态"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processInstanceId" label="流程实例ID">
              <a-input
                v-model:value="form.processInstanceId"
                :maxLength="64"
                placeholder="请输入流程实例ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processStatus" label="流程状态">
              <a-input
                v-model:value="form.processStatus"
                :maxLength="10"
                placeholder="请输入流程状态"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completeTime" label="整改完成时间">
              <a-date-picker
                v-model:value="form.completeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择整改完成时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="submitTime" label="整改提交时间">
              <a-date-picker
                v-model:value="form.submitTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择整改提交时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceType" label="来源类型;字典：INTERNAL_AUDIT;QUALITY_SUPERVISION;QUALITY_INSPECTION;QUALIFICATION_REVIEW;OTHER_CHECK">
              <a-input
                v-model:value="form.sourceType"
                :maxLength="50"
                placeholder="请输入来源类型;字典：INTERNAL_AUDIT;QUALITY_SUPERVISION;QUALITY_INSPECTION;QUALIFICATION_REVIEW;OTHER_CHECK"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceCode" label="来源业务编号;检查编号、监督编号等">
              <a-input
                v-model:value="form.sourceCode"
                :maxLength="50"
                placeholder="请输入来源业务编号;检查编号、监督编号等"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceName" label="来源业务名称;检查名称、审核名称等">
              <a-input
                v-model:value="form.sourceName"
                :maxLength="256"
                placeholder="请输入来源业务名称;检查名称、审核名称等"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemLevel" label="问题等级">
              <a-input
                v-model:value="form.problemLevel"
                :maxLength="50"
                placeholder="请输入问题等级"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="baisisClause" label="依据条款">
              <a-input
                v-model:value="form.baisisClause"
                :maxLength="1024"
                placeholder="请输入依据条款"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="foundTime" label="发现时间">
              <a-date-picker
                v-model:value="form.foundTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择发现时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="涉及型号">
              <a-input
                v-model:value="form.model"
                :maxLength="256"
                placeholder="请输入涉及型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffId" label="发现人ID">
              <a-input
                v-model:value="form.discovererStaffId"
                :maxLength="64"
                placeholder="请输入发现人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffCode" label="发现人CODE">
              <a-input
                v-model:value="form.discovererStaffCode"
                :maxLength="10"
                placeholder="请输入发现人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="discovererStaffName" label="发现人">
              <a-input
                v-model:value="form.discovererStaffName"
                :maxLength="50"
                placeholder="请输入发现人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynRectification" label="是否需要整改">
              <a-input
                v-model:value="form.ynRectification"
                :maxLength="2"
                placeholder="请输入是否需要整改"
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
                table-name="QMS_CHECK_PROBLEM"
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
import { useQmsCheckProblemForm, emits } from './ts/QmsCheckProblemForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  mainId: {
    // 主表选中项的id
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
} = useQmsCheckProblemForm({
  props: props,
  emit: emit
});
</script>

