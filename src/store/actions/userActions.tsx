import { toast } from 'react-toastify';
import { axiosService } from '../helpers/axios';

export const RegisterUser = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/create', payload);
        localStorage.setItem('farmers-vendor-token', response.data.token);
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
        toast.error(error.response.data.message);

        throw new Error(error.message);
    }
};

export const PasswordResetRequest = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/resetpassword', payload);
        return response;
    } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const codeConfirmation = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/confirmcode', payload);
        return response;
    } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const resetPassword = async (payload: any): Promise<any> => {
    try {
        const response = await axiosService.post('/admins/changepassword', payload);
        return response;
    } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
        throw new Error(error.message);
    }
};
