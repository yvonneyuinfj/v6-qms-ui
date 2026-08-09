import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
const basePath = '/myportal/qms/qmsauditcheckdetails';
/** 审核检查明细表 */
export interface QmsAuditCheckDetailDto extends BaseBeanModel {
  /** 审核记录ID */
  recordId?: string;
  /** 审核计划ID;关联年度计划 */
  planId?: string;
  /** 审核通知单ID;关联已批准通知单 */
  noticeId?: string;
  /** 序号;系统生成 */
  sequenceCode?: string;
  /** 条款号 */
  clauseNo?: string;
  /** 条款内容 */
  clauseContent?: string;
  /** 审核员ID */
  auditorId?: string;
  /** 审核员CODE */
  auditorCode?: string;
  /** 审核人员 */
  auditorName?: string;
  /** 检查内容 */
  checkContent?: string;
  /** 型号 */
  checkModel?: string;
  /** 检查记录 */
  checkRecord?: string;
  /** 符合情况;符合：无建议;符合：有建议;不符合;（三选一） */
  conformityResult?: string;
  /** 建议内容;符合：有建议时必填 */
  adviceContent?: string;
  /** 明细状态;草稿、有效、已生成不符合项 */
  status?: string;
  /** 是否不符合 */
  ynNc?: string;
  /** 不符合ID */
  ncId?: string;
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

/** 获取分页数据 */
export function listQmsAuditCheckDetailByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsAuditCheckDetailDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsAuditCheckDetail (id: string): Promise<ResponseBaseData<QmsAuditCheckDetailDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsAuditCheckDetail (form: Array<QmsAuditCheckDetailDto>): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsAuditCheckDetail (ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}



