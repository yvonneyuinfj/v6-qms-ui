import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
const basePath = '/myportal/qms/qmsqualityrewardcontributeors';
/** 参与人员贡献表 */
export interface QmsQualityRewardContributeorDto extends BaseBeanModel {
  /** 质量奖励ID */
  rewardId?: string;
  /** 部门ID */
  deptId?: string;
  /** 部门CODE */
  deptCode?: string;
  /** 部门 */
  deptName?: string;
  /** 人员ID */
  staffId?: string;
  /** 人员CODE */
  staffCode?: string;
  /** 人员ID */
  staffName?: string;
  /** 贡献度 */
  contributionRate?: number;
  /** 关键贡献描述 */
  keyContributionDesc?: string;
  /** 奖励金额 */
  rewardAmount?: number;
  /** 奖金明细类型 */
  bonusType?: string;
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
export function listQmsQualityRewardContributeorByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityRewardContributeorDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityRewardContributeor (id: string): Promise<ResponseBaseData<QmsQualityRewardContributeorDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityRewardContributeor (form: QmsQualityRewardContributeorDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityRewardContributeor (ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}



