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

export const edit = createAsyncThunk(
  'user/edit',
  async (payload, {getState}) => {
    const {user} = getState().user;
    user.name = payload.name;
    user.email = payload.email;
    user.phoneNumber = payload.phoneNumber;
    user.address = payload.address;
    await AsyncStorage.setItem('@user', JSON.stringify(user));
    return {user: user};
  },
);

export const signup = createAsyncThunk('user/signup', async payload => {
  const data = await userApi.signup(payload);
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

export const logout = createAsyncThunk(
  'user/logout',
  async (payload, {getState}) => {
    const {user} = getState().user;
    const cartData = getState().cart;
    const cart = cartData.cartItems;
    const data = await userApi.editUser(user._id, {...user, cart});
    console.log('🚀 ~ file: userSlice.js:52 ~ data', data);
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
  extraReducers: builder => {
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
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
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
      .addCase(edit.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(edit.rejected, (state, action) => {
        throw action.error;
      })
      .addDefaultCase((state, action) => {});
  },
});

const {actions, reducer} = userSlice;
export default reducer;
