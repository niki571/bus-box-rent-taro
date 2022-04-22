/*
 * @Author: wuqianying
 * @Date: 2022-04-22 12:14:27
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-22 12:14:27
 */
import Taro from '@tarojs/taro'

export function showMessage(title = '') {
  Taro.showToast({
    title: title,
    icon: 'none',
    duration: 2000,
  })
}

export function showSuccess(title = '') {
  Taro.showToast({
    title: title,
    icon: 'success',
    duration: 2000,
  })
}

export function showError(title = '') {
  Taro.showToast({
    title: title,
    icon: 'none',
    image: '',
    duration: 2000,
  })
}
