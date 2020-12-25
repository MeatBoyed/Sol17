import React from 'react';


interface Props {
  name: string;
  price: number;
  image: string;
  url: string;
}

export const Item: React.FC<Props> = ({ name, price, image, url }) => {
  return (
    <div className="item" key="1">
      <div className="itemImage">
        <a href={url}>
          <img src={image} alt="" />
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
