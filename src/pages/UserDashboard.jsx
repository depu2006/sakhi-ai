import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, User as UserIcon, TrendingUp, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useJourney } from '../context/JourneyContext';

const UserDashboard = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const { startJourney, isJourneyActive, destination: activeDestination } = useJourney();
    const [showJourneyModal, setShowJourneyModal] = React.useState(false);
    const [destination, setDestination] = React.useState("");
    const [time, setTime] = React.useState("5");
    const [availableContacts, setAvailableContacts] = React.useState([]);
    const [selectedContacts, setSelectedContacts] = React.useState([]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    React.useEffect(() => {
        const saved = localStorage.getItem('emergencyContacts');
        if (saved) setAvailableContacts(JSON.parse(saved));
    }, [showJourneyModal]); // Refresh when modal opens

    const toggleContactSelection = (id) => {
        if (selectedContacts.includes(id)) {
            setSelectedContacts(selectedContacts.filter(cid => cid !== id));
        } else {
            setSelectedContacts([...selectedContacts, id]);
        }
    };

    const handleStartJourney = () => {
        if (destination) {
            const contactsToNotify = availableContacts.filter(c => selectedContacts.includes(c.id));
            startJourney(destination, parseInt(time), contactsToNotify);
            setShowJourneyModal(false);
            setDestination("");
            setSelectedContacts([]);
            navigate('/dashboard/journey');
        }
    };



    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Welcome Section with Gradient */}
            <motion.div
                variants={itemVariants}
                style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    color: 'white',
                    padding: '48px 32px',
                    borderRadius: '20px',
                    marginBottom: '48px',
                    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Animated background elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    animation: 'pulse-glow 8s infinite alternate'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-100px',
                    left: '-100px',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    animation: 'pulse-glow 10s infinite alternate 1s'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', margin: '0 0 12px 0', fontWeight: '700' }}>
                        Welcome Back! 👋
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.95, margin: 0, lineHeight: '1.6' }}>
                        You're all set to stay safe and empowered. Access your tools below to track, learn, and grow.
                    </p>
                    <button
                        onClick={() => setShowJourneyModal(true)}
                        style={{
                            marginTop: '24px',
                            background: 'white',
                            color: 'var(--primary)',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            border: 'none',
                            fontWeight: '700',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Shield size={20} /> Start Safe Journey
                    </button>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
                variants={itemVariants}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px',
                    marginBottom: '48px'
                }}
            >
                <StatCard icon={<Shield size={24} />} label="Safety Status" value="Secure" color="#10b981" />
                <StatCard icon={<Heart size={24} />} label="Health Check" value="Good" color="#ec4899" />
                <StatCard icon={<TrendingUp size={24} />} label="Progress" value="Up 24%" color="#f59e0b" />
            </motion.div>

            {/* Main Feature Cards */}
            <motion.div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '28px'
                }}
            >
                <QuickAction
                    icon={<Zap size={32} />}
                    title={t('empowerment')}
                    description="Build skills, start business, grow financially"
                    gradient="linear-gradient(135deg, #fbbf24 0%, #f97316 100%)"
                    delay={0.1}
                    onClick={() => navigate('/dashboard/empowerment')}
                />
                <QuickAction
                    icon={<Eye size={32} />}
                    title={t('guardian')}
                    description="Get real-time tracking and peace of mind"
                    gradient="linear-gradient(135deg, #ec4899 0%, #d946ef 100%)"
                    delay={0.2}
                    onClick={() => navigate('/dashboard/guardian')}
                />
                <QuickAction
                    icon={<UserIcon size={32} />}
                    title={t('profile')}
                    description="Manage contacts and settings"
                    gradient="linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
                    delay={0.3}
                    onClick={() => navigate('/dashboard/profile')}
                />
            </motion.div>

            {/* Start Journey Modal */}
            {showJourneyModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    backdropFilter: 'blur(4px)'
                }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            background: 'white',
                            padding: '32px',
                            borderRadius: '24px',
                            width: '90%',
                            maxWidth: '400px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
                        }}
                    >
                        <h2 style={{ marginTop: 0, fontFamily: 'Playfair Display, serif' }}>Start Safe Journey</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                            We'll track your location and alert guardians if you don't check in.
                        </p>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Destination</label>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: '#F8F9FA',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Check-in Interval</label>
                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: '#F8F9FA',
                                    outline: 'none'
                                }}
                            >
                                <option value="1">Every 1 Minute (Test)</option>
                                <option value="5">Every 5 Minutes</option>
                                <option value="10">Every 10 Minutes</option>
                                <option value="30">Every 30 Minutes</option>
                            </select>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-main)' }}>Trusted Contacts</label>
                            <div style={{ maxHeight: '100px', overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '8px' }}>
                                {availableContacts.length > 0 ? (
                                    availableContacts.map(contact => (
                                        <div key={contact.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                                            <input
                                                type="checkbox"
                                                checked={selectedContacts.includes(contact.id)}
                                                onChange={() => toggleContactSelection(contact.id)}
                                                style={{ width: '16px', height: '16px' }}
                                            />
                                            <span style={{ fontSize: '0.9rem' }}>{contact.name} ({contact.number})</span>
                                        </div>
                                    ))
                                ) : (
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>No contacts found. Add in Profile.</span>
                                )}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={handleStartJourney}
                                style={{
                                    flex: 1,
                                    padding: '14px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Start Journey
                            </button>
                            <button
                                onClick={() => setShowJourneyModal(false)}
                                style={{
                                    flex: 1,
                                    padding: '14px',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    background: 'white',
                                    color: 'var(--text-muted)',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

const StatCard = ({ icon, label, value, color }) => (
    <motion.div
        whileHover={{ y: -4, scale: 1.05 }}
        style={{
            background: 'white',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}
    >
        <div style={{
            width: '50px',
            height: '50px',
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
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>{label}</div>
        <div style={{ fontSize: '1.4rem', fontWeight: '700', color: color }}>{value}</div>
    </motion.div>
);

const QuickAction = ({ icon, title, description, gradient, delay, onClick }) => (
    <motion.div
        onClick={onClick}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
        style={{
            background: gradient,
            color: 'white',
            padding: '36px 28px',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
    >
        {/* Background decorative circle */}
        <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    marginBottom: '8px'
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
                {icon}
            </motion.div>
            <h3 style={{ margin: '12px 0 8px', fontSize: '1.5rem', fontWeight: '700' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.5' }}>
                {description}
            </p>
        </div>

        <motion.div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: 'auto',
                fontSize: '0.95rem',
                fontWeight: '600',
                opacity: 0.95
            }}
            whileHover={{ gap: '12px' }}
        >
            Explore Now <span>→</span>
        </motion.div>
    </motion.div>
);

export default UserDashboard;
