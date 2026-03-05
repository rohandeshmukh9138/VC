import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const infoItems = [
        { icon: "fas fa-map-marker-alt", title: "Our Address", content: "Uruli Devachi, Hadapsar,\nPune, Maharashtra" },
        { icon: "fas fa-phone-alt", title: "Phone Number", content: "+91 9011166108" },
        { icon: "fas fa-envelope", title: "Email Address", content: "prathameshsalunke1234@gmail.com" },
        { icon: "fas fa-clock", title: "Business Hours", content: "Monday - Sunday: 8:00 AM - 7:00 PM" }
    ];

    return (
        <section id="contact">
            <div className="container">
                <div className="text-center reveal">
                    <span className="section-label">CONTACT US</span>
                    <h2 className="section-title">Let's Discuss Your Project</h2>
                    <span className="heading-accent"></span>
                </div>
                <div className="contact-grid">
                    <div className="contact-form-wrap reveal">
                        <div className="form-icon">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <h3>Start Your Journey With Us</h3>
                        <p>
                            Click the button below to fill out our project inquiry form. Our team will review your requirements and get back to you within 24 hours.
                        </p>
                        <button 
                            onClick={() => window.Tally && window.Tally.openPopup('LZd44j', { 
                                layout: 'modal',
                                width: 800,
                                emoji: {
                                    text: "👋",
                                    animation: "wave"
                                },
                                onSuccess: (data) => {
                                    navigate('/thank-you');
                                },
                                hidePostSubmit: true
                            })}
                            className="btn btn-primary" 
                        >
                            Open Project Form <i className="fas fa-external-link-alt ml-2"></i>
                        </button>
                    </div>
                    <div className="contact-info-cards reveal">
                        {infoItems.map((item, i) => (
                            <div key={i} className="info-card">
                                <div className="info-card-icon"><i className={item.icon}></i></div>
                                <div className="info-card-content">
                                    <h4>{item.title}</h4>
                                    <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="map-wrapper reveal">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360341147!2d73.79292671628173!3d18.524603554832563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43105d951336!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;