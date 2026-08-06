<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      layout="horizontal"
      class="form-excel-style"
    >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('awardProjectName')">
          <a-form-item name="awardProjectName" label="项目名称" :rules="fieldRequired('awardProjectName')" has-feedback>
            <a-input
              v-model:value="form.awardProjectName"
              :auto-focus="true"
              :disabled="fieldDisabled('awardProjectName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('model')">
          <a-form-item name="model" label="涉及型号" :rules="fieldRequired('model')" has-feedback>
            <a-input
              v-model:value="form.model"
              :disabled="fieldDisabled('model')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('participantCount')">
          <a-form-item name="participantCount" label="参与人员数量" :rules="fieldRequired('participantCount')" has-feedback>
            <a-input-number
              v-model:value="form.participantCount"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('participantCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('economicBenefitEstimate')">
          <a-form-item name="economicBenefitEstimate" label="经济效益预估" :rules="fieldRequired('economicBenefitEstimate')" has-feedback>
            <a-input
              v-model:value="form.economicBenefitEstimate"
              :disabled="fieldDisabled('economicBenefitEstimate')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('awardType')">
          <a-form-item name="awardType" label="奖励类型;部门、个人，可多选" :rules="fieldRequired('awardType')" has-feedback>
            <a-input
              v-model:value="form.awardType"
              :disabled="fieldDisabled('awardType')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyReason')">
          <a-form-item name="applyReason" label="申报/推荐事由;说明事迹具体情况和每个奖励人员的作用和贡献.（限定不超过500字）事迹应包括时间、型号和产品名称、地点、人员和所在单位、事迹内容、取得的效果（如避免较大经济损失、指标改善明显，通过发现问题形成改进完善了体系标准得以推广应用等）。" :rules="fieldRequired('applyReason')" has-feedback>
            <a-input
              v-model:value="form.applyReason"
              :disabled="fieldDisabled('applyReason')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('mainClauseName')">
          <a-form-item name="mainClauseName" label="引用条款" :rules="fieldRequired('mainClauseName')" has-feedback>
            <a-input
              v-model:value="form.mainClauseName"
              :disabled="fieldDisabled('mainClauseName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('clauseLevel1Code')">
          <a-form-item name="clauseLevel1Code" label="一级条款CODE" :rules="fieldRequired('clauseLevel1Code')" has-feedback>
            <a-input
              v-model:value="form.clauseLevel1Code"
              :disabled="fieldDisabled('clauseLevel1Code')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('clauseLevel2Code')">
          <a-form-item name="clauseLevel2Code" label="二级条款CODE" :rules="fieldRequired('clauseLevel2Code')" has-feedback>
            <a-input
              v-model:value="form.clauseLevel2Code"
              :disabled="fieldDisabled('clauseLevel2Code')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('beforeEffectDesc')">
          <a-form-item name="beforeEffectDesc" label="活动前效果" :rules="fieldRequired('beforeEffectDesc')" has-feedback>
            <a-input
              v-model:value="form.beforeEffectDesc"
              :disabled="fieldDisabled('beforeEffectDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('afterEffectDesc')">
          <a-form-item name="afterEffectDesc" label="活动后效果" :rules="fieldRequired('afterEffectDesc')" has-feedback>
            <a-input
              v-model:value="form.afterEffectDesc"
              :disabled="fieldDisabled('afterEffectDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualityDeedDesc')">
          <a-form-item name="qualityDeedDesc" label="质量事迹简介;不超过400字" :rules="fieldRequired('qualityDeedDesc')" has-feedback>
            <a-input
              v-model:value="form.qualityDeedDesc"
              :disabled="fieldDisabled('qualityDeedDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('advancedToolMethod')">
          <a-form-item name="advancedToolMethod" label="运用的先进质量工具或方法" :rules="fieldRequired('advancedToolMethod')" has-feedback>
            <a-input
              v-model:value="form.advancedToolMethod"
              :disabled="fieldDisabled('advancedToolMethod')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('optimizedSystemFileName')">
          <a-form-item name="optimizedSystemFileName" label="优化的流程体系文件名称" :rules="fieldRequired('optimizedSystemFileName')" has-feedback>
            <a-input
              v-model:value="form.optimizedSystemFileName"
              :disabled="fieldDisabled('optimizedSystemFileName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('optimizedSystemFileNameNo')">
          <a-form-item name="optimizedSystemFileNameNo" label="优化的流程体系文件编号" :rules="fieldRequired('optimizedSystemFileNameNo')" has-feedback>
            <a-input
              v-model:value="form.optimizedSystemFileNameNo"
              :disabled="fieldDisabled('optimizedSystemFileNameNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('rewardCode')">
          <a-form-item name="rewardCode" label="奖励编号" :rules="fieldRequired('rewardCode')" has-feedback>
            <a-input
              v-model:value="form.rewardCode"
              :disabled="fieldDisabled('rewardCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('forYear')">
          <a-form-item name="forYear" label="所属年份" :rules="fieldRequired('forYear')" has-feedback>
            <a-input
              v-model:value="form.forYear"
              :disabled="fieldDisabled('forYear')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyStaffId')">
          <a-form-item name="applyStaffId" label="申报人ID" :rules="fieldRequired('applyStaffId')" has-feedback>
            <a-input
              v-model:value="form.applyStaffId"
              :disabled="fieldDisabled('applyStaffId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyStaffCode')">
          <a-form-item name="applyStaffCode" label="申报人CODE" :rules="fieldRequired('applyStaffCode')" has-feedback>
            <a-input
              v-model:value="form.applyStaffCode"
              :disabled="fieldDisabled('applyStaffCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyStaffName')">
          <a-form-item name="applyStaffName" label="申报人" :rules="fieldRequired('applyStaffName')" has-feedback>
            <a-input
              v-model:value="form.applyStaffName"
              :disabled="fieldDisabled('applyStaffName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyDeptId')">
          <a-form-item name="applyDeptId" label="申报单位ID" :rules="fieldRequired('applyDeptId')" has-feedback>
            <a-input
              v-model:value="form.applyDeptId"
              :disabled="fieldDisabled('applyDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyDeptCode')">
          <a-form-item name="applyDeptCode" label="申报单位CODE" :rules="fieldRequired('applyDeptCode')" has-feedback>
            <a-input
              v-model:value="form.applyDeptCode"
              :disabled="fieldDisabled('applyDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyDeptName')">
          <a-form-item name="applyDeptName" label="申报单位" :rules="fieldRequired('applyDeptName')" has-feedback>
            <a-input
              v-model:value="form.applyDeptName"
              :disabled="fieldDisabled('applyDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('applyTime')">
          <a-form-item name="applyTime" label="申报时间" :rules="fieldRequired('applyTime')" has-feedback>
            <a-date-picker
              v-model:value="form.applyTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('applyTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualityInfoReportResult')">
          <a-form-item name="qualityInfoReportResult" label="质量信息上报确认;Y\N\NA" :rules="fieldRequired('qualityInfoReportResult')" has-feedback>
            <a-input
              v-model:value="form.qualityInfoReportResult"
              :disabled="fieldDisabled('qualityInfoReportResult')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('zeroCloseResult')">
          <a-form-item name="zeroCloseResult" label="按期归零或关闭确认;Y\N\NA" :rules="fieldRequired('zeroCloseResult')" has-feedback>
            <a-input
              v-model:value="form.zeroCloseResult"
              :disabled="fieldDisabled('zeroCloseResult')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qmsComplianceResult')">
          <a-form-item name="qmsComplianceResult" label="体系符合性确认;Y\N\NA" :rules="fieldRequired('qmsComplianceResult')" has-feedback>
            <a-input
              v-model:value="form.qmsComplianceResult"
              :disabled="fieldDisabled('qmsComplianceResult')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('secretLevel')">
          <a-form-item name="secretLevel" label="密级" :rules="fieldRequired('secretLevel')" has-feedback>
            <a-select
              v-model:value="form.secretLevel"
              :get-popup-container="triggerNode => triggerNode.parentNode"
              option-filter-prop="children"
              :show-search="true"
              :allow-clear="true"
              :disabled="fieldDisabled('secretLevel')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynDeleted')">
          <a-form-item name="ynDeleted" label="是否已删除" :rules="fieldRequired('ynDeleted')" has-feedback>
            <a-input
              v-model:value="form.ynDeleted"
              :disabled="fieldDisabled('ynDeleted')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('remark')">
          <a-form-item name="remark" label="备注" :rules="fieldRequired('remark')" has-feedback>
            <a-input
              v-model:value="form.remark"
              :disabled="fieldDisabled('remark')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('orderBy')">
          <a-form-item name="orderBy" label="排序" :rules="fieldRequired('orderBy')" has-feedback>
            <a-input-number
              v-model:value="form.orderBy"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('orderBy')"
            />
          </a-form-item>
        </a-col>
      <a-col v-bind="colLayout.cols2">
        <a-form-item label="上传附件" type="attachment" :rules="attachmentRequired('uploadFile')">
          <AvicUploader
            element-id="1"
            ref="uploadFile"
            label="上传附件"
            :form-id="form.id"
            :bpm-instance-object="props.bpmInstanceObject"
            :form-secret-level="form.secretLevel"
            :allow-download="true"
            table-name="QMS_QUALITY_REWARD"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
    <QmsQualityRewardContributeorEdit
      v-if="fieldVisible('QMS_QUALITY_REWARD_CONTRIBUTEOR')"
      ref="qmsQualityRewardContributeorEdit"
      :mainId="formId || form.id"
      :bpmInstanceObject="bpmInstanceObject"
      :bpmParams="bpmParams"
    />
    <!--子表按钮的流程解析，用于权限控制-->
    <a-button
      class="eform_subtable_bpm_button_auth table-handle-button"
      for="addSubTableButton"
      label="添加"
      title="添加"
      style="display: none"
    >
      添加
    </a-button>
    <a-button
      class="eform_subtable_bpm_button_auth table-handle-button"
      for="deleteSubTableButton"
      label="删除"
      title="删除"
      style="display: none"
    >
      删除
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import { useQmsQualityRewardForm, emits } from './ts/QmsQualityRewardForm'; // 引入表单ts
import QmsQualityRewardContributeorEdit from '@/views/avic/myportal/qms/qmsqualityrewardcontributeor/QmsQualityRewardContributeorEdit.vue'; // 引入子表组件

const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  bpmInstanceObject: {
    type: Object
  },
  // 以弹窗方式打开流程详情页时，以组件传参时使用
  params: {
    type: Object,
    required: false,
    default: null
  },
  // 启动流程后，刷新列表的回调函数
  bpmOperatorRefresh: {
    type: Function
  }
});
const emit = defineEmits(emits);
const {
  form,
  formRef,
  bpmParams,
  layout,
  colLayout,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  attachmentRequired,
  qmsQualityRewardContributeorEdit,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsQualityRewardForm({
  props: props,
  emit: emit
});
defineExpose({
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
});
</script>


