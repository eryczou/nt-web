import React from 'react';
import  { BannerIntroSection } from './banner-section';
import { FirstFeatureSection } from './first-feature-section';
import { SecondFeatureSection } from './second-feature-section';

export const Home = () => {
  return (
    <React.Fragment>
      <BannerIntroSection />
      <FirstFeatureSection />
      <SecondFeatureSection />
    </React.Fragment>
  )
}