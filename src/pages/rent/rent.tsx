/*
 * @Author: wuqianying
 * @Date: 2022-05-02 17:29:59
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 18:33:20
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import './order.scss';

interface RentState {
  phoneNumber?: string;
  authCode?: string;
}

interface RentProps {
  rentStore: {
    loading: boolean;
    mockDataAsync: Function;
  };
}

@inject('rentStore')
@observer
export default class Rent extends Component<RentProps, RentState> {
  constructor(props: RentProps) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReset = () => {
    const { mockDataAsync } = this.props.rentStore;
  };

  handleChange = () => {};

  onSubmit = (e) => {
    Taro.switchTab({
      url: '/pages/home/home',
    });
  };

  render() {
    const { loading } = this.props.rentStore;
    return <View className='page'>订单</View>;
  }
}
