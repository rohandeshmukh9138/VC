import React, { useState } from 'react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: "fas fa-home",
            title: "Residential Construction",
            desc: "Luxury villas, premium apartments, and sustainable housing complexes tailored to modern living.",
            details: "Our residential construction services encompass the design and build of high-end homes, from contemporary luxury villas to sustainable apartment complexes. We focus on architectural excellence, energy efficiency, and modern amenities to create living spaces that reflect the unique lifestyle of our clients."
        },
        {
            icon: "fas fa-building",
            title: "Commercial Construction",
            desc: "High-tech office spaces, shopping malls, and business parks designed for peak productivity.",
            details: "We specialize in developing state-of-the-art commercial properties including office towers, retail centers, and hospitality projects. Our approach prioritizes functional design, structural integrity, and sustainable building practices to deliver spaces that foster business growth and employee well-being.",
            delay: "0.1s"
        },
        {
            icon: "fas fa-industry",
            title: "Industrial Construction",
            desc: "Heavy industrial plants, warehouses, and factories built with precision engineering.",
            details: "Our industrial expertise covers the construction of manufacturing plants, logistics warehouses, and power facilities. We understand the technical complexities of industrial environments and deliver robust, scalable solutions engineered for safety, efficiency, and long-term durability.",
            delay: "0.2s"
        },
        {
            icon: "fas fa-road",
            title: "Civil Infrastructure",
            desc: "Bridges, highways, and urban infrastructure projects that connect communities.",
            details: "We build the backbone of modern cities through large-scale civil infrastructure projects. From bridges and highways to water treatment systems and urban landscaping, our team delivers engineering marvels that enhance connectivity and public services for entire communities."
        },
        {
            icon: "fas fa-couch",
            title: "Renovation & Interiors",
            desc: "Transformative interior designs and high-end structural renovations for all properties.",
            details: "Our renovation services breathe new life into existing structures. We offer comprehensive interior design, structural strengthening, and modern retrofitting for both residential and commercial spaces, ensuring that your property evolves with changing needs while maintaining its core value.",
            delay: "0.1s"
        },
        {
            icon: "fas fa-tasks",
            title: "Project Management",
            desc: "End-to-end management ensuring your project stays on schedule and within budget.",
            details: "Effective project management is the cornerstone of our success. We provide comprehensive oversight including feasibility studies, cost control, procurement, and site supervision. Our data-driven approach ensures that every project is completed on time, within budget, and to the highest quality standards.",
            delay: "0.2s"
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id="services">
                <div className="container">
                    <div className="text-center reveal">
                        <span className="section-label">OUR CORE SERVICES</span>
                        <h2 className="section-title">Expert Solutions for Every Scale</h2>
                        <span className="heading-accent"></span>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card reveal" style={{ transitionDelay: service.delay }}>
                                <div className="service-border"></div>
                                <i className={service.icon}></i>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a 
                                    href="#"
                                    className="service-link" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openModal(service);
                                    }}
                                >
                                    Read More <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedService && (
                <div className="service-modal-overlay" onClick={closeModal} style={{ zIndex: 99999 }}>
                    <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            <i className={selectedService.icon}></i>
                            <h2>{selectedService.title}</h2>
                            <div className="modal-divider"></div>
                            <p>{selectedService.details}</p>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={closeModal}>Close Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Services;