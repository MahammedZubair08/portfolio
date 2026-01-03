import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero-content">
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Shaik Mahammed Zubair.
                </motion.h1>
                <motion.h2
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    AI & Machine Learning Student.
                </motion.h2>
                <motion.p
                    className="hero-desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    I'm a student from India passionate about building intelligent, scalable, and production-ready applications by combining AI/ML models with modern web technologies. I focus on solving real-world problems using Computer Vision, Deep Learning, and Full-Stack Development.
                </motion.p>

                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a href="#projects" className="btn">Check out my projects!</a>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/shaik-mahammed-zubair-2b0949318/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="mailto:s.mahammed.zubair@gmail.com"><FaEnvelope /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
