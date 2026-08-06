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
        class="form-excel-style"
      >
        <a-row :gutter="0">
          <a-col v-bind="colLayout.cols">
            <a-form-item name="awardProjectName" label="项目名称">
              <a-input
                v-model:value="form.awardProjectName"
                :maxLength="256"
                :auto-focus="true"
                placeholder="请输入项目名称"
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
            <a-form-item name="participantCount" label="参与人员数量">
              <a-input-number
                v-model:value="form.participantCount"
                :min="0"
                :max="999999999999"
                :precision="0"
                :step="1"
                placeholder="请输入参与人员数量"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="economicBenefitEstimate" label="经济效益预估">
              <a-input
                v-model:value="form.economicBenefitEstimate"
                :maxLength="512"
                placeholder="请输入经济效益预估"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="awardType" label="奖励类型;部门、个人，可多选">
              <a-input
                v-model:value="form.awardType"
                :maxLength="50"
                placeholder="请输入奖励类型;部门、个人，可多选"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyReason" label="申报/推荐事由;说明事迹具体情况和每个奖励人员的作用和贡献.（限定不超过500字）事迹应包括时间、型号和产品名称、地点、人员和所在单位、事迹内容、取得的效果（如避免较大经济损失、指标改善明显，通过发现问题形成改进完善了体系标准得以推广应用等）。">
              <a-input
                v-model:value="form.applyReason"
                :maxLength="2000"
                placeholder="请输入申报/推荐事由;说明事迹具体情况和每个奖励人员的作用和贡献.（限定不超过500字）事迹应包括时间、型号和产品名称、地点、人员和所在单位、事迹内容、取得的效果（如避免较大经济损失、指标改善明显，通过发现问题形成改进完善了体系标准得以推广应用等）。"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="mainClauseName" label="引用条款">
              <a-input
                v-model:value="form.mainClauseName"
                :maxLength="256"
                placeholder="请输入引用条款"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="clauseLevel1Code" label="一级条款CODE">
              <a-input
                v-model:value="form.clauseLevel1Code"
                :maxLength="50"
                placeholder="请输入一级条款CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="clauseLevel2Code" label="二级条款CODE">
              <a-input
                v-model:value="form.clauseLevel2Code"
                :maxLength="50"
                placeholder="请输入二级条款CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="beforeEffectDesc" label="活动前效果">
              <a-input
                v-model:value="form.beforeEffectDesc"
                :maxLength="2000"
                placeholder="请输入活动前效果"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="afterEffectDesc" label="活动后效果">
              <a-input
                v-model:value="form.afterEffectDesc"
                :maxLength="2000"
                placeholder="请输入活动后效果"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityDeedDesc" label="质量事迹简介;不超过400字">
              <a-input
                v-model:value="form.qualityDeedDesc"
                :maxLength="2000"
                placeholder="请输入质量事迹简介;不超过400字"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="advancedToolMethod" label="运用的先进质量工具或方法">
              <a-input
                v-model:value="form.advancedToolMethod"
                :maxLength="2000"
                placeholder="请输入运用的先进质量工具或方法"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="optimizedSystemFileName" label="优化的流程体系文件名称">
              <a-input
                v-model:value="form.optimizedSystemFileName"
                :maxLength="2000"
                placeholder="请输入优化的流程体系文件名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="optimizedSystemFileNameNo" label="优化的流程体系文件编号">
              <a-input
                v-model:value="form.optimizedSystemFileNameNo"
                :maxLength="2000"
                placeholder="请输入优化的流程体系文件编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rewardCode" label="奖励编号">
              <a-input
                v-model:value="form.rewardCode"
                :maxLength="50"
                placeholder="请输入奖励编号"
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
            <a-form-item name="applyStaffId" label="申报人ID">
              <a-input
                v-model:value="form.applyStaffId"
                :maxLength="64"
                placeholder="请输入申报人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyStaffCode" label="申报人CODE">
              <a-input
                v-model:value="form.applyStaffCode"
                :maxLength="10"
                placeholder="请输入申报人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyStaffName" label="申报人">
              <a-input
                v-model:value="form.applyStaffName"
                :maxLength="50"
                placeholder="请输入申报人"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptId" label="申报单位ID">
              <a-input
                v-model:value="form.applyDeptId"
                :maxLength="64"
                placeholder="请输入申报单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptCode" label="申报单位CODE">
              <a-input
                v-model:value="form.applyDeptCode"
                :maxLength="10"
                placeholder="请输入申报单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyDeptName" label="申报单位">
              <a-input
                v-model:value="form.applyDeptName"
                :maxLength="128"
                placeholder="请输入申报单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applyTime" label="申报时间">
              <a-date-picker
                v-model:value="form.applyTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择申报时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityInfoReportResult" label="质量信息上报确认;Y\N\NA">
              <a-input
                v-model:value="form.qualityInfoReportResult"
                :maxLength="10"
                placeholder="请输入质量信息上报确认;Y\N\NA"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="zeroCloseResult" label="按期归零或关闭确认;Y\N\NA">
              <a-input
                v-model:value="form.zeroCloseResult"
                :maxLength="10"
                placeholder="请输入按期归零或关闭确认;Y\N\NA"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qmsComplianceResult" label="体系符合性确认;Y\N\NA">
              <a-input
                v-model:value="form.qmsComplianceResult"
                :maxLength="10"
                placeholder="请输入体系符合性确认;Y\N\NA"
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
                table-name="QMS_QUALITY_REWARD"
                @afterUpload="afterUploadEvent"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <QmsQualityRewardContributeorEdit ref="qmsQualityRewardContributeorEdit" :mainId="formId || form.id" />
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="保存" type="primary" :loading="loading" @click="saveForm">保存</a-button>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
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
  rules,
  layout,
  colLayout,
  loading,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  saveForm,
  closeModal,
  qmsQualityRewardContributeorEdit
} = useQmsQualityRewardForm({
  props: props,
  emit: emit
});
</script>
