import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Zap, User } from 'lucide-react';

const AboutPage = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="landing-container" style={{ padding: '0' }}>
            {/* Navigation */}
            <nav className="landing-nav">
                <div className="landing-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Sakhi AI</div>
                <button
                    onClick={() => navigate('/')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#6B665F', fontSize: '1rem' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>
            </nav>

            <motion.div
                className="landing-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ paddingTop: '2rem' }}
            >
                {/* Hero Section with Circle Image */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '1.5rem' : '6rem', marginBottom: isMobile ? '3rem' : '8rem', flexWrap: 'wrap', maxWidth: '1200px' }}>

                    {/* Image Side */}
                    <motion.div variants={itemVariants} style={{ position: 'relative' }}>
                        <div style={{
                            width: isMobile ? '250px' : '400px',
                            height: isMobile ? '250px' : '400px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                alt="About Sakhi AI"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Decorative Circle */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: isMobile ? '80px' : '120px',
                            height: isMobile ? '80px' : '120px',
                            borderRadius: '50%',
                            backgroundColor: '#bfdbfe',
                            zIndex: -1
                        }}></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div variants={itemVariants} style={{ maxWidth: isMobile ? '100%' : '500px', textAlign: isMobile ? 'center' : 'left' }}>
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '2rem' : '3.5rem', color: '#334155', marginBottom: '1rem', lineHeight: '1.2' }}>
                            About <br /> <span style={{ color: '#6366f1' }}>Sakhi AI</span>
                        </h1>
                        <h2 style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#64748b', fontWeight: '500', marginBottom: '1.5rem' }}>
                            Empowering Women, Ensuring Safety
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>
                            Sakhi AI is more than just an app; it's a comprehensive ecosystem designed to protect, connect, and empower women.
                            We combine cutting-edge technology with community support to create a world where safety is a given, not a luxury.
                        </p>
                    </motion.div>
                </div>

                {/* How it Works Grid */}
                <motion.div variants={itemVariants} style={{ width: '100%', maxWidth: '1200px' }}>
                    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.8rem' : '2.5rem', textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem', color: '#1e293b' }}>
                        How It Works
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? '20px' : '30px' }}>
                        {/* Box 1 */}
                        <div className="feature-box" style={{ background: 'white', padding: isMobile ? '24px' : '40px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'left', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: isMobile ? '50px' : '60px', height: isMobile ? '50px' : '60px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Shield size={isMobile ? 24 : 30} color="#6366f1" />
                            </div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '15px', color: '#1e293b' }}>Safety First</h3>
                            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1rem' }}>The <strong>User Portal</strong> provides immediate access to SOS alerts, safe route tracking, and community support.</p>
                        </div>

                        {/* Box 2 */}
                        <div className="feature-box" style={{ background: 'white', padding: isMobile ? '24px' : '40px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'left', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: isMobile ? '50px' : '60px', height: isMobile ? '50px' : '60px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Eye size={isMobile ? 24 : 30} color="#ec4899" />
                            </div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '15px', color: '#1e293b' }}>Guardian Eyes</h3>
                            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1rem' }}>Trusted contacts use the <strong>Guardian Portal</strong> to monitor locations and receive real-time updates.</p>
                        </div>

                        {/* Box 3 */}
                        <div className="feature-box" style={{ background: 'white', padding: isMobile ? '24px' : '40px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'left', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: isMobile ? '50px' : '60px', height: isMobile ? '50px' : '60px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Zap size={isMobile ? 24 : 30} color="#8b5cf6" />
                            </div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '15px', color: '#1e293b' }}>Growth</h3>
                            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1rem' }}>The <strong>Empowerment Hub</strong> offers tools for financial independence, skill detection, and business planning.</p>
                        </div>

                        {/* Box 4 */}
                        <div className="feature-box" style={{ background: 'white', padding: isMobile ? '24px' : '40px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'left', transition: 'transform 0.3s ease' }}>
                            <div style={{ width: isMobile ? '50px' : '60px', height: isMobile ? '50px' : '60px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <User size={isMobile ? 24 : 30} color="#10b981" />
                            </div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', marginBottom: '15px', color: '#1e293b' }}>Profile</h3>
                            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: isMobile ? '0.9rem' : '1rem' }}>Manage emergency contacts, app settings, and personal data securely in your <strong>Profile</strong>.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
