import React from 'react';

import BannerImage from '../../img/banner.jpg';

export const BannerComponent: React.FC = () => {
  return (
    <section id="BannerSection" style={{ backgroundImage: `url(${BannerImage})` }}>
      <a className="ShopNowButton" href="#ShopNowSection">
        <h3>Shop Now</h3>
      </a>
    </section>
  );
};
