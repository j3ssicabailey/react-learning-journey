// src/pages/HomePage.tsx
import React, { useState } from 'react';
import '../styles/Home.css';

// Instead of using React Icons, we'll use simple text or HTML entities
const HomePage: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="homepage">
        {/* Navigation */}
        <nav className="navbar">
            <div className="navbar-container">
            <div className="logo">
                <span className="logo-icon">⚛️</span>
                <span>React Journey</span>
            </div>
            
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <span>✕</span> : <span>☰</span>}
            </div>
            
            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                <a href="#overview" className="nav-link" onClick={() => setActiveSection('overview')}>
                    Overview
                </a>
                </li>
                <li className="nav-item">
                <a href="#notes" className="nav-link" onClick={() => setActiveSection('notes')}>
                    Notes
                </a>
                </li>
                <li className="nav-item">
                <a href="#examples" className="nav-link" onClick={() => setActiveSection('examples')}>
                    Examples
                </a>
                </li>
                <li className="nav-item">
                <a href="#resources" className="nav-link" onClick={() => setActiveSection('resources')}>
                    Resources
                </a>
                </li>
                <li className="nav-item">
                <a href="https://github.com/yourusername" className="nav-link github">
                    <span>🔗</span>
                </a>
                </li>
            </ul>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
            <div className="hero-content">
            <h1>My React Learning Journey</h1>
            <p>Documentation and examples from my exploration of React & TypeScript</p>
            <div className="hero-buttons">
                <button className="primary-btn">View Examples</button>
                <button className="secondary-btn">
                <span>🔗</span> GitHub Repo
                </button>
            </div>
            </div>
        </section>

        {/* Main Content */}
        <main className="main-content">
            {/* Section Navigation */}
            <div className="section-nav">
            <button 
                className={activeSection === 'overview' ? 'active' : ''} 
                onClick={() => setActiveSection('overview')}
            >
                Overview
            </button>
            <button 
                className={activeSection === 'progress' ? 'active' : ''} 
                onClick={() => setActiveSection('progress')}
            >
                Progress
            </button>
            <button 
                className={activeSection === 'goals' ? 'active' : ''} 
                onClick={() => setActiveSection('goals')}
            >
                Learning Goals
            </button>
            </div>

            {/* Active Section Content */}
            <div className="section-content">
            {activeSection === 'overview' && (
                <div className="section">
                <h2>Overview</h2>
                <p>
                    Welcome to my personal documentation site tracking my journey into modern
                    frontend development with React and TypeScript. This site serves as both a
                    learning project and a resource for my notes, code examples, and insights
                    gained along the way.
                </p>
                </div>
            )}
            
            {activeSection === 'progress' && (
                <div className="section">
                <h2>Current Progress</h2>
                <p>
                    I've started with the fundamentals of React and TypeScript setup. This
                    includes creating components, understanding props and state, and implementing
                    basic navigation. My next steps focus on more advanced state management
                    patterns and optimization techniques.
                </p>
                </div>
            )}
            
            {activeSection === 'goals' && (
                <div className="section">
                <h2>Learning Goals</h2>
                <p>
                    My primary goals include mastering React hooks, TypeScript integration, 
                    state management, and building reusable component libraries. I'm aiming to
                    build a solid foundation for developing professional-grade applications
                    with modern development practices.
                </p>
                </div>
            )}
            </div>

            {/* Topics Section */}
            <section className="topics-section">
            <h2>Topics I'm Exploring</h2>
            <div className="topic-cards">
                <div className="topic-card">
                <div className="topic-icon blue">
                    <span>⚛️</span>
                </div>
                <h3>Components</h3>
                <p>Building blocks of React applications</p>
                </div>
                
                <div className="topic-card">
                <div className="topic-icon green">
                    <span>📚</span>
                </div>
                <h3>Hooks</h3>
                <p>Function-based state and lifecycle features</p>
                </div>
                
                <div className="topic-card">
                <div className="topic-icon purple">
                    <span>🔷</span>
                </div>
                <h3>TypeScript</h3>
                <p>Adding static typing to JavaScript</p>
                </div>
                
                <div className="topic-card">
                <div className="topic-icon amber">
                    <span>🔄</span>
                </div>
                <h3>State Management</h3>
                <p>Handling application state effectively</p>
                </div>
            </div>
            </section>

            {/* Latest Updates */}
            <section className="updates-section">
            <h2>Latest Updates</h2>
            <div className="updates-list">
                <div className="update-item">
                <div className="update-date">April 15, 2025</div>
                <div className="update-content">
                    <h3>Created Project Scaffold</h3>
                    <p>Set up React with TypeScript using Yarn and VS Code</p>
                </div>
                </div>
                
                <div className="update-item">
                <div className="update-date">April 15, 2025</div>
                <div className="update-content">
                    <h3>Homepage Design</h3>
                    <p>Designed and implemented the responsive homepage</p>
                </div>
                </div>
            </div>
            </section>
        </main>

        {/* Footer */}
        <footer className="footer">
            <div className="footer-content">
            <div className="footer-info">
                <h2>React Learning Journey</h2>
                <p>A personal documentation of my growth as a developer</p>
            </div>
            <div className="footer-links">
                <a href="https://github.com/yourusername" aria-label="GitHub">
                <span>🔗</span>
                </a>
                <a href="#overview" aria-label="Code">
                <span>⚛️</span>
                </a>
            </div>
            </div>
            <div className="footer-bottom">
            <p>Created with React & TypeScript - {new Date().getFullYear()}</p>
            </div>
        </footer>
        </div>
    );
};

export default HomePage;