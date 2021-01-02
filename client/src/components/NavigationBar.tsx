import React, { ContextType, useContext } from 'react';
import { ShoppingCartContext } from "./ShoppingCartContext"

import "./NavigationBarandFooterSectionStyles.css"

// const styles = {
//   NavigationBarStyles: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     height: "75px",
//     borderBottom: "2px solid #707070",
//     fontSize: "32px",
//   },
//   LogoIcon: {
//     marginLeft: "1em",
//     letterSpacing: "7px"
//   },
//   Pages: {
//     fontSize: "26px"
//   },
//   ShopLink: {
//     marginRight: "35px",
//     color: "black"
//   },
//   ShoppingCartIcon: {
//     marginRight: "1em"
//   },
//   ShoppingCartIconSVG: {
//     width: "40px"
//   }
// }


interface Props {}

interface IShoppingCart {
  amount: number
}

export const NavigationBar: React.FC = () => {

  const { shoppingCart } = useContext(ShoppingCartContext)

  let itemsInCart = shoppingCart.length

  return (
    <nav id="NavigationBar" >
      <a href="/" className="LogoIcon" >
        Sol - 17
      </a>
      <div className="Pages" >
        <a href="/#ShopNowSection" className="ShopLink" >
          Shop
        </a>
        <a href="/#AboutSection" >About</a>
      </div>
      <a href="/ShoppingCart" className="ShoppingCartIcon" >
        <svg xmlns="http://www.w3.org/2000/svg" width="57.355" height={72} viewBox="0 0 57.355 72">
      <g id="Group_9" data-name="Group 9" transform="translate(-1782 -40)" >
        <text
          id="_5"
          data-name={5}
          transform="translate(1810 65)"
          fill="#0f5"
          fontSize={27}
          fontFamily="Rubik-Regular, Rubik"
          letterSpacing="0.186em"
        >
          <tspan x="0" y="0" textAnchor="middle">
            {/* Add Amount variable here */}
            {itemsInCart}
          </tspan>
        </text>
        <g id="basket" transform="translate(1782 68)">
          <path
            id="Path_1"
            data-name="Path 1"
            d="M5.619,12.935h4.4L20.8.865a2.617,2.617,0,0,1,3.687-.21h0a2.623,2.623,0,0,1,.21,3.692l-7.664,8.588H40.516L32.852,4.347a2.623,2.623,0,0,1,.21-3.692h0a2.623,2.623,0,0,1,3.692.21L47.526,12.935h8.219a1.613,1.613,0,0,1,1.61,1.61v4.541a1.613,1.613,0,0,1-1.61,1.61H52.324l-1.76,22.183a1.153,1.153,0,0,1-1.115,1.115H7.906a1.153,1.153,0,0,1-1.115-1.115L5.031,20.7H1.61A1.613,1.613,0,0,1,0,19.086V14.545a1.613,1.613,0,0,1,1.61-1.61H5.619ZM36.25,21.569h5.092V36.284H36.25V21.569Zm-9.9,0h5.087V36.284H26.346V21.569Zm-9.9,0h5.092V36.284H16.442V21.569Z"
            transform="translate(0 0.005)"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
      </a>
    </nav>
  );
};
