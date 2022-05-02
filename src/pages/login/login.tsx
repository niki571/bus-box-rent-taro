/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 16:53:01
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import './login.scss';

interface LoginState {
  phoneNumber?: string;
  authCode?: string;
}

interface LoginProps {
  loginStore: {
    loading: boolean;
    mockDataAsync: Function;
  };
}

@inject('loginStore')
@observer
export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      phoneNumber: '',
      authCode: '',
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReset = () => {
    const { mockDataAsync } = this.props.loginStore;
  };

  handleChange = () => {};

  onSubmit = (e) => {
    Taro.switchTab({
      url: '/pages/home/home',
    });
  };

  render() {
    const { loading } = this.props.loginStore;
    return (
      <View className='page'>
        <View className='login'>
          <AtForm>
            <AtInput
              name='phoneNumber'
              title='手机号'
              type='text'
              placeholder='请输入'
              value={this.state.phoneNumber}
              onChange={(value) => this.setState({ phoneNumber: value + '' })}
            />
            <AtInput
              name='authCode'
              title='验证码'
              type='text'
              placeholder='请输入'
              value={this.state.authCode}
              onChange={(value) => this.setState({ authCode: value + '' })}
            />
            <AtButton onClick={(e) => this.onSubmit(e)}>注册</AtButton>
          </AtForm>
        </View>
      </View>
    );
  }
}
