import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsmrinputitems';
/** 管评输入材料分工台账 */
export interface QmsMrInputItemDto extends BaseBeanModel {
  /** 年度 */
  forYear?: string;
  /** 编号 */
  sequenceCode?: string;
  /** 材料名称 */
  materalName?: string;
  /** 主要要求 */
  mainRequirement?: string;
  /** 主责部门ID */
  responsibleDeptId?: string;
  /** 主责部门CODE */
  responsibleDeptCode?: string;
  /** 主责部门 */
  responsibleDeptName?: string;
  /** 责任领导ID */
  responsibleDeptLeaderId?: string;
  /** 责任领导CODE */
  responsibleDeptLeaderCode?: string;
  /** 责任领导 */
  responsibleDeptLeaderName?: string;
  /** 责任人ID */
  responsibleUserId?: string;
  /** 责任人CODE */
  responsibleUserCode?: string;
  /** 责任人 */
  responsibleUserName?: string;
  /** 开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 截止时间 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
  /** 交付物要求 */
  deliverableRequirement?: string;
  /** 材料来源类型;常规材料、上年度改进项等 */
  sourceType?: string;
  /** 来源ID */
  sourceId?: string;
  /** 是否逾期 */
  ynOverdue?: string;
  /** 业务状态 */
  status?: string;
  /** 交付物提交状态 */
  feedbackStatus?: string;
  /** 交付物 */
  expectedDeliverable?: string;
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
}

/** 获取分页数据 */
export function listQmsMrInputItemByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsMrInputItemDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsMrInputItem (id: string): Promise<ResponseBaseData<QmsMrInputItemDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsMrInputItem (form: QmsMrInputItemDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsMrInputItem (ids: [string]): Promise<ResponseBaseData<any>> {
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
