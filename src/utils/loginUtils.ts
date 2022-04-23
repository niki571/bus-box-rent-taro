/*
 * @Author: wuqianying
 * @Date: 2022-04-22 12:07:23
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-23 11:52:52
 */
import Taro from '@tarojs/taro'
import config from '../common/config'

export async function getWXCode() {
  let { code } = await Taro.login()
  return code
}

export async function login(params: loginData) {
  let loginResult = await Taro.request({
    url: config.baseUrl + 'user/login',
    data: params,
    header: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (loginResult.data) {
    Taro.setStorageSync('authorized', loginResult.data)
    return loginResult.data
  } else {
    return null
  }
}

export function getToken() {
  let authorized: AuthorizedModel = Taro.getStorageSync('authorized')
  return authorized['token']
}

export function isAuthorized() {
  return !!Taro.getStorageSync('authorized')['token']
}

export function getUserResource(): number[] {
  return Taro.getStorageSync('authorized')['resourceIds'] || []
}

interface AuthorizedModel {
  token: string
  expireTime: Date
}

interface loginData {
  code: string
  iv: string
  encryptedData: string
}
