import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe, Bell, Moon, Trash2, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div className="glass-panel" style={{ padding: '40px', display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '30px', background: 'white', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
                    PS
                </div>
                <div>
                    <h1 style={{ margin: '0 0 8px 0', fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'var(--text-main)' }}>Priya Sharma</h1>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>priya@email.com</p>
                </div>
            </div>

            {/* Emergency Contacts */}
            <h3 style={{ marginLeft: '10px', marginBottom: '16px', fontSize: '1.25rem', color: 'var(--text-main)' }}>{t('emergencyContacts')}</h3>
            <div className="glass-panel" style={{ padding: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Mom</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>+91 98765 43210</span>
                        <Trash2 size={20} color="var(--danger)" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Sister</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ color: 'var(--text-muted)' }}>+91 87654 32109</span>
                        <Trash2 size={20} color="var(--danger)" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
                <button style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1rem', fontWeight: '500' }}>
                    <Plus size={20} /> {t('addContact')}
                </button>
            </div>

            {/* Settings */}
            <h3 style={{ marginLeft: '10px', marginBottom: '16px', fontSize: '1.25rem', color: 'var(--text-main)' }}>{t('settings')}</h3>
            <div className="glass-panel" style={{ padding: '0 24px' }}>
                <SettingItem icon={<Globe />} title={t('language')} control={
                    <button onClick={toggleLanguage} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--primary)', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', cursor: 'pointer', fontWeight: '500' }}>
                        {language === 'en' ? 'English' : (language === 'hi' ? 'हिंदी' : 'తెలుగు')}
                    </button>
                } />
                <SettingItem icon={<Bell />} title={t('pushNotif')} control={<Switch defaultChecked />} />
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: '40px', background: 'white', border: '1px solid var(--danger)', color: 'var(--danger)', padding: '14px' }}>
                {t('logout')}
            </button>
        </motion.div>
    );
};

const SettingItem = ({ icon, title, control }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ color: 'var(--text-muted)' }}>{icon}</div>
            <span>{title}</span>
        </div>
        {control}
    </div>
);

const Switch = ({ checked, defaultChecked, onChange }) => {
    const isChecked = checked !== undefined ? checked : defaultChecked;
    return (
        <div
            onClick={onChange}
            style={{ width: '40px', height: '24px', background: isChecked ? 'var(--primary)' : 'var(--text-muted)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}
        >
            <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: isChecked ? '19px' : '3px', transition: 'left 0.2s' }}></div>
        </div>
    );
};

export default Profile;
