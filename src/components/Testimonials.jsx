import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const testimonials = [
        { name: "Rajesh Singhania", role: "CEO, TechHub Pune", text: "Vighnaharta Constructions delivered our commercial complex 2 months ahead of schedule. The quality of finish is truly world-class." },
        { name: "Priya Sharma", role: "Homeowner, Bangalore", text: "Their attention to detail in residential projects is unmatched. Our dream villa was executed exactly as per the 3D designs." },
        { name: "Amitabh Vats", role: "Director, Vats Industrial", text: "Professional, transparent, and highly skilled. They managed our heavy industrial project with absolute precision and safety." }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials">
            <div className="container">
                <div className="text-center reveal">
                    <span className="section-label" style={{ color: 'var(--accent-gold)' }}>TESTIMONIALS</span>
                    <h2 className="section-title" style={{ color: 'var(--pure-white)' }}>What Our Clients Say</h2>
                    <span className="heading-accent" style={{ background: 'var(--accent-gold)' }}></span>
                </div>
                <div className="testimonial-carousel reveal">
                    <div className="testimonial-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card" style={{ flex: '0 0 100%' }}>
                                <div className="testimonial-inner">
                                    <i className="fas fa-quote-left quote-icon"></i>
                                    <div className="stars">
                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                    </div>
                                    <p className="testimonial-text">"{t.text}"</p>
                                    <div className="client-info">
                                        <div className="client-meta">
                                            <h4>{t.name}</h4>
                                            <p>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-dots">
                        {testimonials.map((_, i) => (
                            <div 
                                key={i} 
                                className={`dot ${currentSlide === i ? 'active' : ''}`} 
                                onClick={() => setCurrentSlide(i)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;