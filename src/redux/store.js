/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userReducer from '../features/auth/userSlice';
import {persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import cartReducer from './reducer/cartReducer';
import { logout } from '../features/auth/userSlice';

const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === logout) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
