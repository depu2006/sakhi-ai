import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Chatbot from '../components/Chatbot';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <header style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-color)' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-main)' }}>Sakhi AI</div>
                <div>
                    <button onClick={() => navigate('/')} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'white', cursor: 'pointer' }}>
                        Logout
                    </button>
                </div>
            </header>

            <div className="dashboard-layout">
                <Sidebar />
                <main className="dashboard-content">
                    <Outlet />
                </main>
            </div>
            <Chatbot />
        </div>
    );
};

export default DashboardLayout;
