/*
 * @Author: wuqianying
 * @Date: 2022-05-03 18:13:51
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-03 19:38:22
 */
interface BusBoxData {
  index: number;
  empty: boolean;
}

export function getRandomBusBoxData(): BusBoxData[] {
  let arr = new Array(32).fill(1).map((item, i) => {
    return {
      index: i,
      empty: Math.random() > 0.5,
    };
  });
  return arr;
}
