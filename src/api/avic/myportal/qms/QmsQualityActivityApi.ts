import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsqualityactivitys';
/** 质量活动台账表 */
export interface QmsQualityActivityDto extends BaseBeanModel {
  /** 活动编号;自动生成，QC/BZ/GG年份号-3位流水号 */
  activityCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 活动类型;数据字典：QC小组、质量信得过班组、质量攻关项目 */
  activityType?: string;
  /** 课题/班组/项目名称 */
  activityName?: string;
  /** 成员ID */
  membebrId?: string;
  /** 成员CODE */
  memberCode?: string;
  /** 成员 */
  memberName?: string;
  /** 人数 */
  memberCount?: number;
  /** 小组名称;QC小组使用 */
  groupName?: string;
  /** 活动结束时间;月度进展生成截止依据 */
  deadline?: any;
  deadlineBegin?: any;
  deadlineEnd?: any;
  /** 申请人ID */
  applyStaffId?: string;
  /** 申请人CODE */
  applyStaffCode?: string;
  /** 申请人姓名 */
  applyStaffName?: string;
  /** 申请部门ID */
  applyDeptId?: string;
  /** 申请部门CODE */
  applyDeptCode?: string;
  /** 申请部门 */
  applyDeptName?: string;
  /** 申请时间 */
  applyTime?: any;
  applyTimeBegin?: any;
  applyTimeEnd?: any;
  /** 组长/负责人ID */
  leaderStaffId?: string;
  /** 组长/负责人CODE */
  leaderStaffCode?: string;
  /** 组长/负责人 */
  leaderStaffName?: string;
  /** 涉及型号/项目 */
  modelProject?: string;
  /** 课题类型;QC小组：问题解决型/创新型 */
  topicType?: string;
  /** 课题来源;QC小组：指令型课题、指导型课题、自选课题 */
  topicSource?: string;
  /** 选题理由;QC小组填写 */
  selectionReason?: string;
  /** 活动目标 */
  activityGoal?: string;
  /** 攻关类别;质量信得过班组：体系运行类/体系改进类/攻坚型号类/故障攻关类/其他 */
  projectCategory?: string;
  /** 项目来源;质量信得过班组：自定项目/集团要求/所内要求/其他 */
  projectSource?: string;
  /** 班组基本情况;质量信得过班组 */
  teamBasicInfo?: string;
  /** 识别需求;质量信得过班组 */
  requirmentIdentification?: string;
  /** 明确目标;质量信得过班组 */
  objectiveDefinition?: string;
  /** 有效实施;质量信得过班组 */
  effectiveImplementation?: string;
  /** 成效检查;质量信得过班组 */
  effectCheck?: string;
  /** 攻关项目简介;攻关项目 */
  projectIntro?: string;
  /** 攻关目标;攻关项目 */
  projectGoal?: string;
  /** 业务状态 */
  status?: string;
  /** 流程实例ID */
  processInstanceId?: string;
  /** 流程状态 */
  processStatus?: string;
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
export function listQmsQualityActivityByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsQualityActivityDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsQualityActivity (id: string): Promise<ResponseBaseData<QmsQualityActivityDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsQualityActivity (form: QmsQualityActivityDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsQualityActivity (ids: [string]): Promise<ResponseBaseData<any>> {
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
