// @ts-ignore
import service from '@/utils/request';
//特殊请求加上这段编码
const otherHearders = {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': '*/*'}

export const getBookList = (params, headers) => {
    return service.request({
        method: 'GET',
        url: '/api/userfeedback/getBookList',
        data: params,
        headers: headers
    })
}
