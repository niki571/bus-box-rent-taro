/*
 * @Author: wuqianying
 * @Date: 2022-04-23 21:16:55
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-23 21:24:20
 */
import { observable } from 'mobx';

const meStore = observable({
  counter: 0,
  meStore() {
    this.counter++;
  },
  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  },
});

export default meStore;
