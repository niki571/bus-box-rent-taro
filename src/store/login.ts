/*
 * @Author: wuqianying
 * @Date: 2022-05-02 10:15:25
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-04 00:21:19
 */
import { observable } from 'mobx';
import { BaseStore } from './base.store';

class LoginStore extends BaseStore {
  @observable
  userProfile: object;

  constructor() {
    super();
    this.loading = false;
  }

  sendUserProfile = async (userProfile) => {
    this.userProfile = userProfile;
  };
}

export default new LoginStore();
