/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import userApi from '../../services/userApi';

export const login = createAsyncThunk('user/login', async payload => {
  const data = await userApi.login(payload);
  await AsyncStorage.setItem('@access-token', data.accessToken);
  await AsyncStorage.setItem('@refresh-token', data.refreshToken);
  const {user} = await userApi.get(data.userId);
  await AsyncStorage.setItem('@user', JSON.stringify(user));
  return {
    user: user,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
});

export const edit = createAsyncThunk('user/edit', async (payload, {getState}) => {
  const {user} = getState().user;
  //await AsyncStorage.setItem('@access-token', user.accessToken);
  //await AsyncStorage.setItem('@refresh-token', user.refreshToken);
  //const {user} = await userApi.get(data.userId);
  user.name = payload.name;
  user.email= payload.email;
  user.phoneNumber= payload.phoneNumber,
  user.address= payload.address
  await AsyncStorage.setItem('@user', JSON.stringify(user));
  return {
    user: user,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken,
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
    const {user} = getState().user;
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
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user; 
      })
      .addCase(login.rejected, (state, action) => {
        throw action.error;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signup.rejected, (state, action) => {
        throw action.error;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(logout.rejected, (state, action) => {
        throw action.error;
      })
      .addDefaultCase((state, action) => {})
  },
});

const {actions, reducer} = userSlice;
export default reducer;

