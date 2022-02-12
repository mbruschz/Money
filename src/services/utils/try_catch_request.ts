import { AxiosResponse, AxiosResponseTransformer } from 'axios';
import ApiError from '../../types/api_error';

const tryCatchFn = () => async (fnTry: () => Promise<AxiosResponse<any>>) => {
  try {
    const response = await fnTry();
    return { response };
  } catch (err: any) {
    const { message, name, resp } = err;
    const error = {
      message, 
      name,
      status: resp?.status,
      data: resp?.data,
    } as ApiError;
    return { error };
  }
};

export const tryCatchRequest = tryCatchFn();