import React, { useState, useEffect, createContext} from 'react'
import ShoppingCart from './ShoppingCartPage/ShoppingCartIndex'

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
        // setShoppingCart([])
    }

    console.log("active")

   }, [])

   const AddToShoppingCart = (item: ShoppingCartModel) => {
    // Push to current state array
    const newCart = shoppingCart.concat(item)
    setShoppingCart(newCart)

    console.log("Updated")
    console.log(shoppingCart)

    // update local storage 
    console.log(JSON.stringify(newCart))
    localStorage.setItem("Sol17ShoppingCart", JSON.stringify(newCart))
    console.log("local saved")
  }

    return (
        <ShoppingCartContext.Provider value={{ shoppingCart, AddToShoppingCart}} >
            { children }
        </ShoppingCartContext.Provider>
    );
}
