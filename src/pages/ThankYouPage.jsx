import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <PageHero 
        title="Thank You!" 
        subtitle="We've received your inquiry."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="section-padding">
        <div className="container text-center reveal active">
          <div className="mb-5" style={{ fontSize: '5rem', color: 'var(--success-green)' }}>
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Submission Successful!</h2>
          <p className="lead mb-5" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 40px' }}>
            Thank you for reaching out to Vighnaharta Constructions. We will get back to you soon during our working hours (Monday - Sunday, 8:00 AM - 7:00 PM).
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/projects" className="btn btn-outline" style={{ border: '2px solid var(--primary-saffron)', color: 'var(--primary-saffron)' }}>View Our Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
