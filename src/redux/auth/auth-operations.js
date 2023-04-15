import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/user/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); 
        }
    }
);

export const logIn = createAsyncThunk('auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/user/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/user/logout');
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.massage);
        }
    }
);


