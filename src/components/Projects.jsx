import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Handwritten Digit Recognition",
            tech: ["Machine Learning", "Computer Vision", "Streamlit", "CNN", "OpenCV"],
            description: "CNN-based system trained on MNIST dataset supporting single & multi-digit recognition with advanced image preprocessing and contour segmentation.",
            github: "https://github.com/MahammedZubair08/handwritten_digit_recognition", // Placeholder as requested
            external: "https://handwrittendigitrecognition-vfrccqqrlmwfpzgam9vgeg.streamlit.app/" // Placeholder as requested
        },
        {
            title: "MediConnect AI – Smart Healthcare Platform",
            tech: ["Full Stack", "Security", "Flask", "JWT", "Redis"],
            description: "Secure patient–doctor interaction system featuring AI-based symptom checker (Flask microservice), JWT authentication & role-based access control.",
            github: "https://github.com/MahammedZubair08/MediConnect-AI", // Not provided
            external: "" // Not provided
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Featured Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="project-top">
                            <div className="folder-icon">
                                <FaFolder />
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>

                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>

                        <ul className="project-tech-list">
                            {project.tech.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                            ))}
                        </ul>

                        <div className="project-links-bottom">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub /> <span>Source Code</span>
                                </a>
                            )}
                            {project.external && (
                                <a href={project.external} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt /> <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
