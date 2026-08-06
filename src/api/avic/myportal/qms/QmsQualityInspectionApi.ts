import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualityinspections';
/** 质量检查表 */
export interface QmsQualityInspectionDto extends BaseBeanModel {
  /** 检查编号;检查编号+3位数流水号 */
  inspectionCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 检查名称;对XXX的专项检查 */
  inspectName?: string;
  /** 被检查单位ID;检查单位名称/代号 */
  inspectedDeptId?: string;
  /** 被检查单位CODE */
  inspectedDeptCode?: string;
  /** 被检查单位 */
  inspectedDeptName?: string;
  /** 涉及型号;多选，逗号分隔 */
  model?: string;
  /** 检查时间 */
  inspectionTime?: any;
  inspectionTimeBegin?: any;
  inspectionTimeEnd?: any;
  /** 检查投入 */
  inspectionWorkload?: number;
  /** 检查组长ID */
  leaderStaffId?: string;
  /** 检查组长CODE */
  leaderStaffCode?: string;
  /** 检查组长 */
  leaderStaffName?: string;
  /** 检查组成员ID */
  memberStaffId?: string;
  /** 检查组成员CODE */
  memberStaffCode?: string;
  /** 检查组成员 */
  memberStaffName?: string;
  /** 问题数 */
  problemCount?: number;
  /** 完成整改数 */
  completeCount?: number;
  /** 完成时间 */
  completeTime?: any;
  completeTimeBegin?: any;
  completeTimeEnd?: any;
  /** 业务状态 */
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
export function listQmsQualityInspectionByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityInspectionDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityInspection (id: string): Promise<ResponseBaseData<QmsQualityInspectionDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityInspection (form: QmsQualityInspectionDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityInspection (ids: [string]): Promise<ResponseBaseData<any>> {
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
