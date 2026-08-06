import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmstop10problems';
/** TOP10问题台账 */
export interface QmsTop10ProblemDto extends BaseBeanModel {
  /** 所属年份 */
  forYear?: string;
  /** 编号;2025-TOP-001 */
  topCode?: string;
  /** 问题名称 */
  problemName?: string;
  /** 主管副总师ID */
  deputyChiefUserId?: string;
  /** 主管副总师CODE */
  deputyChiefUserCode?: string;
  /** 主管副总师 */
  deputyChiefUserName?: string;
  /** 主管部门ID */
  responsibleDeptId?: string;
  /** 主管部门CODE */
  responsibleDeptCode?: string;
  /** 主管部门 */
  responsibleDeptName?: string;
  /** 责任人ID */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人 */
  responsibleStaffName?: string;
  /** 归零节点 */
  planCloseTime?: any;
  planCloseTimeBegin?: any;
  planCloseTimeEnd?: any;
  /** 用户;空军/海军/其他 */
  userType?: string;
  /** 阶段;科研/批产 */
  problemStage?: string;
  /** 级别;集团/所级 */
  problemLevel?: string;
  /** 计划完成情况;以分数或进度条形式展现 */
  planCompletionRate?: string;
  /** 周反馈情况;分数或进度条形式展现 */
  weeklyFeedbackRate?: string;
  /** 销号状态;攻关中/已销号 */
  status?: string;
  /** 销号时间 */
  closeTime?: any;
  closeTimeBegin?: any;
  closeTimeEnd?: any;
  /** 质量问题编号;非必填，质量问题系统内的编号 */
  qualityProblemCode?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 当前工作进展 */
  currentProgress?: string;
  /** 周反馈开始时间 */
  weeklyFeedbackStartTime?: any;
  weeklyFeedbackStartTimeBegin?: any;
  weeklyFeedbackStartTimeEnd?: any;
  /** 质量主管ID */
  qualitySupervisorId?: string;
  /** 质量主管CODE */
  qualitySupervisorCode?: string;
  /** 质量主管 */
  qualitySupervisorName?: string;
  /** 型号 */
  model?: string;
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
}

/** 获取分页数据 */
export function listQmsTop10ProblemByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsTop10ProblemDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsTop10Problem (id: string): Promise<ResponseBaseData<QmsTop10ProblemDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsTop10Problem (form: QmsTop10ProblemDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsTop10Problem (ids: [string]): Promise<ResponseBaseData<any>> {
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
