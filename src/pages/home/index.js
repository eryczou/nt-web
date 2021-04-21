import React from 'react';
import  { BannerIntroSection } from './banner-section';
import { FirstFeatureSection } from './first-feature-section';
import { WorkflowFeatureSection } from './workflow-feature-section';
import { CaseFeatureSection } from './case-feature-section';
import { CloudsFeatureSection } from './clouds-feature-section';
import { PricingFeatureSection} from './pricing-feature-section';

export const Home = () => {
  return (
    <div>
      <BannerIntroSection />
      <FirstFeatureSection />
      <WorkflowFeatureSection />
      <CaseFeatureSection />
      <CloudsFeatureSection />
      <PricingFeatureSection />
    </div>
  )
}