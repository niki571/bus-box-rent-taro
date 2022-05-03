/*
 * @Author: wuqianying
 * @Date: 2022-05-02 02:23:58
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 21:26:53
 */
import moment from 'moment';
import { RentOrderData } from './order';
import { randomPastTravelTime, randomNowTravelTime } from '../utils/utils';

export interface TicketOrderData {
  from: string;
  to: string;
  busNo: string;
  ticketGate: string;
  departureTime: string;
  arrivalTime: string;
  rentOrderDetail?: RentOrderData;
}

// 10个
const STATIONS = [
  '上海虹桥',
  '杭州东站',
  '昆山南站',
  '南京南站',
  '苏州北站',
  '苏州园区站',
  '无锡东站',
  '宁波站',
  '台州站',
  '温州站',
];

// 10个
const BUSNOS = ['G13', 'G16', 'G19', 'G73', 'G74', 'G75', 'G76', 'G77', 'G92', 'G93'];

export function getRandomTicketOrderData(): TicketOrderData[] {
  const [nowdeptTime, nowArrTime] = randomNowTravelTime();
  // 行程个数
  const travelNum = Math.ceil(Math.random() * 5);
  // 行程数组
  let travelArr = new Array(travelNum).fill(1).map(() => {
    const [departureTime, arrivalTime] = randomPastTravelTime();
    const item = {
      from: STATIONS[Math.floor(Math.random() * 10)],
      to: STATIONS[Math.floor(Math.random() * 10)],
      busNo: `${BUSNOS[Math.floor(Math.random() * 10)]}${Math.floor(Math.random() * 100)}`,
      ticketGate: Math.ceil(Math.random() * 20) + (Math.random() > 0.5 ? 'A' : 'B'),
      departureTime,
      arrivalTime,
    };
    return item;
  });
  travelArr = travelArr.filter((item) => {
    return item.from !== item.to;
  });
  travelArr.sort((a, b) => {
    if (moment(a.departureTime).isBefore(moment(b.departureTime))) {
      return 1;
    } else {
      return -1;
    }
  });
  travelArr[0].departureTime = nowdeptTime;
  travelArr[0].arrivalTime = nowArrTime;
  return travelArr;
}
