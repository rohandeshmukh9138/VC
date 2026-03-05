import React from 'react';

const Process = () => {
    const steps = [
        { num: "01", title: "Consultation", desc: "Understanding your vision and project requirements in detail." },
        { num: "02", title: "Planning", desc: "Site surveys, architectural planning, and structural design." },
        { num: "03", title: "Design", desc: "3D visualizations, material selection, and final approvals." },
        { num: "04", title: "Construction", desc: "Execution with precision, safety, and continuous monitoring." },
        { num: "05", title: "Handover", desc: "Final quality check and smooth handover of the project." }
    ];

    return (
        <section id="process">
            <div className="container">
                <div className="text-center reveal">
                    <span className="section-label">OUR PROCESS</span>
                    <h2 className="section-title">How We Work</h2>
                    <span className="heading-accent"></span>
                </div>
                <div className="process-timeline reveal">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.num}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;