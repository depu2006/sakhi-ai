import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Battery, Signal, Phone, Globe, AlertCircle, Clock, MapIcon, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GuardianDashboard = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header Section */}
            <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', margin: '0 0 8px 0', color: 'var(--text-main)' }}>
                    {t('guardianMain')} 👁️
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
                    {t('tracking')} - Real-time safety monitoring
                </p>
            </motion.div>

            {/* Live Tracking Status */}
            <motion.div
                variants={itemVariants}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px',
                    marginBottom: '32px'
                }}
            >
                <StatusCard icon={<Shield size={24} />} label="Safety Status" value="Safe" color="#10b981" />
                <StatusCard icon={<Signal size={24} />} label="Signal" value="Strong" color="#6366f1" />
                <StatusCard icon={<Battery size={24} />} label="Battery" value="85%" color="#f59e0b" />
                <StatusCard icon={<Clock size={24} />} label="Last Update" value="2 min" color="#ec4899" />
            </motion.div>

            {/* Main Map and Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
                {/* Enhanced Map Card */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        gridColumn: 'span 1',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                        background: 'white',
                        height: '500px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Map Container */}
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #f5f3ff 100%)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Enhanced Map Background */}
                        <svg style={{ width: '100%', height: '100%', position: 'absolute' }} viewBox="0 0 800 500">
                            {/* Map Grid */}
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.3" />
                                </pattern>
                            </defs>
                            <rect width="800" height="500" fill="url(#grid)" />
                            
                            {/* Streets/Roads */}
                            <path d="M0 200 Q 200 180 400 200 T 800 200" stroke="#94a3b8" strokeWidth="16" fill="none" strokeLinecap="round" />
                            <path d="M250 0 Q 280 200 250 500" stroke="#94a3b8" strokeWidth="12" fill="none" strokeLinecap="round" />
                            <path d="M550 0 Q 550 250 550 500" stroke="#94a3b8" strokeWidth="12" fill="none" strokeLinecap="round" />
                            
                            {/* Route Path - animated */}
                            <path d="M300 200 L 350 180 L 400 200 L 450 190 L 500 210" stroke="#6366f1" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1000" strokeDashoffset="1000" opacity="0.8">
                                <animate attributeName="strokeDashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
                            </path>
                            
                            {/* Current Location Indicator */}
                            <circle cx="500" cy="210" r="10" fill="#ec4899" />
                            <circle cx="500" cy="210" r="20" fill="#ec4899" opacity="0.3">
                                <animate attributeName="r" from="20" to="40" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                            </circle>
                            
                            {/* Past locations */}
                            <circle cx="300" cy="200" r="4" fill="#64748b" opacity="0.6" />
                            <circle cx="350" cy="180" r="4" fill="#64748b" opacity="0.7" />
                            <circle cx="400" cy="200" r="4" fill="#64748b" opacity="0.8" />
                            <circle cx="450" cy="190" r="4" fill="#64748b" opacity="0.9" />
                        </svg>

                        {/* Map Controls */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(10px)',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.1)',
                                fontSize: '0.85rem',
                                color: 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontWeight: '600',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                            }}
                        >
                            <div style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#10b981',
                                animation: 'pulse 2s infinite'
                            }} />
                            {t('liveMap')}
                        </motion.div>
                    </div>

                    {/* Mini Profile Card in Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        style={{
                            padding: '20px',
                            background: 'white',
                            borderTop: '1px solid var(--border-color)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: '700'
                            }}>
                                PS
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontWeight: '700', color: 'var(--text-main)' }}>Priya Sharma</h4>
                                <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>● {t('safe')}</span>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '8px 16px',
                                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
                            }}
                        >
                            <Phone size={16} /> Call
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Details Panel */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Quick Actions */}
                    <motion.div variants={itemVariants} style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                        color: 'white',
                        padding: '24px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(249, 115, 22, 0.2)'
                    }}>
                        <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: '700' }}>
                            <MapIcon size={20} /> Quick Actions
                        </h3>
                        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                            <motion.button whileHover={{ scale: 1.02 }} style={{
                                padding: '12px 16px',
                                background: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s'
                            }}>
                                📍 Start Tracking
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.02 }} style={{
                                padding: '12px 16px',
                                background: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.3)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s'
                            }}>
                                📞 Send Alert
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: 'white',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                    >
                        <h3 style={{ margin: '0 0 20px 0', fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>
                            Recent Activity
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <AlertItemEnhanced time="Just now" message="Arrived at work office" type="safe" icon="✅" />
                            <AlertItemEnhanced time="1 hour ago" message="Left home for office" type="safe" icon="🚗" />
                            <AlertItemEnhanced time="Yesterday 6:30 PM" message="SOS test triggered" type="warning" icon="⚠️" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const StatusCard = ({ icon, label, value, color }) => (
    <motion.div
        whileHover={{ y: -4, scale: 1.05 }}
        style={{
            background: 'white',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}
    >
        <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: `${color}20`,
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px'
        }}>
            {icon}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: '500' }}>
            {label}
        </div>
        <div style={{ fontSize: '1.4rem', fontWeight: '700', color: color }}>
            {value}
        </div>
    </motion.div>
);

const AlertItemEnhanced = ({ time, message, type, icon }) => (
    <motion.div
        whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.03)', paddingLeft: '16px' }}
        style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '12px 12px',
            borderRadius: '12px',
            borderLeft: `3px solid ${type === 'safe' ? '#10b981' : '#f59e0b'}`,
            transition: 'all 0.3s ease'
        }}
    >
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>
                {message}
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{time}</span>
        </div>
    </motion.div>
);

export default GuardianDashboard;
