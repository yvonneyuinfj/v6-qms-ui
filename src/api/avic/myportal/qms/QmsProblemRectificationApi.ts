import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsproblemrectifications';
/** 问题整改表 */
export interface QmsProblemRectificationDto extends BaseBeanModel {
  /** 问题ID */
  checkProblemId?: string;
  /** 整改编号 */
  rectificationCode?: string;
  /** 所属年份;年度查询 */
  forYear?: string;
  /** 纠正类型;10纠正；20纠正计划 */
  correctionType?: string;
  /** 纠正或纠正计划;责任人填写 */
  correctionContent?: string;
  /** 原因分析;责任人填写 */
  causeAnalysis?: string;
  /** 纠正措施类型;10纠正措施；20纠正措施计划 */
  correctiveActionType?: string;
  /** 纠正措施或计划;责任人填写 */
  correctiveAction?: string;
  /** 举一反三情况;责任人填写 */
  horizontalCheck?: string;
  /** 整改完成情况;整改完成结果和效果说明 */
  rectificationResult?: string;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
  /** 整改完成时间 */
  completeTime?: any;
  completeTimeBegin?: any;
  completeTimeEnd?: any;
  /** 提交时间 */
  submitTime?: any;
  submitTimeBegin?: any;
  submitTimeEnd?: any;
  /** 来源类型;字典：质量问题、内部审核（不符合项）、质量监督（问题）、资质管理（不符合项或问题项）、管理评审、不合格品（不合格审理）、举手报告 */
  sourceType?: string;
  /** 来源业务ID;来源问题主键 */
  sourceId?: string;
  /** 来源问题编号;来源业务问题编号 */
  sourceCode?: string;
  /** 来源问题名称;用于列表展示 */
  sourceName?: string;
  /** 问题描述;从来源业务复制 */
  problemDesc?: string;
  /** 问题分类;字典 */
  problemCategory?: string;
  /** 整改要求;问题提出部门填写 */
  rectificationRequirement?: string;
  /** 问题发现时间 */
  foundTime?: any;
  foundTimeBegin?: any;
  foundTimeEnd?: any;
  /** 整改单位ID */
  rectificationDeptId?: string;
  /** 整改单位CODE */
  rectificationDeptCode?: string;
  /** 整改单位 */
  rectificationDeptName?: string;
  /** 责任人ID */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人 */
  responsibleStaffName?: string;
  /** 整改期限 */
  rectificationDeadline?: any;
  rectificationDeadlineBegin?: any;
  rectificationDeadlineEnd?: any;
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
export function listQmsProblemRectificationByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsProblemRectificationDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsProblemRectification (id: string): Promise<ResponseBaseData<QmsProblemRectificationDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsProblemRectification (form: QmsProblemRectificationDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsProblemRectification (ids: [string]): Promise<ResponseBaseData<any>> {
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
