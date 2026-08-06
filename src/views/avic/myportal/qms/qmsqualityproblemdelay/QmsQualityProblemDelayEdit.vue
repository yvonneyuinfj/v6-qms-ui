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
            <a-form-item name="delayCode" label="延期编号">
              <a-input
                v-model:value="form.delayCode"
                :maxLength="128"
                :auto-focus="true"
                placeholder="请输入延期编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemId" label="质量问题ID">
              <a-input
                v-model:value="form.problemId"
                :maxLength="64"
                placeholder="请输入质量问题ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCode" label="质量问题反馈单的编号">
              <a-input
                v-model:value="form.problemCode"
                :maxLength="128"
                placeholder="请输入质量问题反馈单的编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemTitle" label="质量问题反馈单标题;系统自动，同步质量问题反馈单的标题">
              <a-input
                v-model:value="form.problemTitle"
                :maxLength="128"
                placeholder="请输入质量问题反馈单标题;系统自动，同步质量问题反馈单的标题"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="delayTitle" label="质量延期申请单标题;系统自动，关于xxx的延期申请">
              <a-input
                v-model:value="form.delayTitle"
                :maxLength="128"
                placeholder="请输入质量延期申请单标题;系统自动，关于xxx的延期申请"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="delayTimes" label="延期次数">
              <a-input-number
                v-model:value="form.delayTimes"
                :min="0"
                :max="9999999999"
                :precision="0"
                :step="1"
                placeholder="请输入延期次数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="originalCloseTime" label="原关闭时间">
              <a-date-picker
                v-model:value="form.originalCloseTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择原关闭时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="newCloseTime" label="申请关闭时间">
              <a-date-picker
                v-model:value="form.newCloseTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择申请关闭时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="delayReason" label="延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）">
              <a-input
                v-model:value="form.delayReason"
                :maxLength="512"
                placeholder="请输入延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选）"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemSummary" label="问题概述;系统自动，同步质量问题反馈单的问题概述">
              <a-input
                v-model:value="form.problemSummary"
                :maxLength="1024"
                placeholder="请输入问题概述;系统自动，同步质量问题反馈单的问题概述"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="currentProgress" label="当前工作进展">
              <a-input
                v-model:value="form.currentProgress"
                :maxLength="1024"
                placeholder="请输入当前工作进展"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="emergencyMeasure" label="应急措施">
              <a-input
                v-model:value="form.emergencyMeasure"
                :maxLength="1024"
                placeholder="请输入应急措施"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="delayReasonDetail" label="延期原因详细说明">
              <a-input
                v-model:value="form.delayReasonDetail"
                :maxLength="2000"
                placeholder="请输入延期原因详细说明"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ppmPlanCode" label="科研平台任务编号">
              <a-input
                v-model:value="form.ppmPlanCode"
                :maxLength="128"
                placeholder="请输入科研平台任务编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="型号;系统自动，同步质量问题反馈单的型号">
              <a-input
                v-model:value="form.model"
                :maxLength="128"
                placeholder="请输入型号;系统自动，同步质量问题反馈单的型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantStaffId" label="申请人ID">
              <a-input
                v-model:value="form.applicantStaffId"
                :maxLength="64"
                placeholder="请输入申请人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantStaffCode" label="申请人CODE">
              <a-input
                v-model:value="form.applicantStaffCode"
                :maxLength="10"
                placeholder="请输入申请人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantStaffName" label="申请人姓名">
              <a-input
                v-model:value="form.applicantStaffName"
                :maxLength="50"
                placeholder="请输入申请人姓名"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantDeptId" label="申请部门ID">
              <a-input
                v-model:value="form.applicantDeptId"
                :maxLength="64"
                placeholder="请输入申请部门ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantDeptCode" label="申请部门CODE">
              <a-input
                v-model:value="form.applicantDeptCode"
                :maxLength="10"
                placeholder="请输入申请部门CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="applicantDeptName" label="申请部门">
              <a-input
                v-model:value="form.applicantDeptName"
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
            <a-form-item name="forYear" label="所属年度;方便查询">
              <a-input
                v-model:value="form.forYear"
                :maxLength="10"
                placeholder="请输入所属年度;方便查询"
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
                table-name="QMS_QUALITY_PROBLEM_DELAY"
                @afterUpload="afterUploadEvent"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <QmsQualityProblemDelayMilestoneEdit ref="qmsQualityProblemDelayMilestoneEdit" :mainId="formId || form.id" />
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="保存" type="primary" :loading="loading" @click="saveForm">保存</a-button>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
</template>
<script lang="ts" setup>
import { useQmsQualityProblemDelayForm, emits } from './ts/QmsQualityProblemDelayForm'; // 引入表单ts
import QmsQualityProblemDelayMilestoneEdit from '@/views/avic/myportal/qms/qmsqualityproblemdelaymilestone/QmsQualityProblemDelayMilestoneEdit.vue'; // 引入子表组件

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
  qmsQualityProblemDelayMilestoneEdit
} = useQmsQualityProblemDelayForm({
  props: props,
  emit: emit
});
</script>
