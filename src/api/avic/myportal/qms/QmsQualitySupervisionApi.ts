import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualitysupervisions';
/** 质量监督表 */
export interface QmsQualitySupervisionDto extends BaseBeanModel {
  /** 监督CODE */
  supervisionCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 监督时间;质量部手动选择 */
  supervisionTime?: any;
  supervisionTimeBegin?: any;
  supervisionTimeEnd?: any;
  /** 被监督单位ID */
  supervisedDeptId?: string;
  /** 被监督单位CODE */
  supervisedDeptCode?: string;
  /** 被监督单位 */
  supervisedDeptName?: string;
  /** 检查员ID;多人，逗号分隔 */
  inspectorStaffId?: string;
  /** 检查员CODE */
  inspectorStaffCode?: string;
  /** 检查员 */
  inspectorStaffName?: string;
  /** 问题数量;质量部手写 */
  problemCount?: number;
  /** 完成时间;全部问题完成时填写 */
  completionTime?: any;
  completionTimeBegin?: any;
  completionTimeEnd?: any;
  /** 监督状态;业务状态 */
  status?: string;
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
export function listQmsQualitySupervisionByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualitySupervisionDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualitySupervision (id: string): Promise<ResponseBaseData<QmsQualitySupervisionDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualitySupervision (form: QmsQualitySupervisionDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualitySupervision (ids: [string]): Promise<ResponseBaseData<any>> {
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
