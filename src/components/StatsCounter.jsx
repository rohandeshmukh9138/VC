import React from 'react';

const StatsCounter = () => {
    const stats = [
        { icon: "fas fa-briefcase", target: 10, label: "PROJECTS COMPLETED" },
        { icon: "fas fa-award", target: 4, label: "YEARS EXPERIENCE", delay: "0.1s" },
        { icon: "fas fa-smile", target: 100, label: "HAPPY CLIENTS", delay: "0.2s" },
        { icon: "fas fa-globe-asia", target: 10, label: "CITIES COVERED", delay: "0.3s" }
    ];

    return (
        <section id="stats-counter">
            <div className="container stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item reveal" style={{ transitionDelay: stat.delay }}>
                        <i className={stat.icon}></i>
                        <div className="stat-number" data-target={stat.target}>0</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;