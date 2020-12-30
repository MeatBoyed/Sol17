import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebaseConfig"

// Drop Down
import { DropDown } from './DropDown';

interface Props {
  id: string,
  name: string,
  price: number,
  description: string,
  colours: []
}

export const DescriptionViewer: React.FC<Props> = ({ id, name, price, description, colours }) => {

  return (
    <div id="DescriptionViewer">
      <div className="titleContainer">
        <h1>{ name }</h1>
        <p>{ price }</p>
      </div>
      <p className="colourText">Colour - Red</p>
      <div className="colourPickerContainer">
        <button className="colourButton">
          <button className="colourButtonInner black"></button>
        </button>
        <button className="colourButton">
          <button className="colourButtonInner white"></button>
        </button>
        <button className="colourButton">
          <button className="colourButtonInner red"></button>
        </button>
      </div>
      <div className="sizePicker">
        <button className="sizeButton">XS</button>
        <button className="sizeButton">S</button>
        <button className="sizeButton" style={{ background: '#F84C4C' }}>
          M
        </button>
        <button className="sizeButton">L</button>
        <button className="sizeButton">XL</button>
        <button className="sizeButton">XXL</button>
      </div>
      <button className="AddToCartButton">Add To Cart</button>
      <div className="infoDropdown">
        <DropDown title={'Description'} text={description} />
        <DropDown title={'Size Chart'} text={description} />
        <DropDown title={'Shipping & Returns'} text={description} />
      </div>
    </div>
  );
};
