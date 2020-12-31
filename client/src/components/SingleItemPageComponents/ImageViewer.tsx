import React, { useState, useEffect } from 'react';

// Import react-image-gallery
import ImageGallery from 'react-image-gallery';

// Style import for react-image-gallery
import 'react-image-gallery/styles/css/image-gallery.css';

interface Props {
  images: []
}


export const ImageViewer: React.FC<Props> = ({ images}) => {

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else setIsMobile(false);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div id="ImageViewer">
      <ImageGallery
        items={images}
        thumbnailPosition={isMobile ? 'bottom' : 'left'}
        showNav={isMobile}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={!isMobile}
        lazyLoad={true}
      />
    </div>
  );
};
