import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';
const basePath = '/myportal/qms/qmsbasicmodelinfos';
/** QMS_BASIC_MODEL_INFO */
export interface QmsBasicModelInfoDto extends BaseBeanModel {
  /** 型号 */
  model?: string;
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
  /** 总师单位 */
  managerDept?: string;
  /** 总承单位 */
  productDept?: string;
  /** 军代表ID */
  milRepId?: string;
  /** 军代表CODE */
  milRepCode?: string;
  /** 军代表 */
  milRepName?: string;
  /** 副总师ID */
  deputyChiefDesignerId?: string;
  /** 副总师CODE */
  deputyChiefDesignerCode?: string;
  /** 副总师 */
  deputyChiefDesignerName?: string;
  /** 科研部主管ID */
  rdManagerId?: string;
  /** 科研部主管CODE */
  rdManagerCode?: string;
  /** 科研部主管 */
  rdManagerName?: string;
  /** 质量部主管ID */
  qaManagerId?: string;
  /** 质量部主管CODE */
  qaManagerCode?: string;
  /** 质量部主管 */
  qaManagerName?: string;
}

/** 获取分页数据 */
export function listQmsBasicModelInfoByPage (
  param: QueryParamModel
): Promise<ResponsePageData<QmsBasicModelInfoDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

export function listQmsBasicModelList (
  param: QueryParamModel
): Promise<ResponseBaseData<Array<QmsBasicModelInfoDto>>> {
  return request.post(basePath + '/search/v1', param);
}

/** 根据id加载数据 */
export function getQmsBasicModelInfo (id: string): Promise<ResponseBaseData<QmsBasicModelInfoDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsBasicModelInfo (form: QmsBasicModelInfoDto): Promise<ResponseBaseData<any>> {
  return request.post(basePath + '/save/v1', form);
}

/** 根据id集合删除数据 */
export function delQmsBasicModelInfo (ids: [string]): Promise<ResponseBaseData<any>> {
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
