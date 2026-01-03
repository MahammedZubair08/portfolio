import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: '#about' },
        { name: 'Skills', to: '#skills' },
        { name: 'Projects', to: '#projects' },
        { name: 'Contact', to: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <motion.div
                    className="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="#">SZ</a>
                </motion.div>

                <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                        >
                            <a href={link.to} onClick={() => setIsOpen(false)}>{link.name}</a>
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {/* <a href="/resume.pdf" className="btn-small" target="_blank" rel="noopener noreferrer">Resume</a> */}
                    </motion.li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
