import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BarChart2, Tag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumDashboardB = () => {
    const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

    const navigate = useNavigate();

    return (
        <motion.div initial="hidden" animate="visible">
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                    <button onClick={() => navigate('/dashboard/user')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                        <ArrowLeft size={18} /> Back to Dashboard
                    </button>
                    <div style={{ textAlign: 'right' }}>
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', margin: 0, color: 'var(--text-main)' }}>Premium Dashboard — B</h1>
                        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>Focused on community growth and engagement metrics.</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20 }}>
                <motion.div variants={item} style={{ padding: 20, borderRadius: 12, background: 'linear-gradient(135deg, rgba(236,72,153,0.06), rgba(236,72,153,0.03))', boxShadow: '0 12px 30px rgba(236,72,153,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                        <div>
                            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Community Metrics</h3>
                            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Engagement & growth</p>
                        </div>
                        <div>
                            <Award size={20} color="#ec4899" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
                        <div style={{ flex: 1, padding: 18, borderRadius: 12, background: 'white' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Active Members</div>
                            <div style={{ fontSize: 22, fontWeight: 700 }}>3,420</div>
                        </div>
                        <div style={{ flex: 1, padding: 18, borderRadius: 12, background: 'white' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>New Signups</div>
                            <div style={{ fontSize: 22, fontWeight: 700 }}>420</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                        <div style={{ flex: 1, padding: 16, borderRadius: 12, background: 'white' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Avg Session</div>
                            <div style={{ fontWeight: 700 }}>12m 20s</div>
                        </div>
                        <div style={{ flex: 1, padding: 16, borderRadius: 12, background: 'white' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Messages</div>
                            <div style={{ fontWeight: 700 }}>8,320</div>
                        </div>
                    </div>
                </motion.div>

                <motion.aside variants={item} style={{ padding: 20, borderRadius: 12, background: 'white', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--text-main)' }}>Top Communities</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Women Entrepreneurs</span><strong>1.2k</strong></li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Skill Development</span><strong>840</strong></li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Local Markets</span><strong>620</strong></li>
                    </ul>
                </motion.aside>
            </div>

            <section style={{ marginTop: 20 }}>
                <h3 style={{ color: 'var(--text-main)' }}>Recent Activity</h3>
                <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
                    {[{text: 'New course added: Handloom Basics', time: '2h'}, {text: 'Community meetup scheduled', time: '1d'}, {text: 'Grant awarded to 5 women', time: '3d'}].map((it, i) => (
                        <div key={i} style={{ padding: 12, borderRadius: 10, background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 6px 18px rgba(0,0,0,0.04)'}}>
                            <div>{it.text}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{it.time}</div>
                        </div>
                    ))}
                </div>
            </section>
            </div>
        </motion.div>
    );
};

export default PremiumDashboardB;
