import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmscheckproblems';
/** 检查问题表 */
export interface QmsCheckProblemDto extends BaseBeanModel {
  /** 问题编号 */
  problemCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 问题描述 */
  problemDesc?: string;
  /** 问题分类 */
  problemCategory?: string;
  /** 整改单位ID */
  rectificationDeptId?: string;
  /** 整改单位CODE */
  rectificationDeptCode?: string;
  /** 整改单位 */
  rectificationDeptName?: string;
  /** 责任人ID */
  responsibleUserIds?: string;
  /** 责任人CODE */
  responsibleUserCodes?: string;
  /** 责任人姓名 */
  responsibleUserNames?: string;
  /** 整改期限 */
  rectificationDeadline?: any;
  rectificationDeadlineBegin?: any;
  rectificationDeadlineEnd?: any;
  /** 问题状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 整改完成时间 */
  completeTime?: any;
  completeTimeBegin?: any;
  completeTimeEnd?: any;
  /** 整改提交时间 */
  submitTime?: any;
  submitTimeBegin?: any;
  submitTimeEnd?: any;
  /** 来源类型;字典：INTERNAL_AUDIT;QUALITY_SUPERVISION;QUALITY_INSPECTION;QUALIFICATION_REVIEW;OTHER_CHECK */
  sourceType?: string;
  /** 来源业务ID;关联监督、检查、审核活动 */
  sourceId?: string;
  /** 来源业务编号;检查编号、监督编号等 */
  sourceCode?: string;
  /** 来源业务名称;检查名称、审核名称等 */
  sourceName?: string;
  /** 问题等级 */
  problemLevel?: string;
  /** 依据条款 */
  baisisClause?: string;
  /** 发现时间 */
  foundTime?: any;
  foundTimeBegin?: any;
  foundTimeEnd?: any;
  /** 涉及型号 */
  model?: string;
  /** 发现人ID */
  discovererStaffId?: string;
  /** 发现人CODE */
  discovererStaffCode?: string;
  /** 发现人 */
  discovererStaffName?: string;
  /** 是否需要整改 */
  ynRectification?: string;
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
export function listQmsCheckProblemByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsCheckProblemDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsCheckProblem (id: string): Promise<ResponseBaseData<QmsCheckProblemDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsCheckProblem (form: QmsCheckProblemDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsCheckProblem (ids: [string]): Promise<ResponseBaseData<any>> {
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
