import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Send, Camera, Calculator, TrendingUp, DollarSign, ShoppingCart, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Empowerment = () => {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth < 768);

    // Calculator State
    const [material, setMaterial] = useState('');
    const [labor, setLabor] = useState('');
    const [other, setOther] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [profit, setProfit] = useState(null);

    // Product Marketplace State
    const [products, setProducts] = useState([
        { id: 1, name: 'Handmade Textiles', category: 'Crafts', price: 500, image: '🧵' },
        { id: 2, name: 'Organic Spices', category: 'Food', price: 300, image: '🌶️' },
        { id: 3, name: 'Jute Products', category: 'Eco-Friendly', price: 400, image: '🎒' }
    ]);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [showAddProduct, setShowAddProduct] = useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const calculateProfit = () => {
        const cost = Number(material) + Number(labor) + Number(other);
        const calcProfit = Number(sellingPrice) - cost;
        setProfit(calcProfit);
    };

    // Add new product function (for rural women to list their products)
    const addProduct = () => {
        if (productName && productCategory && productPrice) {
            const newProduct = {
                id: products.length + 1,
                name: productName,
                category: productCategory,
                price: Number(productPrice),
                image: '📦'
            };
            setProducts([...products, newProduct]);
            setProductName('');
            setProductCategory('');
            setProductPrice('');
            setShowAddProduct(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <header style={{ marginBottom: isMobile ? '24px' : '40px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '1.8rem' : '2.5rem', margin: '0 0 8px 0', color: 'var(--text-main)' }}>{t('empowerTitle')}</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>Business tools & financial growth</p>
            </header>

            <div className="dashboard-grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {/* Voice Assistant */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '24px' : '40px', gridColumn: isMobile ? '1' : 'span 2', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{ width: isMobile ? '60px' : '80px', height: isMobile ? '60px' : '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 10px 20px rgba(236, 72, 153, 0.2)' }}>
                        <Mic size={isMobile ? 28 : 36} color="white" />
                    </div>
                    <h2 style={{ marginBottom: '12px', fontSize: isMobile ? '1.25rem' : '1.5rem', color: 'var(--text-main)' }}>{t('voiceAssistant')}</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>{t('askAnything')}</p>
                    <div style={{ width: '100%', maxWidth: '500px', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder={t('typeQuestion')}
                            style={{ width: '100%', padding: isMobile ? '12px 16px' : '16px 24px', paddingRight: '50px', borderRadius: '30px', border: '1px solid var(--border-color)', background: '#F8F9FA', color: 'var(--text-main)', outline: 'none', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)', fontSize: isMobile ? '0.9rem' : '1rem' }}
                        />
                        <button style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', background: 'var(--primary)', border: 'none', width: isMobile ? '34px' : '40px', height: isMobile ? '34px' : '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)' }}>
                            <Send size={isMobile ? 16 : 18} color="white" />
                        </button>
                    </div>
                </motion.div>

                {/* Skill Detection */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '20px' : '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '10px', borderRadius: '12px' }}><Camera size={isMobile ? 20 : 24} color="var(--accent)" /></div>
                        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('skillDetection')}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.95rem', marginBottom: '16px', lineHeight: '1.5' }}>{t('tellUsSkill')}</p>
                    <input type="text" placeholder='e.g. "Tailoring"' style={{ width: '100%', padding: isMobile ? '10px' : '14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#F8F9FA', color: 'var(--text-main)', marginBottom: '12px', outline: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                    <button className="btn-primary" style={{ width: '100%', background: 'var(--text-main)', padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}>{t('detect')}</button>
                </motion.div>

                {/* Calculator */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '20px' : '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '10px', borderRadius: '12px' }}><Calculator size={isMobile ? 20 : 24} color="var(--success)" /></div>
                        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('calculator')}</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input type="number" placeholder={t('material')} value={material} onChange={e => setMaterial(e.target.value)} style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                        <input type="number" placeholder={t('labor')} value={labor} onChange={e => setLabor(e.target.value)} style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                        <input type="number" placeholder={t('other')} value={other} onChange={e => setOther(e.target.value)} style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                        <input type="number" placeholder={t('sellingPrice')} value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                        <button className="btn-primary" onClick={calculateProfit} style={{ marginTop: '8px', background: 'var(--text-main)', padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}>{t('calculate')}</button>

                        {profit !== null && (
                            <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: profit >= 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', border: `1px solid ${profit >= 0 ? 'var(--success)' : 'var(--danger)'}`, textAlign: 'center' }}>
                                <span style={{ display: 'block', fontSize: isMobile ? '0.8rem' : '0.9rem', color: 'var(--text-muted)' }}>{t('profit')}</span>
                                <span style={{ fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 'bold', color: profit >= 0 ? 'var(--success)' : 'var(--danger)' }}>₹{profit}</span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Income Overview */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '20px' : '30px', gridColumn: isMobile ? '1' : 'span 2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: '12px' }}><TrendingUp size={isMobile ? 20 : 24} color="var(--warning)" /></div>
                        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('incomeOverview')}</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '12px' : '24px' }}>
                        <div style={{ flex: 1, padding: isMobile ? '16px' : '20px', borderRadius: '12px', background: '#F8F9FA', border: '1px solid var(--border-color)' }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.8rem' : '0.9rem', display: 'block', marginBottom: '4px' }}>{t('products')}</span>
                            <div style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{products.length}</div>
                        </div>
                        <div style={{ flex: 1, padding: isMobile ? '16px' : '20px', borderRadius: '12px', background: '#F8F9FA', border: '1px solid var(--border-color)' }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.8rem' : '0.9rem', display: 'block', marginBottom: '4px' }}>{t('revenue')}</span>
                            <div style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>₹2,400</div>
                        </div>
                        <div style={{ flex: 1, padding: isMobile ? '16px' : '20px', borderRadius: '12px', background: 'var(--text-main)', color: 'white' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.8rem' : '0.9rem', display: 'block', marginBottom: '4px' }}>{t('profit')}</span>
                            <div style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 'bold' }}>₹960</div>
                        </div>
                    </div>
                </motion.div>

                {/* Sell Your Products Marketplace */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '20px' : '30px', gridColumn: isMobile ? '1' : 'span 3', background: 'linear-gradient(135deg, #fff5f7 0%, #ffe6ed 100%)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.15)', padding: '10px', borderRadius: '12px' }}><ShoppingCart size={isMobile ? 20 : 28} color="var(--secondary)" /></div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: 'var(--text-main)', margin: 0 }}>Women's Marketplace</h3>
                        </div>
                        <button 
                            onClick={() => setShowAddProduct(!showAddProduct)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: isMobile ? '10px 14px' : '12px 20px',
                                background: 'linear-gradient(135deg, var(--secondary), #ec4899)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
                                whiteSpace: 'nowrap',
                                fontSize: isMobile ? '0.9rem' : '1rem'
                            }}
                        >
                            <Plus size={isMobile ? 16 : 20} /> {isMobile ? 'Add' : 'Add My Product'}
                        </button>
                    </div>

                    {/* Add Product Form */}
                    {showAddProduct && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '12px', marginBottom: '16px', border: '2px dashed var(--secondary)' }}
                        >
                            <h4 style={{ marginTop: 0, color: 'var(--text-main)', fontSize: isMobile ? '1rem' : '1.1rem' }}>Add Your Product to Marketplace</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.8rem' : '0.9rem', marginBottom: '12px' }}>Help rural women grow their business by listing products online</p>
                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '12px' }}>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    value={productName}
                                    onChange={e => setProductName(e.target.value)}
                                    style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}
                                />
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={productCategory}
                                    onChange={e => setProductCategory(e.target.value)}
                                    style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}
                                />
                                <input
                                    type="number"
                                    placeholder="Price (₹)"
                                    value={productPrice}
                                    onChange={e => setProductPrice(e.target.value)}
                                    style={{ ...inputStyle, padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                                <button
                                    onClick={addProduct}
                                    style={{
                                        flex: 1,
                                        padding: isMobile ? '10px' : '12px',
                                        background: 'linear-gradient(135deg, var(--secondary), #ec4899)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: isMobile ? '0.9rem' : '1rem'
                                    }}
                                >
                                    List Product
                                </button>
                                <button
                                    onClick={() => setShowAddProduct(false)}
                                    style={{
                                        flex: 1,
                                        padding: isMobile ? '10px' : '12px',
                                        background: '#f0f0f0',
                                        color: 'var(--text-main)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        fontSize: isMobile ? '0.9rem' : '1rem'
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Products Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(150px, 1fr))',
                        gap: isMobile ? '12px' : '16px'
                    }}>
                        {products.map(product => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                style={{
                                    padding: isMobile ? '12px' : '16px',
                                    background: 'white',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}
                                whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(236, 72, 153, 0.15)' }}
                            >
                                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '6px' }}>{product.image}</div>
                                <h4 style={{ margin: '6px 0', color: 'var(--text-main)', fontSize: isMobile ? '0.85rem' : '1rem' }}>{product.name}</h4>
                                <span style={{ display: 'block', fontSize: isMobile ? '0.7rem' : '0.8rem', color: 'var(--secondary)', marginBottom: '6px' }}>{product.category}</span>
                                <div style={{ fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: 'bold', color: 'var(--secondary)' }}>₹{product.price}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    background: '#F8F9FA',
    color: 'var(--text-main)',
    outline: 'none'
};

export default Empowerment;
