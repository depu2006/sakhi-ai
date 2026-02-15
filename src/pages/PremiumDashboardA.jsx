import React from 'react';
import { motion } from 'framer-motion';
import { Star, PieChart, Users, DollarSign, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumDashboardA = () => {
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
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', margin: 0, color: 'var(--text-main)' }}>Premium Dashboard — A</h1>
                        <div style={{ color: 'var(--text-muted)', fontSize: 13 }}>A premium view with quick insights and sales overview.</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
                <motion.div variants={item} style={{ padding: 20, borderRadius: 12, background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))', boxShadow: '0 12px 30px rgba(99,102,241,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                        <div>
                            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Sales Overview</h3>
                            <p style={{ margin: 0, color: 'var(--text-muted)' }}>Last 30 days</p>
                        </div>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                            <Star size={20} color="gold" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
                        <div style={{ flex: 1, padding: 18, borderRadius: 12, background: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Revenue</div>
                            <div style={{ fontSize: 22, fontWeight: 700 }}>₹24,800</div>
                        </div>
                        <div style={{ flex: 1, padding: 18, borderRadius: 12, background: 'white', boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>Orders</div>
                            <div style={{ fontSize: 22, fontWeight: 700 }}>1,240</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                        <div style={{ padding: 12, borderRadius: 10, background: 'white' }}>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Active Sellers</div>
                            <div style={{ fontWeight: 700 }}>86</div>
                        </div>
                        <div style={{ padding: 12, borderRadius: 10, background: 'white' }}>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Avg Order Value</div>
                            <div style={{ fontWeight: 700 }}>₹560</div>
                        </div>
                        <div style={{ padding: 12, borderRadius: 10, background: 'white' }}>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Conversion</div>
                            <div style={{ fontWeight: 700 }}>4.2%</div>
                        </div>
                    </div>
                </motion.div>

                <motion.aside variants={item} style={{ padding: 20, borderRadius: 12, background: 'white', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
                    <h4 style={{ marginTop: 0, color: 'var(--text-main)' }}>Top Categories</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Textiles</span><strong>₹8,400</strong></li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Food & Spices</span><strong>₹5,200</strong></li>
                        <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Jute & Bags</span><strong>₹4,000</strong></li>
                    </ul>
                </motion.aside>
            </div>

            <section style={{ marginTop: 20 }}>
                <h3 style={{ color: 'var(--text-main)' }}>Recent Orders</h3>
                <div style={{ marginTop: 12, borderRadius: 12, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
                        <thead style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.08), rgba(99,102,241,0.06))' }}>
                            <tr>
                                <th style={{ textAlign: 'left', padding: 12 }}>Order</th>
                                <th style={{ textAlign: 'left', padding: 12 }}>Buyer</th>
                                <th style={{ textAlign: 'left', padding: 12 }}>Amount</th>
                                <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: '#A102', buyer: 'Sita', amount: '₹480', status: 'Delivered' },
                                { id: '#A101', buyer: 'Rani', amount: '₹1,200', status: 'Dispatched' },
                                { id: '#A100', buyer: 'Gita', amount: '₹350', status: 'Processing' }
                            ].map(row => (
                                <tr key={row.id}>
                                    <td style={{ padding: 12, borderTop: '1px solid rgba(0,0,0,0.04)' }}>{row.id}</td>
                                    <td style={{ padding: 12, borderTop: '1px solid rgba(0,0,0,0.04)' }}>{row.buyer}</td>
                                    <td style={{ padding: 12, borderTop: '1px solid rgba(0,0,0,0.04)' }}>{row.amount}</td>
                                    <td style={{ padding: 12, borderTop: '1px solid rgba(0,0,0,0.04)' }}>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </motion.div>
    );
};

export default PremiumDashboardA;
