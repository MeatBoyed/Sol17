import React, { useState } from 'react';

import { ShoppingCart } from './ShoppingCart';

interface Props {}

export const NavigationBar: React.FC<Props> = () => {
  return (
    <nav id="NavigationBar">
      <a href="#" className="LogoIcon">
        Sol - 17
      </a>
      <div className="Pages">
        <a href="#ShopNowSection" className="ShopLink">
          Shop
        </a>
        <a href="#AboutSection">About</a>
      </div>
      <a href="#" className="ShoppingCartIcon">
        <ShoppingCart amount={23} />
      </a>
    </nav>
  );
};
