import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProps } from '../../common';
import { toast } from 'react-toastify';
import { RegisterUser, LoginUser } from '../actions/userActions';

interface AuthState {
    user: UserProps | null;
    isLoading: boolean;
    userToken: string | null;
}

const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('farmers-vendor-admin-token');
    const userInfo = localStorage.getItem('admin-info');
    return {
        user: userInfo ? JSON.parse(userInfo) : null,
        isLoading: false,
        userToken: token || null,
    };
};

const initialState: AuthState = getUserFromLocalStorage();

export const RegisterAUser = createAsyncThunk(
    'auth/registeringUser',
    async ({ formData, navigate }: { formData: any; navigate: any }) => {
        try {
            const response = await RegisterUser(formData);
            toast.success('User created successfully');
            setTimeout(() => {
                navigate('/login');
            }, 2000);

            if (response.status === 400) {
                if (response.data && response.data.Data && response.data.Data.Error) {
                    toast.error(response.data.Data.Message);
                    return Promise.reject(new Error(response.data.Data.Message));
                } else {
                    return Promise.reject(
                        new Error('An unexpected error occurred during registration.')
                    );
                }
            } else {
                return response;
            }
        } catch (error: any) {
            console.error('Error in Registering User:', error.response.data.Error);
            toast.error(error.response.data.Message);
            return Promise.reject(error);
        }
    }
);

export const LoggingUser = createAsyncThunk(
    'auth/logginguser',
    async ({ formData, navigate }: { formData: any; navigate: any }) => {
        try {
            const response = await LoginUser(formData);
            console.log(response.data);

            if (response.status === 200) {
                localStorage.setItem('farmers-vendor-admin-token', response.data.data.accessToken);
                localStorage.setItem('admin-info', JSON.stringify(response.data.data));
                toast.success(`Welcome, ${response.data.data.userName}`);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                return response.data;
            } else {
                toast.error(response.data.Message);
                return Promise.reject(new Error(response.data.Message));
            }
        } catch (error: any) {
            toast.error(error.response.data.Message);
            return Promise.reject(error);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('farmers-vendor-adm-token');
            localStorage.removeItem('admin-info');
            state.userToken = null;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(RegisterAUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(RegisterAUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(RegisterAUser.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(LoggingUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(LoggingUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.data;
                state.userToken = action.payload!.data.token;
            })
            .addCase(LoggingUser.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
