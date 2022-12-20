import { CART_ACTION_TYPE } from "./cart.types";

const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    case CART_ACTION_TYPE.CLEAR_CART:
      return {
        ...state,
        cartItems: CART_INITIAL_STATE.cartItems
      }
    default:
      return state;
  }
};
