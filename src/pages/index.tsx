import React from 'react';
import Head from 'next/head';
import HeroNew from '@/components/landing/HeroNew';
import Swahilipotfm from '@/components/landing/Swahilipotfm';
import CaseManagement from '@/components/landing/CaseManagement';
import CorePillars from '@/components/landing/CorePillars';
import SwahilipotPillar from '@/components/landing/SwahilipotPillar';
import WorkWithUs from '@/components/landing/WorkWithUs';
import Numbers from '@/components/landing/Numbers';
import FAQS from '@/components/landing/FAQS';
import Events from '@/components/landing/Events';
import Attachment from '@/components/landing/Attachment';
import Testimonials from '@/components/landing/Testimonials';
import Partners from '@/components/landing/Partners';
const HomePage = () => (
  <>

    <HeroNew/>
    <Swahilipotfm/>
    <CaseManagement />
    <CorePillars/>
    <SwahilipotPillar/>
    <WorkWithUs/>
    <Numbers/>
    <FAQS />
    <Events />
    <Attachment/>
    <Testimonials/>
    <Partners />
  </>
);

export default HomePage;
