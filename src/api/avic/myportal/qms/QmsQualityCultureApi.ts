import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualitycultures';
/** 质量文化 */
export interface QmsQualityCultureDto extends BaseBeanModel {
  /** 文化编号 */
  cultureCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 活动类型;QUALITY_WEEK质量周、QUALITY_MONTH质量月 */
  activityType?: string;
  /** 活动主题 */
  activityTheme?: string;
  /** 活动开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 活动结束时间 */
  endTime?: any;
  endTimeBegin?: any;
  endTimeEnd?: any;
  /** 发布时间 */
  publishTime?: any;
  publishTimeBegin?: any;
  publishTimeEnd?: any;
  /** 完成时间 */
  completeTime?: any;
  completeTimeBegin?: any;
  completeTimeEnd?: any;
  /** 状态 */
  status?: string;
  /** 活动来源 */
  activitySource?: string;
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
export function listQmsQualityCultureByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityCultureDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityCulture (id: string): Promise<ResponseBaseData<QmsQualityCultureDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityCulture (form: QmsQualityCultureDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityCulture (ids: [string]): Promise<ResponseBaseData<any>> {
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
