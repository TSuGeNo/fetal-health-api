'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './FetalHeroSection.css';

export default function FetalHeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef < HTMLElement > (null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="fetal-hero" ref={heroRef}>
            {/* Grain Overlay */}
            <div className="grain-overlay" />

            {/* Glow Effects */}
            <div className="glow-effect glow-1" />
            <div className="glow-effect glow-2" />
            <div className="glow-effect glow-3" />

            {/* Background Brand Text */}
            <div className="bg-brand-text">
                <span className="bg-text-line">FETALCARE</span>
            </div>

            {/* Floating Product */}
            <div
                className="product-container"
                style={{
                    transform: `
                        perspective(1000px)
                        rotateY(${mousePosition.x * 8}deg) 
                        rotateX(${-mousePosition.y * 8}deg)
                        translateZ(50px)
                    `
                }}
            >
                <div className="product-shadow" />
                <Image
                    src="/fetal-health-device.png"
                    alt="FetalCare AI Smart Monitor"
                    width={500}
                    height={500}
                    className="product-image"
                    priority
                />
            </div>

            {/* Handwritten Neon Text */}
            <div className="neon-text-container">
                <span className="neon-text neon-left">Smart</span>
                <span className="neon-text neon-right">Care</span>
            </div>

            {/* Tagline */}
            <div className="tagline-container">
                <span className="tagline">Protecting every heartbeat.</span>
            </div>

            {/* Left Bottom Glass Panel */}
            <div className="glass-panel glass-left">
                <h3 className="panel-title">AI-POWERED MONITORING</h3>
                <p className="panel-description">
                    Advanced CTG analysis with 98% accuracy. Real-time fetal health predictions at your fingertips.
                </p>
            </div>

            {/* Right Bottom Glass Panel */}
            <div className="glass-panel glass-right">
                <h3 className="panel-title">START YOUR ANALYSIS</h3>
                <p className="panel-description">
                    Get instant fetal health predictions powered by machine learning technology.
                </p>
                <Link href="/predict" className="panel-link">
                    Try Health Check
                    <span className="link-arrow">→</span>
                </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">Scroll to explore</span>
                <div className="scroll-mouse">
                    <div className="scroll-dot" />
                </div>
            </div>
        </section>
    );
}
