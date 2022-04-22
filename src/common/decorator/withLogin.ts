/*
 * @Author: wuqianying
 * @Date: 2022-04-22 14:08:09
 * @LastEditors: wuqianying
 * @LastEditTime: 2022-04-22 14:08:09
 */
import Taro from '@tarojs/taro'

import { login } from '../../utils/loginUtils'

function withLogin() {
  return function (Component) {
    return class WithLogin extends Component {
      async componentWillMount() {
        if (super.componentWillMount) {
          let res = await autoLogin()
          if (!res) {
            // Taro.reLaunch({ url: "../login/login" });
            return
          }
          this.props.authorizationStore.update()
          super.componentWillMount()
        }
      }
    } as any
  }

  async function autoLogin() {
    let authorized = Taro.getStorageSync('authorized')
    if (!authorized || (new Date(authorized['expireTime']) as any) - (new Date() as any) < 0) {
      return await login()
    }
    return authorized
  }
}

export default withLogin
