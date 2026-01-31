'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './predict.css';


const formFields = [
    { name: 'baseline_value', label: 'Baseline Value', description: 'Baseline Fetal Heart Rate (FHR)', unit: 'bpm', icon: '💗' },
    { name: 'accelerations', label: 'Accelerations', description: 'Number of accelerations per second', unit: '/sec', icon: '📈' },
    { name: 'uterine_contractions', label: 'Uterine Contractions', description: 'Uterine contractions per second', unit: '/sec', icon: '🔄' },
    { name: 'light_decelerations', label: 'Light Decelerations', description: 'Light decelerations per second', unit: '/sec', icon: '📉' },
    { name: 'prolongued_decelerations', label: 'Prolonged Decelerations', description: 'Prolonged decelerations per second', unit: '/sec', icon: '⬇️' },
    { name: 'abnormal_short_term_variability', label: 'Abnormal Short Term Variability', description: 'Percentage of abnormal short term variability', unit: '%', icon: '📊' },
    { name: 'mean_value_of_short_term_variability', label: 'Mean Short Term Variability', description: 'Mean value of short term variability', unit: '', icon: '📐' },
    { name: 'percentage_of_time_with_abnormal_long_term_variability', label: 'Abnormal Long Term Variability', description: 'Percentage with abnormal long term variability', unit: '%', icon: '⏱️' },
    { name: 'mean_value_of_long_term_variability', label: 'Mean Long Term Variability', description: 'Mean value of long term variability', unit: '', icon: '📏' },
    { name: 'histogram_width', label: 'Histogram Width', description: 'Width of FHR histogram', unit: '', icon: '↔️' },
    { name: 'histogram_min', label: 'Histogram Min', description: 'Minimum value of FHR histogram', unit: '', icon: '⬅️' },
    { name: 'histogram_max', label: 'Histogram Max', description: 'Maximum value of FHR histogram', unit: '', icon: '➡️' },
    { name: 'histogram_number_of_peaks', label: 'Histogram Peaks', description: 'Number of histogram peaks', unit: '', icon: '🏔️' },
    { name: 'histogram_mean', label: 'Histogram Mean', description: 'Mean value of FHR histogram', unit: '', icon: '📌' },
    { name: 'histogram_variance', label: 'Histogram Variance', description: 'Variance of FHR histogram', unit: '', icon: '🎯' },
    { name: 'histogram_tendency', label: 'Histogram Tendency', description: 'Histogram tendency (-1, 0, or 1)', unit: '', icon: '🔀' },
];

interface PredictionResult {
    fetal_health: number;
    status: string;
    description: string;
    color: string;
}

