import React, { useState, useEffect, createContext} from 'react'

export interface ShoppingCartModel {
    id: string,
    name: string,
    price: number,
    colour: string,
    size: "xs" | "s" | "m" | "l" | "xl" | "xxl"
}

export const ShoppingCartContext = createContext<ShoppingCartModel[] | any>([])

export const ShoppingCartContextProvider: React.FC<React.ReactNode> = ({ children }) => {
    
   const [shoppingCart, setShoppingCart] = useState<ShoppingCartModel[]>([]) 
    
   useEffect(() => {
    let existing = localStorage.getItem("Sol17ShoppingCart")
    
    if (existing != null) {
        setShoppingCart(JSON.parse(existing))  
        console.log("Existing and pased")
    }

   }, [])

   const AddToShoppingCart = (item: ShoppingCartModel) => {
    // Push to current state array
    const newCart = shoppingCart.concat(item)
    setShoppingCart(newCart)

    // update local storage 
    localStorage.setItem("Sol17ShoppingCart", JSON.stringify(newCart))
  }


    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, AddToShoppingCart}} >
            { children }
        </ShoppingCartContext.Provider>
    );
}
