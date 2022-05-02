/*
 * @Author: wuqianying
 * @Date: 2022-05-02 02:23:58
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 02:29:45
 */
export interface TicketOrderDataModel {
  from: string;
  to: string;
  busNo: string;
  ticketGate: string;
  departureTime: Date;
  arrivalTime: Date;
}

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

export interface ArticleDetailDataModel {
  id: number;
  describe: string;
  source: string;
  author: string;
  createTime: string;
}
