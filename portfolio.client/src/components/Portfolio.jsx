import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: 'Grievance Management System',
        description: 'Full-stack web app with role-based dashboards for Admin, HR, and Employees. JWT auth, charts, and SQL integration.',
        tech: 'ASP.NET Core, React.js, SQL Server',
        image: './assets/project1.jpg'
    },
    //{
    //    title: 'Employee Registration System',
    //    description: 'Form-based employee tracking app with validations, image uploads, and API integration.',
    //    tech: 'React.js, .NET Core API, Bootstrap',
    //    image: './assets/project2.jpg'
    //},
    {
        title: 'Stock Market Dashboard',
        description: 'Forecasted stock trends using ML and visualized data in Tableau dashboards.',
        tech: 'Python, ML, Tableau',
        image: './assets/project3.jpg'
    },
    {
        title: 'IPL Data Visualization',
        description: 'Analyzed IPL performance stats with Power BI dashboards and Python scripts.',
        tech: 'Python, Power BI',
        image: './assets/project4.jpg'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="section-header">
                <h2>My Projects</h2>
                <p>Here are some of my recent works</p>
            </div>
            <div className="project-grid">
                {projects.map((proj, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={proj.image} alt={proj.title} />
                            <div className="project-overlay">
                                <a href="#" className="view-btn">View Project</a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            <div className="tech-tags">
                                {proj.tech.split(', ').map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;