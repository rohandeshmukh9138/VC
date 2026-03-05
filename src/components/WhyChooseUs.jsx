import React from 'react';

const WhyChooseUs = () => {
    const usps = [
        { icon: "fas fa-clock", title: "On-Time Project Delivery", desc: "We value your time. Our project management systems ensure zero delays." },
        { icon: "fas fa-certificate", title: "ISO Certified Standards", desc: "Strict adherence to ISO 9001:2015 quality control protocols.", delay: "0.1s" },
        { icon: "fas fa-hard-hat", title: "Experienced Engineering Team", desc: "Top-tier engineers with decades of collective industry experience.", delay: "0.2s" },
        { icon: "fas fa-file-invoice-dollar", title: "Transparent Cost Estimation", desc: "No hidden costs. Detailed itemized billing and estimation.", delay: "0.3s" }
    ];

    return (
        <section id="why-choose-us">
            <div className="container why-grid">
                <div className="reveal">
                    <span className="section-label">WHY CHOOSE US</span>
                    <h2 className="section-title">Why Leading Brands Trust Vighnaharta</h2>
                    <p>We combine international standards with local expertise. Our transparent process and commitment to quality ensure that your project is not just built, but crafted to perfection.</p>
                    <a href="#" className="btn btn-primary">See Our Certifications</a>
                </div>
                <div className="usp-list">
                    {usps.map((usp, index) => (
                        <div key={index} className="usp-item reveal" style={{ transitionDelay: usp.delay }}>
                            <div className="usp-icon"><i className={usp.icon}></i></div>
                            <div className="usp-content">
                                <h4>{usp.title}</h4>
                                <p>{usp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;