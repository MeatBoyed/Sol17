import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebaseConfig';

interface Props {
  id: string,
  name: string,
  price: number,
  colour: string,
  size: "xs" | "s" | "m" | "l" | "xl" | "xxl"
}

export const ShoppingCartItem: React.FC<Props> = ({ id, name, price, colour, size }) => {

  const [imageURL, setImageURL] = useState<string>()

  const fetchImageURL = async () => {
    const item = await firestore.collection("Items").doc(id).get()
    setImageURL(item.data()!.mainThumbnail)
  }

  useEffect(() => {
    fetchImageURL()
  })

  return (
    <div className="cartItem">
      <div className="cartItemMain">
        <div className="cartItemImage">
          <img src={imageURL} alt="" />
          <div className="quantityIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 27 27">
              <g id="Group_11" data-name="Group 11" transform="translate(-1466 -17)">
                <g
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  transform="translate(1466 17)"
                  fill="#fff"
                  stroke="#707070"
                  strokeWidth={1}
                >
                  <circle cx="13.5" cy="13.5" r="13.5" stroke="none" />
                  <circle cx="13.5" cy="13.5" r={13} fill="none" />
                </g>
                <text
                  id="_1"
                  data-name={1}
                  transform="translate(1480 36)"
                  fontSize={16}
                  fontFamily="Rubik-Regular, Rubik"
                  letterSpacing="0.124em"
                >
                  <tspan x="-3.424" y={0}>
                    7
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div className="itemDescription">
          <h4>{name}</h4>
          <p>{colour} / {size}</p>
        </div>
      </div>
      <p className="cartItemPrice">${price}</p>
    </div>
  );
};
