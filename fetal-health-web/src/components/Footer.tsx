'use client';

import Link from 'next/link';
import './sections.css';

export default function Footer() {
    return (
        <footer className="premium-footer">
            {/* Background effects */}
            <div className="footer-glow footer-glow-left" />
            <div className="footer-glow footer-glow-right" />
            <div className="section-grain" />

            <div className="section-container">
                {/* Footer content */}
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <div className="footer-logo-icon">
                                <span className="footer-heart">♥</span>
                            </div>
                            <span className="footer-logo-text">FetalCare AI</span>
                        </Link>
                        <p className="footer-brand-description">
                            Advanced AI-powered fetal health monitoring using cardiotocography data.
                            Helping healthcare providers make informed decisions.
                        </p>
                        {/* Social links */}
                        <div className="footer-social">
                            {[
                                { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'Twitter' },
                                { icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22', label: 'GitHub' },
                                { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z', label: 'LinkedIn' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="footer-social-link"
                                    aria-label={social.label}
                                >
                                    <svg className="social-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-column">
                        <h3 className="footer-column-title">Quick Links</h3>
                        <ul className="footer-links">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Features', href: '/#features' },
                                { label: 'About', href: '/#about' },
                                { label: 'Prediction', href: '/predict' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="footer-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-links-column">
                        <h3 className="footer-column-title">Resources</h3>
                        <ul className="footer-links">
                            {['API Documentation', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="footer-link">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Copyright */}
                <div className="footer-copyright">
                    <p>© 2024 FetalCare AI. All rights reserved.</p>
                    <p className="footer-made-with">
                        Made with{' '}
                        <span className="footer-heart-small">♥</span>
                        {' '}for better prenatal care
                    </p>
                </div>
            </div>
        </footer>
    );
}
