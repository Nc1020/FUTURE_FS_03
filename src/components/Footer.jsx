import { Facebook, Instagram, Twitter, Heart } from "lucide-react";
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h2>
                            Luxe<span>Salon</span>
                        </h2>
                        <p className="footer-desc">
                            Redefining beauty with a touch of luxury. Visit us for a transformative experience in the heart of Ahmedabad.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={18} /></a>
                            <a href="#" className="social-icon"><Instagram size={18} /></a>
                            <a href="#" className="social-icon"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="home" smooth={true} className="footer-link">Home</Link></li>
                            <li><Link to="about" smooth={true} className="footer-link">About Us</Link></li>
                            <li><Link to="services" smooth={true} className="footer-link">Services</Link></li>
                            <li><Link to="reviews" smooth={true} className="footer-link">Reviews</Link></li>
                            <li><Link to="contact" smooth={true} className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li>Hair Styling</li>
                            <li>Bridal Makeup</li>
                            <li>Skin Care</li>
                            <li>Manicure & Pedicure</li>
                            <li>Spa Therapy</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-col">
                        <h4>Stay Updated</h4>
                        <p className="footer-desc" style={{ marginBottom: '1rem' }}>
                            Subscribe to our newsletter for latest offers and beauty tips.
                        </p>
                        <form className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Luxe Salon. All rights reserved.</p>
                    <p className="made-with">
                        Made with <Heart size={14} className="heart-icon" /> in Ahmedabad, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
