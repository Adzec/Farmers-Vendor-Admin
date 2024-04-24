import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserProps } from '../../common';
import { toast } from 'react-toastify';
import {
    RegisterUser,
    LoginUser,
    PasswordResetRequest,
    codeConfirmation,
    resetPassword,
} from '../actions/userActions';

interface AuthState {
    user: UserProps | null;
    isLoading: boolean;
    userToken: string | null;
    passwordToken: string | null;
    ResetToken: string | null;
}

const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('farmers-vendor-admin-token');
    const userInfo = localStorage.getItem('admin-info');
    const passwordToken = localStorage.getItem('admin-password-reset-token');
    const ResetToken = localStorage.getItem('admin-password-confirm-token');
    return {
        user: userInfo ? JSON.parse(userInfo) : null,
        isLoading: false,
        userToken: token || null,
        passwordToken: passwordToken || null,
        ResetToken: ResetToken || null,
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
            console.log('Error in Registering User:', error.response.data.Error);
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
                toast.success(`Welcome, ${response.data.data.adminName}`);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                return response.data;
            } else {
                toast.error(response.data.message);
                return Promise.reject(new Error(response.data.Message));
            }
        } catch (error: any) {
            toast.error(error.response.data.data.message);
            console.log(error.response.data.data.message);
            return Promise.reject(error);
        }
    }
);

export const RequestPassReset = createAsyncThunk(
    'auth/passresetrequest',
    async ({ formData, navigate }: { formData: any; navigate: any }) => {
        try {
            const response = await PasswordResetRequest(formData);
            console.log(response.data);

            if (response.status === 200) {
                localStorage.setItem('admin-password-reset-token', response.data.data);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/confirm-code');
                }, 2000);
                return response.data;
            } else {
                toast.error(response.data.message);
                return Promise.reject(new Error(response.data.Message));
            }
        } catch (error: any) {
            toast.error(error.response.data.data.message);
            console.log(error.response.data.data.message);
            return Promise.reject(error);
        }
    }
);

export const ConfirmCode = createAsyncThunk(
    'auth/confirmcode',
    async ({ formData, navigate }: { formData: any; navigate: any }) => {
        try {
            const response = await codeConfirmation(formData);
            console.log(response.data);

            if (response.status === 200) {
                localStorage.setItem('admin-password-confirm-token', response.data.data);
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/reset-password');
                }, 2000);
                return response.data;
            } else {
                toast.error(response.data.message);
                return Promise.reject(new Error(response.data.Message));
            }
        } catch (error: any) {
            toast.error(error.response.data.data.message);
            console.log(error.response.data.data.message);
            return Promise.reject(error);
        }
    }
);

export const ResetPassword = createAsyncThunk(
    'auth/resetpass',
    async ({ formData, navigate }: { formData: any; navigate: any }) => {
        try {
            const response = await resetPassword(formData);
            console.log(response.data);

            if (response.status === 200) {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                return response.data;
            } else {
                toast.error(response.data.message);
                return Promise.reject(new Error(response.data.Message));
            }
        } catch (error: any) {
            toast.error(error.response.data.data.message);
            console.log(error.response.data.data.message);
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
            localStorage.removeItem('farmers-vendor-admin-token');
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
            })

            .addCase(RequestPassReset.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(RequestPassReset.fulfilled, (state, action) => {
                state.isLoading = false;
                state.passwordToken = action.payload.data;
            })
            .addCase(RequestPassReset.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(ConfirmCode.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ConfirmCode.fulfilled, (state, action) => {
                state.isLoading = false;
                state.ResetToken = action.payload.data;
            })
            .addCase(ConfirmCode.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(ResetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ResetPassword.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(ResetPassword.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
