import React from 'react';

import { Item } from './Item';

interface Props {}

export const ShopSection: React.FC<Props> = () => {
  const items = [
    {
      id: '1bahd1',
      name: 'Nike Air 270',
      price: 5999.99,
    },
    {
      id: '123basd',
      name: 'Nike Air Max 290',
      price: 4500.99,
    },
    {
      id: 'bbas123',
      name: 'Addias MDNS',
      price: 5999.99,
    },
    {
      id: 'asds1233ddsa',
      name: 'Nike Air Force 1',
      price: 5999.99,
    },
    {
      id: '1256nasd',
      name: 'Jordans 250s',
      price: 4.99,
    },
  ];

  return (
    <section id="ShopNowSection">
      <h2>SHOP</h2>
      <div className="itemsCollection">
        {/* Iterativly create an Item Reach child */}
        {items.map((item) => (
          <Item key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </section>
  );
};
