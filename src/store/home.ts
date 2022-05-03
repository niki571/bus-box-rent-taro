/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 19:29:04
 */

import { observable } from 'mobx';
import { BaseStore } from './base.store';

class HomeStore extends BaseStore {
  @observable
  showLoadMore: boolean;

  constructor() {
    super();
    this.loading = false;
  }
}

export default new HomeStore();
