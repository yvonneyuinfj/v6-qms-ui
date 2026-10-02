import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsauditncs';
/** 不符合项表 */
export interface QmsAuditNcDto extends BaseBeanModel {
  /** 不符合项编号 */
  ncCode?: string;
  /** 审核记录ID */
  recordId?: string;
  /** 审核计划ID;关联年度计划 */
  planId?: string;
  /** 审核通知单ID;关联已批准通知单 */
  noticeId?: string;
  /** 检查明细ID */
  detailId?: string;
  /** 受审部门ID;通知单带入 */
  auditeeDeptId?: string;
  /** 受审部门CODE;通知单带入 */
  auditeeDeptCode?: string;
  /** 受审部门;通知单带入 */
  auditeeDeptName?: string;
  /** 审核依据的标准和文件;主审填写 */
  auditBasis?: string;
  /** 审核时间;通知单带入 */
  auditTime?: any;
  auditTimeBegin?: any;
  auditTimeEnd?: any;
  /** 受审方人员ID;通知单带入 */
  auditeeUserId?: string;
  /** 受审方人员CODE;通知单带入 */
  auditeeUserCode?: string;
  /** 受审方人员;通知单带入 */
  auditeeUserName?: string;
  /** 不符合程度;一般、严重 */
  ncLevel?: string;
  /** 不符合标准条款号 */
  standardClauseNo?: string;
  /** 不符合项实施描述 */
  ncFactDesc?: string;
  /** 整改处理人ID */
  rectifyHandlerId?: string;
  /** 整改处理人CODE */
  rectifyHandlerCode?: string;
  /** 整改处理人 */
  rectifyHandlerName?: string;
  /** 行动项ID */
  actionId?: string;
  /** 业务状态;草稿、审批中、整改中、已关闭等 */
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
  /** 交付物 */
  expectedDeliverable?: string;
}

/** 获取分页数据 */
export function listQmsAuditNcByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsAuditNcDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsAuditNc (id: string): Promise<ResponseBaseData<QmsAuditNcDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsAuditNc (form: QmsAuditNcDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsAuditNc (ids: [string]): Promise<ResponseBaseData<any>> {
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
