<template>
  <div>
    <a-form
      ref="formRef"
      :model="form"
      v-bind="layout"
      class="form-excel-style"
     >
      <a-row>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewCode')">
          <a-form-item name="reviewCode" label="审理单编号" :rules="fieldRequired('reviewCode')" has-feedback>
            <a-input
              v-model:value="form.reviewCode"
              :auto-focus="true"
              :disabled="fieldDisabled('reviewCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewSecretLevel')">
          <a-form-item name="reviewSecretLevel" label="审理单密级" :rules="fieldRequired('reviewSecretLevel')" has-feedback>
            <a-input
              v-model:value="form.reviewSecretLevel"
              :disabled="fieldDisabled('reviewSecretLevel')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reportTime')">
          <a-form-item name="reportTime" label="日期" :rules="fieldRequired('reportTime')" has-feedback>
            <a-date-picker
              v-model:value="form.reportTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('reportTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('model')">
          <a-form-item name="model" label="型号" :rules="fieldRequired('model')" has-feedback>
            <a-input
              v-model:value="form.model"
              :disabled="fieldDisabled('model')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('partName')">
          <a-form-item name="partName" label="零件名称" :rules="fieldRequired('partName')" has-feedback>
            <a-input
              v-model:value="form.partName"
              :disabled="fieldDisabled('partName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('partDrawingNo')">
          <a-form-item name="partDrawingNo" label="零件图号" :rules="fieldRequired('partDrawingNo')" has-feedback>
            <a-input
              v-model:value="form.partDrawingNo"
              :disabled="fieldDisabled('partDrawingNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('assemblyName')">
          <a-form-item name="assemblyName" label="组件名称" :rules="fieldRequired('assemblyName')" has-feedback>
            <a-input
              v-model:value="form.assemblyName"
              :disabled="fieldDisabled('assemblyName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('assemblyDrawingNo')">
          <a-form-item name="assemblyDrawingNo" label="组件图号" :rules="fieldRequired('assemblyDrawingNo')" has-feedback>
            <a-input
              v-model:value="form.assemblyDrawingNo"
              :disabled="fieldDisabled('assemblyDrawingNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('routingCardNo')">
          <a-form-item name="routingCardNo" label="流水卡号" :rules="fieldRequired('routingCardNo')" has-feedback>
            <a-input
              v-model:value="form.routingCardNo"
              :disabled="fieldDisabled('routingCardNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('batchNo')">
          <a-form-item name="batchNo" label="批次号" :rules="fieldRequired('batchNo')" has-feedback>
            <a-input
              v-model:value="form.batchNo"
              :disabled="fieldDisabled('batchNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('componentSerialNo')">
          <a-form-item name="componentSerialNo" label="零组件序号" :rules="fieldRequired('componentSerialNo')" has-feedback>
            <a-input
              v-model:value="form.componentSerialNo"
              :disabled="fieldDisabled('componentSerialNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('processNo')">
          <a-form-item name="processNo" label="工序号" :rules="fieldRequired('processNo')" has-feedback>
            <a-input
              v-model:value="form.processNo"
              :disabled="fieldDisabled('processNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('heatBatchNo')">
          <a-form-item name="heatBatchNo" label="炉批号" :rules="fieldRequired('heatBatchNo')" has-feedback>
            <a-input
              v-model:value="form.heatBatchNo"
              :disabled="fieldDisabled('heatBatchNo')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ncCategory')">
          <a-form-item name="ncCategory" label="类别;Ⅰ类;Ⅱ类;Ⅲ类" :rules="fieldRequired('ncCategory')" has-feedback>
            <a-input
              v-model:value="form.ncCategory"
              :disabled="fieldDisabled('ncCategory')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('quantity')">
          <a-form-item name="quantity" label="数量" :rules="fieldRequired('quantity')" has-feedback>
            <a-input-number
              v-model:value="form.quantity"
              :min="0"
              :max="9999999999.99"
              :precision="2"
              :step="0.01"
              :disabled="fieldDisabled('quantity')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('totalPageCount')">
          <a-form-item name="totalPageCount" label="总页数" :rules="fieldRequired('totalPageCount')" has-feedback>
            <a-input-number
              v-model:value="form.totalPageCount"
              :min="0"
              :max="9999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('totalPageCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('issuePageCount')">
          <a-form-item name="issuePageCount" label="问题页数" :rules="fieldRequired('issuePageCount')" has-feedback>
            <a-input-number
              v-model:value="form.issuePageCount"
              :min="0"
              :max="9999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('issuePageCount')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('techSpecReq')">
          <a-form-item name="techSpecReq" label="图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX" :rules="fieldRequired('techSpecReq')" has-feedback>
            <a-input
              v-model:value="form.techSpecReq"
              :disabled="fieldDisabled('techSpecReq')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ncDescreption')">
          <a-form-item name="ncDescreption" label="不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页）" :rules="fieldRequired('ncDescreption')" has-feedback>
            <a-input
              v-model:value="form.ncDescreption"
              :disabled="fieldDisabled('ncDescreption')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectorId')">
          <a-form-item name="inspectorId" label="检验员ID" :rules="fieldRequired('inspectorId')" has-feedback>
            <a-input
              v-model:value="form.inspectorId"
              :disabled="fieldDisabled('inspectorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectorCode')">
          <a-form-item name="inspectorCode" label="检验员CODE" :rules="fieldRequired('inspectorCode')" has-feedback>
            <a-input
              v-model:value="form.inspectorCode"
              :disabled="fieldDisabled('inspectorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectorName')">
          <a-form-item name="inspectorName" label="检验员NAME" :rules="fieldRequired('inspectorName')" has-feedback>
            <a-input
              v-model:value="form.inspectorName"
              :disabled="fieldDisabled('inspectorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectionDeptLeaderId')">
          <a-form-item name="inspectionDeptLeaderId" label="检验中心领导ID" :rules="fieldRequired('inspectionDeptLeaderId')" has-feedback>
            <a-input
              v-model:value="form.inspectionDeptLeaderId"
              :disabled="fieldDisabled('inspectionDeptLeaderId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectionDeptLeaderCode')">
          <a-form-item name="inspectionDeptLeaderCode" label="检验中心领导CODE" :rules="fieldRequired('inspectionDeptLeaderCode')" has-feedback>
            <a-input
              v-model:value="form.inspectionDeptLeaderCode"
              :disabled="fieldDisabled('inspectionDeptLeaderCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('inspectionDeptLeaderName')">
          <a-form-item name="inspectionDeptLeaderName" label="检验中心领导姓名" :rules="fieldRequired('inspectionDeptLeaderName')" has-feedback>
            <a-input
              v-model:value="form.inspectionDeptLeaderName"
              :disabled="fieldDisabled('inspectionDeptLeaderName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('causeCategory')">
          <a-form-item name="causeCategory" label="不合格原因分类;人、机、料、法、环、测、设计、其他" :rules="fieldRequired('causeCategory')" has-feedback>
            <a-input
              v-model:value="form.causeCategory"
              :disabled="fieldDisabled('causeCategory')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('causeAnalysis')">
          <a-form-item name="causeAnalysis" label="不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类" :rules="fieldRequired('causeAnalysis')" has-feedback>
            <a-input
              v-model:value="form.causeAnalysis"
              :disabled="fieldDisabled('causeAnalysis')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('correctiveMeasure')">
          <a-form-item name="correctiveMeasure" label="纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正" :rules="fieldRequired('correctiveMeasure')" has-feedback>
            <a-input
              v-model:value="form.correctiveMeasure"
              :disabled="fieldDisabled('correctiveMeasure')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptId')">
          <a-form-item name="responsibleDeptId" label="责任单位ID" :rules="fieldRequired('responsibleDeptId')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptId"
              :disabled="fieldDisabled('responsibleDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptCode')">
          <a-form-item name="responsibleDeptCode" label="责任单位CODE" :rules="fieldRequired('responsibleDeptCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptCode"
              :disabled="fieldDisabled('responsibleDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptName')">
          <a-form-item name="responsibleDeptName" label="责任单位NAME" :rules="fieldRequired('responsibleDeptName')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptName"
              :disabled="fieldDisabled('responsibleDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptLeaderId')">
          <a-form-item name="responsibleDeptLeaderId" label="责任单位ID" :rules="fieldRequired('responsibleDeptLeaderId')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptLeaderId"
              :disabled="fieldDisabled('responsibleDeptLeaderId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptLeaderCode')">
          <a-form-item name="responsibleDeptLeaderCode" label="责任单位CODE" :rules="fieldRequired('responsibleDeptLeaderCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptLeaderCode"
              :disabled="fieldDisabled('responsibleDeptLeaderCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleDeptLeaderName')">
          <a-form-item name="responsibleDeptLeaderName" label="责任单位NAME" :rules="fieldRequired('responsibleDeptLeaderName')" has-feedback>
            <a-input
              v-model:value="form.responsibleDeptLeaderName"
              :disabled="fieldDisabled('responsibleDeptLeaderName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleSupervisorId')">
          <a-form-item name="responsibleSupervisorId" label="责任单位主管ID" :rules="fieldRequired('responsibleSupervisorId')" has-feedback>
            <a-input
              v-model:value="form.responsibleSupervisorId"
              :disabled="fieldDisabled('responsibleSupervisorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleSupervisorCode')">
          <a-form-item name="responsibleSupervisorCode" label="责任单位主管CODE" :rules="fieldRequired('responsibleSupervisorCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleSupervisorCode"
              :disabled="fieldDisabled('responsibleSupervisorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleSupervisorName')">
          <a-form-item name="responsibleSupervisorName" label="责任单位主管NAME" :rules="fieldRequired('responsibleSupervisorName')" has-feedback>
            <a-input
              v-model:value="form.responsibleSupervisorName"
              :disabled="fieldDisabled('responsibleSupervisorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleUserId')">
          <a-form-item name="responsibleUserId" label="责任人ID" :rules="fieldRequired('responsibleUserId')" has-feedback>
            <a-input
              v-model:value="form.responsibleUserId"
              :disabled="fieldDisabled('responsibleUserId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleUserCode')">
          <a-form-item name="responsibleUserCode" label="责任人CODE" :rules="fieldRequired('responsibleUserCode')" has-feedback>
            <a-input
              v-model:value="form.responsibleUserCode"
              :disabled="fieldDisabled('responsibleUserCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('responsibleUserName')">
          <a-form-item name="responsibleUserName" label="责任人NAME" :rules="fieldRequired('responsibleUserName')" has-feedback>
            <a-input
              v-model:value="form.responsibleUserName"
              :disabled="fieldDisabled('responsibleUserName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('impactAnalysis')">
          <a-form-item name="impactAnalysis" label="影响分析" :rules="fieldRequired('impactAnalysis')" has-feedback>
            <a-input
              v-model:value="form.impactAnalysis"
              :disabled="fieldDisabled('impactAnalysis')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('groupReviewOpinion')">
          <a-form-item name="groupReviewOpinion" label="审理人员（小组）意见" :rules="fieldRequired('groupReviewOpinion')" has-feedback>
            <a-input
              v-model:value="form.groupReviewOpinion"
              :disabled="fieldDisabled('groupReviewOpinion')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('groupDesposition')">
          <a-form-item name="groupDesposition" label="建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方" :rules="fieldRequired('groupDesposition')" has-feedback>
            <a-input
              v-model:value="form.groupDesposition"
              :disabled="fieldDisabled('groupDesposition')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('groupDespositionDesc')">
          <a-form-item name="groupDespositionDesc" label="处置说明" :rules="fieldRequired('groupDespositionDesc')" has-feedback>
            <a-input
              v-model:value="form.groupDespositionDesc"
              :disabled="fieldDisabled('groupDespositionDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewDeptId')">
          <a-form-item name="reviewDeptId" label="审理单位ID" :rules="fieldRequired('reviewDeptId')" has-feedback>
            <a-input
              v-model:value="form.reviewDeptId"
              :disabled="fieldDisabled('reviewDeptId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewDeptCode')">
          <a-form-item name="reviewDeptCode" label="审理单位CODE" :rules="fieldRequired('reviewDeptCode')" has-feedback>
            <a-input
              v-model:value="form.reviewDeptCode"
              :disabled="fieldDisabled('reviewDeptCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewDeptName')">
          <a-form-item name="reviewDeptName" label="审理单位" :rules="fieldRequired('reviewDeptName')" has-feedback>
            <a-input
              v-model:value="form.reviewDeptName"
              :disabled="fieldDisabled('reviewDeptName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewUserId')">
          <a-form-item name="reviewUserId" label="审理人员ID" :rules="fieldRequired('reviewUserId')" has-feedback>
            <a-input
              v-model:value="form.reviewUserId"
              :disabled="fieldDisabled('reviewUserId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewUserCode')">
          <a-form-item name="reviewUserCode" label="审理人员CODE" :rules="fieldRequired('reviewUserCode')" has-feedback>
            <a-input
              v-model:value="form.reviewUserCode"
              :disabled="fieldDisabled('reviewUserCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewUserName')">
          <a-form-item name="reviewUserName" label="小组审理人员" :rules="fieldRequired('reviewUserName')" has-feedback>
            <a-input
              v-model:value="form.reviewUserName"
              :disabled="fieldDisabled('reviewUserName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('reviewTime')">
          <a-form-item name="reviewTime" label="小组审理时间" :rules="fieldRequired('reviewTime')" has-feedback>
            <a-date-picker
              v-model:value="form.reviewTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('reviewTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynNeedCommitee')">
          <a-form-item name="ynNeedCommitee" label="是否提交委员会" :rules="fieldRequired('ynNeedCommitee')" has-feedback>
            <a-input
              v-model:value="form.ynNeedCommitee"
              :disabled="fieldDisabled('ynNeedCommitee')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('commiteeOpinion')">
          <a-form-item name="commiteeOpinion" label="审理委员会意见;总师/副总师" :rules="fieldRequired('commiteeOpinion')" has-feedback>
            <a-input
              v-model:value="form.commiteeOpinion"
              :disabled="fieldDisabled('commiteeOpinion')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('commiteeMemberId')">
          <a-form-item name="commiteeMemberId" label="委员会审批人ID" :rules="fieldRequired('commiteeMemberId')" has-feedback>
            <a-input
              v-model:value="form.commiteeMemberId"
              :disabled="fieldDisabled('commiteeMemberId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('commiteeMemberCode')">
          <a-form-item name="commiteeMemberCode" label="委员会审批人USER" :rules="fieldRequired('commiteeMemberCode')" has-feedback>
            <a-input
              v-model:value="form.commiteeMemberCode"
              :disabled="fieldDisabled('commiteeMemberCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('commiteeMemberName')">
          <a-form-item name="commiteeMemberName" label="委员会审批人姓名" :rules="fieldRequired('commiteeMemberName')" has-feedback>
            <a-input
              v-model:value="form.commiteeMemberName"
              :disabled="fieldDisabled('commiteeMemberName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('commiteeApprovalTime')">
          <a-form-item name="commiteeApprovalTime" label="委员会审批时间" :rules="fieldRequired('commiteeApprovalTime')" has-feedback>
            <a-date-picker
              v-model:value="form.commiteeApprovalTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('commiteeApprovalTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualityDeptOpinion')">
          <a-form-item name="qualityDeptOpinion" label="质量部门意见" :rules="fieldRequired('qualityDeptOpinion')" has-feedback>
            <a-input
              v-model:value="form.qualityDeptOpinion"
              :disabled="fieldDisabled('qualityDeptOpinion')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('modelQualitySupervisorId')">
          <a-form-item name="modelQualitySupervisorId" label="质量部型号主管ID" :rules="fieldRequired('modelQualitySupervisorId')" has-feedback>
            <a-input
              v-model:value="form.modelQualitySupervisorId"
              :disabled="fieldDisabled('modelQualitySupervisorId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('modelQualitySupervisorCode')">
          <a-form-item name="modelQualitySupervisorCode" label="质量部型号主管CODE" :rules="fieldRequired('modelQualitySupervisorCode')" has-feedback>
            <a-input
              v-model:value="form.modelQualitySupervisorCode"
              :disabled="fieldDisabled('modelQualitySupervisorCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('modelQualitySupervisorName')">
          <a-form-item name="modelQualitySupervisorName" label="质量部型号主管" :rules="fieldRequired('modelQualitySupervisorName')" has-feedback>
            <a-input
              v-model:value="form.modelQualitySupervisorName"
              :disabled="fieldDisabled('modelQualitySupervisorName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('qualityConfirmTime')">
          <a-form-item name="qualityConfirmTime" label="质量部确认时间" :rules="fieldRequired('qualityConfirmTime')" has-feedback>
            <a-date-picker
              v-model:value="form.qualityConfirmTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('qualityConfirmTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('ynMilRep')">
          <a-form-item name="ynMilRep" label="是否需要军代表审批" :rules="fieldRequired('ynMilRep')" has-feedback>
            <a-input
              v-model:value="form.ynMilRep"
              :disabled="fieldDisabled('ynMilRep')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('milRepId')">
          <a-form-item name="milRepId" label="军代表ID" :rules="fieldRequired('milRepId')" has-feedback>
            <a-input
              v-model:value="form.milRepId"
              :disabled="fieldDisabled('milRepId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('milRepCode')">
          <a-form-item name="milRepCode" label="军代表CODE" :rules="fieldRequired('milRepCode')" has-feedback>
            <a-input
              v-model:value="form.milRepCode"
              :disabled="fieldDisabled('milRepCode')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('milRepName')">
          <a-form-item name="milRepName" label="军代表姓名" :rules="fieldRequired('milRepName')" has-feedback>
            <a-input
              v-model:value="form.milRepName"
              :disabled="fieldDisabled('milRepName')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('milRepOpinion')">
          <a-form-item name="milRepOpinion" label="军代表意见" :rules="fieldRequired('milRepOpinion')" has-feedback>
            <a-input
              v-model:value="form.milRepOpinion"
              :disabled="fieldDisabled('milRepOpinion')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('milRepApprovalTime')">
          <a-form-item name="milRepApprovalTime" label="军代表审批时间" :rules="fieldRequired('milRepApprovalTime')" has-feedback>
            <a-date-picker
              v-model:value="form.milRepApprovalTime"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              :disabled="fieldDisabled('milRepApprovalTime')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('finalDisposition')">
          <a-form-item name="finalDisposition" label="最终处置方式" :rules="fieldRequired('finalDisposition')" has-feedback>
            <a-input
              v-model:value="form.finalDisposition"
              :disabled="fieldDisabled('finalDisposition')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('finalDispositionDesc')">
          <a-form-item name="finalDispositionDesc" label="处置方式说明" :rules="fieldRequired('finalDispositionDesc')" has-feedback>
            <a-input
              v-model:value="form.finalDispositionDesc"
              :disabled="fieldDisabled('finalDispositionDesc')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('status')">
          <a-form-item name="status" label="业务状态" :rules="fieldRequired('status')" has-feedback>
            <a-input
              v-model:value="form.status"
              :disabled="fieldDisabled('status')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('processInstanceId')">
          <a-form-item name="processInstanceId" label="流程实例ID" :rules="fieldRequired('processInstanceId')" has-feedback>
            <a-input
              v-model:value="form.processInstanceId"
              :disabled="fieldDisabled('processInstanceId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('processStatus')">
          <a-form-item name="processStatus" label="流程状态" :rules="fieldRequired('processStatus')" has-feedback>
            <a-input
              v-model:value="form.processStatus"
              :disabled="fieldDisabled('processStatus')"
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
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('parentId')">
          <a-form-item name="parentId" label="父节点ID" :rules="fieldRequired('parentId')" has-feedback>
            <a-input
              v-model:value="form.parentId"
              :disabled="fieldDisabled('parentId')"
            />
          </a-form-item>
        </a-col>
        <a-col v-bind="colLayout.cols" v-if="fieldVisible('treeSort')">
          <a-form-item name="treeSort" label="本级排序" :rules="fieldRequired('treeSort')" has-feedback>
            <a-input-number
              v-model:value="form.treeSort"
              :min="0"
              :max="999999999999"
              :precision="0"
              :step="1"
              :disabled="fieldDisabled('treeSort')"
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
            table-name="QMS_NC_PRODUCT"
            @afterUpload="afterUploadEvent"
          />
        </a-form-item>
      </a-col>
      </a-row>
    </a-form>
  </div>
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
  layout,
  colLayout,
  secretLevelList,
  uploadFile,
  afterUploadEvent,
  fieldVisible,
  fieldDisabled,
  fieldRequired,
  attachmentRequired,
  saveForm,
  saveAndStartProcess,
  beforeClickBpmButtons,
  afterClickBpmButtons
} = useQmsNcProductForm({
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
