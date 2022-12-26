import * as actionTypes from '../constants/cartConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import foodApi from '../../services/foodApi';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  //const {token} = store.getState().user;
  const {food} = await foodApi.get(id);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: food._id,
      name: food.name,
      price: food.price,
      imgUrl: food.posterImage.url,
      qty: qty,
    },
  });

  await AsyncStorage.setItem(
    '@cart',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  await AsyncStorage.setItem(
    '@cart',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const adjustQTY = (id, qty) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADJUST_QTY,
    payload: {
      id,
      qty,
    },
  });

  await AsyncStorage.setItem(
    '@cart',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const resetCartWhenOrder = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_RESET,
    payload: {},
  });

  await AsyncStorage.setItem(
    '@cart',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const resetCartWhenLogOut = () => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_RESET,
    payload: {},
  });

  await AsyncStorage.setItem(
    '@cart',
    JSON.stringify(getState().cart.cartItems),
  );
};
