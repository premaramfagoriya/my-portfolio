import React, { useState } from 'react';
import './Portfolio.css';

import gms from "../assets/emp_dashboard.jpg";
import quick from "../assets/Quickmart.jpg";
import smart from "../assets/analytics1.jpg";
import videoImg from "../assets/Recording.jpg";
import ai_resume from "../assets/AiResume_user.jpg";

/* GMS Gallery images */
import gms0 from "../assets/Login_main.jpg";
import gms1 from "../assets/employee_dashboard.jpg";
import gms2 from "../assets/emp_form.jpg";
import gms3 from "../assets/emp_trackReq.jpg";
import gms4 from "../assets/hr_dashboard.jpg";
import gms5 from "../assets/hr_charts.jpg";
import gms6 from "../assets/hr_reports.jpg";
import gms7 from "../assets/loginAuditor.jpg";
import gms8 from "../assets/auditorcharts.jpg";
import gmsdemo from "../assets/GMS.mp4";

// AI Resume Gallery
import ai1 from "../assets/AiResume_user.jpg";
import ai2 from "../assets/AiResume_Login.jpg";
import ai3 from "../assets/AiResume_HRDashboard.jpg";
import ai4 from "../assets/AiResume_HrAnalytics.jpg";
import ai5 from "../assets/AiResume_Job.jpg";
import aidemo from "../assets/AiResume_Demo1.mp4";

/* Video System Gallery */
import video1 from "../assets/Recording.jpg";
import video2 from "../assets/VideoRecording.jpg";

// Quick Mart Gallery 
import quickdemo from "../assets/QuickMart.mp4";


const projects = [
    {
        title: "AI Resume Screening System",
        description:
        "AI-powered resume screening platform that automatically evaluates resumes using ATS scoring, skill extraction, and intelligent job-role matching.",
        tech: '.NET Core Web API, React.js, SQL Server, Dapper, JWT, OpenRouter / Gemini API',
        github: "https://github.com/premaramfagoriya/AI-Resume-Screening-System",
        image: ai_resume,
        gallery: [ai1, ai2, ai3,ai4,ai5],
        video: aidemo
     },

    {
        title: 'GMS (Grievance Management System)',
        description: 'Enterprise-level grievance platform with role-based dashboards, JWT authentication, charts, and automated tracking.',
        tech: '.NET Core Web API, React.js, SQL Server, JWT',
        github: 'https://github.com/premaramfagoriya/Grievance_Management_System',
        image: gms,

        gallery: [
            gms0,
            gms1,
            gms2,
            gms3,
            gms4,
            gms5,
            gms6,
            gms7,
            gms8
        ],

        video: gmsdemo
    },


    {
        title: 'QuickMart (Grocery Delivery App)',
        description: 'Full-stack e-commerce platform with cart, order processing, authentication, and database integration.',
        tech: '.NET Core, React.js, SQL Server, JWT',
        github: null,
        image: quick,

        gallery: [
            quick   // use main image until more screenshots added
        ],

        video: quickdemo
    },


    {
        title: 'Smart Analytics Dashboard',
        description: 'Interactive business analytics dashboard with real-time charts and reporting.',
        tech: '.NET Core, React.js, SQL Server, Chart.js',
        github: 'https://github.com/premaramfagoriya/smart-analytics',
        image: smart,

        gallery: [
            smart
        ],

        video: null
        // OR use youtube embed link here if available
    },


    {
        title: 'Video Recording System',
        description: 'Video recording and management system using WebRTC and secure backend.',
        tech: '.NET Core, React.js, SQL Server, WebRTC',
        github: 'https://github.com/premaramfagoriya/Video-Recording-App',
        image: videoImg,

        gallery: [
            video1,
            video2
        ],

        video: null
    }

];


const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openGallery = (project) => {
        setSelectedProject(project);
    };

    const closeGallery = () => {
        setSelectedProject(null);
    };


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

                                {proj.github && (

                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-btn"
                                    >
                                        GitHub
                                    </a>

                                )}


                                <button
                                    className="view-btn"
                                    onClick={() => openGallery(proj)}
                                >
                                    View Demo
                                </button>


                            </div>

                        </div>


                        <div className="project-content">

                            <h3>{proj.title}</h3>

                            <p>{proj.description}</p>


                            <div className="tech-tags">

                                {proj.tech.split(', ').map((tech, i) => (

                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                ))}

            </div>



            {/* Modal Gallery */}

            {selectedProject && (

                <div className="gallery-modal">

                    <div className="gallery-content">

                        <span
                            className="close-btn"
                            onClick={closeGallery}
                        >
                            ×
                        </span>


                        <h2>{selectedProject.title}</h2>


                        {selectedProject.video && (

                            <iframe
                                width="100%"
                                height="400"
                                src={selectedProject.video}
                                title="Project Demo"
                                allowFullScreen
                            />

                        )}


                        <div className="gallery-grid">

                            {selectedProject.gallery.map((img, i) => (

                                <img
                                    key={i}
                                    src={img}
                                    alt="Project Screenshot"
                                />

                            ))}

                        </div>


                    </div>

                </div>

            )}

        </section>

    );

};


export default Portfolio;