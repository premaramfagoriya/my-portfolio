import React from 'react';
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        Hello, I'm <span className="highlight-name">Premaram Fagoriya</span>
                    </h1>
                    <h2>Full Stack Developer | Data Analytics</h2>
                    <p className="typed-text">
                        <Typewriter
                            words={['Building modern web applications', 'Passionate about clean code', 'Data Enthusiast', 'Problem Solver']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="contact-btn">Contact Me</a>
                        <a href="#portfolio" className="portfolio-btn">View My Work</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;