import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm <strong>Premaram</strong>, a passionate Full Stack Developer currently pursuing B.Tech in Computer Science 
        from Arya Institute of Engineering & Technology, Rajasthan. I specialize in building modern, responsive web applications using 
        <strong> React.js</strong> and <strong>ASP.NET Core</strong>.
      </p>
      <p>
        I enjoy solving real-world problems through code and have hands-on experience with both frontend and backend development. I'm also enthusiastic about 
        data analytics, having worked with tools like <strong>Python, Power BI, and Tableau</strong>.
      </p>

      <h3>Technical Skills</h3>
      <ul className="skills-list">
        <li><strong>Languages:</strong> C#, JavaScript, SQL, HTML, CSS, Python</li>
        <li><strong>Frontend:</strong> React.js, Bootstrap, Tailwind CSS</li>
        <li><strong>Backend:</strong> ASP.NET Core MVC, REST APIs, ADO.NET</li>
        <li><strong>Database:</strong> Microsoft SQL Server, MySQL</li>
        <li><strong>Tools:</strong> Git, GitHub, Visual Studio, Postman, Figma</li>
        <li><strong>Other:</strong> JWT Authentication, Responsive Design, Data Analysis</li>
      </ul>
    </section>
  );
};

export default About;
