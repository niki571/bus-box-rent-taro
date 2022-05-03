/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:44
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 21:37:13
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import { RentOrderData } from '../../models/order';

import './order.scss';

interface OrderState {
  order?: RentOrderData;
}

interface OrderProps {
  orderStore: {
    loading: boolean;
  };
}

@inject('orderStore')
@observer
export default class Order extends Component<OrderProps, OrderState> {
  componentWillMount() {
    let travelArr = Taro.getStorageSync('travelInfo');
    if (travelArr[0].rentOrderDetail) {
      const { from, to, busNo } = travelArr[0];
      this.setState({
        order: {
          from,
          to,
          busNo,
          ...travelArr[0].rentOrderDetail,
        },
      });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { boxId, startTime, endTime } = this.state.order || {};
    return (
      <View className='page'>
        <View className='title'>租借订单</View>
        {this.state.order && (
          <View>
            <View className='order'>{boxId}</View>
            <View className='order'>{startTime}</View>
            <View className='order'>{endTime}</View>
          </View>
        )}
      </View>
    );
  }
}
