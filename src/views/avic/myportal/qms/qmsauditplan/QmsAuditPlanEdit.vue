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
            <a-form-item name="planCode" label="审核计划计划编号">
              <a-input
                v-model:value="form.planCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入审核计划计划编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planName" label="审核活动名称" has-feedback>
              <a-input
                v-model:value="form.planName"
                :maxLength="128"
                placeholder="请输入审核活动名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="年度">
              <a-input
                v-model:value="form.forYear"
                :maxLength="10"
                placeholder="请输入年度"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditType" label="责任部门ID">
              <a-input
                v-model:value="form.auditType"
                :maxLength="2000"
                placeholder="请输入责任部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditName" label="责任部门编号">
              <a-input
                v-model:value="form.auditName"
                :maxLength="512"
                placeholder="请输入责任部门编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditMonth" label="责任部门">
              <a-input
                v-model:value="form.auditMonth"
                :maxLength="2000"
                placeholder="请输入责任部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptId" label="受审部门ID">
              <a-input
                v-model:value="form.auditeeDeptId"
                :maxLength="64"
                placeholder="请输入受审部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptCode" label="受审部门CODE">
              <a-input
                v-model:value="form.auditeeDeptCode"
                :maxLength="10"
                placeholder="请输入受审部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审部门">
              <a-input
                v-model:value="form.auditeeDeptName"
                :maxLength="50"
                placeholder="请输入受审部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditBasis" label="审核依据">
              <a-input
                v-model:value="form.auditBasis"
                :maxLength="512"
                placeholder="请输入审核依据"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
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
            <a-form-item name="auditScope" label="审核范围">
              <a-input
                v-model:value="form.auditScope"
                :maxLength="512"
                placeholder="请输入审核范围"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorId" label="审核员ID">
              <a-input
                v-model:value="form.auditorId"
                :maxLength="512"
                placeholder="请输入审核员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorCode" label="审核员CODE">
              <a-input
                v-model:value="form.auditorCode"
                :maxLength="200"
                placeholder="请输入审核员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditorName" label="审核员">
              <a-input
                v-model:value="form.auditorName"
                :maxLength="200"
                placeholder="请输入审核员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planStatus" label="计划状态">
              <a-input
                v-model:value="form.planStatus"
                :maxLength="10"
                placeholder="请输入计划状态"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planSource" label="计划来源">
              <a-input
                v-model:value="form.planSource"
                :maxLength="128"
                placeholder="请输入计划来源"
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
            <a-form-item name="parentId" label="父级分类">
              <AvicTreeSelect
                v-model:value="form.parentId"
                ref="treeSelectRef"
                :baseUrl="baseUrl"
                :parentId="parentId"
                :parentTitle="parentTitle">
              </AvicTreeSelect>
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
                form-type="edit"
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
        <a-button
          title="保存"
          type="primary"
          :loading="loading"
          @click="saveForm"
        >
          保存
        </a-button>
      <a-button
        type="primary"
        ghost
        title="返回"
        @click="closeModal"
      >
        返回
      </a-button>
    </template>
  </AvicModal>
</template>
<script lang="ts" setup>
import { useQmsAuditPlanForm, emits } from './ts/QmsAuditPlanForm'; //引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  parentId: {
    type: String,
    required: true
  },
  parentTitle: {
    type: String,
    required: true
  },
  defaultTreeLevel: {
    type: Number,
    default: 1
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
  baseUrl,
  saveForm,
  closeModal
} = useQmsAuditPlanForm({
  props: props,
  emit: emit
});
</script>
