// @ts-ignore
import service from '@/utils/request';
//特殊请求加上这段编码
const otherHeader = {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': '*/*'}

export const getBookList = (params, headers) => {
    return service.request({
        method: 'GET',
        url: '/api/userFeedback/getBookList',
        data: params,
        headers: headers
    })
}
