import { useEffect } from "react";
import { useState, createContext} from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem)
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem)
    }
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))        
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    useEffect(() => {
        const cartItemsNumber = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(cartItemsNumber)

        const cartTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
        setCartTotal(cartTotalPrice)
    },[cartItems])

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartCount, cartItems, toggleIsCartOpen, cartTotal, setCartItems, removeItemFromCart};

    return <CartContext.Provider value={value}>
        { children }
    </CartContext.Provider>
}