import { useEffect, useState } from 'react';
import {createContext} from 'react'

export const Context = createContext(null)


export default function ContextProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      console.log(cartItems)
    }, [cartItems]);


    const value = {
        cartItems : cartItems,
        setCartItems : setCartItems
    }



  return (
    
    <Context.Provider value={value}>{children}</Context.Provider>
  );
};
