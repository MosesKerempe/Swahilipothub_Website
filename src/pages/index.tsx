import React from 'react';
import CaseManagement from '@/components/landing/CaseManagement';
import FAQS from '@/components/landing/FAQS';
import Numbers from '@/components/landing/Numbers';
import CorePillars from '@/components/landing/CorePillars';
import Events from '@/components/landing/Events';
import Partners from '@/components/landing/Partners';
import PartnersLogos from '@/components/partners/partners-logos';

const HomePage = () => (
  <>
    <CaseManagement />
    <FAQS />
    <Numbers />
    <CorePillars />
    <Events />
    <Partners />
    <PartnersLogos />
  </>
);

export default HomePage;
