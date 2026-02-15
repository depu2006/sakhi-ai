import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe, Bell, Moon, Trash2, Plus, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const [contacts, setContacts] = React.useState(() => {
        const saved = localStorage.getItem('emergencyContacts');
        return saved ? JSON.parse(saved) : [
            { id: 1, name: 'Mom', number: '+91 98765 43210' },
            { id: 2, name: 'Sister', number: '+91 87654 32109' }
        ];
    });
    const [isAddingContact, setIsAddingContact] = React.useState(false);
    const [newContactName, setNewContactName] = React.useState("");
    const [newContactNumber, setNewContactNumber] = React.useState("");

    const handleAddContact = () => {
        if (newContactName && newContactNumber) {
            const newContacts = [...contacts, { id: Date.now(), name: newContactName, number: newContactNumber }];
            setContacts(newContacts);
            localStorage.setItem('emergencyContacts', JSON.stringify(newContacts));
            setNewContactName("");
            setNewContactNumber("");
            setIsAddingContact(false);
        }
    };

    const handleDeleteContact = (id) => {
        const newContacts = contacts.filter(c => c.id !== id);
        setContacts(newContacts);
        localStorage.setItem('emergencyContacts', JSON.stringify(newContacts));
    };

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
                {contacts.map(contact => (
                    <div key={contact.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{contact.name}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>{contact.number}</span>
                            <Trash2 size={20} color="var(--danger)" style={{ cursor: 'pointer' }} onClick={() => handleDeleteContact(contact.id)} />
                        </div>
                    </div>
                ))}

                {isAddingContact ? (
                    <div style={{ marginTop: '20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <input
                            placeholder="Name"
                            value={newContactName}
                            onChange={(e) => setNewContactName(e.target.value)}
                            style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border-color)', width: '120px' }}
                        />
                        <input
                            placeholder="Number"
                            value={newContactNumber}
                            onChange={(e) => setNewContactNumber(e.target.value)}
                            style={{ padding: '8px', borderRadius: '8px', border: '1px solid var(--border-color)', flex: 1 }}
                        />
                        <button onClick={handleAddContact} style={{ padding: '8px 12px', background: 'var(--primary)', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Save</button>
                        <button onClick={() => setIsAddingContact(false)} style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} /></button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsAddingContact(true)}
                        style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '1rem', fontWeight: '500' }}
                    >
                        <Plus size={20} /> {t('addContact')}
                    </button>
                )}
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
