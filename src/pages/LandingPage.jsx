import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, Shield, Heart, Zap, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const { t, language, toggleLanguage } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } }
    };

    return (
        <div style={{
            minHeight: '100vh',
            fontFamily: "'Inter', sans-serif",
            background: '#e0f2fe', // Light Blue background as requested
            color: '#1e293b', // Dark text for contrast
            overflowX: 'hidden'
        }}>
            <style>
                {`
                    .glass-card {
                        background: rgba(236, 72, 153, 0.15); /* Pink tint */
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        border: 1px solid rgba(236, 72, 153, 0.3); /* Pink border */
                        box-shadow: 0 8px 32px 0 rgba(236, 72, 153, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .glass-nav {
                        background: rgba(255, 255, 255, 0.7); /* Lighter nav for light mode */
                        backdrop-filter: blur(10px);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                    }
                    /* Responsive Grid */
                    .features-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 20px;
                        max-width: 1000px;
                        margin: 0 auto 100px;
                        padding: 0 20px;
                    }
                    @media (min-width: 768px) {
                        .features-grid {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 40px;
                            padding: 0 40px;
                        }
                    }
                    /* Responsive Typography */
                    .hero-title {
                        font-size: 2.5rem;
                        font-weight: 800;
                        margin: 0 0 24px;
                        line-height: 1.1;
                        color: #0f172a;
                    }
                    @media (min-width: 768px) {
                        .hero-title {
                            font-size: 4.5rem;
                        }
                    }
                    /* Responsive Nav */
                    .nav-links {
                        display: none;
                    }
                    @media (min-width: 768px) {
                        .nav-links {
                            display: flex;
                            gap: 32px;
                            align-items: center;
                        }
                    }
                `}
            </style>

            {/* Navbar */}
            <nav className="glass-nav" style={{
                padding: '15px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                boxSizing: 'border-box'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                    <Shield size={28} fill="#0f172a" /> Sakhi AI
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div className="nav-links">
                        {['About', 'Services', 'Contact'].map((item) => (
                            <a key={item} href={`/${item.toLowerCase()}`} onClick={(e) => { e.preventDefault(); navigate(`/${item.toLowerCase()}`); }}
                                style={{ color: '#334155', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', opacity: 0.9, transition: 'color 0.2s' }}
                                onMouseOver={(e) => e.target.style.color = '#0ea5e9'}
                                onMouseOut={(e) => e.target.style.color = '#334155'}
                            >
                                {item}
                            </a>
                        ))}
                        <button onClick={toggleLanguage} style={{ background: 'rgba(0,0,0,0.05)', border: 'none', color: '#334155', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                            <Globe size={16} /> {language.toUpperCase()}
                        </button>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/dashboard/user')}
                        style={{
                            background: '#0ea5e9', // Blue button to match theme
                            color: 'white',
                            border: 'none',
                            padding: '8px 20px',
                            borderRadius: '30px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
                        }}
                    >
                        GET STARTED
                    </motion.button>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    padding: '120px 20px 60px',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}
            >
                <motion.h1 variants={itemVariants} className="hero-title">
                    Safety Reimagined.<br />Freedom Unleashed.
                </motion.h1>
                <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', opacity: 0.8, lineHeight: '1.6', color: '#334155' }}>
                    {t('heroSubtitle') || "Your intelligent companion for safety, empowerment, and connection."}
                    Experience the future of personal security with Sakhi AI.
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <motion.button
                        whileHover={{ y: -5 }}
                        onClick={() => navigate('/dashboard/user')}
                        style={{
                            padding: '16px 32px',
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: '#ec4899', // Pink accent button
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                    >
                        Launch Dashboard <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Feature Portal Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="features-grid"
            >
                <FeatureCard
                    title={t('userPortal')}
                    desc={t('userPortalDesc')}
                    icon={<User size={32} color="#ec4899" />}
                    img="https://i.pinimg.com/736x/87/de/27/87de27f0d5e799c7ea21406bad92fc9b.jpg"
                    onClick={() => navigate('/dashboard/user')}
                />
                <FeatureCard
                    title={t('guardianPortal')}
                    desc={t('guardianPortalDesc')}
                    icon={<Shield size={32} color="#ec4899" />}
                    img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
                    onClick={() => navigate('/dashboard/guardian')}
                />
                <FeatureCard
                    title={t('empowermentPortal')}
                    desc={t('empowermentPortalDesc')}
                    icon={<Zap size={32} color="#ec4899" />}
                    img="https://media.istockphoto.com/id/1496112689/photo/young-multiracial-group-stacking-hands-together-happy-diverse-friends-united-at-community.jpg?s=612x612&w=0&k=20&c=ARk3sEhEElK3M27oN-VcVNtAEULHJzZetRihjLsXuu8="
                    onClick={() => navigate('/dashboard/empowerment')}
                />
                <FeatureCard
                    title={t('profilePortal')}
                    desc={t('profilePortalDesc')}
                    icon={<Heart size={32} color="#ec4899" />}
                    img="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_wordcount_boost&w=740&q=80"
                    onClick={() => navigate('/dashboard/profile')}
                />

                {/* Special Safe Journey Card - Spanning 2 columns for symmetry in 2x2 */}
                <motion.div
                    variants={itemVariants}
                    style={{ gridColumn: '1 / -1' }}
                >
                    <motion.div
                        className="glass-card"
                        whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)' }}
                        onClick={() => navigate('/dashboard/user')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '24px',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            padding: '20px',
                            background: 'rgba(236, 72, 153, 0.25)', // Slightly stronger pink for emphasis
                            border: '1px solid rgba(236, 72, 153, 0.4)'
                        }}
                    >
                        <div style={{ flex: 1, padding: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ background: '#ec4899', padding: '12px', borderRadius: '12px' }}><Shield size={24} color="white" /></div>
                                <h3 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700', color: '#831843' }}>Safe Journey Active Mode</h3>
                            </div>
                            <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6', color: '#831843' }}>
                                Activate real-time tracking with our new darker, radar-enabled dashboard.
                                Designed for low-light environments and high-focus safety.
                            </p>
                        </div>
                        <div style={{ width: '200px', height: '150px', borderRadius: '16px', overflow: 'hidden', display: 'none', '@media (min-width: 768px)': { display: 'block' } }}>
                            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Safe Journey" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const FeatureCard = ({ title, desc, icon, img, onClick }) => (
    <motion.div
        className="glass-card"
        variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(236, 72, 153, 0.25)' }}
        onClick={onClick}
        style={{
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
    >
        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)', zIndex: 1 }} />
            <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: 'rgba(255,255,255,0.9)', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    {icon}
                </div>
            </div>
        </div>
        <div style={{ padding: '24px' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem', fontWeight: '700', color: '#831843' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6', color: '#4b5563' }}>{desc}</p>
        </div>
    </motion.div>
);

export default LandingPage;
