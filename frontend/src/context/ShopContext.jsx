/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect } from 'react'
import { all_products } from '../assets/data';
import { useState } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
  
    const addToCart = (itemId) =>{
      if(!cartItems[itemId]){
        setCartItems((prev) =>({...prev, [itemId]: 1}));
      }else{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] + 1}));
      }
    }

    const removeFromCart = (itemId) =>{   
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1}));
    }

    const getTotalCartAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = all_products.find((product) => product._id === item);
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
      return totalAmount;
    }
  

    useEffect(() => {
      console.log(cartItems);
    },[cartItems])
    const contextValue = {all_products, cartItems, addToCart, removeFromCart ,setCartItems,getTotalCartAmount};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider