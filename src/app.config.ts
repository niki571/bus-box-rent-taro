/*
 * @Author: wuqianying
 * @Date: 2022-04-22 11:49:29
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-05-02 19:38:04
 */
export default defineAppConfig({
  pages: [
    'pages/login/login',
    'pages/home/home',
    'pages/order/order',
    'pages/me/me',
    'pages/rent/rent',
  ],
  tabBar: {
    selectedColor: '#f4ea2a',
    color: '#b1b1b1',
    backgroundColor: '#f8f8f8',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '首页',
        selectedIconPath: './assets/images/car-selected.png',
        iconPath: './assets/images/car.png',
      },
      {
        pagePath: 'pages/order/order',
        text: '订单',
        selectedIconPath: './assets/images/order-selected.png',
        iconPath: './assets/images/order.png',
      },
      {
        pagePath: 'pages/me/me',
        text: '我的',
        selectedIconPath: './assets/images/me-selected.png',
        iconPath: './assets/images/me.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
