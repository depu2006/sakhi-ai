import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

            <motion.div className="landing-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ paddingTop: '2rem' }}>
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
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '2rem' : '3rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>Contact Us</h1>
                    <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', margin: 0, opacity: 0.95 }}>
                        Reach our support team for help, enquiries, or to report concerns
                    </p>
                </div>

                {/* Contact Cards */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '24px' : '40px', width: isMobile ? 'calc(100% - 48px)' : 'calc(100% - 80px)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '16px' : '20px', marginBottom: isMobile ? '30px' : '50px' }}>
                        {/* Support Hotline */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            style={{ padding: isMobile ? '24px' : '30px', borderRadius: '12px', background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginTop: 0, fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--text-main)' }}>Support Hotline</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '0.95rem', marginBottom: '16px' }}>Call for urgent assistance and emergencies.</p>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <Phone size={20} color="var(--secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1rem', color: 'var(--text-main)', marginBottom: '4px' }}>+91-1800-SAKHI-AI</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>24/7 Emergency Line</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Email Support */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ padding: isMobile ? '24px' : '30px', borderRadius: '12px', background: 'white', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginTop: 0, fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--text-main)' }}>Email Support</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '0.95rem', marginBottom: '16px' }}>General enquiries and follow-up messages.</p>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <Mail size={20} color="var(--secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1rem', color: 'var(--text-main)', marginBottom: '4px' }}>support@sakhi-ai.com</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Response time: 2-4 hours</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Office */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ padding: isMobile ? '24px' : '30px', borderRadius: '12px', background: 'white', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ marginTop: 0, fontSize: isMobile ? '1.1rem' : '1.3rem', color: 'var(--text-main)' }}>Office Location</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '0.95rem', marginBottom: '16px' }}>Visit or mail us at the office address.</p>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <MapPin size={20} color="var(--secondary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1rem', color: 'var(--text-main)', marginBottom: '4px' }}>New Delhi, India</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Women Safety Initiative — Building A, Floor 5</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)',
                            padding: isMobile ? '30px 24px' : '40px',
                            borderRadius: '16px',
                            border: '1px solid var(--border-color)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                        <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', color: 'var(--text-main)', marginTop: 0, marginBottom: isMobile ? '20px' : '24px' }}>Send us a Message</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '14px' : '16px', marginBottom: isMobile ? '14px' : '16px' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={{
                                    padding: isMobile ? '14px 16px' : '14px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)',
                                    background: 'white',
                                    color: 'var(--text-main)',
                                    fontSize: isMobile ? '1rem' : '1rem',
                                    outline: 'none',
                                    minHeight: isMobile ? '48px' : 'auto',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--secondary)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(236, 72, 153, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--border-color)';
                                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)';
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: isMobile ? '14px 16px' : '14px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-color)',
                                    background: 'white',
                                    color: 'var(--text-main)',
                                    fontSize: isMobile ? '1rem' : '1rem',
                                    outline: 'none',
                                    minHeight: isMobile ? '48px' : 'auto',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--secondary)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(236, 72, 153, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--border-color)';
                                    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.03)';
                                }}
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows={isMobile ? 6 : 5}
                            style={{
                                width: '100%',
                                padding: isMobile ? '14px 16px' : '14px 16px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-color)',
                                background: 'white',
                                color: 'var(--text-main)',
                                fontSize: isMobile ? '1rem' : '1rem',
                                outline: 'none',
                                boxSizing: 'border-box',
                                marginBottom: isMobile ? '20px' : '16px',
                                fontFamily: 'inherit',
                                resize: 'vertical',
                                minHeight: isMobile ? '140px' : '120px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                            }}
                        />
                        <button
                            style={{
                                width: '100%',
                                padding: isMobile ? '16px' : '14px 32px',
                                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                fontSize: isMobile ? '1rem' : '1rem',
                                transition: 'all 0.3s ease',
                                minHeight: isMobile ? '48px' : 'auto',
                                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 16px rgba(236, 72, 153, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.3)';
                            }}
                        >
                            Send Message
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
