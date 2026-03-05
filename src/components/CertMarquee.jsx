import React from 'react';

const CertMarquee = () => {
    const certs = [
        "RERA REGISTERED", "ISO 9001:2015", "GST REGISTERED", 
        "PWD EMPANELLED", "MSME CERTIFIED", "UDYAM REGISTERED"
    ];

    return (
        <div className="cert-marquee">
            <div className="cert-track">
                {certs.concat(certs).map((cert, index) => (
                    <div key={index} className="cert-card">
                        <i className="fas fa-check-circle"></i> 
                        <span>{cert}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertMarquee;