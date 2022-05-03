/*
 * @Author: wuqianying
 * @Date: 2022-05-02 02:23:58
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 15:43:20
 */
import moment from 'moment';
import { randomPastTravelTime } from '../utils/utils';

export interface TicketOrderDataModel {
  from: string;
  to: string;
  busNo: string;
  ticketGate: string;
  departureTime: Date;
  arrivalTime: Date;
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

const GATES = ['A', 'B'];

export const TicketOrderData = [
  {
    from: '上海虹桥',
    to: '杭州东站',
    busNo: 'G7550',
    ticketGate: '17A',
    departureTime: '2022-03-28 14:54:00',
    arrivalTime: '2022-03-28 16:04:00',
  },
  {
    from: '上海虹桥',
    to: '无锡',
    busNo: 'G7142',
    ticketGate: '14B',
    departureTime: '2022-04-12 09:23:00',
    arrivalTime: '2022-04-12 09:54:00',
  },
];

export function getRandomTicketOrderData() {
  // 行程个数
  const travelNum = Math.ceil(Math.random() * 5);
  // 行程数组
  const travelArr = new Array(travelNum).fill(1).map(() => {
    const [departureTime, arrivalTime] = randomPastTravelTime();
    const a = {
      from: STATIONS[Math.floor(Math.random() * 10)],
      to: STATIONS[Math.floor(Math.random() * 10)],
      busNo: `${BUSNOS[Math.floor(Math.random() * 10)]}${Math.floor(Math.random() * 100)}`,
      ticketGate: Math.ceil(Math.random() * 20) + 'A',
      departureTime,
      arrivalTime,
    };
    return a;
  });
  travelArr.sort((a, b) => {
    if (moment(a.departureTime).isBefore(moment(b.departureTime))) {
      return 1;
    } else {
      return -1;
    }
  });
  return travelArr;
}
