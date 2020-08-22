import React from 'react';

import AboutImage from '../../img/aboutImage.jpg';

export const AboutSection: React.FC = () => {
  return (
    <div id="AboutSection">
      <div className="Container">
        <h2>About Us</h2>
        <div className="TextImageContainer">
          <img src={AboutImage} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda magni quia, delectus, qui magnam dolor
            accusantium quam iure maxime consectetur tenetur id ipsa quo explicabo neque hic dicta autem voluptatum? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt perspiciatis molestias architecto fugiat?
            Excepturi neque voluptatum omnis labore harum ipsam laborum velit reiciendis dolorum, rerum quia natus voluptate
            nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque temporibus rerum quidem inventore cum
            facilis explicabo, aperiam placeat vel, distinctio, qui doloribus. Quo officia ducimus quae iusto. Temporibus,
            provident.
          </p>
        </div>
      </div>
    </div>
  );
};
