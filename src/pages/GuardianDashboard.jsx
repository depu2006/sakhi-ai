import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Battery, Signal, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GuardianDashboard = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header style={{ marginBottom: '40px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', margin: '0 0 8px 0', color: 'var(--text-main)' }}>{t('guardianMain')}</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{t('tracking')}</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                <motion.div className="glass-panel" variants={itemVariants} style={{ height: '500px', position: 'relative', overflow: 'hidden', gridColumn: 'span 2', background: '#e2e8f0' }}>
                    {/* Mock Map Interface */}
                    <div style={{ width: '100%', height: '100%', background: '#f1f5f9', position: 'relative' }}>
                        {/* Map Grid Pattern */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                            opacity: 0.5
                        }}></div>

                        {/* Mock Streets */}
                        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
                            <path d="M0 200 Q 300 250 600 200 T 1200 250" stroke="#94a3b8" strokeWidth="12" fill="none" />
                            <path d="M400 0 Q 350 300 400 600" stroke="#94a3b8" strokeWidth="12" fill="none" />
                            <path d="M800 0 Q 850 300 800 600" stroke="#94a3b8" strokeWidth="12" fill="none" />

                            {/* Route */}
                            <path d="M400 220 L 420 220 L 450 250 L 500 250" stroke="var(--primary)" strokeWidth="4" fill="none" strokeDasharray="8 4" />
                            <circle cx="500" cy="250" r="8" fill="var(--primary)" />
                            <circle cx="500" cy="250" r="24" fill="var(--primary)" opacity="0.2">
                                <animate attributeName="r" from="24" to="48" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.2" to="0" dur="2s" repeatCount="indefinite" />
                            </circle>
                        </svg>

                        <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'white', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)', boxShadow: 'var(--shadow-sm)' }}>
                            <Globe size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                            {t('liveMap')}
                        </div>
                    </div>

                    {/* Floating Ward Card */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel"
                        style={{ position: 'absolute', bottom: '24px', left: '24px', padding: '24px', background: 'white', minWidth: '300px', boxShadow: 'var(--shadow-md)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)' }}>Priya Sharma</h3>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: '500' }}>● {t('safe')}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', alignItems: 'center' }}>
                                <Battery size={18} /> <span style={{ fontSize: '0.9rem' }}>85%</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="btn-primary" style={{ flex: 1, padding: '10px', fontSize: '0.95rem', background: 'var(--text-main)' }}>Track</button>
                            <button className="glass-panel" style={{ padding: '10px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} color="var(--text-main)" /></button>
                        </div>
                    </motion.div>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <motion.div className="glass-panel" variants={itemVariants} style={{ padding: '30px', flex: 1 }}>
                        <h3 style={{ margin: '0 0 24px 0', fontSize: '1.25rem', color: 'var(--text-main)' }}>{t('recentAlerts')}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <AlertItem time="10:30 AM" message={t('arrived')} type="safe" />
                            <AlertItem time="Yesterday" message={t('sosTest')} type="warning" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const AlertItem = ({ time, message, type }) => (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', marginTop: '6px', background: type === 'safe' ? 'var(--success)' : 'var(--warning)' }}></div>
        <div>
            <p style={{ margin: '0 0 4px 0', fontSize: '1rem', color: 'var(--text-main)', fontWeight: '500' }}>{message}</p>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{time}</span>
        </div>
    </div>
);

export default GuardianDashboard;
