import React, {useContext} from 'react'
import { ShoppingCartContext, ShoppingCartModel } from "../ShoppingCartContext"

import { Item } from './ItemTemplate'

interface Props {

}

export const ItemsCollection: React.FC<Props> = () => {
    
    const { shoppingCart } = useContext(ShoppingCartContext)

    console.log(shoppingCart)

    return (
        <div className="ItemsCollection">
            {/* <Item id="as" name= "Nike 270" price={5999} colour="black" size="xxl" /> */}
            {shoppingCart.map((item: ShoppingCartModel, index: number ) => (
                <Item index={index} name={item.name} price={item.price} colour={item.colour} size={item.size} />
            ))}
        </div>
    );
}