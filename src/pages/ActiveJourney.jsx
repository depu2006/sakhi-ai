import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useJourney } from '../context/JourneyContext';
import { useNavigate } from 'react-router-dom';

const ActiveJourney = () => {
    const { isJourneyActive, destination, timerRemaining } = useJourney();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isJourneyActive) {
            navigate('/dashboard');
        }
    }, [isJourneyActive, navigate]);

    if (!isJourneyActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                height: 'calc(100vh - 80px)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '20px',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
                boxShadow: '0 0 50px rgba(99, 102, 241, 0.15) inset'
            }}
        >
            {/* Map Background with Pulse Effect */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.6 }}>
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" />
                        </pattern>
                        <radialGradient id="pulse-grad" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="#0f172a" />
                    <rect width="100%" height="100%" fill="url(#grid-dark)" />

                    {/* Radar Scan Animation */}
                    <circle cx="400" cy="300" r="0" fill="url(#pulse-grad)">
                        <animate attributeName="r" from="0" to="500" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="400" cy="300" r="0" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3">
                        <animate attributeName="r" from="0" to="500" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="4s" repeatCount="indefinite" />
                    </circle>

                    {/* Route Line */}
                    <path d="M100 500 Q 400 300 700 100" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="10 5" opacity="0.6" />
                </svg>
            </div>

            {/* Status Header */}
            <div style={{ position: 'absolute', top: 24, left: 24, right: 24, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <motion.div
                        animate={{ boxShadow: ['0 0 0px #10b981', '0 0 15px #10b981', '0 0 0px #10b981'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ padding: '8px 16px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '20px', fontWeight: 'bold', backdropFilter: 'blur(5px)', border: '1px solid rgba(52, 211, 153, 0.3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%' }} />
                        Active Journey
                    </motion.div>
                    <div style={{ fontSize: '1rem', opacity: 0.9, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>To: <b>{destination}</b></div>
                </div>
            </div>

            {/* Central Info - Glowing Timer */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, textAlign: 'center', color: 'white' }}>
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                    style={{
                        fontSize: '5rem',
                        fontWeight: 'bold',
                        fontFamily: "'Courier New', monospace",
                        textShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.4)',
                        letterSpacing: '4px'
                    }}>
                    {Math.floor(timerRemaining / 60)}:{(timerRemaining % 60).toString().padStart(2, '0')}
                </motion.div>
                <div style={{ opacity: 0.8, fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '8px' }}>Estimated Arrival</div>

                {/* Visual Pulse Ring around timer */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '300px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }} />
            </div>

            {/* Central Controls */}
            <div style={{ position: 'absolute', bottom: 40, left: 20, right: 20, zIndex: 20, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{ color: 'white', textAlign: 'center', marginBottom: '20px', background: 'rgba(0,0,0,0.3)', padding: '16px 24px', borderRadius: '16px', backdropFilter: 'blur(4px)' }}>
                    <h2 style={{ fontSize: '1.5rem', margin: '0 0 4px', fontWeight: '600' }}>🛡️ On the Move</h2>
                    <p style={{ opacity: 0.8, margin: 0, fontSize: '0.95rem' }}>Live tracking enabled. We are watching over you.</p>
                </motion.div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full controls available in tracker 👇</p>
            </div>
        </motion.div>
    );
};

export default ActiveJourney;
