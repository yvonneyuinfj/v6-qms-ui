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
            <a-form-item name="qualificationGroupId" label="归组ID;同一资质不同版本保持一致">
              <a-input
                v-model:value="form.qualificationGroupId"
                :maxLength="64"
                :auto-focus="true"
                placeholder="请输入归组ID;同一资质不同版本保持一致"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualificationTypeCode" label="类型CODE;字典">
              <a-input
                v-model:value="form.qualificationTypeCode"
                :maxLength="50"
                placeholder="请输入类型CODE;字典"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualificationTypeName" label="类型;资质类型名称">
              <a-input
                v-model:value="form.qualificationTypeName"
                :maxLength="128"
                placeholder="请输入类型;资质类型名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="certificationCode" label="证书编号">
              <a-input
                v-model:value="form.certificationCode"
                :maxLength="128"
                placeholder="请输入证书编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualificationScope" label="资质范围">
              <a-input
                v-model:value="form.qualificationScope"
                :maxLength="2000"
                placeholder="请输入资质范围"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="effectiveTime" label="生效日期">
              <a-date-picker
                v-model:value="form.effectiveTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择生效日期"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="expiryTime" label="失效日期">
              <a-date-picker
                v-model:value="form.expiryTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择失效日期"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="issuingAgency" label="颁发机构">
              <a-input
                v-model:value="form.issuingAgency"
                :maxLength="256"
                placeholder="请输入颁发机构"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="certVersionNo" label="证书版本号">
              <a-input
                v-model:value="form.certVersionNo"
                :maxLength="128"
                placeholder="请输入证书版本号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="previousVersionId" label="上一版本ID">
              <a-input
                v-model:value="form.previousVersionId"
                :maxLength="64"
                placeholder="请输入上一版本ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynCurrent" label="是否当前版本">
              <a-input
                v-model:value="form.ynCurrent"
                :maxLength="2"
                placeholder="请输入是否当前版本"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="changeType" label="版本变更类型;字典：初始、换证、增项、变更、补发等">
              <a-input
                v-model:value="form.changeType"
                :maxLength="50"
                placeholder="请输入版本变更类型;字典：初始、换证、增项、变更、补发等"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="changeContent" label="变更内容;说明本版本变化">
              <a-input
                v-model:value="form.changeContent"
                :maxLength="2000"
                placeholder="请输入变更内容;说明本版本变化"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffId" label="责任人ID">
              <a-input
                v-model:value="form.responsibleStaffId"
                :maxLength="64"
                placeholder="请输入责任人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffCode" label="责任人CODE">
              <a-input
                v-model:value="form.responsibleStaffCode"
                :maxLength="10"
                placeholder="请输入责任人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleStaffName" label="责任人">
              <a-input
                v-model:value="form.responsibleStaffName"
                :maxLength="50"
                placeholder="请输入责任人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="责任部门ID">
              <a-input
                v-model:value="form.responsibleDeptId"
                :maxLength="64"
                placeholder="请输入责任部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="责任部门CODE">
              <a-input
                v-model:value="form.responsibleDeptCode"
                :maxLength="10"
                placeholder="请输入责任部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="责任部门">
              <a-input
                v-model:value="form.responsibleDeptName"
                :maxLength="128"
                placeholder="请输入责任部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="fileId" label="附件ID">
              <a-input
                v-model:value="form.fileId"
                :maxLength="256"
                placeholder="请输入附件ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="证书状态">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入证书状态"
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
                table-name="QMS_MILITARY_QUALIFICATION"
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
import { useQmsMilitaryQualificationForm, emits } from './ts/QmsMilitaryQualificationForm'; // 引入表单ts
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
} = useQmsMilitaryQualificationForm({
  props: props,
  emit: emit
});
</script>


