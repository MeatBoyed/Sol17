import React, {useState, useEffect} from 'react';
import { match, RouteComponentProps } from "react-router"
import { Redirect } from 'react-router-dom'
import { firestore } from "../../firebaseConfig"

// Add recommened sction

// Style Sheet
import './SingleItemPageStyle.css';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { ImageViewer } from './ImageViewer';
import { DescriptionViewer } from './DescriptionViewer';
import { RecomendedSection } from './RecomendedSection';
import { FooterSection } from '../FooterSection';
import { Item } from '../ShoppingCartPage/ItemTemplate';

interface Props extends RouteComponentProps<{ id: string }> {}

interface LoadingAndValidation {
  isLoading: boolean,
  isValid: boolean,
}

interface Item {
  id: string ,
  name: string,
  price: number,
  description: string,
  mainThumbnail: string,
  colours: [],
}

export const SingleItemPageIndex: React.FC<Props> = ({ match }) => {

  const [loadingAndValidation, setLoadingAndValidation] = useState<LoadingAndValidation>({ isLoading: true, isValid: false})
  const [itemData, setItemData] = useState<Item>({id: "id123", name: "itemName", price: 1234, description: "Description", mainThumbnail: "www.host", colours: []})

  const fetchData = async () => {
    const item = await firestore.collection("Items").doc(match.params.id).get()

    if(!item.exists) {
      setLoadingAndValidation({ isLoading: false, isValid: false})
    }else {
      setLoadingAndValidation({ isLoading: false, isValid: true})
      setItemData({
        id: item.id,
        name: item.data()!.name,
        price: item.data()!.price,
        description: item.data()!.description,
        mainThumbnail: item.data()!.mainThumbnail,
        colours: item.data()!.colours,
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <NavigationBar />
      <section id="SingelItem">
        {loadingAndValidation.isLoading ? 
          <h1>LOADING..................</h1>
         :  
          <React.Fragment>
            {loadingAndValidation.isValid ?
              <div id="ItemImageViewerAndDetail">
                <ImageViewer />
                <DescriptionViewer id={itemData.id} name={itemData.name} price={itemData.price} description={itemData.description} colours={itemData.colours} />
              </div>
              : <Redirect to="/404" /> 
            }
          </React.Fragment>
        }
      </section>
      {/* <RecomendedSection/> */}
      <FooterSection />
    </React.Fragment>
  );
};

export default SingleItemPageIndex