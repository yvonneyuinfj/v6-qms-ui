import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsauditsummarys';
/** 内审综述表 */
export interface QmsAuditSummaryDto extends BaseBeanModel {
  /** 审核计划ID;关联年度计划 */
  planId?: string;
  /** 审核通知单ID;关联已批准通知单 */
  noticeId?: string;
  /** 审核记录ID;关联审核记录 */
  recordId?: string;
  /** 综述编号;系统生成 */
  summaryCode?: string;
  /** 受审部门ID;通知单带入 */
  auditeeDeptId?: string;
  /** 受审部门CODE;通知单带入 */
  auditeeDeptCode?: string;
  /** 受审部门;通知单带入 */
  auditeeDeptName?: string;
  /** 内审计划执行情况 */
  executionDesc?: string;
  /** 体系文件适宜性评价 */
  documentSuitablilityEval?: string;
  /** 体系运行情况评价 */
  systemOperationEval?: string;
  /** 其他情况说明 */
  otherSituationDesc?: string;
  /** 业务状态;草稿、审批中、整改中、已关闭等 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
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
export function listQmsAuditSummaryByPage(param: QueryParamModel): Promise<ResponsePageData<QmsAuditSummaryDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsAuditSummary (id: string): Promise<ResponseBaseData<QmsAuditSummaryDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsAuditSummary (form: QmsAuditSummaryDto): Promise<ResponseBaseData<any>> {
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
export function delQmsAuditSummary(ids: [string]): Promise<ResponseBaseData<any>> {
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
