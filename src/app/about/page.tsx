import React from 'react';
import Header from '@/components/ui/header';
import FooterSection from '@/components/ui/footer-section';
import { Separator } from '@/components/ui/separator';
import BrowseStarts from '@/components/ui/browse-stars';
import CameoWorks from '@/components/ui/cameo-work';
import CameoMatch from '@/components/ui/cameo-match';
import ExploreProducts from '@/components/ui/explore-products';
import DownloadApp from '@/components/ui/download-app';

const About = () => {
  return (
    <React.Fragment >
      <Header className='bg-black' />
      <BrowseStarts />
      <Separator className="bg-pink-400 bg-opacity-30" />
      <CameoWorks />
      <CameoMatch />
      <ExploreProducts />
      <DownloadApp />
      <FooterSection />
    </React.Fragment>
  )
};

export default About;
