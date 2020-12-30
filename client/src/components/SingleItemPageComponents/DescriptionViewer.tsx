import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebaseConfig"

// Drop Down
import { DropDown } from './DropDown';

interface Props {}

export const DescriptionViewer: React.FC<Props> = () => {
  const dummyText = "lorem asdasjkhsdjfh sajkdfhj  dsfhjdf  asdhjsad  ahsdjsdh ashdjad "

  return (
    <div id="DescriptionViewer">
      <div className="titleContainer">
        <h1>Nike 270</h1>
        <p>$5 999.99</p>
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
        <DropDown title={'Description'} text={dummyText} />
        <DropDown title={'Size Chart'} text={dummyText} />
        <DropDown title={'Shipping & Returns'} text={dummyText} />
      </div>
    </div>
  );
};
