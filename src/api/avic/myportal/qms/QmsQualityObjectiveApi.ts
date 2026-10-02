import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualityobjectives';
/** 质量目标台账表 */
export interface QmsQualityObjectiveDto extends BaseBeanModel {
  /** 目标编码 */
  objectiveCode?: string;
  /** 目标名称 */
  objectiveName?: string;
  /** 目标内容 */
  objectiveContent?: string;
  /** 目标层级;INST所级DEPT部门级 */
  objectiveLevel?: string;
  /** 所属年度 */
  forYear?: string;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门编号 */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 建议承接部门IDS;所级目标字段 */
  suggestAcceptDeptId?: string;
  /** 建议承接部门CODS;所级目标字段 */
  suggestAcceptDeptCode?: string;
  /** 建议承接部门;所级目标字段 */
  suggestAcceptDeptName?: string;
  /** 统计周期;MONTH月度，QUARTER季度，HALFYEAR半年，YEAR年度，REALTIME根据系统数据动态更新 */
  dataStatCycle?: string;
  /** 指标类型;QUANT定量；QUAL:定性 */
  indicatorType?: string;
  /** 开始日期 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 截止日期 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
  /** 业务状态 */
  status?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 目标值 */
  targetValue?: string;
  /** 目标单位;百分比，次，项，天等 */
  targetUnit?: string;
  /** 完成率 */
  completionRate?: number;
  /** 卓越值 */
  excellentValue?: string;
  /** 基准值 */
  baselineValue?: string;
  /** 实际完成值 */
  actualValue?: string;
  /** 完成结论;已完成，基本完成，未完成等 */
  completionResult?: string;
  /** 完成判定标准;如何判定完成 */
  judgementStandard?: string;
  /** 风险状态;正常、预警、逾期、风险 */
  riskStatus?: string;
  /** 最近反馈时间;系统反写 */
  latestFeedbackTime?: any;
  latestFeedbackTimeBegin?: any;
  latestFeedbackTimeEnd?: any;
  /** 发布时间;所级目标字段 */
  publishTime?: any;
  publishTimeBegin?: any;
  publishTimeEnd?: any;
  /** 已承接部门ID;所级目标字段 */
  acceptedDeptId?: string;
  /** 已承接部门;所级目标字段 */
  acceptedDeptName?: string;
  /** 已承接部门数量;所级目标字段 */
  acceptedDeptCount?: number;
  /** 已完成部门ID;所级目标字段 */
  completedDeptId?: string;
  /** 已完成部门;所级目标字段 */
  completedDeptName?: string;
  /** 已完成部门数;所级目标字段 */
  completedDeptCount?: number;
  /** 部门质控员ID;部门级目标字段 */
  qcUserId?: string;
  /** 部门质控员CODE;部门级目标字段 */
  qcUserCode?: string;
  /** 部门质控员;部门级目标字段 */
  qcUserName?: string;
  /** 责任领导ID;部门级目标字段 */
  responsibleLeaderId?: string;
  /** 责任领导CODE;部门级目标字段 */
  responsibleLeaderCode?: string;
  /** 责任领导;部门级目标字段 */
  responsibleLeaderName?: string;
  /** 审批流程实例ID;部门级目标字段 */
  processInstId?: string;
  /** 审批通过时间;部门级目标字段 */
  approvalTime?: any;
  approvalTimeBegin?: any;
  approvalTimeEnd?: any;
  /** 计划总数;部门级目标字段 */
  planCount?: number;
  /** 已完成计划数;部门级目标字段 */
  completedPlanCount?: number;
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
  /** 交付物 */
  expectedDeliverable?: string;
  /** 目标来源 */
  objectiveSource?: string;
  /** 责任人 */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人姓名 */
  responsibleStaffName?: string;
}

/** 获取分页数据 */
export function listQmsQualityObjectiveByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityObjectiveDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityObjective (id: string): Promise<ResponseBaseData<QmsQualityObjectiveDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityObjective (form: QmsQualityObjectiveDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityObjective (ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}

/** 导出Excel */
export function exportExcel (param: any) {
  const download = {
    url: basePath + '/exportData/v1',
    data: param,
    method: 'post'
  } as downloadParam;
  return downloadSysFile(download);
}
