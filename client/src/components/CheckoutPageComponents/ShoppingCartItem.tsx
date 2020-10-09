import React from 'react';

// Import Item TEMP
import NikeAirImage from '../../img/nikeAir.jpg';

interface Props {}

export const ShoppingCartItem: React.FC<Props> = () => {
  return (
    <div className="cartItem">
      <div className="cartItemMain">
        <div className="cartItemImage">
          <img src={NikeAirImage} alt="" />
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
          <h4>The Nike 270</h4>
          <p>Black / XXL</p>
        </div>
      </div>
      <p className="cartItemPrice">$5 999.99</p>
    </div>
  );
};
