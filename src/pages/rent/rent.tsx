/*
 * @Author: wuqianying
 * @Date: 2022-05-02 17:29:59
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 19:52:59
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import { getRandomBusBoxData } from '../../models/rent';

import './rent.scss';

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

  handleBoxClick = () => {
    Taro.switchTab({
      url: '/pages/home/home',
    });
  };

  render() {
    const { loading } = this.props.rentStore;
    const boxArr = getRandomBusBoxData();
    return (
      <View className='page'>
        <View className='title'>行李舱</View>
        <View className='container'>
          {boxArr &&
            boxArr.map((item, i) => {
              return (
                <View
                  key={i}
                  className={item.empty ? 'box empty' : 'box full'}
                  onClick={() => this.handleBoxClick()}
                >
                  {item.index + 1}
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}
