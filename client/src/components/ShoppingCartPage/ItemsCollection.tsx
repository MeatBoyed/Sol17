import React from 'react'

import { Item } from './ItemTemplate'

interface Props {

}

export const ItemsCollection: React.FC<Props> = () => {
    return (
        <div className="ItemsCollection">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}