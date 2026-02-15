import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Shield, CheckCircle, AlertTriangle, Navigation, Clock } from 'lucide-react';
import { useJourney } from '../context/JourneyContext';

const JourneyTracker = () => {
    const navigate = useNavigate();
    const { isJourneyActive, destination, timerRemaining, escalationLevel, confirmSafe, extendJourney, endJourney } = useJourney();

    if (!isJourneyActive) return null;

    const formatTime = (seconds) => {
        if (seconds < 0) return "00:00";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const getStatusColor = () => {
        if (escalationLevel === 0) return '#10b981'; // Green (Safe)
        if (escalationLevel === 1) return '#f59e0b'; // Orange (Warning/Check)
        return '#EF4444'; // Red (Alert)
    };

    const getStatusMessage = () => {
        if (escalationLevel === 0) return 'Journey Active';
        if (escalationLevel === 1) return 'Did you reach safely?';
        if (escalationLevel === 2) return 'Alerting Family...';
        return 'EMERGENCY ALERT SENT';
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    maxWidth: '400px',
                    backgroundColor: escalationLevel > 1 ? '#FEF2F2' : 'white',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    border: `2px solid ${getStatusColor()}`,
                    padding: '16px',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}
            >
                {/* Header Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            background: getStatusColor(),
                            padding: '10px',
                            borderRadius: '50%',
                            animation: escalationLevel > 0 ? 'pulse-danger 1s infinite' : 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {escalationLevel > 0 ? <AlertTriangle size={20} color="white" /> : <Navigation size={20} color="white" />}
                        </div>
                        <div>
                            <h4 style={{ margin: 0, color: 'var(--text-main)', fontSize: '1rem', fontWeight: 'bold' }}>
                                {getStatusMessage()}
                            </h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                To: <b>{destination}</b>
                            </span>
                        </div>
                    </div>

                    {/* Timer Display */}
                    <div style={{
                        textAlign: 'right'
                    }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                            {escalationLevel === 0 ? 'Arriving in' : 'Overdue by'}
                        </div>
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '1.4rem',
                            color: getStatusColor(),
                            fontVariantNumeric: 'tabular-nums',
                            lineHeight: 1
                        }}>
                            {formatTime(Math.abs(timerRemaining))}
                        </div>
                    </div>
                </div>

                {/* Body Content based on State */}
                {escalationLevel === 0 ? (
                    // Normal Journey State
                    <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                        <button
                            onClick={endJourney}
                            style={{
                                flex: 1,
                                padding: '12px',
                                background: '#F3F4F6',
                                color: 'var(--text-main)',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            End Journey
                        </button>
                    </div>
                ) : (
                    // Alert / Confirmation State
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {escalationLevel === 1 && (
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', textAlign: 'center', padding: '0 4px' }}>
                                Please confirm your safety. Alerts will depend on your response.
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={confirmSafe}
                                style={{
                                    flex: 2,
                                    padding: '12px',
                                    background: '#10b981',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                                }}
                            >
                                <CheckCircle size={18} /> Yes, I Reached
                            </button>
                            <button
                                onClick={() => extendJourney(5)}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: 'white',
                                    color: 'var(--text-main)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                +5 Mins
                            </button>
                        </div>
                        {escalationLevel > 1 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{
                                    background: '#FEF2F2',
                                    border: '1px solid #FECACA',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    fontSize: '0.8rem',
                                    color: '#B91C1C',
                                    textAlign: 'center',
                                    fontWeight: '500'
                                }}>
                                    {escalationLevel === 2 ? "Sending location to family..." : "EMERGENCY SERVICES NOTIFIED"}
                                </div>
                                <button
                                    onClick={() => navigate('/dashboard/guardian')}
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontSize: '0.85rem'
                                    }}
                                >
                                    👁️ Simulate Guardian View
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default JourneyTracker;
