import React, { useState, useEffect, createContext} from 'react'

interface Props {}

interface ShoppingCartModel {
    amount: number 
}

// export const ShoppingCartContext = createContext<Partial<ShoppingCartModel>>({})
export const ShoppingCartContext = createContext<ShoppingCartModel[] | any>([])

export const ShoppingCartContextProvider: React.FC<React.ReactNode> = ({ children }) => {
    
   const [shoppingCart, setShoppingCart] = useState<ShoppingCartModel[]>([]) 

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }} >
            { children }
        </ShoppingCartContext.Provider>
    );
}