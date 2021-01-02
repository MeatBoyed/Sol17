import React, { useContext } from 'react'
import { ShoppingCartContext } from "../ShoppingCartContext"

// import img1 from '../../img/img1.jpg'

// Style Sheet
import './ItemTemplateStyle.css'

interface Props {
    index: number
    name: string,
    price: number,
    colour: string,
    size: "xs" | "s" | "m" | "l" | "xl" | "xxl"
}

export const Item: React.FC<Props> = ({ index, name, price, colour, size }) => {

    const { RemoveFromShoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="item">
            <div className="itemInfo">
                <a href="/item/11"><img src={""} alt=""/>
                </a>
                <div className="itemInfoText">
                    <a href="/item/11"><p className="itemName">{ name }</p>
                    </a>
                    <div className="SizeandColourInfoCollection">
                        <p className="itemColour">{colour} / </p>
                        <p className="itemSize">{size}</p>
                    </div>
                    <p className="itemPrice">${price}</p>
                </div>
            </div>
            <div className="itemQuantityandRemove">
                <p className="itemQuantity">15</p>
                <p className="itemRemovebtn" onClick={() => RemoveFromShoppingCart(index) }>Remove</p>
            </div>
        </div>
    );
}