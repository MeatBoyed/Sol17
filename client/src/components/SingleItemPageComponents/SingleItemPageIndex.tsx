import React from 'react';

// Core Components
import { NavigationBar } from '../NavigationBar';
import { ImageViewer } from './ImageViewer';
import { DescriptionViewer } from './DescriptionViewer';
import { FooterSection } from '../FooterSection';

interface Props {}

export const SingleItemPageIndex: React.FC<Props> = () => {
  return (
    <div>
      <NavigationBar />
      <ImageViewer />
      <DescriptionViewer />
      <FooterSection />
    </div>
  );
};
