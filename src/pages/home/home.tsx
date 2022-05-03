/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:36
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 16:10:54
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './home.scss';
import { getRandomTicketOrderData } from '../../models/home';

interface HomeState {
  code: string;
}

interface HomeProps {
  homeStore: {
    loading: boolean;
  };
}

@inject('homeStore')
@observer
export default class Home extends Component<HomeProps, HomeState> {
  async componentWillMount() {}

  async handleGetUserInfo(e) {
    debugger;
    Taro.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo;
        console.log(6666, userInfo);
      },
    });
  }

  render() {
    const travelArr = getRandomTicketOrderData();
    // return <Text>{randomNowTravelTime()}</Text>;
    return (
      <View className='page'>
        {travelArr &&
          travelArr.map((item, i) => {
            return (
              <View key={i}>
                <Text>{item.from}</Text>

                <Text>{item.to}</Text>

                <Text>{item.busNo}</Text>

                <Text>{item.ticketGate}</Text>
                <View></View>
                <Text>{item.departureTime}</Text>
                <View></View>
                <Text>{item.arrivalTime}</Text>
                <View></View>
              </View>
            );
          })}
      </View>
    );
  }
}
