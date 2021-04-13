import React from 'react';
import  { BannerIntroSection } from './banner-section'
import { FirstFeatureSection } from './first-feature-section'

export const Home = () => {
  return (
    <React.Fragment>
      <BannerIntroSection />
      <FirstFeatureSection />
    </React.Fragment>
  )
}