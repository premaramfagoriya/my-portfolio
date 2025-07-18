import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>

      <div className="resume-block">
        <h3>🎓 Education</h3>
        <p><strong>B.Tech in Computer Science</strong><br />
        Arya Institute of Engineering & Technology, Rajasthan<br />
        2022 – 2026 | CGPA: 9.0/10</p>
      </div>

      <div className="resume-block">
        <h3>💼 Internship</h3>
        <p><strong>Full Stack Web Development with .NET & React</strong><br />
        Welspun Living Ltd | May 2024 – July 2024</p>
      </div>

      <div className="resume-block">
        <h3>💻 Projects</h3>

        <p><strong>Grievance Management System</strong><br />
        Built a full-stack web app with dashboards for Admin, HR, and Employees using ASP.NET Core MVC and React.js. Integrated JWT authentication, dynamic charts, and ADO.NET + SQL Server for backend logic.</p>

        {/*<p><strong>Employee Registration & Tracking System</strong><br />*/}
        {/*Developed responsive forms with image upload, integrated .NET Core APIs with React, and implemented validation and CRUD operations.</p>*/}

        <p><strong>Stock Market Analysis Dashboard</strong><br />
        Used Python and Tableau to analyze market trends and forecast future patterns using machine learning models.</p>

        <p><strong>IPL Data Visualization</strong><br />
        Conducted data analysis using Python and visualized performance metrics in Power BI.</p>
      </div>

      <div className="resume-block">
        <h3>📜 Certifications</h3>
        <ul>
          <li>Full Stack Web Development – Welspun (May 2024 – July 2024)</li>
          <li>Data Science Training – Internshala (July 2024 – August 2024)</li>
          <li>C and C++ Programming – Internshala (Aug 2023 – Oct 2023)</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
