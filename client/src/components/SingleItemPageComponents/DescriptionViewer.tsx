import React, {useState, useContext} from 'react';
import { ShoppingCartContext } from "../ShoppingCartContext"

// Drop Down
import { DropDown } from './DropDown';

interface Props {
  id: string,
  name: string,
  price: number,
  description: string,
  colours: []
}

interface ShoppingCartModel {
  id: string,
  name: string,
  price: number,
  colour: string,
  size: string
}

export const DescriptionViewer: React.FC<Props> = ({ id, name, price, description, colours }) => {

  const { AddToShoppingCart } = useContext(ShoppingCartContext)

  // Make this one whole state object
  const [colourOption, setColourOption] = useState<string>("black")
  const [sizeOption, setSizeOption] = useState<string>("m")


  const AddToShoppingCartHandler = () => {
    const item: ShoppingCartModel = {
      id: id,
      name: name,
      price: price,
      colour: colourOption,
      size: sizeOption
    }

    AddToShoppingCart(item)
  }

  return (
    <div id="DescriptionViewer">
      <div className="titleContainer">
        <h1>{ name }</h1>
        <p>${ price }</p>
      </div>
      <p className="colourText">Colour - Red</p>
      <div className="colourPickerContainer">
        {colours.map((colour, index) => (
          <button key={index} className="colourButton" style={{ backgroundColor: colourOption===colour ? 'lightblue' : 'white' }} >
            <button className={`colourButtonInner ${colour}`} onClick={() => setColourOption(colour)}></button>
          </button>
        ))}
      </div>
      <div className="sizePicker">
        <button className="sizeButton" onClick={() => setSizeOption("xs")} style={{ background: sizeOption==="xs" ? '#F84C4C' : "white" }} >
          XS
        </button>
        <button className="sizeButton" onClick={() => setSizeOption("s")} style={{ background: sizeOption==="s" ? '#F84C4C' : "white" }} >
          S
        </button>
        <button className="sizeButton" onClick={() => setSizeOption("m")} style={{ background: sizeOption==="m" ? '#F84C4C' : "white" }} >
          M
        </button>
        <button className="sizeButton" onClick={() => setSizeOption("l")} style={{ background: sizeOption==="l" ? '#F84C4C' : "white" }} >
          L
        </button>
        <button className="sizeButton" onClick={() => setSizeOption("xl")} style={{ background: sizeOption==="xl" ? '#F84C4C' : "white" }} >
          XL 
        </button>
        <button className="sizeButton" onClick={() => setSizeOption("xxl")} style={{ background: sizeOption==="xxl" ? '#F84C4C' : "white" }} >
          XXL
        </button>
      </div>
      <button className="AddToCartButton" onClick={AddToShoppingCartHandler} >Add To Cart</button>
      <div className="infoDropdown">
        <DropDown title={'Description'} text={description} />
        <DropDown title={'Size Chart'} text={description} />
        <DropDown title={'Shipping & Returns'} text={description} />
      </div>
    </div>
  );
};
