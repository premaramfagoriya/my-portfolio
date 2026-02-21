import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>

            <p>
                Hello! I'm <strong>Premaram Fagoriya</strong>, a passionate and result-driven
                <strong> Full Stack Developer</strong> currently pursuing B.Tech in Computer Science
                Engineering at Arya Institute of Engineering & Technology, Rajasthan.
            </p>

            <p>
                I specialize in building scalable and secure web applications using
                <strong> .NET Full Stack (ASP.NET Core + React)</strong> and I am currently
                expanding my expertise into the <strong>MERN Stack</strong> ecosystem.
                I enjoy designing clean architectures, implementing secure authentication systems,
                and creating responsive, user-friendly interfaces.
            </p>

            <p>
                During my internship and academic projects, I have worked on enterprise-level
                applications including HR platforms, e-commerce systems, and analytics dashboards.
                These experiences strengthened my understanding of backend architecture,
                REST APIs, database design, and performance optimization.
            </p>

            <p>
                Beyond development, I have a strong interest in data analytics and business
                insights, which helps me build applications that are not just functional,
                but also data-driven and impactful.
            </p>

            <p className="about-highlight">
                🚀 My goal is to grow as a versatile software engineer who can build
                end-to-end scalable solutions and contribute to impactful real-world products.
            </p>
        </section>
    );
};

export default About;
