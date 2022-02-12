import api from './index'
import { MockedData } from './data'
import FilterParams from '../../types/filter_params'
import { tryCatchRequest } from '../utils/try_catch_request'
import { AxiosResponse } from 'axios'
import ApiError from '../../types/api_error'


export const getAccount = async (accountId: FilterParams): Promise<any> => {
  return tryCatchRequest(() => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: MockedData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
        request: {}
      })  
    }, 900);
  }));

  return {message: '', name: '', status: '', data: ''} as ApiError
}