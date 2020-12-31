import React, { } from 'react';

// Import Components
import { NavigationBar } from '../NavigationBar'
import { ItemsCollection } from './ItemsCollection'
import { OrderSummary } from './ShoppingCartOrderSummary'
import { FooterSection } from '../FooterSection'

// Style Sheet
import './ShoppingCartPageStyle.css'

interface Props {
}

export const ShoppingCart: React.FC<Props> = () => {

  return (
    <React.Fragment>
      <NavigationBar />
      <div id="ShoppingCart">
       <h1 className="title">Shopping Cart</h1> 
       <ItemsCollection />
       <OrderSummary/>
      </div>
      <FooterSection />
    </React.Fragment>
  );
};

export default ShoppingCart