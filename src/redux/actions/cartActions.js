import * as actionTypes from "../constants/cartConstant"
import axious from "axios"
import { BASE_URL } from "../../utils/api"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axious.get(
        `${BASE_URL}/food/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
    );

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data._id,
            price: data.price,
            imgUrl: data.posterImage.url,
            qty: qty,
        }
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};