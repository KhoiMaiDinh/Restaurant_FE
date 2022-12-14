/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import userApi from '../../services/userApi';

export const login = createAsyncThunk('user/login', async payload => {
  const data = await userApi.login(payload);
  await AsyncStorage.setItem('@access-token', data.accessToken);
  await AsyncStorage.setItem('@refresh-token', data.refreshToken);
  const user = await userApi.get(data.userId);
  await AsyncStorage.setItem('@user', JSON.stringify(user));
  return {
    user: user,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
});

export const signup = createAsyncThunk('user/signup', async payload => {
  await AsyncStorage.setItem('@token', payload.token);
  await AsyncStorage.setItem('@user', JSON.stringify(payload.user));
  return {user: payload.user, token: payload.token};
});

export const logout = createAsyncThunk(
  'user/logout',
  async (payload, {getState}) => {
    const {user} = getState();
    await userApi.logout(user._id);
    await AsyncStorage.removeItem('@access-token');
    await AsyncStorage.removeItem('@refresh-token');
    await AsyncStorage.removeItem('@user');
    return {user: {}, accessToken: '', refreshToken: ''};
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: '',
    refreshToken: '',
    user: {},
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      throw action.error;
    },
    [signup.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    [signup.rejected]: (state, action) => {
      throw action.error;
    },
    [logout.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    [logout.rejected]: (state, action) => {
      throw action.error;
    },
  },
});

const {actions, reducer} = userSlice;
export default reducer;
