import Button from '../button/Button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {useNavigate} from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems, toggleIsCartOpen } = useContext(CartContext)
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout')
        toggleIsCartOpen();
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
                </div>
            <Button onClick={goToCheckout}>CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;