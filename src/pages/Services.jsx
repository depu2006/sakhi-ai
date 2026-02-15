import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Users, Shield, Heart, Zap, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState(null);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        {
            id: 2,
            name: 'Mental Health Counseling',
            description: 'Professional counseling and therapy sessions',
            icon: Heart,
            contact: '+91-9876-543-211',
            email: 'counseling@sakhi-ai.com',
            available: 'Mon-Sat, 10 AM - 6 PM',
            color: '#ec4899'
        },
        {
            id: 3,
            name: 'Legal Assistance',
            description: 'Legal guidance and support for women rights',
            icon: Shield,
            contact: '+91-9876-543-212',
            email: 'legal@sakhi-ai.com',
            available: 'Mon-Fri, 9 AM - 5 PM',
            color: '#6366f1'
        },
        {
            id: 4,
            name: 'Skill Development',
            description: 'Training programs for skill enhancement',
            icon: Zap,
            contact: '+91-9876-543-213',
            email: 'training@sakhi-ai.com',
            available: 'Flexible schedule',
            color: '#f59e0b'
        },
        {
            id: 5,
            name: 'Community Support Groups',
            description: 'Connect with other women for support',
            icon: Users,
            contact: '+91-9876-543-214',
            email: 'community@sakhi-ai.com',
            available: 'Weekly meetups',
            color: '#10b981'
        },
        {
            id: 6,
            name: 'Resource Libraries',
            description: 'Access to books, videos, and guides',
            icon: MessageCircle,
            contact: '+91-9876-543-215',
            email: 'resources@sakhi-ai.com',
            available: 'Anytime online access',
            color: '#8b5cf6'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="landing-container" style={{ padding: '0' }}>
            <nav className="landing-nav">
                <div className="landing-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Sakhi AI</div>
                <button
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#6B665F', fontSize: isMobile ? '0.9rem' : '1rem' }}
                >
                    <ArrowLeft size={20} /> {!isMobile && 'Back to Home'}
                </button>
            </nav>

            <motion.div className="landing-content" variants={containerVariants} initial="hidden" animate="visible" style={{ paddingTop: '2rem' }}>
                {/* Hero Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    color: 'white',
                    padding: isMobile ? '40px 24px' : '60px 40px',
                    borderRadius: '16px',
                    marginBottom: isMobile ? '30px' : '50px',
                    textAlign: isMobile ? 'center' : 'left',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: isMobile ? 'calc(100% - 48px)' : 'calc(100% - 80px)'
                }}>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '2rem' : '3rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>Services & Support</h1>
                    <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', margin: 0, opacity: 0.95 }}>
                        Access comprehensive support services and connect with our team for help whenever you need it
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '24px' : '40px' }}>
                <div className="dashboard-grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: isMobile ? '16px' : '24px', marginBottom: '40px', alignItems: 'start' }}>
                {services.map(service => {
                    const IconComponent = service.icon;
                    return (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #fff5f7 100%)',
                                border: selectedService === service.id ? '2px solid var(--secondary)' : '1px solid var(--border-color)',
                                borderRadius: '12px',
                                padding: isMobile ? '20px' : '30px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                height: 'fit-content'
                            }}
                            whileHover={{
                                transform: 'translateY(-8px)',
                                boxShadow: '0 12px 24px rgba(236, 72, 153, 0.15)'
                            }}
                        >
                            {/* Color bar */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: service.color
                            }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{
                                    background: `rgba(${hex2rgb(service.color)}, 0.1)`,
                                    padding: '12px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: '50px',
                                    minHeight: '50px'
                                }}>
                                    <IconComponent size={isMobile ? 22 : 24} color={service.color} />
                                </div>
                                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--text-main)', margin: 0 }}>
                                    {service.name}
                                </h3>
                            </div>

                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '0.95rem', marginBottom: '16px', lineHeight: '1.5' }}>
                                {service.description}
                            </p>

                            <div style={{
                                padding: '12px',
                                background: 'rgba(236, 72, 153, 0.05)',
                                borderRadius: '8px',
                                marginBottom: '16px'
                            }}>
                                <span style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>
                                    ⏰ {service.available}
                                </span>
                            </div>

                            {/* Expanded Details */}
                            {selectedService === service.id && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    style={{
                                        marginTop: '16px',
                                        paddingTop: '16px',
                                        borderTop: '1px solid var(--border-color)'
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <Phone size={18} color="var(--secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Call us</span>
                                                <div style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: isMobile ? '0.9rem' : '1rem' }}>{service.contact}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <Mail size={18} color="var(--secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email us</span>
                                                <div style={{ color: 'var(--text-main)', fontWeight: '600', fontSize: isMobile ? '0.9rem' : '1rem' }}>{service.email}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '16px' }}>
                                <motion.div
                                    animate={{ rotate: selectedService === service.id ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronRight size={20} color="var(--secondary)" />
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
                </div>
                </div>

                {/* Contact Information Section */}
                <motion.div variants={itemVariants} style={{
                    padding: isMobile ? '30px 24px' : '40px',
                    background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)',
                    borderRadius: '16px',
                    maxWidth: '1200px',
                    margin: '0 auto 40px',
                    width: isMobile ? 'calc(100% - 48px)' : 'calc(100% - 80px)'
                }}>
                    <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.8rem', color: 'var(--text-main)', marginBottom: isMobile ? '20px' : '30px', marginTop: 0 }}>
                        Get in Touch With Us
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '16px' : '24px' }}>
                        {/* Headquarters */}
                        <div style={{ padding: isMobile ? '20px' : '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                    <MapPin size={20} color="var(--secondary)" />
                                </div>
                                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: isMobile ? '1rem' : '1.1rem' }}>Main Office</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.6' }}>
                                New Delhi, India<br />
                                Women Safety Initiative<br />
                                Building A, Floor 5
                            </p>
                        </div>

                        {/* Support Hotline */}
                        <div style={{ padding: isMobile ? '20px' : '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                    <Phone size={20} color="var(--secondary)" />
                                </div>
                                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: isMobile ? '1rem' : '1.1rem' }}>Support Hotline</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '600', margin: '0 0 8px 0', lineHeight: '1.5' }}>
                                +91-1800-SAKHI-AI
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.95rem', margin: 0 }}>24/7 Emergency Line</p>
                        </div>

                        {/* Email Support */}
                        <div style={{ padding: isMobile ? '20px' : '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                    <Mail size={20} color="var(--secondary)" />
                                </div>
                                <h3 style={{ margin: 0, color: 'var(--text-main)', fontSize: isMobile ? '1rem' : '1.1rem' }}>Email Support</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)', margin: '0 0 8px 0', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                                support@sakhi-ai.com
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.9rem', margin: 0 }}>Response time: 2-4 hours</p>
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Quick Links */}
                <motion.div variants={itemVariants} style={{
                    padding: isMobile ? '24px' : '30px',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: isMobile ? 'calc(100% - 48px)' : 'calc(100% - 80px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    border: '1px solid var(--border-color)'
                }}>
                    <h2 style={{ fontSize: isMobile ? '1.4rem' : '1.5rem', color: 'var(--text-main)', marginBottom: isMobile ? '16px' : '20px', marginTop: 0 }}>
                        Frequently Needed Services
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: isMobile ? '16px' : '16px' }}>
                        {[
                            { title: 'Report an Incident', icon: '🚨' },
                            { title: 'Find a Counselor', icon: '💬' },
                            { title: 'Legal Help', icon: '⚖️' },
                            { title: 'Skill Courses', icon: '📚' },
                            { title: 'Join Community', icon: '👥' },
                            { title: 'Weekly Meetups', icon: '📅' }
                        ].map((item, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    padding: isMobile ? '18px 16px' : '16px',
                                    background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: isMobile ? 'flex-start' : 'center',
                                    gap: isMobile ? '16px' : '12px',
                                    color: 'var(--text-main)',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    fontSize: isMobile ? '0.95rem' : '0.95rem',
                                    minHeight: isMobile ? '56px' : 'auto'
                                }}
                            >
                                <span style={{ fontSize: isMobile ? '1.5rem' : '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                                <span style={{ flex: 1, textAlign: isMobile ? 'left' : 'center' }}>{item.title}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Helper function to convert hex to rgb
function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

export default Services;
