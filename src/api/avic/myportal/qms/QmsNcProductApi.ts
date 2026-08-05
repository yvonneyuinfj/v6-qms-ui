import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsncproducts';
/** QMS_NC_PRODUCT */
export interface QmsNcProductDto extends BaseBeanModel {
  /** 审理单编号;编号方法：ZCJ26a＋年代号（四位数）＋型号＋责任单位代号（三位数）＋流水号（三位数） */
  reviewCode?: string;
  /** 审理单密级 */
  reviewSecretLevel?: string;
  /** 日期 */
  reportTime?: any;
  reportTimeBegin?: any;
  reportTimeEnd?: any;
  /** 型号 */
  model?: string;
  /** 零件名称 */
  partName?: string;
  /** 零件图号 */
  partDrawingNo?: string;
  /** 组件名称 */
  assemblyName?: string;
  /** 组件图号 */
  assemblyDrawingNo?: string;
  /** 流水卡号 */
  routingCardNo?: string;
  /** 批次号 */
  batchNo?: string;
  /** 零组件序号 */
  componentSerialNo?: string;
  /** 工序号 */
  processNo?: string;
  /** 炉批号 */
  heatBatchNo?: string;
  /** 类别;Ⅰ类;Ⅱ类;Ⅲ类 */
  ncCategory?: string;
  /** 数量 */
  quantity?: number;
  /** 总页数 */
  totalPageCount?: number;
  /** 问题页数 */
  issuePageCount?: number;
  /** 图纸及技术条件要求;图纸、文件中的具体要求，如要求XX尺寸/间隙不大于XXXX */
  techSpecReq?: string;
  /** 不合格情况描述;准确描述不合格特性，如实测XX尺寸/间隙不大于XXXX）（可附页） */
  ncDescreption?: string;
  /** 检验员ID */
  inspectorId?: string;
  /** 检验员CODE */
  inspectorCode?: string;
  /** 检验员NAME */
  inspectorName?: string;
  /** 检验中心领导ID */
  inspectionDeptLeaderId?: string;
  /** 检验中心领导CODE */
  inspectionDeptLeaderCode?: string;
  /** 检验中心领导姓名 */
  inspectionDeptLeaderName?: string;
  /** 不合格原因分类;人、机、料、法、环、测、设计、其他 */
  causeCategory?: string;
  /** 不合格产生原因;针对不合格特性，从人、机、料、法、环、测等方面明确不合格原因，并勾选原因分类 */
  causeAnalysis?: string;
  /** 纠正措施;针对上述不合格品原因采取的系统性纠正措施，以避免后续不再因同类原因导致不合格，不能只是对单件不合格品的纠正 */
  correctiveMeasure?: string;
  /** 责任单位ID */
  responsibleDeptId?: string;
  /** 责任单位CODE */
  responsibleDeptCode?: string;
  /** 责任单位NAME */
  responsibleDeptName?: string;
  /** 责任单位ID */
  responsibleDeptLeaderId?: string;
  /** 责任单位CODE */
  responsibleDeptLeaderCode?: string;
  /** 责任单位NAME */
  responsibleDeptLeaderName?: string;
  /** 责任单位主管ID */
  responsibleSupervisorId?: string;
  /** 责任单位主管CODE */
  responsibleSupervisorCode?: string;
  /** 责任单位主管NAME */
  responsibleSupervisorName?: string;
  /** 责任人ID */
  responsibleUserId?: string;
  /** 责任人CODE */
  responsibleUserCode?: string;
  /** 责任人NAME */
  responsibleUserName?: string;
  /** 影响分析 */
  impactAnalysis?: string;
  /** 审理人员（小组）意见 */
  groupReviewOpinion?: string;
  /** 建议处置方式;返工;返修;报废;让步接收; 降级使用;退回供方 */
  groupDesposition?: string;
  /** 处置说明 */
  groupDespositionDesc?: string;
  /** 审理单位ID */
  reviewDeptId?: string;
  /** 审理单位CODE */
  reviewDeptCode?: string;
  /** 审理单位 */
  reviewDeptName?: string;
  /** 审理人员ID */
  reviewUserId?: string;
  /** 审理人员CODE */
  reviewUserCode?: string;
  /** 小组审理人员 */
  reviewUserName?: string;
  /** 小组审理时间 */
  reviewTime?: any;
  reviewTimeBegin?: any;
  reviewTimeEnd?: any;
  /** 是否提交委员会 */
  ynNeedCommitee?: string;
  /** 审理委员会意见;总师/副总师 */
  commiteeOpinion?: string;
  /** 委员会审批人ID */
  commiteeMemberId?: string;
  /** 委员会审批人USER */
  commiteeMemberCode?: string;
  /** 委员会审批人姓名 */
  commiteeMemberName?: string;
  /** 委员会审批时间 */
  commiteeApprovalTime?: any;
  commiteeApprovalTimeBegin?: any;
  commiteeApprovalTimeEnd?: any;
  /** 质量部门意见 */
  qualityDeptOpinion?: string;
  /** 质量部型号主管ID */
  modelQualitySupervisorId?: string;
  /** 质量部型号主管CODE */
  modelQualitySupervisorCode?: string;
  /** 质量部型号主管 */
  modelQualitySupervisorName?: string;
  /** 质量部确认时间 */
  qualityConfirmTime?: any;
  qualityConfirmTimeBegin?: any;
  qualityConfirmTimeEnd?: any;
  /** 是否需要军代表审批 */
  ynMilRep?: string;
  /** 军代表ID */
  milRepId?: string;
  /** 军代表CODE */
  milRepCode?: string;
  /** 军代表姓名 */
  milRepName?: string;
  /** 军代表意见 */
  milRepOpinion?: string;
  /** 军代表审批时间 */
  milRepApprovalTime?: any;
  milRepApprovalTimeBegin?: any;
  milRepApprovalTimeEnd?: any;
  /** 最终处置方式 */
  finalDisposition?: string;
  /** 处置方式说明 */
  finalDispositionDesc?: string;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 密级 */
  secretLevel?: any;
  /** 是否已删除 */
  ynDeleted?: string;
  /** 备注 */
  remark?: string;
  /** 排序 */
  orderBy?: number;
  /** 扩展字段_01 */
  attribute01?: string;
  /** 扩展字段_02 */
  attribute02?: string;
  /** 扩展字段_03 */
  attribute03?: string;
  /** 扩展字段_04 */
  attribute04?: string;
  /** 扩展字段_05 */
  attribute05?: string;
  /** 扩展字段_06 */
  attribute06?: string;
  /** 扩展字段_07 */
  attribute07?: string;
  /** 扩展字段_08 */
  attribute08?: string;
  /** 扩展字段_09 */
  attribute09?: string;
  /** 扩展字段_10 */
  attribute10?: string;
  /** 父节点ID */
  parentId?: string;
  /** 全路径 */
  treePath?: string;
  /** 节点层级 */
  treeLevel?: number;
  /** 本级排序 */
  treeSort?: number;
  /** 全级排序 */
  treeSorts?: string;
  /** 是否叶子节点 */
  treeLeaf?: string;
  bpmState?: string;
  bpmType?: string;
}

/** 获取分页数据 */
export function listQmsNcProductByPage(param: QueryParamModel): Promise<ResponsePageData<QmsNcProductDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsNcProduct (id: string): Promise<ResponseBaseData<QmsNcProductDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsNcProduct (form: QmsNcProductDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 保存并启动流程 */
export function saveFormAndStartProcess({
  processDefId,
  formCode,
  postData
}): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save-and-start-process/v1', {
    processDefId,
    formCode,
    bean: postData
  });
}

/** 根据id集合删除数据 */
export function delQmsNcProduct(ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}

/** 导出Excel */
export function exportExcel(param) {
  const download = {
    url: basePath + '/exportData/v1',
    data: param,
    method: 'post'
  } as downloadParam;
  return downloadSysFile(download);
}
