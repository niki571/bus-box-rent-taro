/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-23 21:50:35
 */
import { Component } from 'react';
import { Provider } from 'mobx-react';

import stores from './store';

import './app.scss';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>;
  }
}

export default App;
