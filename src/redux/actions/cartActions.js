import * as actionTypes from "../constants/cartConstant"
import axios from "axios";
import { BASE_URL } from "../../utils/api"
import { store } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {token} = store.getState().user;
    const response = await axios.get(`${BASE_URL}/food/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    const data = response.data.food;

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data._id,
            name: data.name,
            price: data.price,
            imgUrl: data.posterImage.url,
            qty: qty,
        }
    });

    AsyncStorage.setItem("@cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};