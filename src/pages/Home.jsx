import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhatIsCQ from '../components/home/WhatIsCQ';
import WhatWeDo from '../components/home/WhatWeDo';
import WhoItsFor from '../components/home/WhoItsFor';
import SafetySection from '../components/home/SafetySection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatIsCQ />
      <WhatWeDo />
      <WhoItsFor />
      <SafetySection />
    </div>
  );
}