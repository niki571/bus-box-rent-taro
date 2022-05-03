/*
 * @Author: wuqianying
 * @Date: 2022-05-02 10:15:25
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 17:38:16
 */
import { observable } from 'mobx';
import { BaseStore } from './base.store';

class LoginStore extends BaseStore {
  @observable
  showLoadMore: boolean;

  constructor() {
    super();
    this.loading = false;
  }
  // 造车票假数据，行李舱假数据，寄件假数据
  mockDataAsync = async (TicketOrderData) => {
    return await this.post('question/createAswer', TicketOrderData);
  };
}

export default new LoginStore();
