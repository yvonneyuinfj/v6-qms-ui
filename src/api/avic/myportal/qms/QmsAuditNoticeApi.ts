import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsauditnotices';
/** 内审通知单 */
export interface QmsAuditNoticeDto extends BaseBeanModel {
  /** 审核计划ID */
  planId?: string;
  /** 通知单编号;系统生成 */
  noticeCode?: string;
  /** 通知单名称 */
  noticeName?: string;
  /** 审核目的;主审填写 */
  auditPurpose?: string;
  /** 审核依据的标准和文件;主审填写 */
  auditBasis?: string;
  /** 审核条款 */
  auditClause?: string;
  /** 型号/项目 */
  modelProject?: string;
  /** 审核范围 */
  auditScope?: string;
  /** 审核覆盖产品;主审填写 */
  coveredProduct?: string;
  /** 审核日期;主审填写 */
  auditTime?: any;
  auditTimeBegin?: any;
  auditTimeEnd?: any;
  /** 审核持续天数 */
  durationDays?: number;
  /** 受审部门ID */
  auditeeDeptId?: string;
  /** 受审部门CODE */
  auditeeDeptCode?: string;
  /** 受审核部门 */
  auditeeDeptName?: string;
  /** 单位负责人ID */
  auditeeLeaderId?: string;
  /** 单位负责人CODE */
  auditeeLeaderCode?: string;
  /** 单位负责人 */
  auditeeLeaderName?: string;
  /** 审核员ID;主审填写 */
  auditorId?: string;
  /** 审核员CODE;主审填写 */
  auditorCode?: string;
  /** 审核人员;主审填写 */
  auditorName?: string;
  /** 主审ID */
  chiefAuditorId?: string;
  /** 主审CODE */
  chiefAuditorCode?: string;
  /** 主审 */
  chiefAuditorName?: string;
  /** 审核评价主管ID */
  evaluationSupervisorId?: string;
  /** 审核评价主管CODE */
  evaluationSupervisorCode?: string;
  /** 审核评价主管NAME */
  evaluationSupervisorName?: string;
  /** 审核组长ID */
  auditLeaderId?: string;
  /** 审核组长CODE */
  auditLeaderCode?: string;
  /** 审核组长 */
  auditLeaderName?: string;
  /** 受审方人员ID */
  auditeeUserId?: string;
  /** 受审方人员CODE */
  auditeeUserCode?: string;
  /** 受审方人员 */
  auditeeUserName?: string;
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
export function listQmsAuditNoticeByPage(param: QueryParamModel): Promise<ResponsePageData<QmsAuditNoticeDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsAuditNotice (id: string): Promise<ResponseBaseData<QmsAuditNoticeDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

export function getQmsAuditNoticeByPlanId (planId: string): Promise<ResponseBaseData<QmsAuditNoticeDto>> {
  return request.get(basePath + '/getByPlanId/' + planId + '/v1');
}

/** 保存表单数据 */
export function saveQmsAuditNotice (form: QmsAuditNoticeDto): Promise<ResponseBaseData<any>> {
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
export function delQmsAuditNotice(ids: [string]): Promise<ResponseBaseData<any>> {
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
