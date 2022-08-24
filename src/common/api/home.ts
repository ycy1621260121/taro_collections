// @ts-ignore
import service from '@/utils/request';

const otherHearders = {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': '*/*'}

export const getBookList = (params, headers) => {
    return service.request({
        method: 'GET',
        url: '/api/userfeedback/getBookList',
        data: params,
        headers: headers
    })
}
