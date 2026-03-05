import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container about-grid">
                <div className="about-images reveal">
                    <div className="img-frame"></div>
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Construction Site" className="img-large" />
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Team Work" className="img-small" />
                </div>
                <div className="about-text reveal">
                    <span className="section-label">WHO WE ARE</span>
                    <h2 className="section-title">Two Decades of Building Excellence</h2>
                    <p>Since 2005, Vighnaharta Constructions has been at the forefront of the construction industry in India. We specialize in transforming complex visions into architectural landmarks. Our commitment to quality, safety, and innovation has made us a trusted partner for premium projects.</p>
                    <div className="about-stats-grid">
                        <div className="mini-stat">
                            <i className="fas fa-check-circle"></i>
                            <div className="mini-stat-info">
                                <h4>Quality First</h4>
                                <p>Strict ISO standards</p>
                            </div>
                        </div>
                        <div className="mini-stat">
                            <i className="fas fa-users"></i>
                            <div className="mini-stat-info">
                                <h4>Expert Team</h4>
                                <p>200+ Professionals</p>
                            </div>
                        </div>
                        <div className="mini-stat">
                            <i className="fas fa-clock"></i>
                            <div className="mini-stat-info">
                                <h4>On Time</h4>
                                <p>99% Delivery rate</p>
                            </div>
                        </div>
                        <div className="mini-stat">
                            <i className="fas fa-shield-alt"></i>
                            <div className="mini-stat-info">
                                <h4>Safety First</h4>
                                <p>Zero accident record</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Learn Our Story</a>
                </div>
            </div>
        </section>
    );
};

export default About;