import { createContext, useEffect, useState } from "react";

const addItemsToCartHelper = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (product) => setCartItems(addItemsToCartHelper(cartItems, product));

    const clearItemFromCart = (product) => setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));

    const removeItemFromCart = (product) => {
        if (product.quantity === 1) {
            return clearItemFromCart(product);
        }

        return setCartItems(cartItems.map((cartItem) => (cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
    };
    //total items in cart
    useEffect(() => {
        const totalInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(totalInCart);
    }, [cartItems]);

    //total price in cart
    useEffect(() => {
        const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(totalPrice);
    }, [cartItems]);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        cartTotal,
        clearItemFromCart,
        removeItemFromCart,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
