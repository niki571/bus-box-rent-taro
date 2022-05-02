/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 10:21:49
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './home.scss';
import withLogin from '../../common/decorator/withLogin';
import { getWXCode, login } from '../../utils/loginUtils';
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
    // const { iv, encryptedData, errMsg } = e.detail;
    // try {
    //   if (!this.state.code) {
    //     showError('code为空');
    //   }
    //   if (errMsg.includes('ok')) {
    //     Taro.showLoading({ title: '正在登录' });
    //     const loginResult = await login({ iv, encryptedData, code: this.state.code as string });
    //     console.log(loginResult);
    //     Taro.hideLoading();
    //     showSuccess('登录成功！');
    //   }
    // } catch (error) {
    //   // 解密失败重新login
    //   getWXCode().then((code) => {
    //     this.setState({ code });
    //   });
    //   Taro.hideLoading();
    //   showError(error.message || error.errMsg);
    // }
  }

  render() {
    return (
      <View className='page'>
        <Button openType='getUserInfo' onGetUserInfo={(e) => this.handleGetUserInfo(e)}>
          登录
        </Button>
      </View>
    );
  }
}
