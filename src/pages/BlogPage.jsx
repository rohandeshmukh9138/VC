import React from 'react';
import PageHero from '../components/PageHero';
import Blog from '../components/Blog';
import CTABanner from '../components/CTABanner';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <PageHero 
        title="Our Blog & Insights" 
        subtitle="Staying informed with the latest trends and updates in the construction industry."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />
      <Blog />
      <div className="section-padding reveal">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="mb-4">Want to Stay Updated?</h2>
              <p className="lead mb-4">Subscribe to our newsletter and receive the latest insights and company updates directly in your inbox.</p>
              <form className="d-flex max-w-lg mx-auto p-2 bg-light rounded shadow-sm">
                <input type="email" className="form-control border-0 bg-transparent px-3" placeholder="Enter your email address" />
                <button className="btn btn-primary px-4">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CTABanner />
    </div>
  );
};

export default BlogPage;
