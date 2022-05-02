/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 10:24:57
 */
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './index.scss';

interface LoginState {}

interface LoginProps {
  loginStore: {
    loading: boolean;
    mockDataAsync: Function;
  };
}

@inject('loginStore')
@observer
export default class Login extends Component<LoginProps, LoginState> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { mockDataAsync } = this.props.loginStore;
  };

  decrement = () => {};

  incrementAsync = () => {};

  render() {
    const { loading } = this.props.loginStore;
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{loading}</Text>
      </View>
    );
  }
}
