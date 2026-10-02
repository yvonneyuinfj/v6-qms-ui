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
            <a-form-item name="ncCode" label="不符合项编号">
              <a-input
                v-model:value="form.ncCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入不符合项编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="recordId" label="审核记录ID">
              <a-input
                v-model:value="form.recordId"
                :maxLength="64"
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
            <a-form-item name="detailId" label="检查明细ID">
              <a-input
                v-model:value="form.detailId"
                :maxLength="64"
                placeholder="请输入检查明细ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptId" label="受审部门ID;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptId"
                :maxLength="64"
                placeholder="请输入受审部门ID;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptCode" label="受审部门CODE;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptCode"
                :maxLength="10"
                placeholder="请输入受审部门CODE;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeDeptName" label="受审部门;通知单带入">
              <a-input
                v-model:value="form.auditeeDeptName"
                :maxLength="50"
                placeholder="请输入受审部门;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditBasis" label="审核依据的标准和文件;主审填写">
              <a-input
                v-model:value="form.auditBasis"
                :maxLength="512"
                placeholder="请输入审核依据的标准和文件;主审填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditTime" label="审核时间;通知单带入">
              <a-date-picker
                v-model:value="form.auditTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择审核时间;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserId" label="受审方人员ID;通知单带入">
              <a-input
                v-model:value="form.auditeeUserId"
                :maxLength="512"
                placeholder="请输入受审方人员ID;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserCode" label="受审方人员CODE;通知单带入">
              <a-input
                v-model:value="form.auditeeUserCode"
                :maxLength="200"
                placeholder="请输入受审方人员CODE;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="auditeeUserName" label="受审方人员;通知单带入">
              <a-input
                v-model:value="form.auditeeUserName"
                :maxLength="200"
                placeholder="请输入受审方人员;通知单带入"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ncLevel" label="不符合程度;一般、严重">
              <a-input
                v-model:value="form.ncLevel"
                :maxLength="4"
                placeholder="请输入不符合程度;一般、严重"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="standardClauseNo" label="不符合标准条款号">
              <a-input
                v-model:value="form.standardClauseNo"
                :maxLength="50"
                placeholder="请输入不符合标准条款号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ncFactDesc" label="不符合项实施描述">
              <a-input
                v-model:value="form.ncFactDesc"
                :maxLength="2000"
                placeholder="请输入不符合项实施描述"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectifyHandlerId" label="整改处理人ID">
              <a-input
                v-model:value="form.rectifyHandlerId"
                :maxLength="500"
                placeholder="请输入整改处理人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectifyHandlerCode" label="整改处理人CODE">
              <a-input
                v-model:value="form.rectifyHandlerCode"
                :maxLength="256"
                placeholder="请输入整改处理人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectifyHandlerName" label="整改处理人">
              <a-input
                v-model:value="form.rectifyHandlerName"
                :maxLength="256"
                placeholder="请输入整改处理人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="actionId" label="行动项ID">
              <a-input
                v-model:value="form.actionId"
                :maxLength="64"
                placeholder="请输入行动项ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="业务状态;草稿、审批中、整改中、已关闭等">
              <a-input
                v-model:value="form.status"
                :maxLength="10"
                placeholder="请输入业务状态;草稿、审批中、整改中、已关闭等"
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="expectedDeliverable" label="交付物">
              <a-input
                v-model:value="form.expectedDeliverable"
                :maxLength="128"
                placeholder="请输入交付物"
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
import { useQmsAuditNcForm, emits } from './ts/QmsAuditNcForm'; // 引入表单ts
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
  saveForm,
  closeModal
} = useQmsAuditNcForm({
  props: props,
  emit: emit
});
</script>
