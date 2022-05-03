/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 17:24:14
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';
import moment from 'moment';

import './home.scss';
import { getRandomTicketOrderData } from '../../models/home';

interface HomeState {
  phoneNumber: string;
}

interface HomeProps {
  homeStore: {
    loading: boolean;
  };
}

@inject('homeStore')
@observer
export default class Home extends Component<HomeProps, HomeState> {
  async componentWillMount() {
    const phoneNumber = Taro.getStorageSync('phoneNumber');
    this.setState({ phoneNumber });
  }

  render() {
    const travelArr = getRandomTicketOrderData();
    return (
      <View className='page'>
        {travelArr &&
          travelArr.map((item, i) => {
            return (
              <View key={i} className='card-out'>
                <Text className='gate'>检票口 {item.ticketGate}</Text>

                <View key={i} className='card-in'>
                  <View className='col'>
                    <View>{item.from}</View>
                    <View className='time'>{moment(item.departureTime).format('HH:mm')}</View>
                  </View>
                  <View className='col center'>
                    <View>{item.busNo}</View>
                  </View>
                  <View className='col right'>
                    <View>{item.to}</View>
                    <View className='time'>{moment(item.arrivalTime).format('HH:mm')}</View>
                  </View>
                </View>
                <View>{this.state.phoneNumber}</View>
              </View>
            );
          })}
      </View>
    );
  }
}
