import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
                <div className="container nav-container">
                    <a href="/" className="logo">
                        <div className="logo-icon">VC</div>
                        <span>VIGHNAHARTA CONSTRUCTIONS</span>
                    </a>
                    <ul className="nav-links">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                        <li><a href="/services" className="nav-link">Services</a></li>
                        <li><a href="/projects" className="nav-link">Projects</a></li>
                        <li><a href="/blog" className="nav-link">Blog</a></li>
                        <li><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                    <div className="nav-cta">
                        <a href="/contact" className="btn btn-primary">Get Free Quote</a>
                    </div>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} id="mobileMenu">
                <div className="mobile-menu-close" onClick={toggleMenu}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="mobile-nav-links">
                    <a href="/" className="mobile-nav-link" onClick={toggleMenu}>Home</a>
                    <a href="/about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
                    <a href="/services" className="mobile-nav-link" onClick={toggleMenu}>Services</a>
                    <a href="/projects" className="mobile-nav-link" onClick={toggleMenu}>Projects</a>
                    <a href="/blog" className="mobile-nav-link" onClick={toggleMenu}>Blog</a>
                    <a href="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</a>
                    <a href="/contact" className="btn btn-primary" onClick={toggleMenu}>Get Free Quote</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
