'use client';

import Link from 'next/link';
import './sections.css';

const steps = [
    {
        number: '01',
        title: 'Input CTG Data',
        description: 'Enter the 16 cardiotocography parameters from the fetal monitoring device. Our intuitive form guides you through each measurement.',
        icon: (
            <svg className="w-8 h-8 mt-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        color: '#A855F7',
    },
    {
        number: '02',
        title: 'AI Analysis',
        description: 'Our KNN machine learning model processes the data, analyzing patterns across baseline values, variability, and histogram features.',
        icon: (
            <svg className="w-8 h-8 mt-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: '#06B6D4',
    },
    {
        number: '03',
        title: 'Get Results',
        description: 'Receive instant classification: Normal, Suspect, or Pathological, along with detailed explanations and recommended next steps.',
        icon: (
            <svg className="w-8 h-8 mt-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: '#10B981',
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="premium-section">
            {/* Background effects */}
            <div className="section-glow section-glow-left" />
            <div className="section-glow section-glow-right" />
            <div className="section-grain" />

            <div className="section-container">
                {/* Section header */}
                <div className="premium-section-header">
                    <span className="premium-label">
                        <span className="label-dot" />
                        Simple Process
                    </span>
                    <h2 className="premium-title">
                        How{' '}
                        <span className="gradient-text-premium">It Works</span>
                    </h2>
                    <p className="premium-description">
                        Three simple steps to get accurate fetal health predictions.
                        Our streamlined process makes advanced AI accessible to everyone.
                    </p>
                </div>

                {/* Steps */}
                <div className="steps-container">
                    {/* Connection line - desktop */}
                    <div className="steps-connection-line" />

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="step-card-wrapper"
                                style={{ '--step-color': step.color } as React.CSSProperties}
                            >
                                {/* Step number badge - outside card to avoid overflow clipping */}
                                <div className="step-number-badge">
                                    <span>{step.number}</span>
                                </div>

                                {/* Step card */}
                                <div className="step-card">
                                    {/* Icon */}
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">
                                        {step.description}
                                    </p>

                                    {/* Hover glow */}
                                    <div className="step-hover-glow" />
                                </div>

                                {/* Arrow for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="step-arrow-mobile">
                                        <svg
                                            className="arrow-icon"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="cta-container">
                    <Link href="/predict" className="cta-button">
                        <span>Try It Now</span>
                        <svg className="cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <p className="cta-subtext">No account required • Free to use</p>
                </div>
            </div>
        </section>
    );
}
