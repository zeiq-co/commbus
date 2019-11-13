import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import OurClient from '../components/OurClient';
import Projects from '../components/Projects';
import Features from '../components/Features';
import Campaign from '../components/Campaign';
import Testimonials from '../components/Testimonials';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Exhibitiob Bus Hire" description="Exhibitiob Bus Hire" />
        <HomeHero />
        <OurClient />
        <Features />
        <Projects />
        <Campaign />
        <Testimonials />
        <OurClient />
      </Layout>
    );
  }
}
