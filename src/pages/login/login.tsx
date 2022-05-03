/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-04 00:43:56
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Image } from '@tarojs/components';
import { AtForm, AtInput, AtButton, AtTag } from 'taro-ui';
import { observer, inject } from 'mobx-react';
import { showMessage } from '../../utils/toast';
import { testPhone, hidePhone } from '../../utils/utils';

import './login.scss';
import squirrelImg from '../../assets/images/squirrel.jpeg';

interface LoginState {
  phoneNumber?: string;
  authCode?: string;
  authText: string;
}

interface LoginProps {
  loginStore: {
    loading: boolean;
    sendUserProfile: Function;
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
      authText: '发送验证码',
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  timer: ReturnType<typeof setInterval> | null;

  componentDidShow() {}

  componentDidHide() {
    this.timer && clearInterval(this.timer);
  }

  sentAuthCode = () => {
    if (!this.state.phoneNumber || !testPhone(this.state.phoneNumber)) {
      return showMessage('请输入正确的手机号！');
    }
    if (this.state.authText === '发送验证码') {
      let num = 59;
      this.timer = setInterval(() => {
        if (num === 0) {
          this.setState({ authText: '发送验证码' });
          this.timer && clearInterval(this.timer);
        } else {
          if (num === 58) {
            this.setState({ authCode: '564965' });
          }
          this.setState({ authText: num-- + '秒' });
        }
      }, 1000);
    }
  };

  getUserProfile() {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.props.loginStore.sendUserProfile(res.userInfo);
      },
    });
  }

  onSubmit = (e) => {
    if (this.state.phoneNumber && testPhone(this.state.phoneNumber) && this.state.authCode) {
      this.getUserProfile();
      Taro.setStorageSync('phoneNumber', hidePhone(this.state.phoneNumber));
      Taro.switchTab({
        url: '/pages/home/home',
      });
    } else {
      showMessage('请输入手机号和验证码！');
    }
  };

  render() {
    const { loading } = this.props.loginStore;
    return (
      <View className='page'>
        <Image className='banner' src={squirrelImg} mode='aspectFit' />
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
            >
              <AtTag type='primary' circle onClick={() => this.sentAuthCode()}>
                {this.state.authText}
              </AtTag>
            </AtInput>
            <AtButton onClick={(e) => this.onSubmit(e)}>注册</AtButton>
          </AtForm>
        </View>
      </View>
    );
  }
}
