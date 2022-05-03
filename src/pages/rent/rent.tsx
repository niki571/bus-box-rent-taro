/*
 * @Author: wuqianying
 * @Date: 2022-05-02 17:29:59
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 20:30:46
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import { showMessage } from '../../utils/toast';
import { getRandomBusBoxData } from '../../models/rent';

import './rent.scss';

interface RentState {
  showModal: boolean;
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
    this.state = {
      showModal: false,
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  code: string;
  timer: ReturnType<typeof setTimeout> | null;

  componentDidShow() {}

  componentDidHide() {}

  handleChange() {}

  handleConfirm() {
    Taro.switchTab({
      url: '/pages/order/order',
    });
  }

  handleBoxClick = (isEmpty) => {
    if (isEmpty) {
      let code = `${Math.ceil(Math.random() * 10000)}`;
      this.code = code.length === 3 ? '0' + code : code;
      showMessage(`此次密码为${this.code},请在密码锁输入密码！`);
      this.timer = setTimeout(
        () =>
          this.setState({
            showModal: true,
          }),
        2000,
      );
    } else {
      showMessage(`此行李舱已满，请选择空闲的行李舱！`);
    }
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
                  onClick={() => this.handleBoxClick(item.empty)}
                >
                  {item.index + 1}
                </View>
              );
            })}
        </View>
        {this.state.showModal && (
          <AtModal isOpened>
            <AtModalHeader>模拟密码锁</AtModalHeader>
            <AtModalContent>
              <AtInput
                name='value'
                title='密码'
                value={this.code}
                editable={false}
                onChange={this.handleChange.bind(this)}
              />
            </AtModalContent>
            <AtModalAction>
              <Button onClick={() => this.handleConfirm()}>确定</Button>
            </AtModalAction>
          </AtModal>
        )}
      </View>
    );
  }
}
