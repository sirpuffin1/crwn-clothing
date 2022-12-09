import Button from '../button/Button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, toggleIsCartOpen } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
                </div>
                <Link className="logoContainer" to="/checkout" onClick={toggleIsCartOpen}>
            <Button>CHECKOUT</Button>
            </Link>
        </div>
    );
}

export default CartDropdown;