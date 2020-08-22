import React from 'react';

import NikeAirImage from '../../img/nikeAir.jpg';

interface Props {
  name: string;
  price: number;
  image?: any;
}

export const Item: React.FC<Props> = ({ name, price, image }) => {
  return (
    <div className="item" key="1">
      <div className="itemImage">
        <img src={NikeAirImage} alt="" />
      </div>
      <div className="itemInfoContainer">
        <p className="itemInfoTitle">{name}</p>
        <p className="itemInfoPrice">{price}</p>
      </div>
    </div>
  );
};
