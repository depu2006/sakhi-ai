import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

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

            <motion.div className="landing-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ paddingTop: '2rem' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
                    <div style={{ textAlign: 'left', marginBottom: 12 }}>
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', margin: 0, color: 'var(--text-main)' }}>Contact Us</h1>
                        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Reach our support team for help and enquiries.</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        <div style={{ padding: 20, borderRadius: 12, background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)' }}>
                            <h3 style={{ marginTop: 0 }}>Support Hotline</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Call for urgent assistance.</p>
                            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                                <Phone size={20} color="var(--secondary)" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>+91-1800-SAKHI-AI</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>24/7 Emergency Line</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: 20, borderRadius: 12, background: 'white' }}>
                            <h3 style={{ marginTop: 0 }}>Email Support</h3>
                            <p style={{ color: 'var(--text-muted)' }}>General enquiries and follow-ups.</p>
                            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                                <Mail size={20} color="var(--secondary)" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>support@sakhi-ai.com</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Response time: 2-4 hours</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: 20, borderRadius: 12, background: 'white' }}>
                            <h3 style={{ marginTop: 0 }}>Office</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Visit or mail us at the office address.</p>
                            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                                <MapPin size={20} color="var(--secondary)" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>New Delhi, India</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Women Safety Initiative — Building A, Floor 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
