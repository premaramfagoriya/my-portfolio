import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Skills from './components/Skills';

import './App.css'; // Optional for any global styling (background, fonts, etc.)

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <main>
                <Hero />
                <About />
                <Resume />
                <Skills />
                <Portfolio />
                <Contact />
            </main>
        </div>
    );
};

export default App;
