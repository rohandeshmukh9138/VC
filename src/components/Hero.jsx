import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Building the Future, One Structure at a Time";

    useEffect(() => {
        let currentIndex = 0;
        let isCancelled = false;

        const type = () => {
            if (isCancelled) return;
            
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.substring(0, currentIndex));
                currentIndex++;
                setTimeout(type, 100);
            }
        };

        type();

        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <span className="hero-label">ISO 9001:2015 CERTIFIED COMPANY</span>
                    <h1 className="hero-title">{displayText}<span className="cursor-blink">|</span></h1>
                    <p className="hero-sub">Premium Residential, Commercial & Industrial Construction Across India. We deliver excellence through innovation and precision.</p>
                    <div className="hero-btns">
                        <Link to="/projects" className="btn btn-primary">Explore Our Projects <i className="fas fa-arrow-right"></i></Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator" onClick={() => {
                const about = document.querySelector('#about');
                if (about) {
                    about.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }
            }}>
                <i className="fas fa-chevron-down fa-2x"></i>
            </div>
            <div className="hero-stats-floating">
                <div className="stat-card-glass reveal">
                    <div className="stat-icon"><i className="fas fa-building"></i></div>
                    <div className="stat-info">
                        <h3>10+</h3>
                        <p>Projects Done</p>
                    </div>
                </div>
                <div className="stat-card-glass reveal" style={{ transitionDelay: '0.2s' }}>
                    <div className="stat-icon"><i className="fas fa-history"></i></div>
                    <div className="stat-info">
                        <h3>4+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
                <div className="stat-card-glass reveal" style={{ transitionDelay: '0.4s' }}>
                    <div className="stat-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="stat-info">
                        <h3>10+</h3>
                        <p>Cities Covered</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

