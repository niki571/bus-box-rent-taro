/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:44
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 23:15:49
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import { RentOrderData } from '../../models/order';

import './order.scss';
import luggageImg from '../../assets/images/luggage.png';

type OrderType = {
  from: string;
  to: string;
  busNo: string;
};
interface OrderState {
  order: OrderType & RentOrderData;
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
    const { from, to, busNo, boxId, startTime, endTime } = this.state.order;
    return (
      <View className='page'>
        <View className='title'>租借订单</View>
        {this.state.order && (
          <View className='card-out'>
            <View className='header'>
              <View className='order'>
                <Image className='icon' src={luggageImg} mode='aspectFit' />
                订单号：{Math.round(Math.random() * 1000000)}
              </View>
              <View className='status'>{endTime ? '已结束' : '正在进行'}</View>
            </View>
            <View className='line'>{`${from}-->${to}  ${busNo}`}</View>
            <View className='line'>订单开始时间：{startTime}</View>
            {endTime && <View className='line'>订单结束时间：{endTime}</View>}
            <View className='line'>行李舱序号：{boxId + 1}</View>
          </View>
        )}
      </View>
    );
  }
}
