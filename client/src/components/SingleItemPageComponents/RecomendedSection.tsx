import React from 'react';

import NikeAirImage from '../../img/nikeAir.jpg';

interface Props {}

export const RecomendedSection: React.FC<Props> = () => {
  return (
    <section id="Recomended">
      <h3>You May Also Like</h3>
      <div className="itemContainer">
        <div className="itemRec" key="1">
          <img src={NikeAirImage} alt="" />
        </div>
        <div className="itemRec" key="1">
          <img src={NikeAirImage} alt="" />
        </div>
        <div className="itemRec" key="1">
          <img src={NikeAirImage} alt="" />
        </div>
        <div className="itemRec" key="1">
          <img src={NikeAirImage} alt="" />
        </div>
      </div>
    </section>
  );
};
