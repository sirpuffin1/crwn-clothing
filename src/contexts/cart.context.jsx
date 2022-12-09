import { useEffect } from "react";
import { useState, createContext} from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
    }
    console.log('hit')
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))        
    }

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    useEffect(() => {
        const cartItemsNumber = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(cartItemsNumber)
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartCount, cartItems, toggleIsCartOpen};

    return <CartContext.Provider value={value}>
        { children }
    </CartContext.Provider>
}