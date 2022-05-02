/*
 * @Author: wuqianying
 * @Date: 2022-05-02 18:10:35
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 18:10:36
 */
import { observable } from 'mobx';
import { BaseStore } from './base.store';
import { TicketOrderDataModel } from '../models/home';

class RentStore extends BaseStore {
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

export default new RentStore();
