import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-about">
                    <div className="footer-logo">
                        <a href="/" className="logo">
                            <div className="logo-icon">VC</div>
                            <span>VIGHNAHARTA CONSTRUCTIONS</span>
                        </a>
                    </div>
                    <p>Leading the way in premium construction across India. Building structures that stand the test of time with integrity and innovation.</p>
                    <div className="social-links">
                        <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/" className="footer-link">Home</a></li>
                        <li><a href="/about" className="footer-link">About Us</a></li>
                        <li><a href="/projects" className="footer-link">Projects</a></li>
                        <li><a href="/blog" className="footer-link">Latest Blog</a></li>
                        <li><a href="/contact" className="footer-link">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="footer-title">Our Services</h4>
                    <ul className="footer-links">
                        <li><a href="/services" className="footer-link">Residential</a></li>
                        <li><a href="/services" className="footer-link">Commercial</a></li>
                        <li><a href="/services" className="footer-link">Industrial</a></li>
                        <li><a href="/services" className="footer-link">Renovations</a></li>
                        <li><a href="/services" className="footer-link">Management</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="footer-title">Contact Info</h4>
                    <div className="footer-contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Uruli Devachi, Hadapsar, Pune, Maharashtra</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <span>+91 9011166108</span>
                    </div>
                    <div className="footer-contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>prathameshsalunke1234@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom">
                    <p>&copy; 2026 Vighnaharta Constructions. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
