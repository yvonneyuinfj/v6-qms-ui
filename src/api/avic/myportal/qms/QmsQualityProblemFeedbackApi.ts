import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsqualityproblemfeedbacks';
/** 归零反哺表 */
export interface QmsQualityProblemFeedbackDto extends BaseBeanModel {
  /** 反哺编号 */
  feedbackCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 来源问题ID */
  sourceProblemId?: string;
  /** 来源更新时间 */
  sourceUpdateTime?: any;
  sourceUpdateTimeBegin?: any;
  sourceUpdateTimeEnd?: any;
  /** 最近同步时间 */
  syncTime?: any;
  syncTimeBegin?: any;
  syncTimeEnd?: any;
  /** 来源系统CODE */
  sourceSystemCode?: string;
  /** 质量问题编号 */
  problemCode?: string;
  /** 来源问题状态 */
  sourceStatus?: string;
  /** 问题名称 */
  problemName?: string;
  /** 问题类型 */
  problemType?: string;
  /** 问题分类 */
  problemCategory?: string;
  /** 型号 */
  model?: string;
  /** 发生时间 */
  occurrenceTime?: any;
  occurrenceTimeBegin?: any;
  occurrenceTimeEnd?: any;
  /** 归零时间 */
  closeTime?: any;
  closeTimeBegin?: any;
  closeTimeEnd?: any;
  /** 责任人ID */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人 */
  responsibleStaffName?: string;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门CODE */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 归零报告ID */
  closeReportId?: string;
  /** 归零报告编号 */
  closeReportCode?: string;
  /** 归零报告名称 */
  closeReportName?: string;
  /** 问题原因和机理 */
  causeMechanism?: string;
  /** 改进措施 */
  improvementMeasure?: string;
  /** 反哺维度 */
  feedbackDimension?: string;
  /** 是否启用反哺 */
  ynStartFeedback?: string;
  /** 反哺意见说明 */
  feedbackDesc?: string;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 提交时间 */
  submitTime?: any;
  submitTimeBegin?: any;
  submitTimeEnd?: any;
  /** 完成时间 */
  completeTime?: any;
  completeTimeBegin?: any;
  completeTimeEnd?: any;
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
}

/** 获取分页数据 */
export function listQmsQualityProblemFeedbackByPage(param: QueryParamModel): Promise<ResponsePageData<QmsQualityProblemFeedbackDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityProblemFeedback (id: string): Promise<ResponseBaseData<QmsQualityProblemFeedbackDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityProblemFeedback (form: QmsQualityProblemFeedbackDto): Promise<ResponseBaseData<any>> {
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
export function delQmsQualityProblemFeedback(ids: [string]): Promise<ResponseBaseData<any>> {
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
