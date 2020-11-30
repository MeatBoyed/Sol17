import React from 'react';

// Add recommened sction

// Style Sheet
import './SingleItemPageStyle.css';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { ImageViewer } from './ImageViewer';
import { DescriptionViewer } from './DescriptionViewer';
import { RecomendedSection } from './RecomendedSection';
import { FooterSection } from '../FooterSection';

interface Props {}

export const SingleItemPageIndex: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <section id="SingelItem">
        <div id="ItemImageViewerAndDetail">
          <ImageViewer />
          <DescriptionViewer />
        </div>
        <RecomendedSection />
      </section>
      <FooterSection />
    </React.Fragment>
  );
};

export default SingleItemPageIndex