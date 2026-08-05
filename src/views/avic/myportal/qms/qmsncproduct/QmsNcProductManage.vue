<template>
  <div class="content-wrapper">
    <div class="top-search-box">
      <!-- 高级查询 -->
      <a-form v-bind="layout" ref="formRef" :model="queryForm" :colon="false">
        <a-row :gutter="16">
          <a-col v-bind="colLayout.cols2">
            <a-form-item label="审理单编号">
              <a-input
                v-model:value="queryForm.reviewCode"
                placeholder="请输入审理单编号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理单密级">
              <a-input
                v-model:value="queryForm.reviewSecretLevel"
                placeholder="请输入审理单密级"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="日期(起)">
              <a-date-picker
                v-model:value="queryForm.reportTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择日期(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.reportTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="日期(止)">
              <a-date-picker
                v-model:value="queryForm.reportTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择日期(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.reportTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="型号">
              <a-input
                v-model:value="queryForm.model"
                placeholder="请输入型号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="零件名称">
              <a-input
                v-model:value="queryForm.partName"
                placeholder="请输入零件名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="零件图号">
              <a-input
                v-model:value="queryForm.partDrawingNo"
                placeholder="请输入零件图号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="组件名称">
              <a-input
                v-model:value="queryForm.assemblyName"
                placeholder="请输入组件名称"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="组件图号">
              <a-input
                v-model:value="queryForm.assemblyDrawingNo"
                placeholder="请输入组件图号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="流水卡号">
              <a-input
                v-model:value="queryForm.routingCardNo"
                placeholder="请输入流水卡号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="批次号">
              <a-input
                v-model:value="queryForm.batchNo"
                placeholder="请输入批次号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="零组件序号">
              <a-input
                v-model:value="queryForm.componentSerialNo"
                placeholder="请输入零组件序号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="工序号">
              <a-input
                v-model:value="queryForm.processNo"
                placeholder="请输入工序号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="炉批号">
              <a-input
                v-model:value="queryForm.heatBatchNo"
                placeholder="请输入炉批号"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="类别;Ⅰ类;Ⅱ类;Ⅲ类">
              <a-input
                v-model:value="queryForm.ncCategory"
                placeholder="请输入类别;Ⅰ类;Ⅱ类;Ⅲ类"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX">
              <a-input
                v-model:value="queryForm.techSpecReq"
                placeholder="请输入图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页）">
              <a-input
                v-model:value="queryForm.ncDescreption"
                placeholder="请输入不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页）"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验员ID">
              <a-input
                v-model:value="queryForm.inspectorId"
                placeholder="请输入检验员ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验员CODE">
              <a-input
                v-model:value="queryForm.inspectorCode"
                placeholder="请输入检验员CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验员NAME">
              <a-input
                v-model:value="queryForm.inspectorName"
                placeholder="请输入检验员NAME"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验中心领导ID">
              <a-input
                v-model:value="queryForm.inspectionDeptLeaderId"
                placeholder="请输入检验中心领导ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验中心领导CODE">
              <a-input
                v-model:value="queryForm.inspectionDeptLeaderCode"
                placeholder="请输入检验中心领导CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="检验中心领导姓名">
              <a-input
                v-model:value="queryForm.inspectionDeptLeaderName"
                placeholder="请输入检验中心领导姓名"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="不合格原因分类;人、机、料、法、环、测、设计、其他">
              <a-input
                v-model:value="queryForm.causeCategory"
                placeholder="请输入不合格原因分类;人、机、料、法、环、测、设计、其他"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类">
              <a-input
                v-model:value="queryForm.causeAnalysis"
                placeholder="请输入不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正">
              <a-input
                v-model:value="queryForm.correctiveMeasure"
                placeholder="请输入纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位ID">
              <a-input
                v-model:value="queryForm.responsibleDeptId"
                placeholder="请输入责任单位ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位CODE">
              <a-input
                v-model:value="queryForm.responsibleDeptCode"
                placeholder="请输入责任单位CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位NAME">
              <a-input
                v-model:value="queryForm.responsibleDeptName"
                placeholder="请输入责任单位NAME"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位ID">
              <a-input
                v-model:value="queryForm.responsibleDeptLeaderId"
                placeholder="请输入责任单位ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位CODE">
              <a-input
                v-model:value="queryForm.responsibleDeptLeaderCode"
                placeholder="请输入责任单位CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位NAME">
              <a-input
                v-model:value="queryForm.responsibleDeptLeaderName"
                placeholder="请输入责任单位NAME"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位主管ID">
              <a-input
                v-model:value="queryForm.responsibleSupervisorId"
                placeholder="请输入责任单位主管ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位主管CODE">
              <a-input
                v-model:value="queryForm.responsibleSupervisorCode"
                placeholder="请输入责任单位主管CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任单位主管NAME">
              <a-input
                v-model:value="queryForm.responsibleSupervisorName"
                placeholder="请输入责任单位主管NAME"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人ID">
              <a-input
                v-model:value="queryForm.responsibleUserId"
                placeholder="请输入责任人ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人CODE">
              <a-input
                v-model:value="queryForm.responsibleUserCode"
                placeholder="请输入责任人CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="责任人NAME">
              <a-input
                v-model:value="queryForm.responsibleUserName"
                placeholder="请输入责任人NAME"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="影响分析">
              <a-input
                v-model:value="queryForm.impactAnalysis"
                placeholder="请输入影响分析"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理人员（小组）意见">
              <a-input
                v-model:value="queryForm.groupReviewOpinion"
                placeholder="请输入审理人员（小组）意见"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方">
              <a-input
                v-model:value="queryForm.groupDesposition"
                placeholder="请输入建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="处置说明">
              <a-input
                v-model:value="queryForm.groupDespositionDesc"
                placeholder="请输入处置说明"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理单位ID">
              <a-input
                v-model:value="queryForm.reviewDeptId"
                placeholder="请输入审理单位ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理单位CODE">
              <a-input
                v-model:value="queryForm.reviewDeptCode"
                placeholder="请输入审理单位CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理单位">
              <a-input
                v-model:value="queryForm.reviewDeptName"
                placeholder="请输入审理单位"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理人员ID">
              <a-input
                v-model:value="queryForm.reviewUserId"
                placeholder="请输入审理人员ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理人员CODE">
              <a-input
                v-model:value="queryForm.reviewUserCode"
                placeholder="请输入审理人员CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="小组审理人员">
              <a-input
                v-model:value="queryForm.reviewUserName"
                placeholder="请输入小组审理人员"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="小组审理时间(起)">
              <a-date-picker
                v-model:value="queryForm.reviewTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择小组审理时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.reviewTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="小组审理时间(止)">
              <a-date-picker
                v-model:value="queryForm.reviewTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择小组审理时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.reviewTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="是否提交委员会">
              <a-input
                v-model:value="queryForm.ynNeedCommitee"
                placeholder="请输入是否提交委员会"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="审理委员会意见;总师/副总师">
              <a-input
                v-model:value="queryForm.commiteeOpinion"
                placeholder="请输入审理委员会意见;总师/副总师"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="委员会审批人ID">
              <a-input
                v-model:value="queryForm.commiteeMemberId"
                placeholder="请输入委员会审批人ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="委员会审批人USER">
              <a-input
                v-model:value="queryForm.commiteeMemberCode"
                placeholder="请输入委员会审批人USER"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="委员会审批人姓名">
              <a-input
                v-model:value="queryForm.commiteeMemberName"
                placeholder="请输入委员会审批人姓名"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="委员会审批时间(起)">
              <a-date-picker
                v-model:value="queryForm.commiteeApprovalTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择委员会审批时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.commiteeApprovalTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="委员会审批时间(止)">
              <a-date-picker
                v-model:value="queryForm.commiteeApprovalTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择委员会审批时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.commiteeApprovalTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部门意见">
              <a-input
                v-model:value="queryForm.qualityDeptOpinion"
                placeholder="请输入质量部门意见"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部型号主管ID">
              <a-input
                v-model:value="queryForm.modelQualitySupervisorId"
                placeholder="请输入质量部型号主管ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部型号主管CODE">
              <a-input
                v-model:value="queryForm.modelQualitySupervisorCode"
                placeholder="请输入质量部型号主管CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部型号主管">
              <a-input
                v-model:value="queryForm.modelQualitySupervisorName"
                placeholder="请输入质量部型号主管"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部确认时间(起)">
              <a-date-picker
                v-model:value="queryForm.qualityConfirmTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择质量部确认时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.qualityConfirmTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="质量部确认时间(止)">
              <a-date-picker
                v-model:value="queryForm.qualityConfirmTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择质量部确认时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.qualityConfirmTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="是否需要军代表审批">
              <a-input
                v-model:value="queryForm.ynMilRep"
                placeholder="请输入是否需要军代表审批"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表ID">
              <a-input
                v-model:value="queryForm.milRepId"
                placeholder="请输入军代表ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表CODE">
              <a-input
                v-model:value="queryForm.milRepCode"
                placeholder="请输入军代表CODE"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表姓名">
              <a-input
                v-model:value="queryForm.milRepName"
                placeholder="请输入军代表姓名"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表意见">
              <a-input
                v-model:value="queryForm.milRepOpinion"
                placeholder="请输入军代表意见"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表审批时间(起)">
              <a-date-picker
                v-model:value="queryForm.milRepApprovalTimeBegin"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择军代表审批时间(起)"
                :disabled-date="startValue => proxy.$disabledStartDate(startValue, queryForm.milRepApprovalTimeEnd)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="军代表审批时间(止)">
              <a-date-picker
                v-model:value="queryForm.milRepApprovalTimeEnd"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                placeholder="请选择军代表审批时间(止)"
                :disabled-date="endValue => proxy.$disabledEndDate(endValue, queryForm.milRepApprovalTimeBegin)"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="最终处置方式">
              <a-input
                v-model:value="queryForm.finalDisposition"
                placeholder="请输入最终处置方式"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="处置方式说明">
              <a-input
                v-model:value="queryForm.finalDispositionDesc"
                placeholder="请输入处置方式说明"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="业务状态">
              <a-input
                v-model:value="queryForm.status"
                placeholder="请输入业务状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="流程实例ID">
              <a-input
                v-model:value="queryForm.processInstanceId"
                placeholder="请输入流程实例ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="流程状态">
              <a-input
                v-model:value="queryForm.processStatus"
                placeholder="请输入流程状态"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="密级">
              <a-select
                v-model:value="queryForm.secretLevel"
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
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="是否已删除">
              <a-input
                v-model:value="queryForm.ynDeleted"
                placeholder="请输入是否已删除"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="备注">
              <a-input
                v-model:value="queryForm.remark"
                placeholder="请输入备注"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout.cols" v-show="advanced">
            <a-form-item label="父节点ID">
              <a-input
                v-model:value="queryForm.parentId"
                placeholder="请输入父节点ID"
                :allow-clear="true"
                @pressEnter="handleQuery"
              />
            </a-form-item>
          </a-col>
          <a-col
            v-bind="colLayout.cols"
            style="margin-left: auto"
          >
            <div class="table-page-search-submitButtons">
              <a-space>
                <a-button type="primary" @click="handleQuery">
                  <search-outlined />
                  查询
                </a-button>
                <a-button type="primary" @click="resetQuery" ghost>
                  <redo-outlined />
                  重置
                </a-button>
                <a-button type="link" @click="toggleAdvanced" style="margin: 0">
                  {{ advanced ? '收起' : '展开' }}
                  <up-outlined v-if="advanced" />
                  <down-outlined v-else />
                </a-button>
              </a-space>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 表格组件 -->
    <div class="table-wrapper">
      <AvicTable
        ref="qmsNcProduct"
        table-key="qmsNcProduct"
        :columns="columns"
        :row-key="record => record.id"
        :data-source="list"
        :loading="loading"
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
          columnWidth: 40,
          fixed: true
        }"
        :pageParameter="queryParam.pageParameter"
        :total="totalPage"
        @change="handleTableChange"
        @refresh="getList"
      >
        <template #toolBarLeft>
          <a-space>
            <a-button
              v-hasPermi="['qmsNcProduct:add']"
              title="添加"
              type="primary"
              @click="handleAdd"
            >
              <template #icon>
                <plus-outlined />
              </template>
              添加
            </a-button>
            <a-button
              v-hasPermi="['qmsNcProduct:edit']"
              title="编辑"
              type="primary"
              ghost
              @click="handleEdit"
            >
              <template #icon>
                <edit-outlined />
              </template>
              编辑
            </a-button>
            <a-button
              v-hasPermi="['qmsNcProduct:del']"
              title="删除"
              danger
              :type="selectedRowKeys.length == 0 ? 'default' : 'primary'"
              :loading="delLoading"
              @click="handleDelete(selectedRows, selectedRowKeys)"
            >
              <template #icon>
                <delete-outlined />
              </template>
              删除
            </a-button>
            <a-button
              v-hasPermi="['qmsNcProduct:export']"
              title="导出"
              type="primary"
              ghost
              @click="handleExport">
              <template #icon>
                 <export-outlined />
              </template>
              导出
            </a-button>
          </a-space>
        </template>
        <template #toolBarRight>
          <a-space>
            <AvicBpmFilter
              :allFileAuth="['qmsNcProduct:all']"
              :myFileAuth="['qmsNcProduct:my']"
              :defaultBpmType = 'queryForm.bpmType'
              :defaultBpmState = 'queryForm.bpmState'
              @change="changeBpmFilter"
            />
            <a-input-search
              class="opt-btn-commonsearch"
              style="width: 200px"
              placeholder="请输入审理单编号;编号方法：ZCJ26a＋年代号（四位数）＋型号＋责任单位代号（三位数）＋流水号（三位数）或审理单密级"
              :allow-clear="true"
              @search="handleKeyWordQuery"
            />
          </a-space>
        </template>
        <template #bodyCell="{ column, text, record, index }">
          <template v-if="column.dataIndex === 'id'">
            {{ index + 1 + queryParam.pageParameter.rows * (queryParam.pageParameter.page - 1) }}
          </template>
          <template v-else-if="column.dataIndex === 'reviewCode'">
            <a @click="handleFlowDetail(record)">
              {{ record.reviewCode }}
            </a>
          </template>
        </template>
      </AvicTable>
    </div>
    <!-- 添加页面弹窗 -->
    <QmsNcProductAdd
      v-if="showAddModal"
      ref="addModal"
      :bpmOperatorRefresh="getList"
      @reloadData="getList"
      @close="showAddModal = false"
    />
    <!-- 编辑页面弹窗 -->
    <QmsNcProductEdit
      v-if="showEditModal"
      ref="editModal"
      :form-id="formId"
      @reloadData="getList"
      @close="showEditModal = false"
    />
  </div>
