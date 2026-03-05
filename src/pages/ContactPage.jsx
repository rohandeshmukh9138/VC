import React from 'react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <PageHero 
        title="Get in Touch" 
        subtitle="Have a project in mind? Let's build it together. Reach out to our expert team today."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
      />
      <Contact />
      <div className="section-padding bg-light reveal">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2>Our Office</h2>
              <p className="lead">Visit us at our headquarters for a professional consultation.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div className="p-5 bg-white rounded shadow-sm h-100 border-top border-primary border-4 text-center">
                <div className="mb-4" style={{ fontSize: '2.5rem', color: '#FF6B00' }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 className="mb-3" style={{ fontSize: '1.8rem' }}>Head Office</h4>
                <p className="mb-3" style={{ fontSize: '1.2rem' }}>Uruli Devachi, Hadapsar, Pune, Maharashtra</p>
                <p style={{ fontSize: '1.1rem' }}><strong>Phone:</strong> +91 9011166108</p>
                <p style={{ fontSize: '1.1rem' }}><strong>Email:</strong> prathameshsalunke1234@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
