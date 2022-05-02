/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 10:46:21
 */
import Taro from '@tarojs/taro';
import { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import { observer, inject } from 'mobx-react';

import './index.scss';

interface LoginState {
  value: string;
}

interface LoginProps {
  loginStore: {
    loading: boolean;
    mockDataAsync: Function;
  };
}

@inject('loginStore')
@observer
export default class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      value: '',
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onReset = () => {
    const { mockDataAsync } = this.props.loginStore;
  };

  handleChange = () => {};

  onSubmit = () => {};

  render() {
    const { loading } = this.props.loginStore;
    return (
      <View className='index'>
        <AtForm onSubmit={this.onSubmit.bind(this)} onReset={this.onReset.bind(this)}>
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleChange.bind(this, 'value')}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    );
  }
}
