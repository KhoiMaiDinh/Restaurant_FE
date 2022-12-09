/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const login = createAsyncThunk('user/login', async payload => {
  await AsyncStorage.setItem('@token', payload.token);
  await AsyncStorage.setItem('@user', JSON.stringify(payload.user));
  return {user: payload.user, token: payload.token};
});

export const signup = createAsyncThunk('user/signup', async payload => {
  await AsyncStorage.setItem('@token', payload.token);
  await AsyncStorage.setItem('@user', JSON.stringify(payload.user));
  return {user: payload.user, token: payload.token};
});

export const logout = createAsyncThunk('user/logout', async payload => {
  await AsyncStorage.removeItem('@token');
  await AsyncStorage.removeItem('@user');
  return {user: {}, token: ''};
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: {},
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
  },
});

const {actions, reducer} = userSlice;
export default reducer;
