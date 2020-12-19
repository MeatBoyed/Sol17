import React from 'react';

import NikeAirImage from '../../img/nikeAir.jpg';

interface Props {
  name: string;
  price: number;
  image?: any;
  url: string;
}

export const Item: React.FC<Props> = ({ name, price, image, url }) => {
  return (
    <div className="item" key="1">
      <div className="itemImage">
        <a href={url}>
          <img src={NikeAirImage} alt="" />
        </a>
      </div>
      <div className="itemInfoContainer">
        <a href={url}>
          <p className="itemInfoTitle">{name}</p>
         </a>
        <p className="itemInfoPrice">{price}</p>
      </div>
    </div>
  );
};
