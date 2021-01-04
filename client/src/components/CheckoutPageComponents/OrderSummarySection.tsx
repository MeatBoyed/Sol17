import React, {useContext, useEffect, useState} from 'react';
import { ShoppingCartContext, ShoppingCartModel } from '../ShoppingCartContext';


// import Shopping Cart Item 
import { ShoppingCartItem } from './ShoppingCartItem'

interface Props {}

export const OrderSummarySection: React.FC<Props> = () => {

  const { shoppingCart } = useContext(ShoppingCartContext)

  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [showCart, setShowCart] = useState(true)

  useEffect(() => {
    let total = 0
    shoppingCart.map((item: ShoppingCartModel) => {
      total = total + item.price
      return total
    })
    setTotalPrice(total)
  }, [shoppingCart])

  return (
    <div id="OrderSummary">
      <div className="headerTitle">
        <div className="headerTitleText">
          <svg xmlns="http://www.w3.org/2000/svg" width="57.355" height={72} viewBox="0 0 57.355 72" >
            <g id="Group_9" data-name="Group 9" transform="translate(-1782 -40)">
              <text
                id="_5"
                data-name={5}
                transform="translate(1810 65)"
                fill="#0f5"
                fontSize={27}
                fontFamily="Rubik-Regular, Rubik"
                letterSpacing="0.186em"
              ></text>
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
          <h1>Order Summary</h1>
          <div className="dropDown">
            <svg
              id="line-angle-down"
              xmlns="http://www.w3.org/2000/svg"
              width="29.108"
              height="15.849"
              viewBox="0 0 29.108 15.849"
              onClick={() => setShowCart(!showCart)}>
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
                transform="translate(-0.001 0.003)"
              />
            </svg>
          </div>
        </div>
        <div className="headerTitelPrice">
          <p className="totalPrice">${totalPrice}</p>
        </div>
      </div>
      {showCart ? <div className="ShoppingCartContainerMain">
        <div className="shoppingCartContainer">
          {shoppingCart.map((item: ShoppingCartModel) => (
            <ShoppingCartItem id={item.id} name={item.name} price={item.price} colour={item.colour} size={item.size} />
          ))}
        </div>
        <div className="priceContainer">
          <div className="subtotalContainer">
            <div className="price">
              <p>Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <p>Shipping calculated at next step</p>
          </div>
          <div className="totalContainer">
            <p className="totalPrice">Total</p>
            <div className="priceTotalContainer">
              <p className="priceTotalCurrency">NAD</p>
              <p>${totalPrice}</p>
            </div>
          </div>
        </div>
  </div> : null }
    </div>
  );
};