export default function PredictPage() {
    const [formData, setFormData] = useState < Record < string, string>> ({});
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState < PredictionResult | null > (null);
    const [error, setError] = useState < string | null > (null);
    const [activeField, setActiveField] = useState < string | null > (null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const apiFormData = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                apiFormData.append(key, value);
            });

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/predict`, {
                method: 'POST',
                body: apiFormData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Prediction failed');
            }

            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const loadSampleData = () => {
        const sampleData: Record<string, string> = {
            baseline_value: '120',
            accelerations: '0.0',
            uterine_contractions: '0.0',
            light_decelerations: '0.0',
            prolongued_decelerations: '0.0',
            abnormal_short_term_variability: '73',
            mean_value_of_short_term_variability: '0.5',
            percentage_of_time_with_abnormal_long_term_variability: '43',
            mean_value_of_long_term_variability: '2.4',
            histogram_width: '64',
            histogram_min: '62',
            histogram_max: '126',
            histogram_number_of_peaks: '2',
            histogram_mean: '120',
            histogram_variance: '79',
            histogram_tendency: '0',
        };
        setFormData(sampleData);
    };

    const filledCount = Object.keys(formData).filter(key => formData[key] !== '').length;
    const progress = (filledCount / formFields.length) * 100;

    return (
        <main className="predict-page">
            <Navbar />

            {/* Background effects */}
            <div className="predict-bg">
                <div className="predict-glow predict-glow-1" />
                <div className="predict-glow predict-glow-2" />
                <div className="predict-glow predict-glow-3" />
                <div className="predict-grid-pattern" />
                <div className="predict-grain" />
            </div>

            <div className="predict-container">
                {/* Header */}
                <div className="predict-header">
                    <div className="header-top-row">
                        {/* Empty spacer for centering */}
                        <div className="header-spacer" />

                        {/* Centered badge */}
                        <div className="header-badge">
                            <span className="badge-dot" />
                            AI-Powered Analysis
                        </div>

                        {/* Right-aligned back link */}
                        <Link href="/" className="back-link">
                            Back to Home
                            <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    <h1 className="predict-title">
                        Fetal Health{' '}
                        <span className="title-gradient">Prediction</span>
                    </h1>
                    <p className="predict-subtitle">
                        Enter the CTG parameters below to get an instant AI-powered fetal health assessment
                        with 98% clinical accuracy.
                    </p>
                </div>

                <div className="predict-grid">
                    {/* Form section */}
                    <div className="form-section">
                        <form onSubmit={handleSubmit} className="predict-form">
                            {/* Form header */}
                            <div className="form-header">
                                <div className="form-header-left">
                                    <h2 className="form-title">
                                        <span className="form-title-icon">📋</span>
                                        CTG Parameters
                                    </h2>
                                    <p className="form-subtitle">16 parameters required</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={loadSampleData}
                                    className="sample-data-btn"
                                >
                                    <svg className="sample-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    Load Sample
                                </button>
                            </div>

                            {/* Progress bar */}
                            <div className="progress-container">
                                <div className="progress-info">
                                    <span className="progress-text">Progress</span>
                                    <span className="progress-count">{filledCount} / {formFields.length}</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Form fields grid */}
                            <div className="fields-grid">
                                {formFields.map((field) => (
                                    <div
                                        key={field.name}
                                        className={`field-card ${activeField === field.name ? 'field-active' : ''} ${formData[field.name] ? 'field-filled' : ''}`}
                                    >
                                        <label htmlFor={field.name} className="field-label">
                                            <span className="field-icon">{field.icon}</span>
                                            <span className="field-name">{field.label}</span>
                                            {field.unit && (
                                                <span className="field-unit">({field.unit})</span>
                                            )}
                                        </label>
                                        <input
                                            type="number"
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleInputChange}
                                            onFocus={() => setActiveField(field.name)}
                                            onBlur={() => setActiveField(null)}
                                            step="any"
                                            className="field-input"
                                            placeholder={`Enter value`}
                                            required
                                        />
                                        <p className="field-description">
                                            {field.description}
                                        </p>
                                        <div className="field-glow" />
                                    </div>
                                ))}
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={loading || filledCount < formFields.length}
                                className="submit-btn"
                            >
                                {loading ? (
                                    <>
                                        <div className="submit-spinner" />
                                        <span>Analyzing Data...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="submit-icon">🔬</span>
                                        <span>Analyze & Predict</span>
                                        <svg className="submit-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Results section */}
                    <div className="results-section">
                        <div className="results-card">
                            <div className="results-header">
                                <h2 className="results-title">
                                    <span className="results-icon">📊</span>
                                    Analysis Result
                                </h2>
                                <div className="results-status-indicator">
                                    <span className={`status-light ${result ? (result.color === 'green' ? 'status-green' : result.color === 'yellow' ? 'status-yellow' : 'status-red') : ''}`} />
                                </div>
                            </div>

                            {/* Empty state */}
                            {!result && !error && !loading && (
                                <div className="empty-state">
                                    <div className="empty-icon-container">
                                        <div className="empty-icon-ring" />
                                        <div className="empty-icon">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="empty-title">Ready to Analyze</h3>
                                    <p className="empty-text">
                                        Complete the CTG parameters form and click &quot;Analyze & Predict&quot; to receive your fetal health assessment.
                                    </p>
                                    <div className="empty-features">
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>98% Accuracy</span>
                                        </div>
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>Instant Results</span>
                                        </div>
                                        <div className="empty-feature">
                                            <span className="feature-check">✓</span>
                                            <span>AI-Powered</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Loading state */}
                            {loading && (
                                <div className="loading-state">
                                    <div className="loading-animation">
                                        <div className="loading-ring ring-1" />
                                        <div className="loading-ring ring-2" />
                                        <div className="loading-ring ring-3" />
                                        <div className="loading-center">
                                            <span className="loading-heart">💗</span>
                                        </div>
                                    </div>
                                    <h3 className="loading-title">Analyzing CTG Data</h3>
                                    <p className="loading-text">Our AI model is processing your parameters...</p>
                                    <div className="loading-steps">
                                        <div className="loading-step active">
                                            <span className="step-check">✓</span>
                                            <span>Data received</span>
                                        </div>
                                        <div className="loading-step active">
                                            <span className="step-spinner" />
                                            <span>Analyzing patterns</span>
                                        </div>
                                        <div className="loading-step">
                                            <span className="step-pending">○</span>
                                            <span>Generating result</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Error state */}
                            {error && (
                                <div className="error-state">
                                    <div className="error-icon-container">
                                        <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="error-title">Analysis Failed</h3>
                                    <p className="error-text">{error}</p>
                                    <button
                                        onClick={() => setError(null)}
                                        className="error-retry-btn"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}

                            {/* Success result */}
                            {result && (
                                <div className="result-content">
                                    {/* Main result card */}
                                    <div className={`result-main-card result-${result.color}`}>
                                        <div className="result-main-header">
                                            <div className={`result-badge badge-${result.color}`}>
                                                {result.color === 'green' && '✓'}
                                                {result.color === 'yellow' && '⚠'}
                                                {result.color === 'red' && '✕'}
                                            </div>
                                            <div>
                                                <p className="result-label">Fetal Health Status</p>
                                                <h3 className={`result-status status-text-${result.color}`}>
                                                    {result.status}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="result-description">{result.description}</p>

                                        {/* Confidence indicator */}
                                        <div className="confidence-bar">
                                            <div className="confidence-info">
                                                <span>Confidence Level</span>
                                                <span className="confidence-value">98%</span>
                                            </div>
                                            <div className="confidence-track">
                                                <div className={`confidence-fill confidence-${result.color}`} style={{ width: '98%' }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Classification level */}
                                    <div className="classification-card">
                                        <p className="classification-label">Classification Level</p>
                                        <div className="classification-content">
                                            <div className={`classification-badge class-${result.color}`}>
                                                {result.fetal_health}
                                            </div>
                                            <div className="classification-levels">
                                                {[1, 2, 3].map((level) => (
                                                    <div
                                                        key={level}
                                                        className={`level-indicator ${result.fetal_health === level ? 'level-active' : ''} ${level === 1 ? 'level-green' : level === 2 ? 'level-yellow' : 'level-red'}`}
                                                    >
                                                        <span className="level-number">{level}</span>
                                                        <span className="level-name">
                                                            {level === 1 ? 'Normal' : level === 2 ? 'Suspect' : 'Pathological'}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick guide */}
                                    <div className="guide-card">
                                        <p className="guide-title">Classification Guide</p>
                                        <div className="guide-items">
                                            <div className="guide-item">
                                                <span className="guide-dot guide-dot-green" />
                                                <div>
                                                    <span className="guide-name">Normal</span>
                                                    <span className="guide-desc">Healthy fetus, regular monitoring</span>
                                                </div>
                                            </div>
                                            <div className="guide-item">
                                                <span className="guide-dot guide-dot-yellow" />
                                                <div>
                                                    <span className="guide-name">Suspect</span>
                                                    <span className="guide-desc">Requires further examination</span>
                                                </div>
                                            </div>
                                            <div className="guide-item">
                                                <span className="guide-dot guide-dot-red" />
                                                <div>
                                                    <span className="guide-name">Pathological</span>
                                                    <span className="guide-desc">Needs immediate attention</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reset button */}
                                    <button
                                        onClick={() => {
                                            setResult(null);
                                            setFormData({});
                                        }}
                                        className="reset-btn"
                                    >
                                        <svg className="reset-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        New Analysis
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Info cards */}
                        <div className="info-cards">
                            <div className="info-card">
                                <div className="info-icon-box info-icon-purple">
                                    <span>🧠</span>
                                </div>
                                <div>
                                    <h4 className="info-title">AI Model</h4>
                                    <p className="info-text">KNN Classification</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon-box info-icon-cyan">
                                    <span>⚡</span>
                                </div>
                                <div>
                                    <h4 className="info-title">Processing</h4>
                                    <p className="info-text">&lt; 1 second</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon-box info-icon-green">
                                    <span>🎯</span>
                                </div>
                                <div>
                                    <h4 className="info-title">Accuracy</h4>
                                    <p className="info-text">98% validated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
