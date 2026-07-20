import request from '@/utils/request';
import type { ResponseBaseData } from '@/api/model/baseModel';

/**
 * 获取用户详细信息
 * @param {人员ID} userId
 * @return {Promise对象}
 * */
export function getUserInfo(userId: string): Promise<ResponseBaseData<any>> {
  return request.get('/user/consoleuser/UserRest/getUserBaseInfoById/v1/' + userId);
}

/**
 * 获取用户部门（非实体）
 * @param deptId
 * @returns
 */
export function getDeptInfo(deptId: string): Promise<ResponseBaseData<any>> {
  return request.get('/dept/consoledept/DeptRest/get/v1/' + deptId);
}

/**
 * 获取用户实体部门
 * @param {部门ID} deptId
 * @param {当前对象} record
 * @param {当前对象中部门ID所对应的字段名称} idField
 * @return null
 */
export function getEntityDept(deptId, record, idField) {
  request.get('/dept/consoledept/DeptRest/get/v1/' + deptId).then(res => {
    if ((!res.data.deptType && res.data.deptLevel === 1) || res.data.deptType === '2') {
      record[idField] = res.data.id;
      record[idField + 'Alias'] = res.data.deptName;
      record[idField.replace('Id', 'Name')] = res.data.deptName;
      record[idField.replace('Id', 'Code')] = res.data.deptCode;
      return;
    } else {
      const pDeptId = res.data.parentDeptId;
      getEntityDept(pDeptId, record, idField);
    }
  });
}

/**
 * 选人组件回调函数（单选）
 * @param {事件内置返回对象} e
 * @param {当前对象} record
 * @param {当前对象中部门ID所对应的字段名称} idField
 */
export const selectUserHandler = (e, record, idField) => {
  // console.log('🚀 ~ selectUserHandler ~ e, record, idField:', e, record, idField);
  record[idField] = e.ids;
  record[idField + 'Alias'] = e.names;
  record[idField.replace('Id', 'Name')] = e.names;
  record[idField.replace('Id', 'Code')] = e.nos;
};

/**
 * 选人/部门组件通用回调函数（单选）
 * @param e
 * @param record
 * @param idField
 * @param type
 */
export const commonSelectHandler = (e, record, idField, type) => {
  // console.log('🚀 ~ selectUserHandler ~ e, record, idField:', e, record, idField);
  record[idField] = e.ids;
  record[idField + 'Alias'] = e.names;
  record[idField.replace('Id', 'Name')] = e.names;
  if (type === 'userSelect') {
    record[idField.replace('Id', 'Code')] = e.nos;
  } else if (type === 'deptSelect') {
    record[idField.replace('Id', 'Code')] = e.codes;
  }
};

/**
 * 获取用户角色列表
 */
export function getRoleListByUserId(userId: string): Promise<ResponseBaseData<any>> {
  return request.get('/appsys/user/getMapUserRole/' + userId + '/v1');
}
