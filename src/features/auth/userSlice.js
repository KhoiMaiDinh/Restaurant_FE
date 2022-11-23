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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: {},
  },
  reducers: {
    logout(state) {
      AsyncStorage.removeItem('@token');
      AsyncStorage.removeItem('@user');
      state.token = '';
      state.user = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [signup.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

const {actions, reducer} = userSlice;
export const {logout} = actions;
export default reducer;