</template>
<script lang="ts" setup>
import type { QmsNcProductDto } from '@/api/avic/myportal/qms/QmsNcProductApi'; // 引入模块DTO
import { listQmsNcProductByPage, delQmsNcProduct, exportExcel } from '@/api/avic/myportal/qms/QmsNcProductApi'; // 引入模块API
import QmsNcProductAdd from './QmsNcProductAdd.vue'; // 引入添加页面组件
import QmsNcProductEdit from './QmsNcProductEdit.vue'; // 引入编辑页面组件
import flowUtils from '@/views/avic/bpm/bpmutils/FlowUtils.js';
const { proxy } = getCurrentInstance();
const layout = {
  labelCol: { flex: '0 0 120px' },
  wrapperCol: { flex: '1 1 0' }
};
const colLayout = proxy.$colLayout4; // 页面表单响应式布局对象
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    ellipsis: true,
    width: 60,
    align: 'center',
    fixed: 'left'
  },
  {
    title: '审理单编号',
    dataIndex: 'reviewCode',
    ellipsis: true,
    sorter: true,
    width: 200,
    resizable: true,
    align: 'center'
  },
  {
    title: '日期',
    dataIndex: 'reportTime',
    ellipsis: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '型号',
    dataIndex: 'model',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '零件',
    dataIndex: 'partName',
    ellipsis: true,
    sorter: true,
    width: 200,
    resizable: true,
    align: 'center'
  },
  {
    title: '组件',
    dataIndex: 'assemblyName',
    ellipsis: true,
    sorter: true,
    width: 200,
    resizable: true,
    align: 'center'
  },
  {
    title: '流水卡号',
    dataIndex: 'routingCardNo',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '批次号',
    dataIndex: 'batchNo',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '零组件序号',
    dataIndex: 'componentSerialNo',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '工序号',
    dataIndex: 'processNo',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '炉批号',
    dataIndex: 'heatBatchNo',
    ellipsis: true,
    sorter: true,
    width: 100,
    resizable: true,
    align: 'center'
  },
  {
    title: '类别',
    dataIndex: 'ncCategoryName',
    ellipsis: true,
    sorter: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    customRender: text => {
      return proxy.$formatZero(text.value, 2);
    },
    align: 'right'
  },
  {
    title: '页数',
    dataIndex: 'Page',
    ellipsis: true,
    minWidth: 120,
    resizable: true,
    align: 'center'
  },
  {
    title: '流程状态',
    dataIndex: 'businessstate_',
    ellipsis: true,
    width: 120,
    align: 'center',
  },
  {
    title: '流程当前步骤',
    dataIndex: 'activityalias_',
    width: 120,
    align: 'center'
  },
  {
    title: '当前处理人',
    dataIndex: 'assigneenames_',
    ellipsis: true,
    width: 130,
    align: 'center'
  }
];
const queryForm = ref<QmsNcProductDto>({
  bpmState: 'all',
  bpmType: 'my'
});
// 高级查询对象
const queryParam = reactive({
  // 请求表格数据参数
  pageParameter: {
    page: 1, // 页数
    rows: 20 // 每页条数
  },
  searchParams: {
    ...queryForm.value
  },
  keyWord: ref(''), // 快速查询数据
  sidx: null, // 排序字段
  sord: null // 排序方式: desc降序 asc升序
});
const showAddModal = ref(false); // 是否展示添加弹窗
const showEditModal = ref(false); // 是否展示编辑弹窗
const advanced = ref(false); // 高级搜索 展开/关闭
const list = ref([]); // 表格数据集合
const formId = ref(''); // 当前行数据id
const selectedRowKeys = ref([]); // 选中数据主键集合
const selectedRows = ref([]); // 选中行集合
const loading = ref(false); // 表格loading状态
const delLoading = ref(false); // 删除按钮loading状态
const totalPage = ref(0);
const secretLevelList = ref([]); // 密级通用代码

