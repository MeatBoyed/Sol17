import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebaseConfig"

// Import Loading Spinner
import "../LoadingSpinner.css"

import { Item } from './Item';

interface Item {
  id: string,
  name: string,
  price: number,
  image: string
}

export const ShopSection: React.FC = () => {

  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getItems = async () => {
    const itemsData = await firestore.collection("Items").get()
    itemsData.docs.forEach(doc => {
      setItems(items => [
        ...items,
        {
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          image: doc.data().mainThumbnail
        }
      ])
    })
    setIsLoading(false)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <section id="ShopNowSection">
      <h2>SHOP</h2>
      <div className="itemsCollection">
        {isLoading ?  <div className="ShopSectionLoadingContainer"><div className="loader">Loadig...</div></div> : null}
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} url={`/item/${item.id}`} image={item.image} />
        ))}
      </div>
    </section>
  );
};
