import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        { id: 1, name: 'Handmade Textiles', category: 'Crafts', price: 500, image: 'https://images.unsplash.com/photo-1606103920295-9a091573f160?auto=format&fit=crop&q=80&w=300', seller: 'Radha Devi' },
        { id: 2, name: 'Organic Spices', category: 'Food', price: 300, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300', seller: 'Sita Kumari' },
        { id: 3, name: 'Jute Bags', category: 'Eco-Friendly', price: 400, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=300', seller: 'Lakshmi' }
    ]);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showBuyModal, setShowBuyModal] = useState(null); // Stores product ID

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

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const addProduct = () => {
        if (productName && productCategory && productPrice && selectedImage) {
            const newProduct = {
                id: products.length + 1,
                name: productName,
                category: productCategory,
                price: Number(productPrice),
                image: selectedImage,
                seller: 'You'
            };
            setProducts([...products, newProduct]);
            setProductName('');
            setProductCategory('');
            setProductPrice('');
            setSelectedImage(null);
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
                {/* Voice Assistant - Unchanged */}
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

                {/* Sell Your Products Marketplace - Updated */}
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
                    <AnimatePresence>
                        {showAddProduct && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                                style={{
                                    padding: isMobile ? '20px' : '24px',
                                    background: 'white',
                                    borderRadius: '16px',
                                    marginBottom: '24px',
                                    border: '2px solid var(--secondary)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}
                            >
                                <h4 style={{ marginTop: 0, color: 'var(--text-main)', fontSize: isMobile ? '1.1rem' : '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Plus size={20} color="var(--secondary)" /> Sell Your Product
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.9rem' : '1rem', marginBottom: '20px' }}>
                                    Upload a photo of your work and set your price to start earning.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '20px' }}>
                                    {/* Image Upload - Prominent Area */}
                                    <div style={{ gridColumn: isMobile ? '1' : 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-main)' }}>1. Upload Photo of Item</label>
                                        <div style={{ position: 'relative', height: isMobile ? '180px' : '200px' }}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 10 }}
                                            />
                                            <div style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '12px',
                                                border: '2px dashed var(--border-color)',
                                                background: selectedImage ? 'white' : '#F8F9FA',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s ease',
                                                overflow: 'hidden'
                                            }}>
                                                {selectedImage ? (
                                                    <img src={selectedImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                ) : (
                                                    <>
                                                        <div style={{ padding: '16px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%', marginBottom: '12px' }}>
                                                            <Camera size={32} color="var(--secondary)" />
                                                        </div>
                                                        <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>Tap to Take Photo</span>
                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>of your craft, food, or product</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {selectedImage && <div style={{ textAlign: 'center', marginTop: '8px', color: 'var(--success)', fontSize: '0.9rem', fontWeight: '500' }}>Starting fresh? Tap image to change</div>}
                                    </div>

                                    {/* Product Details */}
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-main)' }}>2. Product Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Handmade Shawl"
                                            value={productName}
                                            onChange={e => setProductName(e.target.value)}
                                            style={{ ...inputStyle, padding: '16px', fontSize: '1rem', border: '1px solid #E5E7EB' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-main)' }}>3. Category</label>
                                        <select
                                            value={productCategory}
                                            onChange={e => setProductCategory(e.target.value)}
                                            style={{ ...inputStyle, padding: '16px', fontSize: '1rem', border: '1px solid #E5E7EB', appearance: 'none' }}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Crafts">Handicrafts & Textiles</option>
                                            <option value="Food">Homemade Food & Spices</option>
                                            <option value="Agri">Organic Produce</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div style={{ gridColumn: isMobile ? '1' : 'span 2' }}>
                                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-main)' }}>4. Your Price (Income)</label>
                                        <div style={{ position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>₹</span>
                                            <input
                                                type="number"
                                                placeholder="00"
                                                value={productPrice}
                                                onChange={e => setProductPrice(e.target.value)}
                                                style={{ ...inputStyle, padding: '16px 16px 16px 40px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--success)' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                    <button
                                        onClick={addProduct}
                                        style={{
                                            flex: 2,
                                            padding: '16px',
                                            background: 'linear-gradient(135deg, var(--secondary), #ec4899)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <DollarSign size={20} /> List Item for Sale
                                    </button>
                                    <button
                                        onClick={() => setShowAddProduct(false)}
                                        style={{
                                            flex: 1,
                                            padding: '16px',
                                            background: 'white',
                                            color: 'var(--text-muted)',
                                            border: '2px solid var(--border-color)',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Products Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(220px, 1fr))',
                        gap: isMobile ? '12px' : '20px'
                    }}>
                        {products.map(product => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(236, 72, 153, 0.15)' }}
                            >
                                <div style={{ height: '150px', background: '#f0f0f0', position: 'relative' }}>
                                    {product.image.startsWith('http') || product.image.startsWith('blob') ? (
                                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>{product.image}</div>
                                    )}
                                    <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.9)', padding: '4px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                        {product.category}
                                    </div>
                                </div>
                                <div style={{ padding: '12px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h4 style={{ margin: '0 0 4px', color: 'var(--text-main)', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>{product.name}</h4>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>By {product.seller}</div>

                                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 'bold', color: 'var(--secondary)' }}>₹{product.price}</div>
                                        <button
                                            onClick={() => setShowBuyModal(product.id)}
                                            style={{
                                                background: 'var(--text-main)',
                                                color: 'white',
                                                border: 'none',
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                cursor: 'pointer',
                                                fontSize: '0.8rem',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Buy Modal Simulation */}
                    <AnimatePresence>
                        {showBuyModal && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000,
                                backdropFilter: 'blur(2px)'
                            }}>
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    style={{
                                        background: 'white',
                                        padding: '24px',
                                        borderRadius: '16px',
                                        width: '90%',
                                        maxWidth: '350px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ width: '60px', height: '60px', background: '#D1FAE5', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                        <DollarSign size={32} />
                                    </div>
                                    <h3 style={{ margin: '0 0 8px' }}>Contact Seller</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                                        Connect with <b>{products.find(p => p.id === showBuyModal)?.seller}</b> to purchase <b>{products.find(p => p.id === showBuyModal)?.name}</b>.
                                    </p>
                                    <button
                                        onClick={() => setShowBuyModal(null)}
                                        style={{ width: '100%', padding: '12px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
                                    >
                                        Contact via WhatsApp
                                    </button>
                                    <button
                                        onClick={() => setShowBuyModal(null)}
                                        style={{ marginTop: '12px', width: '100%', padding: '12px', background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer' }}
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Skill Detection - Unchanged */}
                <motion.div className="glass-panel" variants={itemVariants} style={{ padding: isMobile ? '20px' : '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '10px', borderRadius: '12px' }}><Camera size={isMobile ? 20 : 24} color="var(--accent)" /></div>
                        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', color: 'var(--text-main)', margin: 0 }}>{t('skillDetection')}</h3>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.85rem' : '0.95rem', marginBottom: '16px', lineHeight: '1.5' }}>{t('tellUsSkill')}</p>
                    <input type="text" placeholder='e.g. "Tailoring"' style={{ width: '100%', padding: isMobile ? '10px' : '14px', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#F8F9FA', color: 'var(--text-main)', marginBottom: '12px', outline: 'none', fontSize: isMobile ? '0.9rem' : '1rem' }} />
                    <button className="btn-primary" style={{ width: '100%', background: 'var(--text-main)', padding: isMobile ? '10px' : '14px', fontSize: isMobile ? '0.9rem' : '1rem' }}>{t('detect')}</button>
                </motion.div>

                {/* Calculator - Unchanged */}
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
