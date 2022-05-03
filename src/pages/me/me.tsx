/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:28
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-04 00:40:23
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Block, Button, Image, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';
import { showMessage } from '../../utils/toast';

import './me.scss';

interface MeState {}

interface MeProps {
  meStore: {
    loading: boolean;
  };
  loginStore: {
    userProfile: {
      nickName: string;
      avatarUrl: string;
    };
  };
}

@inject('meStore', 'loginStore')
@observer
export default class Me extends Component<MeProps, MeState> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  reset() {
    Taro.clearStorageSync();
    showMessage('数据已重置');
  }

  render() {
    const { userProfile } = this.props.loginStore;
    return (
      <View className='page'>
        {userProfile && (
          <View className='userinfo'>
            <Image className='userinfo-avatar' src={userProfile?.avatarUrl} mode='scaleToFill' />
            <Text className='userinfo-nickname'>{userProfile?.nickName}</Text>
          </View>
        )}
        <AtButton className='reset' type='primary' onClick={() => this.reset()}>
          数据重置
        </AtButton>
      </View>
    );
  }
}
