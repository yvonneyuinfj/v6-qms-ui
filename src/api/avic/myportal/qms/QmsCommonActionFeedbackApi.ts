import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmscommonactionfeedbacks';
/** 通用执行反馈表 */
export interface QmsCommonActionFeedbackDto extends BaseBeanModel {
  /** 实施计划ID */
  planId?: string;
  /** 实施计划名称 */
  planName?: string;
  planContent?: string;
  /** 实际完成时间 */
  actualFinishTime?: any;
  actualFinishTimeBegin?: any;
  actualFinishTimeEnd?: any;
  /** 完成情况说明 */
  feedbackContent?: string;
  /** 反馈时间 */
  feedbackTime?: any;
  feedbackTimeBegin?: any;
  feedbackTimeEnd?: any;
  /** 反馈人ID */
  feedbackUserId?: string;
  /** 反馈人CODE */
  feedbackUserCode?: string;
  /** 反馈人 */
  feedbackUserName?: string;
  /** 本次进度 */
  progress?: number;
  /** 是否完成 */
  ynFinish?: string;
  /** 存在问题 */
  problemDesc?: string;
  /** 下一步措施 */
  nextMeasure?: string;
  /** 是否存在风险 */
  ynRisk?: string;
  /** 风险说明 */
  riskDesc?: string;
  /** 审批状态 */
  approvalStatus?: string;
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
  /** 截止时间*/
  deadline?: any;
  sourceObj?:string;
}

/** 获取分页数据 */
export function listQmsCommonActionFeedbackByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsCommonActionFeedbackDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsCommonActionFeedback (id: string): Promise<ResponseBaseData<QmsCommonActionFeedbackDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsCommonActionFeedback (form: QmsCommonActionFeedbackDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsCommonActionFeedback (ids: [string]): Promise<ResponseBaseData<any>> {
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
