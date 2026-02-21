import React from 'react';
import './Skills.css';

const skills = [
    // ===== FRONTEND =====
    { name: 'HTML5', level: 90, icon: '🌐' },
    { name: 'CSS3 / Bootstrap', level: 85, icon: '🎨' },
    { name: 'JavaScript (ES6+)', level: 85, icon: '📜' },
    { name: 'React.js', level: 80, icon: '⚛️' },
    { name: 'Redux (Learning)', level: 60, icon: '🔄' },

    // ===== .NET BACKEND =====
    { name: 'ASP.NET Core', level: 80, icon: '🔷' },
    { name: 'Web API (REST)', level: 85, icon: '🔗' },
    { name: 'ADO.NET', level: 75, icon: '🧩' },
    { name: 'MVC Architecture', level: 75, icon: '🏗️' },

    // ===== MERN BACKEND (Learning Phase) =====
    { name: 'Node.js (Learning)', level: 65, icon: '🟢' },
    { name: 'Express.js (Learning)', level: 60, icon: '🚀' },
    { name: 'MongoDB (Learning)', level: 65, icon: '🍃' },

    // ===== DATABASES =====
    { name: 'SQL Server', level: 85, icon: '🗄️' },
    { name: 'MySQL', level: 75, icon: '🛢️' },

    // ===== AUTH & SECURITY =====
    { name: 'JWT Authentication', level: 80, icon: '🔐' },
    { name: 'Role-Based Access Control', level: 80, icon: '🛡️' },

    // ===== TOOLS =====
    { name: 'Git & GitHub', level: 85, icon: '🐙' },
    { name: 'Postman', level: 80, icon: '📬' },
    { name: 'Power BI', level: 70, icon: '📊' },

    // ===== OTHER =====
    { name: 'Python', level: 75, icon: '🐍' }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <h2>Technical Skills</h2>
                <p>.NET Full Stack Developer | MERN Stack Learner</p>
            </div>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-info">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}%</span>
                        </div>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
