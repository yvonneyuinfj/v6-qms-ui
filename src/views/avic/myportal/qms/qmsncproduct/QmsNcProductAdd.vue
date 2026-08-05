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
        class="form-excel-style"
      >
        <a-row>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewCode" label="审理单编号">
              <a-input
                v-model:value="form.reviewCode"
                :maxLength="256"
                :auto-focus="true"
                placeholder="请输入审理单编号;编号方法：ZCJ26a＋年代号（四位数）＋型号＋责任单位代号（三位数）＋流水号（三位数）"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewSecretLevel" label="审理单密级">
              <a-input
                v-model:value="form.reviewSecretLevel"
                :maxLength="10"
                placeholder="请输入审理单密级"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reportTime" label="日期">
              <a-date-picker
                v-model:value="form.reportTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择日期"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="model" label="型号">
              <a-input
                v-model:value="form.model"
                :maxLength="128"
                placeholder="请输入型号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="partName" label="零件名称">
              <a-input
                v-model:value="form.partName"
                :maxLength="128"
                placeholder="请输入零件名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="partDrawingNo" label="零件图号">
              <a-input
                v-model:value="form.partDrawingNo"
                :maxLength="128"
                placeholder="请输入零件图号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="assemblyName" label="组件名称">
              <a-input
                v-model:value="form.assemblyName"
                :maxLength="128"
                placeholder="请输入组件名称"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="assemblyDrawingNo" label="组件图号">
              <a-input
                v-model:value="form.assemblyDrawingNo"
                :maxLength="128"
                placeholder="请输入组件图号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="routingCardNo" label="流水卡号">
              <a-input
                v-model:value="form.routingCardNo"
                :maxLength="128"
                placeholder="请输入流水卡号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="batchNo" label="批次号">
              <a-input
                v-model:value="form.batchNo"
                :maxLength="128"
                placeholder="请输入批次号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="componentSerialNo" label="零组件序号">
              <a-input
                v-model:value="form.componentSerialNo"
                :maxLength="128"
                placeholder="请输入零组件序号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="processNo" label="工序号">
              <a-input
                v-model:value="form.processNo"
                :maxLength="128"
                placeholder="请输入工序号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="heatBatchNo" label="炉批号">
              <a-input
                v-model:value="form.heatBatchNo"
                :maxLength="128"
                placeholder="请输入炉批号"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ncCategory" label="类别;Ⅰ类;Ⅱ类;Ⅲ类">
              <a-input
                v-model:value="form.ncCategory"
                :maxLength="10"
                placeholder="请输入类别;Ⅰ类;Ⅱ类;Ⅲ类"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="quantity" label="数量">
              <a-input-number
                v-model:value="form.quantity"
                :min="0"
                :max="9999999999.99"
                :precision="2"
                :step="0.01"
                placeholder="请输入数量"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="totalPageCount" label="总页数">
              <a-input-number
                v-model:value="form.totalPageCount"
                :min="0"
                :max="9999999999"
                :precision="0"
                :step="1"
                placeholder="请输入总页数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="issuePageCount" label="问题页数">
              <a-input-number
                v-model:value="form.issuePageCount"
                :min="0"
                :max="9999999999"
                :precision="0"
                :step="1"
                placeholder="请输入问题页数"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="techSpecReq" label="图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX">
              <a-input
                v-model:value="form.techSpecReq"
                :maxLength="512"
                placeholder="请输入图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ncDescreption" label="不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页）">
              <a-input
                v-model:value="form.ncDescreption"
                :maxLength="512"
                placeholder="请输入不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页）"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorId" label="检验员ID">
              <a-input
                v-model:value="form.inspectorId"
                :maxLength="64"
                placeholder="请输入检验员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorCode" label="检验员CODE">
              <a-input
                v-model:value="form.inspectorCode"
                :maxLength="10"
                placeholder="请输入检验员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectorName" label="检验员NAME">
              <a-input
                v-model:value="form.inspectorName"
                :maxLength="20"
                placeholder="请输入检验员NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectionDeptLeaderId" label="检验中心领导ID">
              <a-input
                v-model:value="form.inspectionDeptLeaderId"
                :maxLength="64"
                placeholder="请输入检验中心领导ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectionDeptLeaderCode" label="检验中心领导CODE">
              <a-input
                v-model:value="form.inspectionDeptLeaderCode"
                :maxLength="10"
                placeholder="请输入检验中心领导CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="inspectionDeptLeaderName" label="检验中心领导姓名">
              <a-input
                v-model:value="form.inspectionDeptLeaderName"
                :maxLength="20"
                placeholder="请输入检验中心领导姓名"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="causeCategory" label="不合格原因分类;人、机、料、法、环、测、设计、其他">
              <a-input
                v-model:value="form.causeCategory"
                :maxLength="10"
                placeholder="请输入不合格原因分类;人、机、料、法、环、测、设计、其他"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="causeAnalysis" label="不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类">
              <a-input
                v-model:value="form.causeAnalysis"
                :maxLength="2000"
                placeholder="请输入不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="correctiveMeasure" label="纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正">
              <a-input
                v-model:value="form.correctiveMeasure"
                :maxLength="2000"
                placeholder="请输入纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptId" label="责任单位ID">
              <a-input
                v-model:value="form.responsibleDeptId"
                :maxLength="256"
                placeholder="请输入责任单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptCode" label="责任单位CODE">
              <a-input
                v-model:value="form.responsibleDeptCode"
                :maxLength="256"
                placeholder="请输入责任单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptName" label="责任单位NAME">
              <a-input
                v-model:value="form.responsibleDeptName"
                :maxLength="256"
                placeholder="请输入责任单位NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderId" label="责任单位ID">
              <a-input
                v-model:value="form.responsibleDeptLeaderId"
                :maxLength="256"
                placeholder="请输入责任单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderCode" label="责任单位CODE">
              <a-input
                v-model:value="form.responsibleDeptLeaderCode"
                :maxLength="256"
                placeholder="请输入责任单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleDeptLeaderName" label="责任单位NAME">
              <a-input
                v-model:value="form.responsibleDeptLeaderName"
                :maxLength="256"
                placeholder="请输入责任单位NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSupervisorId" label="责任单位主管ID">
              <a-input
                v-model:value="form.responsibleSupervisorId"
                :maxLength="256"
                placeholder="请输入责任单位主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSupervisorCode" label="责任单位主管CODE">
              <a-input
                v-model:value="form.responsibleSupervisorCode"
                :maxLength="256"
                placeholder="请输入责任单位主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleSupervisorName" label="责任单位主管NAME">
              <a-input
                v-model:value="form.responsibleSupervisorName"
                :maxLength="256"
                placeholder="请输入责任单位主管NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserId" label="责任人ID">
              <a-input
                v-model:value="form.responsibleUserId"
                :maxLength="256"
                placeholder="请输入责任人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserCode" label="责任人CODE">
              <a-input
                v-model:value="form.responsibleUserCode"
                :maxLength="256"
                placeholder="请输入责任人CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="responsibleUserName" label="责任人NAME">
              <a-input
                v-model:value="form.responsibleUserName"
                :maxLength="256"
                placeholder="请输入责任人NAME"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="impactAnalysis" label="影响分析">
              <a-input
                v-model:value="form.impactAnalysis"
                :maxLength="2000"
                placeholder="请输入影响分析"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="groupReviewOpinion" label="审理人员（小组）意见">
              <a-input
                v-model:value="form.groupReviewOpinion"
                :maxLength="256"
                placeholder="请输入审理人员（小组）意见"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="groupDesposition" label="建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方">
              <a-input
                v-model:value="form.groupDesposition"
                :maxLength="50"
                placeholder="请输入建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="groupDespositionDesc" label="处置说明">
              <a-input
                v-model:value="form.groupDespositionDesc"
                :maxLength="2000"
                placeholder="请输入处置说明"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewDeptId" label="审理单位ID">
              <a-input
                v-model:value="form.reviewDeptId"
                :maxLength="512"
                placeholder="请输入审理单位ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewDeptCode" label="审理单位CODE">
              <a-input
                v-model:value="form.reviewDeptCode"
                :maxLength="50"
                placeholder="请输入审理单位CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewDeptName" label="审理单位">
              <a-input
                v-model:value="form.reviewDeptName"
                :maxLength="256"
                placeholder="请输入审理单位"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewUserId" label="审理人员ID">
              <a-input
                v-model:value="form.reviewUserId"
                :maxLength="512"
                placeholder="请输入审理人员ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewUserCode" label="审理人员CODE">
              <a-input
                v-model:value="form.reviewUserCode"
                :maxLength="50"
                placeholder="请输入审理人员CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewUserName" label="小组审理人员">
              <a-input
                v-model:value="form.reviewUserName"
                :maxLength="128"
                placeholder="请输入小组审理人员"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="reviewTime" label="小组审理时间">
              <a-date-picker
                v-model:value="form.reviewTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择小组审理时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynNeedCommitee" label="是否提交委员会">
              <a-input
                v-model:value="form.ynNeedCommitee"
                :maxLength="2"
                placeholder="请输入是否提交委员会"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="commiteeOpinion" label="审理委员会意见;总师/副总师">
              <a-input
                v-model:value="form.commiteeOpinion"
                :maxLength="512"
                placeholder="请输入审理委员会意见;总师/副总师"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="commiteeMemberId" label="委员会审批人ID">
              <a-input
                v-model:value="form.commiteeMemberId"
                :maxLength="64"
                placeholder="请输入委员会审批人ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="commiteeMemberCode" label="委员会审批人USER">
              <a-input
                v-model:value="form.commiteeMemberCode"
                :maxLength="10"
                placeholder="请输入委员会审批人USER"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="commiteeMemberName" label="委员会审批人姓名">
              <a-input
                v-model:value="form.commiteeMemberName"
                :maxLength="20"
                placeholder="请输入委员会审批人姓名"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="commiteeApprovalTime" label="委员会审批时间">
              <a-date-picker
                v-model:value="form.commiteeApprovalTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择委员会审批时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityDeptOpinion" label="质量部门意见">
              <a-input
                v-model:value="form.qualityDeptOpinion"
                :maxLength="512"
                placeholder="请输入质量部门意见"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelQualitySupervisorId" label="质量部型号主管ID">
              <a-input
                v-model:value="form.modelQualitySupervisorId"
                :maxLength="64"
                placeholder="请输入质量部型号主管ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelQualitySupervisorCode" label="质量部型号主管CODE">
              <a-input
                v-model:value="form.modelQualitySupervisorCode"
                :maxLength="10"
                placeholder="请输入质量部型号主管CODE"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="modelQualitySupervisorName" label="质量部型号主管">
              <a-input
                v-model:value="form.modelQualitySupervisorName"
                :maxLength="20"
                placeholder="请输入质量部型号主管"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="qualityConfirmTime" label="质量部确认时间">
              <a-date-picker
                v-model:value="form.qualityConfirmTime"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择质量部确认时间"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="ynMilRep" label="是否需要军代表审批">
              <a-input
                v-model:value="form.ynMilRep"
                :maxLength="2"
                placeholder="请输入是否需要军代表审批"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="milRepId" label="军代表">
              <a-input
                v-model:value="form.milRepId"
                :maxLength="64"
                placeholder="请输入军代表ID"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols">
            <a-form-item name="milRepOpinion" label="军代表意见">
              <a-input
                v-model:value="form.milRepOpinion"
                :maxLength="512"
                placeholder="请输入军代表意见"
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
            <a-form-item name="remark" label="备注">
              <a-input
                v-model:value="form.remark"
                :maxLength="2000"
                placeholder="请输入备注"
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
                table-name="QMS_NC_PRODUCT"
                @afterUpload="afterUploadEvent"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
    <template #footer>
      <a-button title="保存并启动流程" type="primary" :loading="loading" @click="saveAndStartProcess">保存并启动流程</a-button>
      <a-button title="返回" type="primary" ghost @click="closeModal">返回</a-button>
    </template>
  </AvicModal>
</template>
<script lang="ts" setup>
import { useQmsNcProductForm, emits } from './ts/QmsNcProductForm'; // 引入表单ts
const props = defineProps({
  formId: {
    type: String,
    default: ''
  },
  bpmInstanceObject: {
    type: Object
  },
  params: {
    type: Object,
    required: false,
    default: null
  },
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
  saveAndStartProcess,
  closeModal
} = useQmsNcProductForm({
  props: props,
  emit: emit
});
</script>
