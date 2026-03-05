import React from 'react';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import Process from '../components/Process';
import CTABanner from '../components/CTABanner';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <PageHero 
        title="Our Comprehensive Services" 
        subtitle="From initial concept to final construction, we deliver excellence at every step of your project."
        image="https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070&auto=format&fit=crop"
      />
      <Services />
      <Process />
      <div className="section-padding reveal">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <h2>Tailored Construction Solutions</h2>
              <p className="lead mb-5">Each project is unique, and we offer customized solutions to meet your specific needs and budget requirements.</p>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-light rounded shadow-sm h-100">
                    <h4 className="mb-3">Pre-Construction Planning</h4>
                    <p>Accurate estimation and strategic planning to ensure a smooth project kickoff.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-light rounded shadow-sm h-100">
                    <h4 className="mb-3">Sustainable Building</h4>
                    <p>Eco-friendly materials and construction methods to reduce environmental impact.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-light rounded shadow-sm h-100">
                    <h4 className="mb-3">Facility Maintenance</h4>
                    <p>Ongoing support and maintenance services to keep your building in peak condition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default ServicesPage;