onMounted(() => {
  // 加载表格数据
  getList();
  // 获取当前用户对应的文档密级
  getUserFileSecretList();
});

/** 查询数据 */
function getList() {
  selectedRowKeys.value = []; // 清空选中
  selectedRows.value = [];
  loading.value = true;
  listQmsNcProductByPage(queryParam)
    .then(response => {
      list.value = response.data.result;
      totalPage.value = response.data.pageParameter.totalCount;
      loading.value = false;
    })
    .catch(() => {
      list.value = [];
      totalPage.value = 0;
      loading.value = false;
    });
}
/** 获取当前用户对应的文档密级 */
function getUserFileSecretList() {
  proxy.$getUserFileSecretLevelList(result => {
    secretLevelList.value = result;
  });
}
/** 根据流程状态及发起人查询数据 */
function changeBpmFilter({ bpmType, bpmState }) {
  queryForm.value.bpmType = bpmType;
  queryForm.value.bpmState = bpmState;
  queryParam.searchParams = queryForm.value;
  getList();
}
/** 高级查询 查询按钮操作 */
function handleQuery() {
  queryParam.searchParams = queryForm.value;
  queryParam.keyWord = '';
  queryParam.pageParameter.page = 1;
  getList();
}
/** 高级查询 重置按钮操作 */
function resetQuery() {
  queryForm.value = {
    bpmType: queryForm.value.bpmType,
    bpmState: queryForm.value.bpmState
  };
  handleQuery();
}
/** 高级查询 展开/收起 */
function toggleAdvanced() {
  advanced.value = !advanced.value;
}
/** 快速查询逻辑 */
function handleKeyWordQuery(value) {
  const keyWord = {
    reviewCode: value,
    reviewSecretLevel: value
  };
  queryParam.keyWord = JSON.stringify(keyWord);
  queryParam.pageParameter.page = 1;
  getList();
}
/** 添加 */
function handleAdd() {
  showAddModal.value = true;
}
/** 编辑 */
function handleEdit() {
  if (selectedRows.value.length !== 1) {
    proxy.$message.warning('请选择一条要编辑的数据！');
    return;
  }
  formId.value = selectedRows.value[0].id;
  showEditModal.value = true;
}
/** 打开流程详情页面 */
function handleFlowDetail(record) {
  if (record.id) {
    flowUtils.detailByOptions({
      formId: record.id,
      bpmOperatorRefresh: getList
    });
  }
}
/** 删除 */
function handleDelete(rows, ids) {
  if (ids.length == 0) {
    proxy.$message.warning('请选择要删除的数据！');
    return;
  }
  if (rows.filter(row => row.bpmState !== 'start')?.length > 0) {
    proxy.$message.warning('只有拟稿中的数据才可以删除！');
    return;
  }
  proxy.$confirm({
    title: '确认要删除选择的数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      delLoading.value = true;
      delQmsNcProduct(ids)
        .then(res => {
          if (res.success) {
            proxy.$message.success('删除成功！');
            getList();
          }
          delLoading.value = false;
        })
        .catch(() => {
          delLoading.value = false;
        });
    }
  });
}
/** 导出 */
function handleExport() {
  proxy.$confirm({
    title: '确认导出数据吗?',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      loading.value = true;
      queryParam.searchParams = queryForm.value;
      exportExcel(queryParam).then(() => {
        loading.value = false;
        proxy.$message.info('导出成功！');
      });
    }
  });
}
/** 勾选复选框时触发 */
function onSelectChange(rowKeys, rows) {
  selectedRowKeys.value = rowKeys;
  selectedRows.value = rows;
}
/** 表格排序 */
function handleTableChange(pagination, filters, sorter) {
  queryParam.pageParameter.page = pagination.current;
  queryParam.pageParameter.rows = pagination.pageSize;
  if (proxy.$objIsNotBlank(sorter.field)) {
    queryParam.sidx = sorter.field;
    queryParam.sord = sorter.order === 'ascend' ? 'asc' : 'desc'; // 排序方式: desc降序 asc升序
  }
  getList();
}
</script>
