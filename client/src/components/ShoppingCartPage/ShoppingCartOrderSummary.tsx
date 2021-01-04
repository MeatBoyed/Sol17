import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { ShoppingCartContext, ShoppingCartModel } from '../ShoppingCartContext';


export const OrderSummary: React.FC = () => {

    const { shoppingCart } = useContext(ShoppingCartContext)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        let total = 0
        shoppingCart.map((item: ShoppingCartModel) => {
            total = total + item.price
            return total
        })
        setTotalPrice(total)
    }, [shoppingCart])

    return (
        <div className="PriceInfoCollection">
            <div className="SubtotalPrice">
                <p className="subtotalText">Subtotal:</p>
                <p className="subtotalPrice">${totalPrice}</p>
            </div>
            <p className="priceInfo">Shipping, taxes, and discount codes calculated at checkout.</p>
            <button className="checkoutButton">
               <h5><Link to="/checkout" style={{color: 'white'}}>Checkout</Link></h5> 
            </button>
        </div>
    );
}