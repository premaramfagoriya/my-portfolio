import React, { useState } from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header id="sidebar">
            <div className="sidebar-container">
                <img src="./assets/Prem_formal_photo.jpg" alt="Premaram" className="profile-img" />
                <div className="desktop-content">
                    <h1 className="name">Premaram</h1>
                    <p className="role">Full Stack Developer</p>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/premaramfagoriya" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/premaram-fagoriya" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="mailto:premaramfagoriya@email.com"><FaEnvelope /></a>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                    <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                    <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    <a href="/Premaram_Resume.pdf" download className="btn-resume">
                        📄 Download Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Sidebar;