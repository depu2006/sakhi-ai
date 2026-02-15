import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Users, Shield, Heart, Zap, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

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
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#6B665F', fontSize: '1rem' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>
            </nav>

            <motion.div className="landing-content" variants={containerVariants} initial="hidden" animate="visible" style={{ paddingTop: '2rem' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
                    <div style={{ textAlign: 'left', marginBottom: 12 }}>
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', margin: 0, color: 'var(--text-main)' }}>Services & Support</h1>
                        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Access comprehensive support services and connect with our team</div>
                    </div>
                </div>

                {/* Services Grid */}
            <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px', alignItems: 'start' }}>
                {services.map(service => {
                    const IconComponent = service.icon;
                    return (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            style={{
                                background: 'linear-gradient(135deg, #FFFFFF 0%, #fff5f7 100%)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                padding: '30px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
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
                                    justifyContent: 'center'
                                }}>
                                    <IconComponent size={24} color={service.color} />
                                </div>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', margin: 0 }}>
                                    {service.name}
                                </h3>
                            </div>

                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
                                {service.description}
                            </p>

                            <div style={{
                                padding: '12px',
                                background: 'rgba(236, 72, 153, 0.05)',
                                borderRadius: '8px',
                                marginBottom: '16px'
                            }}>
                                <span style={{ color: 'var(--secondary)', fontWeight: '600', fontSize: '0.9rem' }}>
                                    ⏰ {service.available}
                                </span>
                            </div>

                            {/* Expanded Details */}
                            {selectedService === service.id && (
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                        <button onClick={() => navigate('/dashboard/user')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                            <ArrowLeft size={16} /> Back to Dashboard
                        </button>
                        <div style={{ textAlign: 'right' }}>
                            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', margin: 0, color: 'var(--text-main)' }}>Services & Support</h1>
                            <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Available services to support women in need.</div>
                        </div>
                    </div>

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
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Phone size={18} color="var(--secondary)" />
                                            <div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Call us</span>
                                                <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{service.contact}</div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Mail size={18} color="var(--secondary)" />
                                            <div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email us</span>
                                                <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>{service.email}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                    </div>
                            )}

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '16px' }}>
                                <ChevronRight size={20} color="var(--secondary)" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Contact Information Section */}
            <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '40px', gridColumn: 'span 3', background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '30px' }}>
                    Get in Touch With Us
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {/* Headquarters */}
                    <div style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                <MapPin size={20} color="var(--secondary)" />
                            </div>
                            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Main Office</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>
                            New Delhi, India<br />
                            Women Safety Initiative<br />
                            Building A, Floor 5
                        </p>
                    </div>

                    {/* Support Hotline */}
                    <div style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                <Phone size={20} color="var(--secondary)" />
                            </div>
                            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Support Hotline</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>
                            +91-1800-SAKHI-AI<br />
                            <span style={{ fontSize: '0.95rem', fontWeight: '400' }}>24/7 Emergency Line</span>
                        </p>
                    </div>

                    {/* Email Support */}
                    <div style={{ padding: '24px', background: 'white', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                <Mail size={20} color="var(--secondary)" />
                            </div>
                            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Email Support</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>
                            support@sakhi-ai.com<br />
                            <span style={{ fontSize: '0.9rem' }}>Response time: 2-4 hours</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Quick Links */}
            <motion.div variants={itemVariants} className="glass-panel" style={{ marginTop: '40px', padding: '30px', background: '#FFFFFF' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '20px' }}>
                    Frequently Needed Services
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
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
                                padding: '16px',
                                background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                color: 'var(--text-main)',
                                fontWeight: '500',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                            {item.title}
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
