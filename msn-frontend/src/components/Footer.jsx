import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Microsoft</p>
                <ul className="social-links">
                    <li><a href="https://www.microsoft.com/en-us/privacy/privacystatement" target="_blank" rel="noopener noreferrer">Privacy & Cookies</a></li>
                    <li><a href="https://www.microsoft.com/en-us/servicesagreement/" target="_blank" rel="noopener noreferrer">Terms of use</a></li>
                    <li><a href="https://about.ads.microsoft.com/en?s_cid=dig-src_edgedhpfoot" target="_blank" rel="noopener noreferrer">Advertise</a></li>
                </ul>
                {/* <ul className="quick-links">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul> */}
            </div>
        </footer>
    );
};

export default Footer;
   