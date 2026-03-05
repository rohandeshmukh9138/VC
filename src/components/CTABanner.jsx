import React from 'react';

const CTABanner = () => {
    return (
        <section id="cta-banner">
            <div className="container reveal">
                <h2>Ready to Build Your Dream Project?</h2>
                <p>Get a free consultation and detailed cost estimate from our expert team.</p>
                <div className="cta-btns">
                    <a href="/contact" className="btn btn-white">Get Free Quote</a>
                    <a href="tel:+919011166108" className="btn btn-outline">Call Us Now</a>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
