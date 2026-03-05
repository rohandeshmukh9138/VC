import React, { useState } from 'react';
import CompletedSites_1 from '../assets/CompletedSites_1.jpeg';
import CompletedSites_2 from '../assets/CompletedSites_2.jpeg';
import CompletedSites_3 from '../assets/CompletedSites_3.jpeg';
import CompletedSites_4 from '../assets/CompletedSites_4.jpeg';
import CompletedSites_5 from '../assets/CompletedSites_5.jpeg';
import CompletedSites_6 from '../assets/CompletedSites_6.jpeg';
import CompletedSites_7 from '../assets/CompletedSites_7.jpeg';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { 
            id: 1, 
            category: 'completed', 
            title: 'Residential Project', 
            loc: 'Pune, MH', 
            img: CompletedSites_1,
            description: 'Crafted with precision and quality materials, this multi-storey residential project stands as a testament to thoughtful design, durable construction, and attention to every detail.'
        },
        { 
            id: 2, 
            category: 'completed', 
            title: 'Gentry Bungalow', 
            loc: 'Mumbai, MH', 
            img: CompletedSites_2, 
            delay: '0.1s',
            description: 'A masterpiece of residential architecture, this elite residency in Mumbai features spacious living areas, bespoke interior design, and premium construction quality tailored for a luxury lifestyle.'
        },
        { 
            id: 3, 
            category: 'completed', 
            title: 'Commercial Development', 
            loc: 'Hadapsar, Pune', 
            img: CompletedSites_3, 
            delay: '0.2s',
            description: 'A modern commercial development project in Pune featuring versatile office spaces, retail outlets, and premium amenities designed for business excellence.'
        },
        { 
            id: 4, 
            category: 'completed', 
            title: 'Residential Project', 
            loc: 'Navi Mumbai', 
            img: CompletedSites_4, 
            delay: '0.3s',
            description: 'A premium residential bungalow in Navi Mumbai featuring modern architecture and high-quality construction. This project stands as a perfect blend of comfort, elegance, and durable design for modern families.'
        },
        { 
            id: 5, 
            category: 'completed', 
            title: 'Katraj Residency', 
            loc: 'Katraj, Pune', 
            img: CompletedSites_5, 
            delay: '0.4s',
            description: 'A high-end residential project located in Katraj. This development emphasizes structural integrity, modern aesthetics, and optimal space utilization.'
        },
        { 
            id: 6, 
            category: 'completed', 
            title: 'Skyview Residency', 
            loc: 'Wakad, Pune', 
            img: CompletedSites_6, 
            delay: '0.5s',
            description: 'An elegant multi-storey residential building in Wakad, offering modern living spaces with premium finishes and robust structural engineering.'
        },
        { 
            id: 7, 
            category: 'completed', 
            title: 'Sunrise Enclave', 
            loc: 'Kothrud, Pune', 
            img: CompletedSites_7, 
            delay: '0.6s',
            description: 'A premium housing enclave in Kothrud, featuring spacious apartments with modern amenities, designed for a high-quality lifestyle and long-term durability.'
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section id="portfolio">
                <div className="container">
                    <div className="text-center reveal">
                        <span className="section-label">PORTFOLIO</span>
                        <h2 className="section-title">Our Signature Projects</h2>
                        <span className="heading-accent"></span>
                    </div>
                    
                    <div className="portfolio-filters reveal">
                        <button className="filter-btn active">All Projects</button>
                    </div>

                    <div className="portfolio-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="project-card reveal" style={{ transitionDelay: project.delay }}>
                                <img src={project.img} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-loc"><i className="fas fa-map-marker-alt"></i> {project.loc}</div>
                                    <button 
                                        className="project-view-btn" 
                                        style={{ border: 'none', cursor: 'pointer' }}
                                        onClick={() => openModal(project)}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <div className="service-modal-overlay" onClick={closeModal} style={{ zIndex: 99999 }}>
                    <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            <img 
                                src={selectedProject.img} 
                                alt={selectedProject.title} 
                                style={{ width: '100%', borderRadius: '20px', marginBottom: '30px', maxHeight: '300px', objectFit: 'cover' }} 
                            />
                            <h2>{selectedProject.title}</h2>
                            <div className="modal-divider"></div>
                            <div style={{ color: 'var(--primary-saffron)', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <i className="fas fa-map-marker-alt"></i> {selectedProject.loc}
                            </div>
                            <p>{selectedProject.description}</p>
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

export default Portfolio;