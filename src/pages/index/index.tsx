/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-23 21:23:48
 */
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

import './index.scss';

type PageStateProps = {
  store: {
    meStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { meStore } = this.props.store;
    meStore.increment();
  };

  decrement = () => {
    const { meStore } = this.props.store;
    meStore.decrement();
  };

  incrementAsync = () => {
    const { meStore } = this.props.store;
    meStore.incrementAsync();
  };

  render() {
    const {
      meStore: { counter },
    } = this.props.store;
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    );
  }
}

export default Index;
