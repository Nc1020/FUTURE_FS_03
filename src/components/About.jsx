import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { scroller } from "react-scroll";
import "./About.css";

export default function About() {
    const features = [
        "Experienced Staff",
        "Premium Products",
        "Hygienic Environment",
        "Customer Satisfaction",
    ];

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="about-image-side"
                >
                    <div className="about-img-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Salon Team"
                            className="about-img"
                        />
                        {/* Experience Badge */}
                        <div className="experience-badge">
                            <p className="exp-number">10+</p>
                            <p className="exp-text">Years of Experience</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="blur-circle blur-1"></div>
                    <div className="blur-circle blur-2"></div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="about-content-side"
                >
                    <div>
                        <span className="about-label">Our Story</span>
                        <h2 className="about-title">
                            Elevating Personal Style Since 2014
                        </h2>
                    </div>

                    <p className="about-desc">
                        At Luxe Salon, we believe that beauty is an art form. Founded in Ahmedabad with a vision to bring international standards to local grooming, we have grown into a trusted destination for thousands of happy clients.
                        <br /><br />
                        Our team of certified professionals is dedicated to providing you with the highest quality service in a relaxing and luxurious environment. We use only premium products to ensure your skin and hair get the care they deserve.
                    </p>

                    <div className="about-features">
                        {features.map((item, index) => (
                            <div key={index} className="feature-item">
                                <CheckCircle2 className="text-[#d4a373] w-6 h-6 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                                <span className="feature-text">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <button
                            className="btn-meet"
                            onClick={() => scroller.scrollTo('team-section', {
                                smooth: true,
                                duration: 800,
                                offset: -100,
                            })}
                        >
                            Meet Our Team
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Team Section */}
            <div id="team-section" className="container team-container">
                <div className="team-header">
                    <span className="about-label">Our Experts</span>
                    <h2 className="about-title">Meet Our Team</h2>
                </div>

                <div className="team-grid">
                    {[
                        {
                            name: "Aarav Patel",
                            role: "Master Stylist",
                            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        },
                        {
                            name: "Sneha Shah",
                            role: "Makeup Artist",
                            img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        },
                        {
                            name: "Rohan Verma",
                            role: "Barber",
                            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        },
                        {
                            name: "Priya Singh",
                            role: "Skin Specialist",
                            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="team-card"
                        >
                            <img src={member.img} alt={member.name} className="team-img" />
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-role">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
