import React from 'react';
import './Skills.css';

const skills = [
    { name: 'HTML', level: 80, icon: '💻' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 70, icon: '📜' },
    { name: 'React.js', level: 70, icon: '⚛️' },
    { name: 'ASP.NET Core', level: 70, icon: '🔷' },
    { name: 'SQL / MySQL', level: 80, icon: '🗃️' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'Power BI / Tableau', level: 60, icon: '📊' }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <h2>Technical Skills</h2>
                <p>Here are the technologies I work with</p>
            </div>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-info">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${skill.level}%` }}
                                data-level={skill.level}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;