/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:44
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 17:24:23
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import './order.scss';

interface OrderState {
  phoneNumber?: string;
  authCode?: string;
}

interface OrderProps {
  orderStore: {
    loading: boolean;
    mockDataAsync: Function;
  };
}

@inject('orderStore')
@observer
export default class Order extends Component<OrderProps, OrderState> {
  constructor(props: OrderProps) {
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
    const { mockDataAsync } = this.props.orderStore;
  };

  handleChange = () => {};

  onSubmit = (e) => {
    Taro.switchTab({
      url: '/pages/home/home',
    });
  };

  render() {
    const { loading } = this.props.orderStore;
    return <View className='page'>订单</View>;
  }
}
