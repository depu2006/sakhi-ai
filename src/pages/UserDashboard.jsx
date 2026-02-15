import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Zap, Eye, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const UserDashboard = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const cardVariants = {
        hover: { y: -6, boxShadow: '0 18px 40px rgba(0,0,0,0.12)' },
        initial: { y: 0 }
    };

    return (
        <motion.div initial="initial" animate="initial">
            <header style={{ marginBottom: 28 }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', margin: 0, color: 'var(--text-main)' }}>Dashboard</h1>
                <p style={{ color: 'var(--text-muted)', marginTop: 6 }}>Access your tools and sections below.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
                <QuickAction icon={<Zap />} title={t('empowerment')} delay={0.05} onClick={() => navigate('/dashboard/empowerment')} />
                <QuickAction icon={<Eye />} title={t('guardian')} delay={0.1} onClick={() => navigate('/dashboard/guardian')} />
                <QuickAction icon={<UserIcon />} title={t('profile')} delay={0.15} onClick={() => navigate('/dashboard/profile')} />
            </div>
        </motion.div>
    );
};

const QuickAction = ({ icon, title, delay, onClick }) => (
    <motion.div
        className="glass-panel"
        whileHover={{ y: -5, borderColor: 'var(--primary)' }}
        onClick={onClick}
        style={{ padding: '24px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay }}
    >
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.08)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {React.cloneElement(icon, { size: 28 })}
        </div>
        <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{title}</span>
    </motion.div>
);

export default UserDashboard;
