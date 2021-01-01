import React from 'react'

interface Props {}

export const OrderSummary: React.FC<Props> = () => {
    return (
        <div className="PriceInfoCollection">
            <div className="SubtotalPrice">
                <p className="subtotalText">Subtotal:</p>
                <p className="subtotalPrice">$5 999.9</p>
            </div>
            <p className="priceInfo">Shipping, taxes, and discount codes calculated at checkout.</p>
            <button className="checkoutButton">
                <a href="/checkout">
                    <h5 >Checkout</h5>
                </a>
            </button>
        </div>
    );
}