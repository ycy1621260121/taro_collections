import axios from 'axios';
import Taro from '@tarojs/taro'
//axios.defaults.baseURL = 'https://localhost:8088/'
const pending: any = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken
const removeRepeatUrl = (ever) => {
    // console.log('?????', ever)
    // console.log('?????', pending)
    for (const p in pending) {
        if (pending[p].u === ever.url + '&' + ever.method) { // 当当前请求在数组中存在时执行函数体
            pending[p].f() // 执行取消操作
            pending.splice(p, 1) // 把这条记录从数组中移除
        }
    }
}

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    //baseURL: '/api',
    timeout: 50000
});

service.interceptors.request.use(
  (config: any) => {
        removeRepeatUrl(config)
        config.cancelToken = new cancelToken((c) => {
            // 自定义唯一标识
            pending.push({u: config.url + '&' + config.method, f: c})
        })

        //默认的tenantId和authorization，上线前要改为动态的
        config.headers['tenantId'] = '0';
        config.headers['authorization'] = ''
        //console.log(config.headers.authorization)

        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
const backLogin = (msg) => {
    //window.location.href = '/'
    console.log(msg)
}

let flag = true;
service.interceptors.response.use(
    response => {
        removeRepeatUrl(response.config)
        if (response.data.code && response.data.code !== 0) {
            switch (parseInt(response.data.code)) {
                case 404:
                    backLogin(response.data.msg)
                    break;
                case 504:
                    backLogin(response.data.msg)
                    break;
                case 507:
                    backLogin(response.data.msg)
                    break;
                case 508:
                    backLogin(response.data.msg)
                    break;
                case 403:
                    backLogin(response.data.msg)
                    break;
            }

            if (flag) {
                Taro.showToast({
                    title: response.data.msg,
                    icon: 'error'
                })
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, 1000)
            }
            return {code: 403, result: {records: []}}
        }
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        //console.log(error);
        if (error && error.response) {
            let message = "";
            switch (error.response.status) {
                case 400:
                    message = "请求错误";
                    break;
                case 401: {
                    message = "未授权，请登录";
                    backLogin(message)
                    break;
                }
                case 403:
                    message = "没有权限，拒绝访问";
                    break;
                case 404:
                    message = `请求地址出错`;
                    break;
                case 408:
                    message = "请求超时";
                    break;
                case 500:
                    message = "服务器内部错误";
                    break;
                case 501:
                    message = "服务未实现";
                    break;
                case 502:
                    message = "网关错误";
                    break;
                case 503:
                    message = "服务不可用";
                    break;
                case 504:
                    message = "网关超时";
                    break;
                case 505:
                    message = "HTTP版本不受支持";
                    break;
                default:
                    break;
            }

            //console.log(message, error)
            if (flag) {
                Taro.showToast({
                    title: message,
                    icon: 'error'
                })
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, 1000)
            }
            // ve_message = app.config.globalProperties.$message({
            //     message,
            //     type: "error",
            // });
            return Promise.reject();
        } else {
            return {code: 403, result: {records: []}} //拦截频繁的请求
        }
    }
);

export default service;
