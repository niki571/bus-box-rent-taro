/*
 * @Author: wuqianying
 * @Date: 2022-05-02 18:10:35
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 19:34:18
 */
import { observable } from 'mobx';
import { BaseStore } from './base.store';

class RentStore extends BaseStore {
  @observable
  showLoadMore: boolean;

  constructor() {
    super();
    this.loading = false;
  }
}

export default new RentStore();
