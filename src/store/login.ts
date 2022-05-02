/*
 * @Author: wuqianying
 * @Date: 2022-05-02 10:15:25
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 10:16:28
 */
import { observable } from 'mobx';
import { BaseStore } from './base.store';
import { TicketOrderDataModel } from '../models/home';

class LoginStore extends BaseStore {
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

export default new LoginStore();
