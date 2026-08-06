import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsqualityrewards';
/** 质量奖励申请表 */
export interface QmsQualityRewardDto extends BaseBeanModel {
  /** 项目名称 */
  awardProjectName?: string;
  /** 涉及型号 */
  model?: string;
  /** 参与人员数量 */
  participantCount?: number;
  /** 经济效益预估 */
  economicBenefitEstimate?: string;
  /** 奖励类型;部门、个人，可多选 */
  awardType?: string;
  /** 申报/推荐事由;说明事迹具体情况和每个奖励人员的作用和贡献.（限定不超过500字）事迹应包括时间、型号和产品名称、地点、人员和所在单位、事迹内容、取得的效果（如避免较大经济损失、指标改善明显，通过发现问题形成改进完善了体系标准得以推广应用等）。 */
  applyReason?: string;
  /** 引用条款 */
  mainClauseName?: string;
  /** 一级条款CODE */
  clauseLevel1Code?: string;
  /** 二级条款CODE */
  clauseLevel2Code?: string;
  /** 活动前效果 */
  beforeEffectDesc?: string;
  /** 活动后效果 */
  afterEffectDesc?: string;
  /** 质量事迹简介;不超过400字 */
  qualityDeedDesc?: string;
  /** 运用的先进质量工具或方法 */
  advancedToolMethod?: string;
  /** 优化的流程体系文件名称 */
  optimizedSystemFileName?: string;
  /** 优化的流程体系文件编号 */
  optimizedSystemFileNameNo?: string;
  /** 奖励编号 */
  rewardCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 申报人ID */
  applyStaffId?: string;
  /** 申报人CODE */
  applyStaffCode?: string;
  /** 申报人 */
  applyStaffName?: string;
  /** 申报单位ID */
  applyDeptId?: string;
  /** 申报单位CODE */
  applyDeptCode?: string;
  /** 申报单位 */
  applyDeptName?: string;
  /** 申报时间 */
  applyTime?: any;
  applyTimeBegin?: any;
  applyTimeEnd?: any;
  /** 质量信息上报确认;Y\N\NA */
  qualityInfoReportResult?: string;
  /** 按期归零或关闭确认;Y\N\NA */
  zeroCloseResult?: string;
  /** 体系符合性确认;Y\N\NA */
  qmsComplianceResult?: string;
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
  bpmState?: string;
  bpmType?: string;
  /** 子表集合 */
  qmsQualityRewardContributeorList?: [];
}

/** 获取分页数据 */
export function listQmsQualityRewardByPage(param: QueryParamModel): Promise<ResponsePageData<QmsQualityRewardDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityReward (id: string): Promise<ResponseBaseData<QmsQualityRewardDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityReward (form: QmsQualityRewardDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 保存并启动流程 */
export function saveFormAndStartProcess({
  processDefId,
  formCode,
  postData
}): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save-and-start-process/v1', {
    processDefId,
    formCode,
    bean: postData
  });
}

/** 根据id集合删除数据 */
export function delQmsQualityReward(ids: [string]): Promise<ResponseBaseData<any>> {
  return request.delete(basePath + '/delete-by-ids/v1', { data: ids });
}

/** 导出Excel */
export function exportExcel(param) {
  const download = {
    url: basePath + '/exportData/v1',
    data: param,
    method: 'post'
  } as downloadParam;
  return downloadSysFile(download);
}
