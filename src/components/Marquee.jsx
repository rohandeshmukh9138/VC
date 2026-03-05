import React from 'react';

const Marquee = () => {
    const items = [
        "RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "INFRASTRUCTURE", 
        "RENOVATION", "INTERIOR DESIGN", "PROJECT MANAGEMENT"
    ];

    return (
        <div className="marquee">
            <div className="marquee-content">
                {items.concat(items).map((item, index) => (
                    <div key={index} className="marquee-item"><span>•</span> {item}</div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;