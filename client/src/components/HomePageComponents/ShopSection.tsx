import React, {useState, useEffect} from 'react';
import { firestore } from "../../firebaseConfig"

import { Item } from './Item';

interface Props {}

interface Item {
  id: string,
  name: string,
  price: number,
  image: string
}

export const ShopSection: React.FC<Props> = () => {

  const [items, setItems] = useState<Item[]>([])

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
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <section id="ShopNowSection">
      <h2>SHOP</h2>
      <div className="itemsCollection">
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} url={`/item/${item.id}`} image={item.image} />
        ))}
      </div>
    </section>
  );
};
