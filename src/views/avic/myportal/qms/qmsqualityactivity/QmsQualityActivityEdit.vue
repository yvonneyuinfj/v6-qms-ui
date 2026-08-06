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
            <a-form-item name="activityCode" label="活动编号;自动生成，QC/BZ/GG年份号-3位流水号">
              <a-input
                v-model:value="form.activityCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入活动编号;自动生成，QC/BZ/GG年份号-3位流水号"
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
            <a-form-item name="activityType" label="活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目">
              <a-input
                v-model:value="form.activityType"
                :maxLength="50"
                placeholder="请输入活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="activityName" label="课题/班组/项目名称">
              <a-input
                v-model:value="form.activityName"
                :maxLength="256"
                placeholder="请输入课题/班组/项目名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="membebrId" label="成员ID">
              <a-input
                v-model:value="form.membebrId"
                :maxLength="3200"
                placeholder="请输入成员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberCode" label="成员CODE">
              <a-input
                v-model:value="form.memberCode"
                :maxLength="256"
                placeholder="请输入成员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberName" label="成员">
              <a-input
                v-model:value="form.memberName"
                :maxLength="512"
                placeholder="请输入成员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="memberCount" label="人数">
              <a-input-number
                v-model:value="form.memberCount"
                :min="0"
                :max="9999"
                :precision="0"
                :step="1"
                placeholder="请输入人数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="groupName" label="小组名称;QC小组使用">
              <a-input
                v-model:value="form.groupName"
                :maxLength="256"
                placeholder="请输入小组名称;QC小组使用"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="deadline" label="活动结束时间;月度进展生成截止依据">
              <a-date-picker
                v-model:value="form.deadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择活动结束时间;月度进展生成截止依据"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyStaffId" label="申请人ID">
              <a-input
                v-model:value="form.applyStaffId"
                :maxLength="64"
                placeholder="请输入申请人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyStaffCode" label="申请人CODE">
              <a-input
                v-model:value="form.applyStaffCode"
                :maxLength="10"
                placeholder="请输入申请人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyStaffName" label="申请人姓名">
              <a-input
                v-model:value="form.applyStaffName"
                :maxLength="50"
                placeholder="请输入申请人姓名"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptId" label="申请部门ID">
              <a-input
                v-model:value="form.applyDeptId"
                :maxLength="64"
                placeholder="请输入申请部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptCode" label="申请部门CODE">
              <a-input
                v-model:value="form.applyDeptCode"
                :maxLength="10"
                placeholder="请输入申请部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptName" label="申请部门">
              <a-input
                v-model:value="form.applyDeptName"
                :maxLength="128"
                placeholder="请输入申请部门"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyTime" label="申请时间">
              <a-date-picker
                v-model:value="form.applyTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择申请时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffId" label="组长/负责人ID">
              <a-input
                v-model:value="form.leaderStaffId"
                :maxLength="64"
                placeholder="请输入组长/负责人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffCode" label="组长/负责人CODE">
              <a-input
                v-model:value="form.leaderStaffCode"
                :maxLength="10"
                placeholder="请输入组长/负责人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="leaderStaffName" label="组长/负责人">
              <a-input
                v-model:value="form.leaderStaffName"
                :maxLength="50"
                placeholder="请输入组长/负责人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelProject" label="涉及型号/项目">
              <a-input
                v-model:value="form.modelProject"
                :maxLength="1000"
                placeholder="请输入涉及型号/项目"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="topicType" label="课题类型;QC小组：问题解决型/创新型">
              <a-input
                v-model:value="form.topicType"
                :maxLength="50"
                placeholder="请输入课题类型;QC小组：问题解决型/创新型"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="topicSource" label="课题来源;QC小组：指令型课题、指导型课题、自选课题">
              <a-input
                v-model:value="form.topicSource"
                :maxLength="50"
                placeholder="请输入课题来源;QC小组：指令型课题、指导型课题、自选课题"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="selectionReason" label="选题理由;QC小组填写">
              <a-input
                v-model:value="form.selectionReason"
                :maxLength="1000"
                placeholder="请输入选题理由;QC小组填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="activityGoal" label="活动目标">
              <a-input
                v-model:value="form.activityGoal"
                :maxLength="1000"
                placeholder="请输入活动目标"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="projectCategory" label="攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他">
              <a-input
                v-model:value="form.projectCategory"
                :maxLength="50"
                placeholder="请输入攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="projectSource" label="项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他">
              <a-input
                v-model:value="form.projectSource"
                :maxLength="50"
                placeholder="请输入项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="teamBasicInfo" label="班组基本情况;质量信得过班组">
              <a-input
                v-model:value="form.teamBasicInfo"
                :maxLength="2000"
                placeholder="请输入班组基本情况;质量信得过班组"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="requirmentIdentification" label="识别需求;质量信得过班组">
              <a-input
                v-model:value="form.requirmentIdentification"
                :maxLength="2000"
                placeholder="请输入识别需求;质量信得过班组"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="objectiveDefinition" label="明确目标;质量信得过班组">
              <a-input
                v-model:value="form.objectiveDefinition"
                :maxLength="2000"
                placeholder="请输入明确目标;质量信得过班组"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="effectiveImplementation" label="有效实施;质量信得过班组">
              <a-input
                v-model:value="form.effectiveImplementation"
                :maxLength="2000"
                placeholder="请输入有效实施;质量信得过班组"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="effectCheck" label="成效检查;质量信得过班组">
              <a-input
                v-model:value="form.effectCheck"
                :maxLength="2000"
                placeholder="请输入成效检查;质量信得过班组"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="projectIntro" label="攻关项目简介;攻关项目">
              <a-input
                v-model:value="form.projectIntro"
                :maxLength="2000"
                placeholder="请输入攻关项目简介;攻关项目"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="projectGoal" label="攻关目标;攻关项目">
              <a-input
                v-model:value="form.projectGoal"
                :maxLength="2000"
                placeholder="请输入攻关目标;攻关项目"
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
                table-name="QMS_QUALITY_ACTIVITY"
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
import { useQmsQualityActivityForm, emits } from './ts/QmsQualityActivityForm'; // 引入表单ts
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
} = useQmsQualityActivityForm({
  props: props,
  emit: emit
});
</script>

