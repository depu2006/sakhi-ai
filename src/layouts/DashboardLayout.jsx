import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Chatbot from '../components/Chatbot';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="dashboard-container">
            <header style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-color)' }}>
                <button 
                    className={`hamburger-btn ${sidebarOpen ? 'active' : ''}`}
                    onClick={toggleSidebar}
                    style={{ marginRight: '12px' }}
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Sakhi AI</div>
                <div>
                    <button onClick={() => navigate('/')} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'white', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </header>

            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div 
                    className="sidebar-overlay active" 
                    onClick={closeSidebar}
                />
            )}

            <div className="dashboard-layout">
                <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                    <Sidebar onLinkClick={closeSidebar} />
                </div>
                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>
            <Chatbot />
        </div>
    );
};

export default DashboardLayout;
