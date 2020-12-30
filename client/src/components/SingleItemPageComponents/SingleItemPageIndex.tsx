import React, {useState, useEffect} from 'react';
import { RouteComponentProps } from "react-router"
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
  id: string,
  name: string,
  price: number,
  description: string,
  mainThumbnail: string,
  colours: [],
}

export const SingleItemPageIndex: React.FC<Props> = ({ match }) => {

  const [loadingAndValidation, setLoadingAndValidation] = useState<LoadingAndValidation>({ isLoading: true, isValid: false})
  const [itemData, setItemData] = useState<Item>()

  const fetchData = async () => {
    const item = await firestore.collection("Items").doc(match.params.id).get()
    const itemRawData = item.data()


    if(!item.exists) {
      setLoadingAndValidation({ isLoading: false, isValid: false})
      console.log("Not Valid and done loading")
    }else {
      setLoadingAndValidation({ isLoading: false, isValid: true})
      console.log("Valid and done loading")
      console.log(itemRawData)
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
                <DescriptionViewer />
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