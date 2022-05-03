/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 20:47:22
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtDivider, AtTag } from 'taro-ui';
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

  rentBox() {
    Taro.navigateTo({
      url: '/pages/rent/rent',
    });
  }

  renderCard(travelArr, isToday) {
    return (
      travelArr &&
      travelArr.map((item, i) => {
        return (
          <View key={i} className='card-out'>
            <Text className='gate'>检票口 {item.ticketGate}</Text>

            <View className='card-in'>
              <View key={i} className='row'>
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
              <View>{moment(item.departureTime).format('YYYY-MM-DD')}</View>
            </View>

            <View className='card-btm'>
              <Text>{this.state.phoneNumber}</Text>
              {isToday && (
                <AtTag circle type='normal' className='tag' onClick={() => this.rentBox()}>
                  租借行李舱
                </AtTag>
              )}
            </View>
          </View>
        );
      })
    );
  }

  render() {
    const travelArr = getRandomTicketOrderData();
    const travelNow = travelArr.slice(0, 1);
    const travelPast = travelArr.slice(1);
    Taro.setStorageSync('todayTravel', travelNow[0]);
    return (
      <View className='page'>
        <View className='title'>今日行程</View>
        {this.renderCard(travelNow, true)}
        {travelPast.length > 0 && (
          <AtDivider content='过往行程' fontColor='#b3b185' lineColor='#b3b185' />
        )}
        {this.renderCard(travelPast, false)}
      </View>
    );
  }
}
