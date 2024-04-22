import axios from 'axios';

export const axiosService = axios.create({
    baseURL: 'https://adzecfarmersvendor.eleliafrika.com/api/v1',
});

axiosService.interceptors.request.use(async (req) => {
    let token = localStorage.getItem('farmers-vendor-token');
    if (token) {
        req.headers['x-access-token'] = token;
    }
    return req;
});
