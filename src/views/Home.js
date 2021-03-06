import React from 'react';
import Button from '../components/elements/Button';


// import sections
// import Hero from '../components/sections/Hero';
import TestHero from '../components/sections/TestHero';
import JoinUs from '../components/sections/JoinUs';
import Activity from '../components/sections/Activity';
import Goal from '../components/sections/Goal';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <TestHero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
      <Goal className="illustration-section-01" id="section1" />
      <FeaturesSplit className="illustration-section-01" id="section3" />
      <Activity className="illustration-section-01" id="section2" />
      <JoinUs className="illustration-section-01"/>
    </>
  );
}

export default Home;