import React from 'react';

// HomePage route style
import './HomePageStyle.css';

// Core components
import { NavigationBar } from '../NavigationBar';
import { BannerComponent } from './BannerComponent';
import { ShopSection } from './ShopSection';
import { AboutSection } from './AboutSection';
import { FooterSection } from '../FooterSection';

export const HomePageIndex: React.FC = () => {
  return (
    <div id="HomePageCollection">
      <NavigationBar />
      <BannerComponent />
      <ShopSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};
