import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaGlobe, FaDatabase, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Programming Languages",
            icon: <FaCode />,
            skills: ["Python", "Java", "JavaScript"]
        },
        {
            category: "Machine Learning & AI",
            icon: <FaBrain />,
            skills: ["TensorFlow / Keras", "CNN", "Computer Vision (OpenCV)", "Model Training", "Image Preprocessing"]
        },
        {
            category: "Web Development",
            icon: <FaGlobe />,
            skills: ["HTML, CSS, JavaScript", "React.js", "Streamlit"]
        },
        {
            category: "Backend & Databases",
            icon: <FaDatabase />,
            skills: ["Java Spring Boot", "REST APIs", "MySQL", "MongoDB", "Redis"]
        },
        {
            category: "Tools & Platforms",
            icon: <FaTools />,
            skills: ["Git & GitHub", "Linux", "Postman", "Docker (Basics)"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Technical Skills
            </motion.h2>

            <div className="skills-grid">
                {skillsData.map((category, index) => (
                    <motion.div
                        className="skill-card"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="skill-icon">{category.icon}</div>
                        <h3>{category.category}</h3>
                        <ul className="skill-list">
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
