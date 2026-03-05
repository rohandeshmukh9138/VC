import React, { useState } from 'react';

const Blog = () => {
    const posts = [
        { 
            title: "Top Construction Trends in India 2025", 
            category: "Industry Trends", 
            date: "Feb 20, 2025", 
            img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
            desc: "Exploring sustainable materials and automated technologies shaping the Indian construction landscape.",
            details: "Discover how modular construction, AI-driven project management, and eco-friendly materials are redefining the next wave of premium infrastructure across India."
        },
        { 
            title: "How to Choose the Right Builder", 
            category: "Guides", 
            date: "Feb 15, 2025", 
            img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop",
            desc: "Essential checklist for home buyers before signing a contract with a construction company.",
            details: "Evaluate credentials, inspect safety protocols, confirm RERA compliance, and review portfolio quality to select a builder who delivers on time and on budget." ,
            delay: "0.1s"
        },
        { 
            title: "Understanding RERA: A Guide", 
            category: "Legal", 
            date: "Feb 10, 2025", 
            img: "https://images.unsplash.com/photo-1582408921715-18e7824968c1?q=80&w=800&auto=format&fit=crop",
            desc: "Everything you need to know about RERA regulations and how they protect property owners.",
            details: "Learn how RERA safeguards buyers through escrowed funds, transparent timelines, and penalties for delays, ensuring accountability at every milestone.",
            delay: "0.2s"
        }
    ];

    const [activePost, setActivePost] = useState(null);

    const openPost = (post) => setActivePost(post);
    const closePost = () => setActivePost(null);

    return (
        <section id="blog">
            <div className="container">
                <div className="text-center reveal">
                    <span className="section-label">LATEST INSIGHTS</span>
                    <h2 className="section-title">Construction Blog</h2>
                    <span className="heading-accent"></span>
                </div>
                <div className="blog-grid">
                    {posts.map((post, i) => (
                        <article key={i} className="blog-card reveal" style={{ transitionDelay: post.delay }}>
                            <div className="blog-img-wrap">
                                <img src={post.img} alt={post.title} className="blog-img" />
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <button type="button" className="blog-link" onClick={() => openPost(post)}>Read More <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {activePost && (
                <div className="blog-modal" onClick={closePost}>
                    <div className="blog-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="blog-modal-header">
                            <span className="blog-modal-category">{activePost.category}</span>
                            <button type="button" className="blog-modal-close" aria-label="Close" onClick={closePost}>&times;</button>
                        </div>
                        <h3>{activePost.title}</h3>
                        <div className="blog-modal-meta">
                            <span>{activePost.date}</span>
                            <span>By Vighnaharta Insights</span>
                        </div>
                        <p className="blog-modal-body">{activePost.details || activePost.desc}</p>
                        <div className="blog-modal-actions">
                            <button type="button" className="btn btn-primary" onClick={closePost}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog;
