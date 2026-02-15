import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LandingPage = () => {
    const navigate = useNavigate();
    const { t, language, toggleLanguage } = useLanguage();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="landing-container">
            {/* Navbar */}
            <nav className="landing-nav">
                <div className="landing-logo">Sakhi AI</div>
                <ul className="landing-menu">
                    <li><a href="#" onClick={() => navigate('/')}>Home</a></li>
                    <li><a href="#" onClick={() => navigate('/about')}>About</a></li>
                    <li><a href="#" onClick={() => navigate('/services')}>Services</a></li>
                    <li><a href="#" onClick={() => navigate('/contact')}>Contact</a></li>
                </ul>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                        onClick={toggleLanguage}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: '#6B665F', fontSize: '0.9rem', fontWeight: '500' }}
                    >
                        <Globe size={18} /> {language === 'en' ? 'EN' : (language === 'hi' ? 'HI' : 'TE')}
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => navigate('/dashboard/user')}
                        style={{ padding: '10px 24px', borderRadius: '2px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.div
                className="landing-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Hero Text */}
                <motion.h1 className="hero-main-title" variants={itemVariants}>
                    {t('heroSubtitle')}
                </motion.h1>
                <motion.p className="hero-sub-text" variants={itemVariants}>
                    We believe in Safety. Less Worry is More Freedom.
                </motion.p>

                {/* Hero Image */}
                <motion.div className="hero-image-section" variants={itemVariants}>
                    <img
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
                        alt="Women empowerment"
                        className="hero-img"
                    />
                </motion.div>

                {/* Portal Cards */}
                <div className="portal-grid">
                    {/* User Portal */}
                    <motion.div
                        className="portal-card"
                        onClick={() => navigate('/dashboard/user')}
                        variants={itemVariants}
                    >
                        <div className="portal-image-container">
                            <img
                                src="https://i.pinimg.com/736x/87/de/27/87de27f0d5e799c7ea21406bad92fc9b.jpg"
                                alt="User Portal"
                                className="portal-image"
                            />
                        </div>
                        <div className="portal-info">
                            <h3 className="portal-title">{t('userPortal')}</h3>
                            <p className="portal-desc">{t('userPortalDesc')}</p>
                        </div>
                    </motion.div>

                    {/* Guardian Portal */}
                    <motion.div
                        className="portal-card"
                        onClick={() => navigate('/dashboard/guardian')}
                        variants={itemVariants}
                    >
                        <div className="portal-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                                alt="Guardian Portal"
                                className="portal-image"
                            />
                        </div>
                        <div className="portal-info">
                            <h3 className="portal-title">{t('guardianPortal')}</h3>
                            <p className="portal-desc">{t('guardianPortalDesc')}</p>
                        </div>
                    </motion.div>

                    {/* Empowerment Hub */}
                    <motion.div
                        className="portal-card"
                        onClick={() => navigate('/dashboard/empowerment')}
                        variants={itemVariants}
                    >
                        <div className="portal-image-container">
                            <img
                                src="https://media.istockphoto.com/id/1496112689/photo/young-multiracial-group-stacking-hands-together-happy-diverse-friends-united-at-community.jpg?s=612x612&w=0&k=20&c=ARk3sEhEElK3M27oN-VcVNtAEULHJzZetRihjLsXuu8="
                                alt="Empowerment Hub"
                                className="portal-image"
                            />
                        </div>
                        <div className="portal-info">
                            <h3 className="portal-title">{t('empowermentPortal')}</h3>
                            <p className="portal-desc">{t('empowermentPortalDesc')}</p>
                        </div>
                    </motion.div>

                    {/* Profile */}
                    <motion.div
                        className="portal-card"
                        onClick={() => navigate('/dashboard/profile')}
                        variants={itemVariants}
                    >
                        <div className="portal-image-container">
                            <img
                                src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_wordcount_boost&w=740&q=80"
                                alt="Profile"
                                className="portal-image"
                            />
                        </div>
                        <div className="portal-info">
                            <h3 className="portal-title">{t('profilePortal')}</h3>
                            <p className="portal-desc">{t('profilePortalDesc')}</p>
                        </div>
                    </motion.div>

                    {/* Safe Journey */}
                    <motion.div
                        className="portal-card"
                        onClick={() => navigate('/dashboard/user')}
                        variants={itemVariants}
                        style={{ border: '2px solid var(--primary)' }}
                    >
                        <div className="portal-image-container">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                                alt="Safe Journey"
                                className="portal-image"
                            />
                        </div>
                        <div className="portal-info">
                            <h3 className="portal-title" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Globe size={20} /> Safe Journey
                            </h3>
                            <p className="portal-desc">
                                Real-time location tracking with Guardian Alerts. Start your journey now.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

export default LandingPage;
