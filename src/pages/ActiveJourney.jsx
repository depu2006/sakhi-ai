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
                border: '1px solid var(--border-color)',
                background: '#1e293b' // Dark mode for focus
            }}
        >
            {/* Map Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.8 }}>
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="grid-dark" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#0f172a" />
                    <rect width="100%" height="100%" fill="url(#grid-dark)" />
                    {/* Route Line */}
                    <path d="M100 500 Q 400 300 700 100" stroke="#6366f1" strokeWidth="6" fill="none" strokeDasharray="10 5" />
                </svg>
            </div>

            {/* Status Header */}
            <div style={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ padding: '8px 16px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderRadius: '20px', fontWeight: 'bold', backdropFilter: 'blur(5px)', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                        Active Journey
                    </div>
                    <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>To: {destination}</div>
                </div>
            </div>

            {/* Central Info */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 20, textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                    {Math.floor(timerRemaining / 60)}:{(timerRemaining % 60).toString().padStart(2, '0')}
                </div>
                <div style={{ opacity: 0.7 }}>Estimated Arrival</div>
            </div>

            {/* Central Controls */}
            <div style={{ position: 'absolute', bottom: 40, left: 20, right: 20, zIndex: 20, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <div style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '2rem', margin: '0 0 8px' }}>On the Move</h2>
                    <p style={{ opacity: 0.7, margin: 0 }}>You are being monitored. Keep moving.</p>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Full controls available in tracker 👇</p>
            </div>
        </motion.div>
    );
};

export default ActiveJourney;
