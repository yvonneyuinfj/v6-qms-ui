import request from '@/utils/request';
import type { BaseTreeModel, TreeNodeModel, ResponseBaseData } from '@/api/model/baseModel';

export const basePath = '/myportal/qms/qmsauditplans';
/** 年度内审计划及执行主表 */
export interface QmsAuditPlanDto extends BaseTreeModel {
  /** 审核计划计划编号 */
  planCode?: string;
  /** 审核活动名称 */
  planName?: string;
  /** 年度 */
  forYear?: string;
  /** 责任部门ID */
  auditType?: string;
  /** 责任部门编号 */
  auditName?: string;
  /** 责任部门 */
  auditMonth?: string;
  /** 受审部门ID */
  auditeeDeptId?: string;
  /** 受审部门CODE */
  auditeeDeptCode?: string;
  /** 受审部门 */
  auditeeDeptName?: string;
  /** 审核依据 */
  auditBasis?: string;
  /** 审核条款 */
  auditClause?: string;
  /** 型号/项目 */
  modelProject?: string;
  /** 审核范围 */
  auditScope?: string;
  /** 审核员ID */
  auditorId?: string;
  /** 审核员CODE */
  auditorCode?: string;
  /** 审核员 */
  auditorName?: string;
  /** 计划状态 */
  planStatus?: string;
  /** 计划来源 */
  planSource?: string;
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
}
//根据parentId获取子节点
export function getQmsAuditPlanNode (level: number, parentId: string): Promise<ResponseBaseData<TreeNodeModel[]>> {
  return request.get(basePath + '/get-treegrid/'+level+'/'+parentId+'/v1');
}

//树列表查询
export function searchQmsAuditPlan (params: any): Promise<ResponseBaseData<TreeNodeModel>> {
  return request.post(basePath + '/search-treegrid/v1', params);
}

//展开树
export function expandQmsAuditPlan(treeId: string): Promise<ResponseBaseData<TreeNodeModel[]>> {
  return request.get(basePath + '/expandTree/'+treeId+'/v1');
}

//保存表单数据
export function saveQmsAuditPlan(form: QmsAuditPlanDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

//根据id集合删除数据
export function delQmsAuditPlan (ids: string): Promise<ResponseBaseData<any>>  {
  return request.delete(basePath + '/delete-by-id/' + ids + '/v1', {});
}

//获取表单数据
export function getQmsAuditPlan (id: string): Promise<ResponseBaseData<QmsAuditPlanDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}


