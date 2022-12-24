import Button from "../button/Button.component";
import { useCallback } from "react";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/CartItem.component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = useCallback(() => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
