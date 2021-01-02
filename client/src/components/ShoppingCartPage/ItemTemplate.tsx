import React, { useContext, useEffect, useState } from 'react'
import { firestore } from '../../firebaseConfig'
import { ShoppingCartContext } from "../ShoppingCartContext"

// Style Sheet
import './ItemTemplateStyle.css'

interface Props {
    index: number, 
    id: string,
    name: string,
    price: number,
    colour: string,
    size: "xs" | "s" | "m" | "l" | "xl" | "xxl"
}

export const Item: React.FC<Props> = ({ index, id, name, price, colour, size }) => {

    const { RemoveFromShoppingCart } = useContext(ShoppingCartContext)
    const [imageURL, setImageURL] = useState<string>()

    const fetchImage = async () => {
        const item = await firestore.collection("Items").doc(id).get()
        setImageURL(item.data()!.mainThumbnail)
    }

    useEffect(() => {
        fetchImage()
    })

    return (
        <div className="item">
            <div className="itemInfo">
                <a href="/item/11">
                    <img src={imageURL} alt=""/>
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
                {/* <p className="itemQuantity">15</p> */}
                <p className="itemRemovebtn" onClick={() => RemoveFromShoppingCart(index) }>Remove</p>
            </div>
        </div>
    );
}