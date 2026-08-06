import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualityactivityprogresss';
/** 活动过程反馈表 */
export interface QmsQualityActivityProgressDto extends BaseBeanModel {
  /** 所属年份 */
  forYear?: string;
  /** 月份 */
  forMonth?: string;
  /** 工作进展 */
  workProgress?: string;
  /** 反馈人ID */
  feedbackStaffId?: string;
  /** 反馈人CODE */
  feedbackStaffCode?: string;
  /** 反馈人 */
  feedbackStaffName?: string;
  /** 反馈时间 */
  feedbackTime?: any;
  feedbackTimeBegin?: any;
  feedbackTimeEnd?: any;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 进展编号 */
  progressNo?: string;
  /** 活动ID */
  activityId?: string;
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
export function listQmsQualityActivityProgressByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityActivityProgressDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityActivityProgress (id: string): Promise<ResponseBaseData<QmsQualityActivityProgressDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityActivityProgress (form: QmsQualityActivityProgressDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityActivityProgress (ids: [string]): Promise<ResponseBaseData<any>> {
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
