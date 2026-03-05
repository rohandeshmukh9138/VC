import React from 'react';
import PageHero from '../components/PageHero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounter from '../components/StatsCounter';
import CertMarquee from '../components/CertMarquee';

const AboutPage = () => {
  return (
    <div className="about-page">
      <PageHero 
        title="Our Story & Vision" 
        subtitle="Leading the construction industry with two decades of excellence, innovation, and trust."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
      />
      <About />
      <StatsCounter />
      <div className="section-padding bg-light reveal">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-4">Building a Sustainable Future</h2>
              <p className="lead">At Vighnaharta Constructions, we don't just build structures; we build dreams and lasting legacies. Our commitment to sustainability and quality craftsmanship has made us a leader in the construction sector.</p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <CertMarquee />
    </div>
  );
};

export default AboutPage;
