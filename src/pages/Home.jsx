import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Services from '../components/Services';
import StatsCounter from '../components/StatsCounter';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CertMarquee from '../components/CertMarquee';
import Blog from '../components/Blog';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <StatsCounter />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CertMarquee />
      <Blog />
      <CTABanner />
      <Contact />
    </>
  );
};

export default Home;
