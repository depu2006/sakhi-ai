import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Eye, Home, LogOut, Zap, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = () => {
    const location = useLocation();
    const { t } = useLanguage();

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="sidebar">
            <div className="logo-container">
                <div className="logo-icon">S</div>
                <span className="logo-text">SakhiAI</span>
            </div>

            <nav style={{ flex: 1 }}>
                <ul className="nav-list">
                    
                    <li className="nav-item">
                        <Link to="/dashboard/empowerment" className={isActive('/dashboard/empowerment') ? 'active' : ''}>
                            <Zap size={20} />
                            <span>{t('empowerment')}</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/guardian" className={isActive('/dashboard/guardian') ? 'active' : ''}>
                            <Eye size={20} />
                            <span>{t('guardian')}</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard/profile" className={isActive('/dashboard/profile') ? 'active' : ''}>
                            <User size={20} />
                            <span>{t('profile')}</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <LogOut size={20} />
                            <span>{t('exit')}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
