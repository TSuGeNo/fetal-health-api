'use client';

import './sections.css';

export default function AboutSection() {
    return (
        <section id="about" className="premium-section">
            {/* Background effects */}
            <div className="section-glow section-glow-center" />
            <div className="section-grain" />

            <div className="section-container">
                <div className="about-grid">
                    {/* Left side - Visual Dashboard */}
                    <div className="about-visual-container">
                        <div className="about-dashboard">
                            {/* Dashboard header */}
                            <div className="dashboard-header">
                                <div className="dashboard-dots">
                                    <span className="dot dot-red" />
                                    <span className="dot dot-yellow" />
                                    <span className="dot dot-green" />
                                </div>
                                <span className="dashboard-title">FetalCare Monitor</span>
                            </div>

                            {/* Heart rate visualization */}
                            <div className="dashboard-card">
                                <div className="card-header">
                                    <span className="card-label">Baseline Fetal Heart Rate</span>
                                    <span className="card-value">140 <small>bpm</small></span>
                                </div>
                                <svg viewBox="0 0 300 50" className="ecg-line">
                                    <defs>
                                        <linearGradient id="ecg-gradient-new" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#A855F7" />
                                            <stop offset="50%" stopColor="#06B6D4" />
                                            <stop offset="100%" stopColor="#10B981" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,25 L30,25 L35,25 L40,8 L45,42 L50,25 L80,25 L100,25 L105,10 L110,40 L115,25 L145,25 L175,25 L180,8 L185,42 L190,25 L220,25 L250,25 L255,10 L260,40 L265,25 L300,25"
                                        fill="none"
                                        stroke="url(#ecg-gradient-new)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        className="ecg-path"
                                    />
                                </svg>
                            </div>

                            {/* Parameter indicators */}
                            <div className="dashboard-stats-grid">
                                <div className="dashboard-stat">
                                    <span className="stat-label">Accelerations</span>
                                    <span className="stat-value stat-cyan">Normal</span>
                                    <div className="stat-bar">
                                        <div className="stat-bar-fill stat-bar-cyan" style={{ width: '75%' }} />
                                    </div>
                                </div>
                                <div className="dashboard-stat">
                                    <span className="stat-label">Variability</span>
                                    <span className="stat-value stat-green">Good</span>
                                    <div className="stat-bar">
                                        <div className="stat-bar-fill stat-bar-green" style={{ width: '85%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Status indicator */}
                            <div className="dashboard-status">
                                <div className="status-badge status-normal">
                                    <span className="status-dot" />
                                    <span>Fetal Health: Normal</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating heart element */}
                        <div className="floating-heart">
                            <svg className="heart-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="about-content">
                        <span className="premium-label">
                            <span className="label-dot" />
                            About FetalCare AI
                        </span>
                        <h2 className="premium-title text-left">
                            Advancing{' '}
                            <span className="gradient-text-premium">Prenatal Care</span>{' '}
                            Through AI
                        </h2>
                        <p className="about-text">
                            FetalCare AI leverages advanced machine learning algorithms to analyze
                            Cardiotocography (CTG) data, providing healthcare professionals with
                            accurate, real-time fetal health assessments. Our system evaluates 16
                            critical parameters to classify fetal health status.
                        </p>

                        {/* Key points */}
                        <div className="about-points">
                            {[
                                { text: 'CTG-based analysis with 16 health parameters', color: '#A855F7' },
                                { text: 'K-Nearest Neighbors (KNN) classification model', color: '#06B6D4' },
                                { text: 'Three-tier classification: Normal, Suspect, Pathological', color: '#10B981' },
                                { text: 'HIPAA-compliant secure data handling', color: '#EC4899' },
                            ].map((point, index) => (
                                <div key={index} className="about-point">
                                    <div
                                        className="point-dot"
                                        style={{ backgroundColor: point.color, boxShadow: `0 0 12px ${point.color}40` }}
                                    />
                                    <span>{point.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech stack badges */}
                        <div className="tech-badges">
                            {['Machine Learning', 'Python', 'Flask API', 'Next.js', 'KNN Model'].map((tech, index) => (
                                <span key={index} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
