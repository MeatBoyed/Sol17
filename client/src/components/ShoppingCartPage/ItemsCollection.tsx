import React, {useContext } from 'react'
import { ShoppingCartContext, ShoppingCartModel } from "../ShoppingCartContext"

import { Item } from './ItemTemplate'

export const ItemsCollection: React.FC = () => {
    
    const { shoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="ItemsCollection">
            {shoppingCart.map((item: ShoppingCartModel, index: number ) => (
                <Item index={index} id={item.id} name={item.name} price={item.price} colour={item.colour} size={item.size} />
            ))}
        </div>
    );
}