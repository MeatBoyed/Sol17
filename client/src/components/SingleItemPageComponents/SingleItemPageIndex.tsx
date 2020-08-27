import React from 'react';

// Add recommened sction

// Style Sheet
import './SingleItemPageStyle.css';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { ImageViewer } from './ImageViewer';
import { DescriptionViewer } from './DescriptionViewer';
import { FooterSection } from '../FooterSection';

interface Props {}

export const SingleItemPageIndex: React.FC<Props> = () => {
  return (
    <section id="SingelItem">
      <NavigationBar />
      <div id="ItemImageViewerAndDetail">
        <ImageViewer />
        <DescriptionViewer />
      </div>
      <FooterSection />
    </section>
  );
};
