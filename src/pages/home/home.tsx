/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 14:30:25
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './home.scss';
import { showSuccess, showError } from '../../utils/toast';

interface HomeState {
  code: string;
}

interface HomeProps {
  homeStore: {
    loading: boolean;
  };
}

@inject('homeStore')
@observer
export default class Home extends Component<HomeProps, HomeState> {
  async componentWillMount() {}

  async handleGetUserInfo(e) {
    debugger;
    Taro.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        console.log(6666, userInfo);
      },
    });
  }

  render() {
    return <View className='page'>333</View>;
  }
}
