import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsauditplans';
/** 审核计划 */
export interface QmsAuditPlanDto extends BaseBeanModel {
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
  /** 审核时间 */
  auditTime?: any;
  auditTimeBegin?: any;
  auditTimeEnd?: any;
  /** 是否创建通知单;通知单回写 */
  ynNotice?: string;
  /** 通知单ID;通知单回写 */
  auditNoticeId?: string;
  /** 通知单状态;通知单回写 */
  noticeStatus?: string;
  /** 通知单流程实例ID;通知单回写 */
  noticeProcessInstanceId?: string;
  /** 通知单流程状态;通知单回写 */
  noticeProcessStatus?: string;
  /** 审核覆盖产品;通知单回写 */
  coveredProduct?: string;
  /** 受审方人员ID;通知单回写 */
  auditeeUserId?: string;
  /** 受审方人员CODE;通知单回写 */
  auditeeUserCode?: string;
  /** 受审方人员;通知单回写 */
  auditeeUserName?: string;
  /** 主审ID;通知单回写 */
  chiefAuditorId?: string;
  /** 主审CODE;通知单回写 */
  chiefAuditorCode?: string;
  /** 主审;通知单回写 */
  chiefAuditorName?: string;
  /** 审核评价主管ID;通知单回写 */
  evaluationSupervisorId?: string;
  /** 审核评价主管CODE;通知单回写 */
  evaluationSupervisorCode?: string;
  /** 审核评价主管NAME;通知单回写 */
  evaluationSupervisorName?: string;
  /** 审核组长ID;通知单回写 */
  auditLeaderId?: string;
  /** 审核组长CODE;通知单回写 */
  auditLeaderCode?: string;
  /** 审核组长;通知单回写 */
  auditLeaderName?: string;
  /** 单位负责人ID;通知单回写 */
  auditeeLeaderId?: string;
  /** 单位负责人CODE;通知单回写 */
  auditeeLeaderCode?: string;
  /** 单位负责人;通知单回写 */
  auditeeLeaderName?: string;
  /** 是否创建检查记录;检查记录回写 */
  ynCheckRecord?: string;
  /** 检查记录ID;检查记录回写 */
  auditCheckRecordId?: string;
  /** 检查记录状态;检查记录回写 */
  checkRecordStatus?: string;
  /** 检查记录流程实例ID;检查记录回写 */
  checkRecordProcessInstanceId?: string;
  /** 检查记录流程状态;检查记录回写 */
  checkRecordProcessStatus?: string;
}

/** 获取分页数据 */
export function listQmsAuditPlanByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsAuditPlanDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsAuditPlan (id: string): Promise<ResponseBaseData<QmsAuditPlanDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsAuditPlan (form: QmsAuditPlanDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsAuditPlan (ids: [string]): Promise<ResponseBaseData<any>> {
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
