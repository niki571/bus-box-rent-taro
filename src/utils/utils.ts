/*
 * @Author: wuqianying
 * @Date: 2022-05-03 12:53:12
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 14:29:09
 */
import moment from 'moment';

export function testPhone(phoneNumber) {
  return /^1[3456789]\d{9}$/.test(phoneNumber);
}

const randomDate = (startDate, endDate) => {
  let date = new Date(+startDate + Math.random() * (endDate - startDate));
  let hour = (0 + Math.random() * (23 - 0)) | 0;
  let minute = (0 + Math.random() * (59 - 0)) | 0;
  let second = (0 + Math.random() * (59 - 0)) | 0;
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
};

export const randomTime = () => {
  // 生产当月的开始日期
  const startDate = moment().startOf('month').toDate();
  // 截止日期
  const endDate = new Date();
  return moment(randomDate(startDate, endDate)).format('YYYY-MM-DD HH:mm:ss');
};
