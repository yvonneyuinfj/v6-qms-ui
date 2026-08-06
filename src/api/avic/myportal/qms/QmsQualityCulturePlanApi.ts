import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualitycultureplans';
/** 文化活动计划表 */
export interface QmsQualityCulturePlanDto extends BaseBeanModel {
  /** 文化ID */
  cultureId?: string;
  /** 计划编号 */
  planCode?: string;
  /** 主要工作事项 */
  workItem?: string;
  /** 交付物 */
  deliverable?: string;
  /** 组织部门ID */
  organizingDeptId?: string;
  /** 组织部门CODE */
  organizingDeptCode?: string;
  /** 组织部门 */
  organizingDeptName?: string;
  /** 组织人ID */
  organizerStaffId?: string;
  /** 组织人CODE */
  organizerStaffCode?: string;
  /** 组织人 */
  organizerStaffName?: string;
  /** 实施部门ID */
  implementDeptId?: string;
  /** 实施部门CODE */
  implementDeptCode?: string;
  /** 实施部门 */
  implementDeptName?: string;
  /** 开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 结束时间 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
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
}

/** 获取分页数据 */
export function listQmsQualityCulturePlanByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityCulturePlanDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityCulturePlan (id: string): Promise<ResponseBaseData<QmsQualityCulturePlanDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityCulturePlan (form: QmsQualityCulturePlanDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityCulturePlan (ids: [string]): Promise<ResponseBaseData<any>> {
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
