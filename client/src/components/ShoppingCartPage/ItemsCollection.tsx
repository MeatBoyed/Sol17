import React from 'react'

import { Item } from './ItemTemplate'

interface Props {

}

export const ItemsCollection: React.FC<Props> = () => {
    return (
        <div className="ItemsCollection">
            <Item id="as" name= "Nike 270" price={5999} colour="black" size="xxl" />
            
        </div>
    );
}