import React from 'react';
import PageHero from '../components/PageHero';
import Portfolio from '../components/Portfolio';
import CTABanner from '../components/CTABanner';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <PageHero 
        title="Our Signature Projects" 
        subtitle="Exploring our portfolio of high-quality construction projects across multiple sectors."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />
      <Portfolio />
      <div className="section-padding bg-dark text-white reveal">
        <div className="container text-center">
          <h2 className="mb-4">Delivering Precision and Excellence</h2>
          <p className="lead mb-5">Our projects are a testament to our commitment to quality, safety, and timely delivery.</p>
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default ProjectsPage;
