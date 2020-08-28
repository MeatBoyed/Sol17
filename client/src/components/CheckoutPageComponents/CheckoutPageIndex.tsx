import React from 'react';

import './CheckoutPageStyle.css';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { OrderSummarySection } from './OrderSummarySection';
import { FooterSection } from '../FooterSection';

interface Props {}

export const CheckoutPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <section id="CheckoutPage">
        <OrderSummarySection />
        <div id="Checkout">
          <h1>Checkout</h1>
        </div>
      </section>
      <FooterSection />
    </React.Fragment>
  );
};
