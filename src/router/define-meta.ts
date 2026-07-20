import { getssoInfo } from '@/utils/common-util';

// 白名单
export const allowList = [
  'login',
  'unlg',
  'tips',
  'register',
  'register-result',
  'casLogin',
  'oauth2Login',
  'koalLogin',
  'httpheaderLogin',
  'exception404',
  'accessfromConsole',
  'eventPortlet',
  'icon'
]; // no redirect whitelist
const ssoInfo = getssoInfo();
let loginPath = import.meta.env.VITE_APP_API_LOGIN_URL;
let ssoEnable = false;
if (ssoInfo.enable) {
  loginPath = ssoInfo.path;
  ssoEnable = true;
}
export const ssoEnableFlag = ssoEnable;
export const loginRoutePath = loginPath;
export const defaultRoutePath = '/dashboard';
