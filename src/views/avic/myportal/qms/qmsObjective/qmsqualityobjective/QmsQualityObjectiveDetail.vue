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
            <a-form-item name="objectiveCode" label="目标编码">
              <a-input v-model:value="form.objectiveCode" :auto-focus="true" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveName" label="目标名称">
              <a-input v-model:value="form.objectiveName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveContent" label="目标内容">
              <a-input v-model:value="form.objectiveContent" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveLevel" label="目标层级;INST所级DEPT部门级">
              <a-input v-model:value="form.objectiveLevel" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年度">
              <a-input v-model:value="form.forYear" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="责任部门ID">
              <a-input v-model:value="form.responsibleDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="责任部门编号">
              <a-input v-model:value="form.responsibleDeptCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="责任部门">
              <a-input v-model:value="form.responsibleDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="suggestAcceptDeptId" label="建议承接部门IDS;所级目标字段">
              <a-input v-model:value="form.suggestAcceptDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="suggestAcceptDeptCode" label="建议承接部门CODS;所级目标字段">
              <a-input v-model:value="form.suggestAcceptDeptCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="suggestAcceptDeptName" label="建议承接部门;所级目标字段">
              <a-input v-model:value="form.suggestAcceptDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="dataStatCycle" label="统计周期;MONTH月度，QUARTER季度，HALFYEAR半年，YEAR年度，REALTIME根据系统数据动态更新">
              <a-input v-model:value="form.dataStatCycle" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="indicatorType" label="指标类型;QUANT定量；QUAL:定性">
              <a-input v-model:value="form.indicatorType" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="startTime" label="开始日期">
              <a-date-picker
                v-model:value="form.startTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deadline" label="截止日期">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="status" label="业务状态">
              <a-input v-model:value="form.status" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processStatus" label="流程状态">
              <a-input v-model:value="form.processStatus" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="targetValue" label="目标值">
              <a-input v-model:value="form.targetValue" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="targetUnit" label="目标单位;百分比，次，项，天等">
              <a-input v-model:value="form.targetUnit" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completionRate" label="完成率">
              <a-input-number
                v-model:value="form.completionRate"
min="0"
                :max="999.99"
                :precision="2"
                :step="0.01"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="excellentValue" label="卓越值">
              <a-input v-model:value="form.excellentValue" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="baselineValue" label="基准值">
              <a-input v-model:value="form.baselineValue" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="actualValue" label="实际完成值">
              <a-input v-model:value="form.actualValue" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completionResult" label="完成结论;已完成，基本完成，未完成等">
              <a-input v-model:value="form.completionResult" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="judgementStandard" label="完成判定标准;如何判定完成">
              <a-input v-model:value="form.judgementStandard" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="riskStatus" label="风险状态;正常、预警、逾期、风险">
              <a-input v-model:value="form.riskStatus" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="latestFeedbackTime" label="最近反馈时间;系统反写">
              <a-date-picker
                v-model:value="form.latestFeedbackTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="publishTime" label="发布时间;所级目标字段">
              <a-date-picker
                v-model:value="form.publishTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="acceptedDeptId" label="已承接部门ID;所级目标字段">
              <a-input v-model:value="form.acceptedDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="acceptedDeptName" label="已承接部门;所级目标字段">
              <a-input v-model:value="form.acceptedDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="acceptedDeptCount" label="已承接部门数量;所级目标字段">
              <a-input-number
                v-model:value="form.acceptedDeptCount"
min="0"
                :max="999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completedDeptId" label="已完成部门ID;所级目标字段">
              <a-input v-model:value="form.completedDeptId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completedDeptName" label="已完成部门;所级目标字段">
              <a-input v-model:value="form.completedDeptName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completedDeptCount" label="已完成部门数;所级目标字段">
              <a-input-number
                v-model:value="form.completedDeptCount"
min="0"
                :max="999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qcUserId" label="部门质控员ID;部门级目标字段">
              <a-input v-model:value="form.qcUserId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qcUserCode" label="部门质控员CODE;部门级目标字段">
              <a-input v-model:value="form.qcUserCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qcUserName" label="部门质控员;部门级目标字段">
              <a-input v-model:value="form.qcUserName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleLeaderId" label="责任领导ID;部门级目标字段">
              <a-input v-model:value="form.responsibleLeaderId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleLeaderCode" label="责任领导CODE;部门级目标字段">
              <a-input v-model:value="form.responsibleLeaderCode" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleLeaderName" label="责任领导;部门级目标字段">
              <a-input v-model:value="form.responsibleLeaderName" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processInstId" label="审批流程实例ID;部门级目标字段">
              <a-input v-model:value="form.processInstId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="approvalTime" label="审批通过时间;部门级目标字段">
              <a-date-picker
                v-model:value="form.approvalTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="planCount" label="计划总数;部门级目标字段">
              <a-input-number
                v-model:value="form.planCount"
min="0"
                :max="9999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="completedPlanCount" label="已完成计划数;部门级目标字段">
              <a-input-number
                v-model:value="form.completedPlanCount"
min="0"
                :max="9999"
                :precision="0"
                :step="1"
                disabled
              />
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
          <a-col v-bind="colLayout.cols">
            <a-form-item name="parentId" label="父节点ID">
              <a-input v-model:value="form.parentId" disabled />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="treeSort" label="本级排序">
              <a-input-number
                v-model:value="form.treeSort"
min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                disabled
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="expectedDeliverable" label="交付物">
              <a-input v-model:value="form.expectedDeliverable" disabled />
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
import { useQmsQualityObjectiveForm, emits } from './ts/QmsQualityObjectiveForm'; // 引入表单ts
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
} = useQmsQualityObjectiveForm({
  props: props,
  emit: emit
});
</script>


