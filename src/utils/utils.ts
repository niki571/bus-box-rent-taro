/*
 * @Author: wuqianying
 * @Date: 2022-05-03 12:53:12
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 13:02:55
 */

export function testPhone(phoneNumber) {
  return /^1[3456789]\d{9}$/.test(phoneNumber);
}
