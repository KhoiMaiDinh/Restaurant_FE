import * as actionTypes from "../constants/cartConstant"
const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      //console.log(state);
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? {...item, qty: item.qty + x.qty} : x
          ),
        };
      } 
      else {
        //console.log([...state.cartItems, item]);
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.id === action.payload.id ? {...x, qty: action.payload.qty} : x
        ),  
      };
    default:
      return state;
  }
};