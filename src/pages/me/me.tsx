/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:28
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 15:59:04
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Block, Image, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './me.scss';

interface MeState {
  userInfo: {
    nickName: string;
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
        <Block wx:if='{{canIUseGetUserProfile}}' bindtap='getUserProfile'>
          {' '}
          获取头像昵称{' '}
        </Block>
        <Block>
          <Image
            bindtap='bindViewTap'
            class='userinfo-avatar'
            src='{{userInfo.avatarUrl}}'
            mode='center'
          ></Image>
          <Text className='userinfo-nickname'>{this.state.userInfo.nickName}</Text>
        </Block>
      </View>
    );
  }
}
