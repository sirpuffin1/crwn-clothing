import Button from "../button/Button.component";
import {CartDropdownContainer,  EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/CartItem.component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"


const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const goToCheckout = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false))
  };

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
