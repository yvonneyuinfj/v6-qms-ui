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
            <a-form-item name="forYear" label="年度">
              <a-input
                v-model:value="form.forYear"
                :maxLength="4"
                :auto-focus="true"
                placeholder="请输入年度"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="improvementCode" label="编号">
              <a-input
                v-model:value="form.improvementCode"
                :maxLength="64"
                placeholder="请输入编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="improvementName" label="材料名称">
              <a-input
                v-model:value="form.improvementName"
                :maxLength="256"
                placeholder="请输入材料名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="improvementContent" label="改进要求要求">
              <a-input
                v-model:value="form.improvementContent"
                :maxLength="512"
                placeholder="请输入改进要求要求"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="improvementType" label="改进项类型;课题、建议">
              <a-input
                v-model:value="form.improvementType"
                :maxLength="10"
                placeholder="请输入改进项类型;课题、建议"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="category" label="改进类别;战略级转型和变革、战术级改进和优化">
              <a-input
                v-model:value="form.category"
                :maxLength="64"
                placeholder="请输入改进类别;战略级转型和变革、战术级改进和优化"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="proposerId" label="提出人ID">
              <a-input
                v-model:value="form.proposerId"
                :maxLength="64"
                placeholder="请输入提出人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="proposerCode" label="提出人CODE">
              <a-input
                v-model:value="form.proposerCode"
                :maxLength="50"
                placeholder="请输入提出人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="proposerName" label="提出人">
              <a-input
                v-model:value="form.proposerName"
                :maxLength="50"
                placeholder="请输入提出人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSleaderId" label="主管所领导ID">
              <a-input
                v-model:value="form.responsibleSleaderId"
                :maxLength="64"
                placeholder="请输入主管所领导ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSleaderCode" label="主管所领导CODE">
              <a-input
                v-model:value="form.responsibleSleaderCode"
                :maxLength="50"
                placeholder="请输入主管所领导CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSleaderName" label="主管所领导">
              <a-input
                v-model:value="form.responsibleSleaderName"
                :maxLength="50"
                placeholder="请输入主管所领导"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="主责部门ID">
              <a-input
                v-model:value="form.responsibleDeptId"
                :maxLength="64"
                placeholder="请输入主责部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="主责部门CODE">
              <a-input
                v-model:value="form.responsibleDeptCode"
                :maxLength="50"
                placeholder="请输入主责部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="主责部门">
              <a-input
                v-model:value="form.responsibleDeptName"
                :maxLength="50"
                placeholder="请输入主责部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderId" label="责任领导ID">
              <a-input
                v-model:value="form.responsibleDeptLeaderId"
                :maxLength="64"
                placeholder="请输入责任领导ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderCode" label="责任领导CODE">
              <a-input
                v-model:value="form.responsibleDeptLeaderCode"
                :maxLength="50"
                placeholder="请输入责任领导CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderName" label="责任领导">
              <a-input
                v-model:value="form.responsibleDeptLeaderName"
                :maxLength="50"
                placeholder="请输入责任领导"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserId" label="责任人ID">
              <a-input
                v-model:value="form.responsibleUserId"
                :maxLength="64"
                placeholder="请输入责任人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserCode" label="责任人CODE">
              <a-input
                v-model:value="form.responsibleUserCode"
                :maxLength="50"
                placeholder="请输入责任人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserName" label="责任人">
              <a-input
                v-model:value="form.responsibleUserName"
                :maxLength="50"
                placeholder="请输入责任人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="participatingDeptId" label="参与部门ID">
              <a-input
                v-model:value="form.participatingDeptId"
                :maxLength="1000"
                placeholder="请输入参与部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="participatingDeptCode" label="参与部门CODE">
              <a-input
                v-model:value="form.participatingDeptCode"
                :maxLength="500"
                placeholder="请输入参与部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="participatingDeptName" label="参与部门">
              <a-input
                v-model:value="form.participatingDeptName"
                :maxLength="1000"
                placeholder="请输入参与部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="causeAnalysis" label="产生原因分析;或与目标差距分析">
              <a-input
                v-model:value="form.causeAnalysis"
                :maxLength="500"
                placeholder="请输入产生原因分析;或与目标差距分析"
              />
            </a-form-item>
          </a-col>
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deadline" label="截止时间">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择截止时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="expectedResult" label="预期改进效果">
              <a-input
                v-model:value="form.expectedResult"
                :maxLength="500"
                placeholder="请输入预期改进效果"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="actionId" label="公共行动项ID">
              <a-input
                v-model:value="form.actionId"
                :maxLength="64"
                placeholder="请输入公共行动项ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="progress" label="总体进度">
              <a-input-number
                v-model:value="form.progress"
                :min="0"
                :max="999"
                :precision="0"
                :step="1"
                placeholder="请输入总体进度"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="riskStatus" label="风险状态">
              <a-input
                v-model:value="form.riskStatus"
                :maxLength="10"
                placeholder="请输入风险状态"
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
            <a-form-item name="expectedDeliverable" label="交付物">
              <a-input
                v-model:value="form.expectedDeliverable"
                :maxLength="128"
                placeholder="请输入交付物"
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
                table-name="QMS_MR_IMPROVEMENT"
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
import { useQmsMrImprovementForm, emits } from './ts/QmsMrImprovementForm'; // 引入表单ts
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
} = useQmsMrImprovementForm({
  props: props,
  emit: emit
});
</script>

