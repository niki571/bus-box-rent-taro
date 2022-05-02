/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 02:38:22
 */

import { observable } from 'mobx';
import { BaseStore } from './base.store';
import { TicketOrderDataModel } from '../models/home';

class HomeStore extends BaseStore {
  @observable
  showLoadMore: boolean;

  constructor() {
    super();
    this.loading = false;
  }
  // 造车票假数据，行李舱假数据，寄件假数据
  mockDataAsync = async (TicketOrderData: TicketOrderDataModel) => {
    return await this.post('question/createAswer', TicketOrderData);
  };
}

export default new HomeStore();