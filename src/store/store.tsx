import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/userSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
