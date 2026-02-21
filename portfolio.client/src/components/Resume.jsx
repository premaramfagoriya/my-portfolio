import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-header">
                <h2>Professional Resume</h2>
                <a
                    href="https://drive.google.com/uc?export=download&id=1IliZl5JplpMMI84S6oCemOUCXr-SVUn1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                >
                    📄 View / Download Resume
                </a>
            </div>

            {/* Education */}
            <div className="resume-block">
                <h3>🎓 Education</h3>
                <p>
                    <strong>Bachelor of Technology (B.Tech) – Computer Science Engineering</strong><br />
                    Arya Institute of Engineering & Technology, Rajasthan<br />
                    2022 – 2026 | CGPA: <strong>9.0 / 10</strong>
                </p>
            </div>

            {/* Internship */}
            <div className="resume-block">
                <h3>💼 Internship Experience</h3>
                <p>
                    <strong>Full Stack Developer Intern (.NET & React)</strong><br />
                    Welspun Living Ltd | May 2025 – August 2025
                </p>
                <ul>
                    <li>Developed scalable enterprise web modules using ASP.NET Core and React.js.</li>
                    <li>Implemented secure JWT authentication and role-based access control (RBAC).</li>
                    <li>Designed and optimized SQL Server database schemas and RESTful APIs.</li>
                    <li>Built interactive dashboards with dynamic charts and advanced filtering features.</li>
                    <li>Improved backend performance through API optimization and structured architecture.</li>
                </ul>
            </div>

            {/* Projects */}
            <div className="resume-block">
                <h3>💻 Key Projects</h3>

                <p><strong>Grievance Management System (Enterprise HR Platform)</strong></p>
                <ul>
                    <li>Designed and developed a role-based HR platform for Admin, HR, and Employees.</li>
                    <li>Integrated JWT authentication and secure grievance tracking system.</li>
                    <li>Implemented advanced filtering, analytics dashboards, and reporting charts.</li>
                    <li>Built backend using ASP.NET Core Web API with SQL Server integration.</li>
                </ul>

                <p><strong>QuickMart – Online Grocery Delivery System</strong></p>
                <ul>
                    <li>Developed a full-stack e-commerce application with cart, checkout, and order tracking.</li>
                    <li>Designed RESTful APIs using ASP.NET Core Web API.</li>
                    <li>Managed relational database schema and optimized order workflows.</li>
                </ul>

                <p><strong>Smart Analytics Dashboard</strong></p>
                <ul>
                    <li>Built business intelligence dashboard with interactive data visualizations.</li>
                    <li>Implemented dynamic filtering and real-time reporting features.</li>
                </ul>

                <p><strong>Video Recording & Management System</strong></p>
                <ul>
                    <li>Developed browser-based video recording using MediaRecorder API.</li>
                    <li>Integrated secure backend storage with authentication and file management.</li>
                </ul>
            </div>

            {/* Certifications */}
            <div className="resume-block">
                <h3>📜 Certifications</h3>
                <ul>
                    <li>
                        <strong>.NET FullStack Developer Specialization</strong> – Coursera (Board Infinity) | 2025
                        <br />Courses Completed:
                        <ul>
                            <li>.NET Full Stack Foundation</li>
                            <li>Frontend Development using React</li>
                            <li>Backend Development for .NET Full Stack</li>
                        </ul>
                    </li>
                    <li>Full Stack Web Development Internship Certification – Welspun Living Ltd (2025)</li>
                    <li>Data Science & Machine Learning Training – Internshala (2024)</li>
                    <li>C & C++ Programming Certification – Internshala (2023)</li>
                </ul>
            </div>

            {/* Technical Skills */}
            <div className="resume-block">
                <h3>🛠 Technical Skills</h3>
                <p>
                    <strong>Frontend:</strong> React.js, JavaScript (ES6+), Bootstrap, HTML5, CSS3 <br />
                    <strong>Backend:</strong> ASP.NET Core, Web API, ADO.NET, MVC Architecture <br />
                    <strong>Database:</strong> SQL Server <br />
                    <strong>Tools:</strong> Git, GitHub, Postman, Power BI, VS Code <br />
                    <strong>Core Concepts:</strong> REST APIs, JWT Authentication, Role-Based Access Control, Database Design
                </p>
            </div>
        </section>
    );
};

export default Resume;
