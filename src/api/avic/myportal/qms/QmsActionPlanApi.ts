import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsactionplans';
/** 通用实施计划表 */
export interface QmsActionPlanDto extends BaseBeanModel {
  /** 行动项ID */
  actionId?: string;
  /** 行动项标题 */
  actionName?: string;
  /** 来源类型 */
  sourceType?: string;
  /** 来源ID */
  sourceId?: string;
  /** 计划编号 */
  planCode?: string;
  /** 计划名称 */
  planName?: string;
  /** 计划内容 */
  planContent?: string;
  /** 计划类型 */
  planType?: string;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门CODE */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 责任人ID */
  responsibleUserId?: string;
  /** 责任人CODE */
  responsibleUserCode?: string;
  /** 责任人 */
  responsibleUserName?: string;
  /** 协同部门ID */
  assistDeptId?: string;
  /** 协同部门CODE */
  assistDeptCode?: string;
  /** 协同部门 */
  assistDeptName?: string;
  /** 开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 结束时间 */
  endTime?: any;
  endTimeBegin?: any;
  endTimeEnd?: any;
  /** 实际完成时间 */
  actualFinishTime?: any;
  actualFinishTimeBegin?: any;
  actualFinishTimeEnd?: any;
  /** 反馈周期 */
  feedbackCycle?: string;
  /** 计划状态 */
  status?: string;
  /** 反馈状态 */
  feedbackStatus?: string;
  /** 当前进度 */
  progress?: number;
  /** 是否逾期 */
  ynOverdue?: string;
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
  /** 父节点ID */
  parentId?: string;
  /** 全路径 */
  treePath?: string;
  /** 节点层级 */
  treeLevel?: number;
  /** 本级排序 */
  treeSort?: number;
  /** 全级排序 */
  treeSorts?: string;
  /** 是否叶子节点 */
  treeLeaf?: string;
  /** 计划要求 */
  expectedDeliverable?: string;
  /** PLAN_REQUIREMENT */
  planRequirement?: string;
}

/** 获取分页数据 */
export function listQmsActionPlanByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsActionPlanDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsActionPlan (id: string): Promise<ResponseBaseData<QmsActionPlanDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsActionPlan (form: QmsActionPlanDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsActionPlan (ids: [string]): Promise<ResponseBaseData<any>> {
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
