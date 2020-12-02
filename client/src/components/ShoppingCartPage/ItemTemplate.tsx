import React from 'react'

import img1 from '../../img/img1.jpg'

// Style Sheet
import './ItemTemplateStyle.css'

interface Props {

}

export const Item: React.FC<Props> = () => {
    return (
        <div className="item">
            <div className="itemInfo">
                <img src={img1} alt=""/>
                <div className="itemInfoText">
                    <p className="itemName">Nike 270</p>
                    <div className="SizeandColourInfoCollection">
                        <p className="itemColour">Black / </p>
                        <p className="itemSize">XXL</p>
                    </div>
                    <p className="itemPrice">$ 5 999.99</p>
                </div>
            </div>
            <div className="itemQuantityandRemove">
                <p className="itemQuantity">15</p>
                <p className="itemRemovebtn">Remove</p>
            </div>
        </div>
    );
}