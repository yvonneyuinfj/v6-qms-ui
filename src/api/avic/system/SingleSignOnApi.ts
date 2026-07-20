import request from '@/utils/request';
import type { ResponseBaseData } from '@/api/model/baseModel';
// 读取CAS-server数据
export function getCasInfo(): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/cas/info',
    method: 'get'
  });
}

// 根据CAS票据登录
export function loginByCasTicket(param): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/cas/loginByTicket',
    data: param,
    method: 'get'
  });
}

// httpheader登录
export function httpheaderLoginRequest(param): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/httpheader/login/v2',
    params: param,
    method: 'post'
  });
}
// export function httpheaderLoginRequest(param): Promise<ResponseBaseData<any>> {
//   return request({
//     url: '/appsys/sso/httpheader/login/v1?' + param,
//     params: '',
//     method: 'post'
//   });
// }

// koal登录
export function koalLoginRequest(): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/koal/login/v1',
    params: {},
    method: 'post'
  });
}

// 获取Oauth2信息
export function getOauth2Info(): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/oauth2/info/v1',
    method: 'get'
  });
}

// Oauth2登录
export function loginByOauth2Ticket(param): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/oauth2/login/v1' + param,
    params: '',
    method: 'post'
  });
}

/**
 *  获取三元用户，用于跳转后台管理系统
 *
 *  by: 孙思文  2024/5/11
 * **/

export function httpheaderLoginRequest2(param): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/httpheader2/login/v2',
    params: param,
    method: 'post'
  });
}
export function httpheaderGetSanYuanType(param): Promise<ResponseBaseData<any>> {
  return request({
    url: '/appsys/sso/httpheader2/getSanYuanType/v2',
    params: param,
    method: 'post'
  });
}
