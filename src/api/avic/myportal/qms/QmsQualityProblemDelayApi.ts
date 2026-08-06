import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsqualityproblemdelays';
/** 质量问题延期 */
export interface QmsQualityProblemDelayDto extends BaseBeanModel {
  /** 延期编号 */
  delayCode?: string;
  /** 质量问题ID */
  problemId?: string;
  /** 质量问题反馈单的编号 */
  problemCode?: string;
  /** 质量问题反馈单标题;系统自动，同步质量问题反馈单的标题 */
  problemTitle?: string;
  /** 质量延期申请单标题;系统自动，关于xxx的延期申请 */
  delayTitle?: string;
  /** 延期次数 */
  delayTimes?: number;
  /** 原关闭时间 */
  originalCloseTime?: any;
  originalCloseTimeBegin?: any;
  originalCloseTimeEnd?: any;
  /** 申请关闭时间 */
  newCloseTime?: any;
  newCloseTimeBegin?: any;
  newCloseTimeEnd?: any;
  /** 延期原因;数据字典：原因复杂、新件加工周期长、严正周期长（多选） */
  delayReason?: string;
  /** 问题概述;系统自动，同步质量问题反馈单的问题概述 */
  problemSummary?: string;
  /** 当前工作进展 */
  currentProgress?: string;
  /** 应急措施 */
  emergencyMeasure?: string;
  /** 延期原因详细说明 */
  delayReasonDetail?: string;
  /** 科研平台任务编号 */
  ppmPlanCode?: string;
  /** 型号;系统自动，同步质量问题反馈单的型号 */
  model?: string;
  /** 申请人ID */
  applicantStaffId?: string;
  /** 申请人CODE */
  applicantStaffCode?: string;
  /** 申请人姓名 */
  applicantStaffName?: string;
  /** 申请部门ID */
  applicantDeptId?: string;
  /** 申请部门CODE */
  applicantDeptCode?: string;
  /** 申请部门 */
  applicantDeptName?: string;
  /** 申请时间 */
  applyTime?: any;
  applyTimeBegin?: any;
  applyTimeEnd?: any;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 所属年度;方便查询 */
  forYear?: string;
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
  bpmState?: string;
  bpmType?: string;
  /** 子表集合 */
  qmsQualityProblemDelayMilestoneList?: [];
}

/** 获取分页数据 */
export function listQmsQualityProblemDelayByPage(param: QueryParamModel): Promise<ResponsePageData<QmsQualityProblemDelayDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityProblemDelay (id: string): Promise<ResponseBaseData<QmsQualityProblemDelayDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityProblemDelay (form: QmsQualityProblemDelayDto): Promise<ResponseBaseData<any>> {
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
export function delQmsQualityProblemDelay(ids: [string]): Promise<ResponseBaseData<any>> {
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
