import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-info">
            <h2>⚛️ React Learning Journey</h2>
            <p>A personal documentation of my growth as a developer</p>
            </div>
            <div className="footer-links">
            <a href="https://github.com/j3ssicabailey" aria-label="GitHub">
                <span>🔗</span>
            </a>
            <a href="#overview" aria-label="Code">
                <span>⚛️</span>
            </a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Created with React & TypeScript – {new Date().getFullYear()}</p>
            <img src="/images/small-logo-lilac.png" alt="Personal logo" />
        </div>
        </footer>
    );
};

export default Footer;
