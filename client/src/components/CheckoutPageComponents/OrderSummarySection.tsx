import React from 'react';

interface Props {}

export const OrderSummarySection: React.FC<Props> = () => {
  return (
    <div id="OrderSummary">
      <div className="headerTitle">
        <h1>SVG</h1>
        <h1>Order Summary</h1>
      </div>
      <div className="shoppingCartContainer">
        <h1>item</h1>
      </div>
      <div className="priceContainer">
        <div className="subtotalContainer">
          <p>Subtotal</p>
          <p>$5 999.99</p>
          <p>Shipping calculated at next step</p>
        </div>
        <div className="totalContainer">
          <p>Total</p>
          <div className="priceContainer">
            <p>NAD</p>
            <p>$5 999.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};
