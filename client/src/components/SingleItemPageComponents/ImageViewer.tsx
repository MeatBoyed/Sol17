import React from 'react';

// Import react-image-gallery
import ImageGallery from 'react-image-gallery';

// Style import for react-image-gallery
import 'react-image-gallery/styles/css/image-gallery.css';

//  Import images with Lazyload
import ImgOne from '../../img/img1.jpg';
import ImgTwo from '../../img/img2.jpg';
import ImgThree from '../../img/img3.jpg';
import ImgFour from '../../img/img4.jpg';

interface Props {}

export const ImageViewer: React.FC<Props> = () => {
  const images = [
    {
      original: ImgOne,
      thumbnail: ImgOne,
    },
    {
      original: ImgTwo,
      thumbnail: ImgTwo,
    },
    {
      original: ImgThree,
      thumbnail: ImgThree,
    },
    {
      original: ImgFour,
      thumbnail: ImgFour,
    },
  ];
  return (
    <div id="ImageViewer">
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={true}
        lazyLoad={true}
      />
    </div>
  );
};
