import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action"
import { AnyAction } from "redux";

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

  if(setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  
  if(setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

return state
};
