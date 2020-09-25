import React from 'react';

// Image import
import NikeAirImage from '../../img/nikeAir.jpg';

interface Props {}

export const OrderSummarySection: React.FC<Props> = () => {
  return (
    <div id="OrderSummary">
      <div className="headerTitle">
        <div className="headerTitleText">
          <svg xmlns="http://www.w3.org/2000/svg" width="57.355" height={72} viewBox="0 0 57.355 72">
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
          <p className="totalPriceCurrency">NAD</p>
          <p className="totalPrice">$5 999.99</p>
        </div>
      </div>
      <div className="ShoppingCartContainerMain">
        <div className="shoppingCartContainer">
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
        </div>
        <div className="priceContainer">
          <div className="subtotalContainer">
            <div className="price">
              <p>Subtotal</p>
              <p>$5 999.99</p>
            </div>
            <p>Shipping calculated at next step</p>
          </div>
          <div className="totalContainer">
            <p className="totalPrice">Total</p>
            <div className="priceTotalContainer">
              <p className="priceTotalCurrency">NAD</p>
              <p>$5 999.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
