import env from "./env"
import Taro from '@tarojs/taro'

/**
 * 声明请求对象
 */
let requestHandler = {
  params: {},
  closeLoading: false, //默认显示Toast，如果设置true则不会显示Toast
  success: function (res) {
    // success
  },
  fail: function () {
    // fail
  },
}

/**
 * GET请求
 * @param {*} requestHandler
 */
export async function GET(requestHandler) {
  await httpRequest('GET', requestHandler)
}

/**
 * POST请求
 * @param {*} requestHandler
 */
export async function POST(requestHandler) {
  await httpRequest('POST', requestHandler)
}

/**
 * http request 请求
 * @param {http method} method
 * @param {*} requestHandler
 */
export async function httpRequest(method, requestHandler) {
  //注意：可以对params签名等处理
  let params = requestHandler.params
  // params = apiParamSign(params)
  let closeLoading = requestHandler.closeLoading

  if (!closeLoading) {
    Taro.showLoading({
      title: '加载中',
      mask: true,
    })
  }
  console.log(env)
  Taro.request({
    url: env.baseUrl,
    data: params,
    method: method,// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // responseType: 'text',
    // credentials: 'include',
    header: {
      'content-type': 'application/x-www-form-urlencoded', // 默认值
    },
    mode: 'no-cors',
    success: function (res) {
      console.log('request success!')
      console.log(res.data)
      if (!closeLoading) {
        Taro.hideLoading()
      }
      if (res.data.status == 'success') {
        requestHandler.success(res.data)
      } else if (res.data.status == 'error') {
        //错误回调处理
        requestHandler.fail()
        Taro.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      } else {
        //请他情况当成失败处理
        requestHandler.fail()
      }


    },
    fail: function (res) {
      console.log('request failed!')
      if (!closeLoading) {
        Taro.hideLoading()
      }
      //错误回调处理
      requestHandler.fail()
    }
  })

}

/**
 * 系统参数和功能参数做签名（按照服务端接口标准制定）
 * @param {传入功能参数} params
 */
function apiParamSign(params) {
  let sysParams = {}
  let date = new Date();
  let month = date.getMonth() + 1
  sysParams.date = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  ;
  // data.task = date.getTime();

  sysParams.version = '1.0'
  sysParams.format = 'json'
  sysParams.flag = 'dev_flag'

  let data = {}
  //合并对象
  Object.assign(data, sysParams, params)

  let keys = []
  for (var k in data) {
    if (data.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort();
  let paramsStr = "";
  for (var i = -0; i < keys.length; i++) {
    paramsStr += keys[i];
    paramsStr += data[keys[i]];
  }
  let tmp = md5(paramsStr).toUpperCase() + API_BASE_TOKEN;
  tmp = md5(tmp).toUpperCase();
  data.sign = tmp;
  return data;
}
