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
            <a-form-item name="inspectionCode" label="检查编号;检查编号+3位数流水号">
              <a-input
                v-model:value="form.inspectionCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入检查编号;检查编号+3位数流水号"
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
            <a-form-item name="inspectName" label="检查名称;对XXX的专项检查">
              <a-input
                v-model:value="form.inspectName"
                :maxLength="256"
                placeholder="请输入检查名称;对XXX的专项检查"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectedDeptId" label="被检查单位ID;检查单位名称/代号">
              <a-input
                v-model:value="form.inspectedDeptId"
                :maxLength="64"
                placeholder="请输入被检查单位ID;检查单位名称/代号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectedDeptCode" label="被检查单位CODE">
              <a-input
                v-model:value="form.inspectedDeptCode"
                :maxLength="10"
                placeholder="请输入被检查单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectedDeptName" label="被检查单位">
              <a-input
                v-model:value="form.inspectedDeptName"
                :maxLength="128"
                placeholder="请输入被检查单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="涉及型号;多选，逗号分隔">
              <a-input
                v-model:value="form.model"
                :maxLength="1000"
                placeholder="请输入涉及型号;多选，逗号分隔"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectionTime" label="检查时间">
              <a-date-picker
                v-model:value="form.inspectionTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择检查时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectionWorkload" label="检查投入">
              <a-input-number
                v-model:value="form.inspectionWorkload"
                :min="0"
                :max="9999999999.99"
                :precision="2"
                :step="0.01"
                placeholder="请输入检查投入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffId" label="检查组长ID">
              <a-input
                v-model:value="form.leaderStaffId"
                :maxLength="64"
                placeholder="请输入检查组长ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffCode" label="检查组长CODE">
              <a-input
                v-model:value="form.leaderStaffCode"
                :maxLength="10"
                placeholder="请输入检查组长CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffName" label="检查组长">
              <a-input
                v-model:value="form.leaderStaffName"
                :maxLength="50"
                placeholder="请输入检查组长"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberStaffId" label="检查组成员ID">
              <a-input
                v-model:value="form.memberStaffId"
                :maxLength="512"
                placeholder="请输入检查组成员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberStaffCode" label="检查组成员CODE">
              <a-input
                v-model:value="form.memberStaffCode"
                :maxLength="50"
                placeholder="请输入检查组成员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberStaffName" label="检查组成员">
              <a-input
                v-model:value="form.memberStaffName"
                :maxLength="128"
                placeholder="请输入检查组成员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCount" label="问题数">
              <a-input-number
                v-model:value="form.problemCount"
                :min="0"
                :max="9999999999.99"
                :precision="2"
                :step="0.01"
                placeholder="请输入问题数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completeCount" label="完成整改数">
              <a-input-number
                v-model:value="form.completeCount"
                :min="0"
                :max="9999999999.99"
                :precision="2"
                :step="0.01"
                placeholder="请输入完成整改数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completeTime" label="完成时间">
              <a-date-picker
                v-model:value="form.completeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择完成时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="业务状态">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入业务状态"
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
                form-type="add"
                ref="uploadFile"
                :allow-download="true"
                :allow-preview="true"
                :allow-delete="true"
                :allow-update-secret-level="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_QUALITY_INSPECTION"
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
import { useQmsQualityInspectionForm, emits } from './ts/QmsQualityInspectionForm'; // 引入表单ts
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
} = useQmsQualityInspectionForm({
  props: props,
  emit: emit
});
</script>
