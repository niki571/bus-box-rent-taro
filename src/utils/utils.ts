/*
 * @Author: wuqianying
 * @Date: 2022-05-03 12:53:12
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 16:01:55
 */
import moment from 'moment';

export function testPhone(phoneNumber) {
  return /^1[3456789]\d{9}$/.test(phoneNumber);
}

const randomTime = (startDate, endDate) => {
  let date = new Date(+startDate + Math.random() * (endDate - startDate));
  let hour = (0 + Math.random() * (23 - 0)) | 0;
  let minute = (0 + Math.random() * (59 - 0)) | 0;
  let second = (0 + Math.random() * (59 - 0)) | 0;
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
};

export const randomPastTravelTime = () => {
  // 生产上月的开始日期
  const startDate = moment().subtract(1, 'months').startOf('month').toDate();
  // 截止日期
  const endDate = new Date();
  // 出发时间
  const departureTime = randomTime(startDate, endDate);
  // 到达时间
  const arrivalTime = new Date(+departureTime + 30 * 60 * 1000 + Math.random() * 15 * 60 * 1000);
  return [
    moment(departureTime).format('YYYY-MM-DD HH:mm:ss'),
    moment(arrivalTime).format('YYYY-MM-DD HH:mm:ss'),
  ];
};

export const randomNowTravelTime = () => {
  // 开始日期
  const startDate = moment().subtract(1, 'hours').toDate();
  // 截止日期
  const endDate = new Date();
  // 出发时间
  const departureTime = new Date(+startDate + Math.random() * (+endDate - +startDate));
  // 到达时间
  const arrivalTime = new Date(+endDate + 30 * 60 * 1000 + Math.random() * 15 * 60 * 1000);
  return [
    moment(departureTime).format('YYYY-MM-DD HH:mm:ss'),
    moment(arrivalTime).format('YYYY-MM-DD HH:mm:ss'),
  ];
};
