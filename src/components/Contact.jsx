import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.p
                className="contact-overline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                What's Next?
            </motion.p>
            <motion.h2
                className="contact-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Get In Touch
            </motion.h2>
            <motion.p
                className="contact-desc"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                I am currently looking for internships and new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/shaik-mahammed-zubair-2b0949318/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/MahammedZubair08" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                        <FaGithub /> GitHub
                    </a>
                    <a href="mailto:s.mahammed.zubair@gmail.com" className="contact-link-item">
                        <FaEnvelope /> Email
                    </a>
                </div>
            </motion.div>
        </section >
    );
};

export default Contact;
