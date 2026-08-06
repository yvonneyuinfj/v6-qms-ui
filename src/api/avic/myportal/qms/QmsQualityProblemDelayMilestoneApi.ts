import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
const basePath = '/myportal/qms/qmsqualityproblemdelaymilestones';
/** 里程碑明细表 */
export interface QmsQualityProblemDelayMilestoneDto extends BaseBeanModel {
  /** 延期申请ID */
  delayId?: string;
  /** 里程碑阶段;字典：01原因分析、02措施制定、03措施验证、04问题归零 */
  milestoneStage?: string;
  /** 是否涉及;Y/N */
  ynApplicable?: string;
  /** 计划开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 计划完成时间 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
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
export function listQmsQualityProblemDelayMilestoneByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityProblemDelayMilestoneDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityProblemDelayMilestone (id: string): Promise<ResponseBaseData<QmsQualityProblemDelayMilestoneDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityProblemDelayMilestone (form: QmsQualityProblemDelayMilestoneDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityProblemDelayMilestone (ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}



