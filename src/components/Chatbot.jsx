import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your Personal Assistant. How can I help you be safe today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Mock response logic
        setTimeout(() => {
            let botResponse = "I'm here to support you. Could you clarify?";
            if (input.toLowerCase().includes('job') || input.toLowerCase().includes('skill')) {
                botResponse = "Check out the Empowerment Hub! You can detect your skills and find opportunities there.";
            } else if (input.toLowerCase().includes('safe') || input.toLowerCase().includes('alert')) {
                botResponse = "If you are in danger, please use the SOS button on the Dashboard immediately.";
            } else if (input.toLowerCase().includes('contact')) {
                botResponse = "You can manage your Emergency Contacts in the Profile section.";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                className="btn-primary"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
            >
                <MessageSquare size={28} />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="glass-panel"
                        style={{
                            position: 'fixed',
                            bottom: '100px',
                            right: '30px',
                            width: '350px',
                            height: '500px',
                            zIndex: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            backgroundColor: 'var(--card-bg)', // Ensure background contrast
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '16px', background: 'var(--primary)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Bot size={20} /> Personal Assistant
                            </span>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    style={{
                                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        background: msg.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                                        color: msg.sender === 'user' ? 'white' : 'var(--text-main)',
                                        padding: '10px 14px',
                                        borderRadius: '12px',
                                        maxWidth: '80%',
                                        border: msg.sender === 'bot' ? '1px solid var(--glass-border)' : 'none'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '16px', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '8px' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none'
                                }}
                            />
                            <button
                                onClick={handleSend}
                                className="btn-primary"
                                style={{ padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
