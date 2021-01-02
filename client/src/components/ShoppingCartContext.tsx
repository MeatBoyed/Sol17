import React, { useState, useEffect, createContext} from 'react'

interface Props {}

interface ShoppingCartModel {
    id: string,
    name: string,
    price: number,
    colour: string,
    size: string
}

// [{"id":"12","size":"xs"},{"id":"312","size":"xs"},{"id":"1442","size":"xs"},{"id":"512","size":"xs"},{"id":"6712","size":"xs"},{"id":"1212","size":"xs"}]

// export const ShoppingCartContext = createContext<Partial<ShoppingCartModel>>({})
export const ShoppingCartContext = createContext<ShoppingCartModel[] | any>([])

export const ShoppingCartContextProvider: React.FC<React.ReactNode> = ({ children }) => {
    
   const [shoppingCart, setShoppingCart] = useState<ShoppingCartModel[]>([]) 
    
   useEffect(() => {
    //    Get shoppingCart from local storage
    let existing = localStorage.getItem("Sol17ShoppingCart")
    console.log(existing)
    
    if (existing != null) {
        setShoppingCart(JSON.parse(existing))  
        console.log("Existing and pased")
    }else {
        setShoppingCart([])
    }

   },[])

   const AddToShoppingCart = (item: ShoppingCartModel) => {
    // Push to current state array
    setShoppingCart(currentCart => [...currentCart, item])
    console.log("Updated")
    console.log(shoppingCart)

    // update local storage
   }

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart }} >
            { children }
        </ShoppingCartContext.Provider>
    );
}