/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:33:28
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-23 21:55:05
 */
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

type PageStateProps = {
  meStore: {
    counter: number;
    increment: Function;
    decrement: Function;
    incrementAsync: Function;
  };
};

interface Index {
  props: PageStateProps;
}

@inject('meStore')
@observer
class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { meStore } = this.props;
    meStore.increment();
  };

  decrement = () => {
    const { meStore } = this.props;
    meStore.decrement();
  };

  incrementAsync = () => {
    const { meStore } = this.props;
    meStore.incrementAsync();
  };

  render() {
    const {
      meStore: { counter },
    } = this.props;
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
