import { useContext } from 'react';
import './checkout.styles.scss'
import { CartContext } from "../../contexts/cart.context";


const Checkout = () => {
    const { cartItems, cartTotal, addItemToCart, removeItemFromCart } = useContext(CartContext)
        
    return (
        <div>
            { cartItems.map((cartItem) => (
                <div key={cartItem.id}>
                <img src={cartItem.imageUrl} alt={cartItem.name} />
                <span>{cartItem.name}</span>
                <button onClick={() => addItemToCart(cartItem)}>Increment</button>
                <h3>{cartItem.quantity}</h3>
                <button onClick={() => removeItemFromCart(cartItem)}>Decrement</button>
                <span>{cartItem.price}</span>
                <button>Remove</button>
                </div>
            ))}
            <span>{cartTotal}</span>
        </div>
    );
}

export default Checkout;