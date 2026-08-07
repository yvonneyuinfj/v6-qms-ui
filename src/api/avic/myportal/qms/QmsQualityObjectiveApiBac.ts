import request from '@/utils/request';
import type { BaseTreeModel, TreeNodeModel, ResponseBaseData } from '@/api/model/baseModel';

export const basePath = '/myportal/qms/qmsqualityobjectives';

/** 质量目标台账表 */
export interface QmsQualityObjectiveDto extends BaseTreeModel {
  /** 目标来源 */
  objectiveSource?: string;
  /** 目标编码 */
  objectiveCode?: string;
  /** 考核/衡量指标 */
  objectiveName?: string;
  /** 指标说明 */
  objectiveContent?: string;
  /** 目标层级;1所级5部门级 */
  objectiveLevel?: string;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门编号 */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 统计周期;MONTH月度，QUARTER季度，HALFYEAR半年，YEAR年度，REALTIME根据系统数据动态更新 */
  dataStatCycle?: string;
  /** 指标类型;QUANT定量；QUAL:定性 */
  indicatorType?: string;
  /** 开始日期 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 目标状态 */
  status?: string;
  /** 目标值 */
  targetValue?: string;
  /** 目标单位;百分比，次，项，天等 */
  targetUnit?: string;
  /** 卓越值 */
  excellentValue?: string;
  /** 基准值 */
  baselineValue?: string;
  /** 实际完成值 */
  actualValue?: string;
  /** 完成率 */
  completionRate?: number;
  /** 完成结论;已完成，基本完成，未完成等 */
  completionResult?: string;
  /** 完成判定标准;如何判定完成 */
  judgementStandard?: string;
  /** 风险状态;正常、预警、逾期、风险 */
  riskStatus?: string;
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
  /** 所属年度 */
  forYear?: string;
  /** 建议承接部门IDS;所级目标字段 */
  suggestAcceptDeptId?: string;
  /** 建议承接部门CODS;所级目标字段 */
  suggestAcceptDeptCode?: string;
  /** 建议承接部门;所级目标字段 */
  suggestAcceptDeptName?: string;
  /** 截止日期 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
  /** 流程状态 */
  processStatus?: string;
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
  /** 交付物 */
  expectedDeliverable?: string;
}

//根据parentId获取子节点
export function getQmsQualityObjectiveNode(level: number, parentId: string): Promise<ResponseBaseData<TreeNodeModel[]>> {
  return request.get(basePath + '/get-treegrid/' + level + '/' + parentId + '/v1');
}

//树列表查询
export function searchQmsQualityObjective(params: any): Promise<ResponseBaseData<TreeNodeModel>> {
  return request.post(basePath + '/search-treegrid/v1', params);
}

//展开树
export function expandQmsQualityObjective(treeId: string): Promise<ResponseBaseData<TreeNodeModel[]>> {
  return request.get(basePath + '/expandTree/' + treeId + '/v1');
}

//保存表单数据
export function saveQmsQualityObjective(form: QmsQualityObjectiveDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

//根据id集合删除数据
export function delQmsQualityObjective(ids: string): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-id/' + ids + '/v1', {});
}

//获取表单数据
export function getQmsQualityObjective(id: string): Promise<ResponseBaseData<QmsQualityObjectiveDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

export function getTreeSortById(pid: string): Promise<ResponseBaseData<number>> {
  return request.get(basePath + '/get-new-tree-sort/' + pid + '/v1');
}

export function getQmsQualityObjectiveByParentId(pid: string): Promise<ResponseBaseData<QmsQualityObjectiveDto>> {
  return request.get(basePath + '/getByPid/' + pid + '/v1');
}





