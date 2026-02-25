import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, User } from "lucide-react";
import "./Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === "/") {
                setScrolled(window.scrollY > 50);
            } else {
                setScrolled(true);
            }
        };

        // Initial check
        if (location.pathname !== "/") {
            setScrolled(true);
        } else {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: "Home", to: "home" },
        { name: "Services", to: "services" },
        { name: "About", to: "about" },
        { name: "Reviews", to: "reviews" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-container">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="logo"
                >
                    Luxe<span>Salon</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="btn-book"
                    >
                        <Phone size={16} /> Book Now
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="mobile-nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn-book"
                            style={{ fontSize: '1rem', padding: '12px 30px' }}
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone size={18} /> Book Appointment
                        </Link>

                    </div>
                )}
            </div>
        </header>
    );
}
