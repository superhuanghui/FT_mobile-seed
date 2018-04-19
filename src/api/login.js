/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-19 21:02:07
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-04-19 22:07:30
 */

import { fetch } from '@/utils/fetch'

/* 登录获取sessionId */
export function loginApi(mobile, password) {
  return fetch('/user/', {
    method: 'login',
    params: {
      mobile,
      password
    }
  })
}

/* 获取验证码 */
export function getValidateCodeApi(params = {}) {
  return fetch('/landlord/login', {
    method: 'sendCheckSms',
    params
  })
}
