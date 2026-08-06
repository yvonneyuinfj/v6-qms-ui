import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsmilitaryqualifications';
/** 军工资质基本信息 */
export interface QmsMilitaryQualificationDto extends BaseBeanModel {
  /** 归组ID;同一资质不同版本保持一致 */
  qualificationGroupId?: string;
  /** 类型CODE;字典 */
  qualificationTypeCode?: string;
  /** 类型;资质类型名称 */
  qualificationTypeName?: string;
  /** 证书编号 */
  certificationCode?: string;
  /** 资质范围 */
  qualificationScope?: string;
  /** 生效日期 */
  effectiveTime?: any;
  effectiveTimeBegin?: any;
  effectiveTimeEnd?: any;
  /** 失效日期 */
  expiryTime?: any;
  expiryTimeBegin?: any;
  expiryTimeEnd?: any;
  /** 颁发机构 */
  issuingAgency?: string;
  /** 证书版本号 */
  certVersionNo?: string;
  /** 上一版本ID */
  previousVersionId?: string;
  /** 是否当前版本 */
  ynCurrent?: string;
  /** 版本变更类型;字典：初始、换证、增项、变更、补发等 */
  changeType?: string;
  /** 变更内容;说明本版本变化 */
  changeContent?: string;
  /** 责任人ID */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人 */
  responsibleStaffName?: string;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门CODE */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 附件ID */
  fileId?: string;
  /** 证书状态 */
  status?: string;
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
export function listQmsMilitaryQualificationByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsMilitaryQualificationDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsMilitaryQualification (id: string): Promise<ResponseBaseData<QmsMilitaryQualificationDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsMilitaryQualification (form: QmsMilitaryQualificationDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsMilitaryQualification (ids: [string]): Promise<ResponseBaseData<any>> {
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
