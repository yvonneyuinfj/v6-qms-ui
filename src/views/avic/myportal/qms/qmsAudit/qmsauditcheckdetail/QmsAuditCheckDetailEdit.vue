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
            <a-form-item name="recordId" label="审核记录ID">
              <a-input
                v-model:value="form.recordId"
                :maxLength="64"
                :auto-focus="true"
                placeholder="请输入审核记录ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planId" label="审核计划ID;关联年度计划">
              <a-input
                v-model:value="form.planId"
                :maxLength="64"
                placeholder="请输入审核计划ID;关联年度计划"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="noticeId" label="审核通知单ID;关联已批准通知单">
              <a-input
                v-model:value="form.noticeId"
                :maxLength="64"
                placeholder="请输入审核通知单ID;关联已批准通知单"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sequenceCode" label="序号;系统生成">
              <a-input
                v-model:value="form.sequenceCode"
                :maxLength="50"
                placeholder="请输入序号;系统生成"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="clauseNo" label="条款号">
              <a-input
                v-model:value="form.clauseNo"
                :maxLength="512"
                placeholder="请输入条款号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="clauseContent" label="条款内容">
              <a-input
                v-model:value="form.clauseContent"
                :maxLength="512"
                placeholder="请输入条款内容"
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
            <a-form-item name="checkContent" label="检查内容">
              <a-input
                v-model:value="form.checkContent"
                :maxLength="512"
                placeholder="请输入检查内容"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="checkModel" label="型号">
              <a-input
                v-model:value="form.checkModel"
                :maxLength="512"
                placeholder="请输入型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="checkRecord" label="检查记录">
              <a-input
                v-model:value="form.checkRecord"
                :maxLength="512"
                placeholder="请输入检查记录"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="conformityResult" label="符合情况;符合：无建议;符合：有建议;不符合;（三选一）">
              <a-input
                v-model:value="form.conformityResult"
                :maxLength="10"
                placeholder="请输入符合情况;符合：无建议;符合：有建议;不符合;（三选一）"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="adviceContent" label="建议内容;符合：有建议时必填">
              <a-input
                v-model:value="form.adviceContent"
                :maxLength="512"
                placeholder="请输入建议内容;符合：有建议时必填"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="明细状态;草稿、有效、已生成不符合项">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入明细状态;草稿、有效、已生成不符合项"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynNc" label="是否不符合">
              <a-input
                v-model:value="form.ynNc"
                :maxLength="2"
                placeholder="请输入是否不符合"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ncId" label="不符合ID">
              <a-input
                v-model:value="form.ncId"
                :maxLength="64"
                placeholder="请输入不符合ID"
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
                form-type="edit"
                ref="uploadFile"
                :allow-download="true"
                :allow-preview="true"
                :allow-delete="true"
                :allow-update-secret-level="true"
                :form-id="form.id"
                :form-secret-level="form.secretLevel"
                table-name="QMS_AUDIT_CHECK_DETAIL"
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
import { useQmsAuditCheckDetailForm, emits } from './ts/QmsAuditCheckDetailForm'; // 引入表单ts
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
} = useQmsAuditCheckDetailForm({
  props: props,
  emit: emit
});
</script>


