/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 17:28:26
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './home.scss';
import withLogin from '../../common/decorator/withLogin';
import { getWXCode, login } from '../../utils/login';
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
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      code: '',
    };
  }

  async componentWillMount() {
    if (!this.state.code) {
      const code = await getWXCode();
      this.setState({ code });
    }
  }

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
    return <View className='page'>33333</View>;
  }
}
