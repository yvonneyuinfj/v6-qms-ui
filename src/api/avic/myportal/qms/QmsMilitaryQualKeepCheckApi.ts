import request from '@/utils/request';
import type { BaseBeanModel, ResponsePageData, ResponseBaseData, QueryParamModel } from '@/api/model/baseModel';
import type { downloadParam } from '@/utils/download-util';
import { downloadSysFile } from '@/utils/download-util';

const basePath = '/myportal/qms/qmsmilitaryqualkeepchecks';
/** 资格保持自查表 */
export interface QmsMilitaryQualKeepCheckDto extends BaseBeanModel {
  /** 所属年份 */
  forYear?: string;
  /** 开始时间 */
  startTime?: any;
  startTimeBegin?: any;
  startTimeEnd?: any;
  /** 结束时间 */
  endTime?: any;
  endTimeBegin?: any;
  endTimeEnd?: any;
  /** 责任部门ID */
  responsibleDeptId?: string;
  /** 责任部门CODE */
  responsibleDeptCode?: string;
  /** 责任部门 */
  responsibleDeptName?: string;
  /** 责任人ID */
  responsibleStaffId?: string;
  /** 责任人CODE */
  responsibleStaffCode?: string;
  /** 责任人 */
  responsibleStaffName?: string;
  /** 自查内容编码 */
  itemCode?: string;
  /** 自查内容 */
  checkContent?: string;
  /** 自查结论;正常/异常 */
  checkConclusion?: string;
  /** 事项说明;结论为“异常”时必填 */
  matterDesc?: string;
  /** 自查周期CODE */
  periodCode?: string;
  /** 显示序号 */
  itemNo?: string;
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
export function listQmsMilitaryQualKeepCheckByPage(param: QueryParamModel): Promise<ResponsePageData<QmsMilitaryQualKeepCheckDto>> {
  return request.post(basePath + '/search-by-page/v1', param);
}

/** 根据id加载数据 */
export function getQmsMilitaryQualKeepCheck (id: string): Promise<ResponseBaseData<QmsMilitaryQualKeepCheckDto>> {
  return request.get(basePath + '/get/' + id + '/v1');
}

/** 保存表单数据 */
export function saveQmsMilitaryQualKeepCheck (form: QmsMilitaryQualKeepCheckDto): Promise<ResponseBaseData<any>> {
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
export function delQmsMilitaryQualKeepCheck(ids: [string]): Promise<ResponseBaseData<any>> {
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
