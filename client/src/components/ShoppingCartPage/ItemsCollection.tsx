import React, {useContext, useEffect, useState} from 'react'
import { ShoppingCartContext, ShoppingCartModel } from "../ShoppingCartContext"

import { Item } from './ItemTemplate'

export const ItemsCollection: React.FC = () => {

    // While component maps over items in ShoppingCartContxt
    // Sum all the prices to get a total of all the items in the current cart
    
    const { shoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="ItemsCollection">
            {shoppingCart.map((item: ShoppingCartModel, index: number ) => (
                <Item index={index} id={item.id} name={item.name} price={item.price} colour={item.colour} size={item.size} />
            ))}
        </div>
    );
}