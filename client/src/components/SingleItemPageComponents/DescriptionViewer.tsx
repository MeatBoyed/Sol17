import React from 'react';

interface Props {}

export const DescriptionViewer: React.FC<Props> = () => {
  return (
    <div id="DescriptionViewer">
      <div className="titleContainer">
        <h1>The Nike 270</h1>
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
        <div className="itemDescription">
          <p>Description</p>
          <svg
            id="line-angle-down"
            xmlns="http://www.w3.org/2000/svg"
            width="29.108"
            height="15.849"
            viewBox="0 0 29.108 15.849"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
              transform="translate(-0.001 0.003)"
            />
          </svg>
        </div>
        <div className="itemDescription">
          <p>Size Chart</p>
          <svg
            id="line-angle-down"
            xmlns="http://www.w3.org/2000/svg"
            width="29.108"
            height="15.849"
            viewBox="0 0 29.108 15.849"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
              transform="translate(-0.001 0.003)"
            />
          </svg>
        </div>
        <div className="itemDescription">
          <p>Shipping & Return</p>
          <svg
            id="line-angle-down"
            xmlns="http://www.w3.org/2000/svg"
            width="29.108"
            height="15.849"
            viewBox="0 0 29.108 15.849"
          >
            <path
              id="Path_4"
              data-name="Path 4"
              d="M2.767.459A1.63,1.63,0,1,0,.493,2.8L13.472,15.381l1.137-1.168-1.137,1.173a1.634,1.634,0,0,0,2.31-.036c.019-.019.036-.038.052-.057L28.614,2.8A1.629,1.629,0,1,0,26.342.459L14.6,11.939,2.767.459Z"
              transform="translate(-0.001 0.003)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
