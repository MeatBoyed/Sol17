import React from 'react';

import './CheckoutPageStyle.css';

// Core Components
import { OrderSummarySection } from './OrderSummarySection';
import { CheckoutSection } from './CheckoutSection';
import { FooterSection } from '../FooterSection';

interface Props {}

export const CheckoutPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <h1 className="headerText">Sol - 17</h1>
      <section id="CheckoutPage">
        <OrderSummarySection />
        <CheckoutSection />
      </section>
      <FooterSection />
    </React.Fragment>
  );
};

export default CheckoutPageIndex