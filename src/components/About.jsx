import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>
            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        I am a student passionate about building intelligent, scalable applications. My journey involves combining AI/ML models with modern web technologies to solve real-world problems.
                    </p>
                    <p>Here are some of my key highlights:</p>
                    <ul className="about-list">
                        <li>Interested in Machine Learning, Computer Vision, and Backend Development</li>
                        <li>Strong foundation in Data Structures & Algorithms</li>
                        <li>Experience with Full-Stack Development (Frontend + Backend + ML Integration)</li>
                        <li>Actively building projects to strengthen industry-ready skills</li>
                        <li>Open to internships, collaborations, and learning opportunities</li>
                    </ul>

                    <p><strong>Currently Learning:</strong></p>
                    <ul className="about-list">
                        <li>Advanced Machine Learning Techniques</li>
                        <li>System Design Basics</li>
                        <li>Cloud Deployment (AWS)</li>
                        <li>CI/CD Fundamentals</li>
                    </ul>
                </motion.div>
                {/* You could add a profile image here if provided */}
            </div>
        </section>
    );
};

export default About;
