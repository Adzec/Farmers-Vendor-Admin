import { axiosService } from '../helpers/axios';

export const RegisterUser = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/create', payload);
        localStorage.setItem('userToken', response.data.token);
        return response;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
    }
};
//

export const LoginUser = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/login', payload);
        localStorage.setItem('farmers-vendor-token', response.data.token);
        return response;
    } catch (error: any) {
        console.log(error, 'a terrible error occurred');
        throw new Error(error.message);
    }
};
