import React from 'react';

import './CheckoutPageStyle.css';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { OrderSummarySection } from './OrderSummarySection';
import { CheckoutSection } from './CheckoutSection';
import { FooterSection } from '../FooterSection';

interface Props {}

export const CheckoutPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <section id="CheckoutPage">
        <OrderSummarySection />
        <CheckoutSection />
      </section>
      <FooterSection />
    </React.Fragment>
  );
};
