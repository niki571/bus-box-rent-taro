/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:28
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 17:26:10
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Block, Button, Image, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import './me.scss';

interface MeState {
  userInfo?: {
    nickName: string;
    avatarUrl: string;
  };
}

interface MeProps {
  meStore: {
    loading: boolean;
  };
}

@inject('meStore')
@observer
export default class Me extends Component<MeProps, MeState> {
  constructor(props: MeProps) {
    super(props);
    this.state = {
      userInfo: undefined,
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getUserProfile() {
    Taro.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setState({
          userInfo: res.userInfo,
        });
      },
    });
  }

  render() {
    return (
      <View className='page'>
        <AtButton onClick={() => this.getUserProfile()}>获取头像昵称</AtButton>
        <Block>
          <Image
            className='userinfo-avatar'
            src='{{this.state.userInfo?.avatarUrl}}'
            mode='center'
          ></Image>
          <Text className='userinfo-nickname'>{this.state.userInfo?.nickName}</Text>
        </Block>
      </View>
    );
  }
}
