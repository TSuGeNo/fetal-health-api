'use client';

import './sections.css';

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: 'Advanced CTG Analysis',
        description: 'Our AI analyzes 16 cardiotocography parameters including baseline value, accelerations, and fetal movement patterns.',
        accentColor: '#A855F7',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Instant Results',
        description: 'Get fetal health predictions in under a second with our optimized machine learning model and cloud infrastructure.',
        accentColor: '#06B6D4',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Medical-Grade Accuracy',
        description: 'Trained on extensive clinical datasets, achieving 98% accuracy in three-tier fetal health classification.',
        accentColor: '#10B981',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Cross-Platform Access',
        description: 'Access from any device — web browser, Android app, or integrate directly via our REST API.',
        accentColor: '#F59E0B',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Detailed Reports',
        description: 'Comprehensive health status reports with clear visual explanations and actionable recommendations.',
        accentColor: '#EC4899',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: 'Real-time Monitoring',
        description: 'Track fetal health trends over time for proactive and informed prenatal care management.',
        accentColor: '#8B5CF6',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="premium-section">
            {/* Background effects */}
            <div className="section-glow section-glow-left" />
            <div className="section-glow section-glow-right" />
            <div className="section-grain" />

            <div className="section-container">
                {/* Section header */}
                <div className="premium-section-header">
                    <span className="premium-label">
                        <span className="label-dot" />
                        Why Choose FetalCare
                    </span>
                    <h2 className="premium-title">
                        Powerful Features for{' '}
                        <span className="gradient-text-premium">Smarter Care</span>
                    </h2>
                    <p className="premium-description">
                        Combining cutting-edge machine learning with intuitive design
                        to deliver a comprehensive fetal health monitoring solution.
                    </p>
                </div>

                {/* Features grid */}
                <div className="features-grid-premium">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card-premium"
                            style={{ '--accent-color': feature.accentColor } as React.CSSProperties}
                        >
                            {/* Accent line */}
                            <div className="feature-accent-line" />

                            {/* Icon */}
                            <div className="feature-icon-premium">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="feature-title-premium">
                                {feature.title}
                            </h3>
                            <p className="feature-description-premium">
                                {feature.description}
                            </p>

                            {/* Hover glow */}
                            <div className="feature-hover-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
