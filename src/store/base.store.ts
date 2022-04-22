/*
 * @Author: wuqianying
 * @Date: 2022-04-22 12:12:15
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-22 14:01:06
 */
import { observable } from 'mobx'
import { request } from '../utils/request'

export class BaseStore {
  @observable
  loading: boolean = true

  get = (url: string, data?: object, loading: boolean = true) => {
    this.loading = loading
    return this.request(url, 'GET', data)
  }

  post = (url: string, data?: object, loading: boolean = true) => {
    this.loading = loading
    return this.request(url, 'POST', data)
  }

  private request(url: string, method: 'GET' | 'POST', data?: object): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await request({ url: url, method: method, data: data })
        .then((resData) => {
          this.loading = false
          resolve(resData)
        })
        .catch(() => {
          this.loading = false
          reject()
        })
    })
  }
}
