import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-scroll";
import "./Hero.css";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    return (
        <section id="home" className="hero-section">
            {/* Background Image */}
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                    alt="Premium Salon Interior"
                />
                <div className="hero-overlay" style={{ background: 'linear-gradient(to top, black, transparent)' }} />
            </div>

            {/* Content */}
            <div className="hero-content">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="hero-box"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="hero-title"
                    >
                        Experience Premium <br />
                        <span>Beauty & Wellness</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="hero-subtitle"
                    >
                        Welcome to Luxe Salon. Where style meets sophistication in the heart of Ahmedabad. Indulge in our world-class hair, skin, and spa treatments.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="hero-actions"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn-cta"
                        >
                            Book Appointment <MoveRight size={20} />
                        </Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn-cta-outline"
                        >
                            View Services
                        </Link>
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
}
