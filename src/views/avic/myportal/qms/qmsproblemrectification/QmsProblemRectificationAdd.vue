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
            <a-form-item name="rectificationCode" label="整改编号">
              <a-input
                v-model:value="form.rectificationCode"
                :maxLength="50"
                :auto-focus="true"
                placeholder="请输入整改编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="forYear" label="所属年份;年度查询">
              <a-input
                v-model:value="form.forYear"
                :maxLength="10"
                placeholder="请输入所属年份;年度查询"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="correctionType" label="纠正类型;10纠正；20纠正计划">
              <a-input
                v-model:value="form.correctionType"
                :maxLength="10"
                placeholder="请输入纠正类型;10纠正；20纠正计划"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="correctionContent" label="纠正或纠正计划;责任人填写">
              <a-input
                v-model:value="form.correctionContent"
                :maxLength="2000"
                placeholder="请输入纠正或纠正计划;责任人填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="causeAnalysis" label="原因分析;责任人填写">
              <a-input
                v-model:value="form.causeAnalysis"
                :maxLength="2000"
                placeholder="请输入原因分析;责任人填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="correctiveActionType" label="纠正措施类型;10纠正措施；20纠正措施计划">
              <a-input
                v-model:value="form.correctiveActionType"
                :maxLength="10"
                placeholder="请输入纠正措施类型;10纠正措施；20纠正措施计划"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="correctiveAction" label="纠正措施或计划;责任人填写">
              <a-input
                v-model:value="form.correctiveAction"
                :maxLength="2000"
                placeholder="请输入纠正措施或计划;责任人填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="horizontalCheck" label="举一反三情况;责任人填写">
              <a-input
                v-model:value="form.horizontalCheck"
                :maxLength="2000"
                placeholder="请输入举一反三情况;责任人填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationResult" label="整改完成情况;整改完成结果和效果说明">
              <a-input
                v-model:value="form.rectificationResult"
                :maxLength="2000"
                placeholder="请输入整改完成情况;整改完成结果和效果说明"
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
            <a-form-item name="completeTime" label="整改完成时间">
              <a-date-picker
                v-model:value="form.completeTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择整改完成时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="submitTime" label="提交时间">
              <a-date-picker
                v-model:value="form.submitTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择提交时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceType" label="来源类型;字典：质量问题、内部审核（不符合项）、质量监督（问题）、资质管理（不符合项或问题项）、管理评审、不合格品（不合格审理）、举手报告">
              <a-input
                v-model:value="form.sourceType"
                :maxLength="50"
                placeholder="请输入来源类型;字典：质量问题、内部审核（不符合项）、质量监督（问题）、资质管理（不符合项或问题项）、管理评审、不合格品（不合格审理）、举手报告"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceId" label="来源业务ID;来源问题主键">
              <a-input
                v-model:value="form.sourceId"
                :maxLength="64"
                placeholder="请输入来源业务ID;来源问题主键"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceCode" label="来源问题编号;来源业务问题编号">
              <a-input
                v-model:value="form.sourceCode"
                :maxLength="50"
                placeholder="请输入来源问题编号;来源业务问题编号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="sourceName" label="来源问题名称;用于列表展示">
              <a-input
                v-model:value="form.sourceName"
                :maxLength="128"
                placeholder="请输入来源问题名称;用于列表展示"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemDesc" label="问题描述;从来源业务复制">
              <a-input
                v-model:value="form.problemDesc"
                :maxLength="512"
                placeholder="请输入问题描述;从来源业务复制"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="problemCategory" label="问题分类;字典">
              <a-input
                v-model:value="form.problemCategory"
                :maxLength="10"
                placeholder="请输入问题分类;字典"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationRequirement" label="整改要求;问题提出部门填写">
              <a-input
                v-model:value="form.rectificationRequirement"
                :maxLength="512"
                placeholder="请输入整改要求;问题提出部门填写"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="foundTime" label="问题发现时间">
              <a-date-picker
                v-model:value="form.foundTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择问题发现时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptId" label="整改单位ID">
              <a-input
                v-model:value="form.rectificationDeptId"
                :maxLength="64"
                placeholder="请输入整改单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptCode" label="整改单位CODE">
              <a-input
                v-model:value="form.rectificationDeptCode"
                :maxLength="10"
                placeholder="请输入整改单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="rectificationDeptName" label="整改单位">
              <a-input
                v-model:value="form.rectificationDeptName"
                :maxLength="128"
                placeholder="请输入整改单位"
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
            <a-form-item name="rectificationDeadline" label="整改期限">
              <a-date-picker
                v-model:value="form.rectificationDeadline"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择整改期限"
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
                table-name="QMS_PROBLEM_RECTIFICATION"
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
import { useQmsProblemRectificationForm, emits } from './ts/QmsProblemRectificationForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  mainId: {
    // 主表选中项的id
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
} = useQmsProblemRectificationForm({
  props: props,
  emit: emit
});
</script>
