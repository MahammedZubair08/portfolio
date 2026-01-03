import React from 'react';
import './Footer.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                {/* Reusing socials here for mobile mainly */}
                <a href="https://www.linkedin.com/in/shaik-mahammed-zubair-2b0949318/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:s.mahammed.zubair@gmail.com"><FaEnvelope /></a>
                {/* <a href="#"><FaGithub /></a> */}
            </div>
            <p className="footer-text">
                Designed & Built by Shaik Mahammed Zubair
            </p>
        </footer>
    );
};

export default Footer;
