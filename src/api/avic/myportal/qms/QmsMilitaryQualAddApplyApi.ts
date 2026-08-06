import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsmilitaryqualaddapplys';
/** 军工资质增项申请 */
export interface QmsMilitaryQualAddApplyDto extends BaseBeanModel {
  /** 申请编号 */
  applyCode?: string;
  /** 所属年份 */
  forYear?: string;
  /** 资质归组ID */
  qualificationGroupId?: string;
  /** 资质类型CODE */
  qualificationTypeCode?: string;
  /** 资质类型名称 */
  qualificationTypeName?: string;
  /** 产品名称 */
  productName?: string;
  /** 紧急度 */
  ugencyLevel?: string;
  /** 能力情况 */
  capabilityDesc?: string;
  /** 申请人ID */
  applicantStaffId?: string;
  /** 申请人CODE */
  applicantStaffCode?: string;
  /** 申请人姓名 */
  applicantStaffName?: string;
  /** 申请部门ID */
  applicantDeptId?: string;
  /** 申请部门CODE */
  applicantDeptCode?: string;
  /** 申请部门 */
  applicantDeptName?: string;
  /** 申请时间 */
  applyTime?: any;
  applyTimeBegin?: any;
  applyTimeEnd?: any;
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
  bpmState?: string;
  bpmType?: string;
}

/** 获取分页数据 */
export function listQmsMilitaryQualAddApplyByPage(param: QueryParamModel): Promise<ResponsePageData<QmsMilitaryQualAddApplyDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsMilitaryQualAddApply (id: string): Promise<ResponseBaseData<QmsMilitaryQualAddApplyDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsMilitaryQualAddApply (form: QmsMilitaryQualAddApplyDto): Promise<ResponseBaseData<any>> {
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
export function delQmsMilitaryQualAddApply(ids: [string]): Promise<ResponseBaseData<any>> {
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
