import { Star } from "lucide-react";
import { motion } from "framer-motion";
import "./Testimonials.css";

export default function Testimonials() {
    const reviews = [
        {
            name: "Priya Patel",
            role: "Regular Customer",
            comment: "Absolutely love the service at Luxe Salon! The staff is so professional and the new spa treatments are heavenly. Highly recommend!",
            initials: "PP",
            bg: "#fce7f3", // pink-100
            color: "#ec4899" // pink-500
        },
        {
            name: "Rahul Sharma",
            role: "Model",
            comment: "Best haircut I've had in Ahmedabad. They really understood the style I wanted and executed it perfectly. Great vibe too.",
            initials: "RS",
            bg: "#dbeafe", // blue-100
            color: "#3b82f6" // blue-500
        },
        {
            name: "Anjali Mehta",
            role: "Bride",
            comment: "They did my bridal makeup and mehendi. I felt like a princess! The attention to detail was incredible. Thank you team!",
            initials: "AM",
            bg: "#f3e8ff", // purple-100
            color: "#a855f7" // purple-500
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <section id="reviews" className="testimonials-section">
            <div className="testimonials-container">
                <span className="testimonials-label">Testimonials</span>
                <h2 className="testimonials-title">
                    What Our Clients Say
                </h2>

                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="review-card group"
                            variants={itemVariants}
                        >
                            {/* Quote Icon Background */}
                            <div className="quote-icon">
                                &rdquo;
                            </div>

                            {/* Review Content */}
                            <div className="review-header">
                                <div
                                    className="avatar"
                                    style={{ backgroundColor: review.bg, color: review.color }}
                                >
                                    {review.initials}
                                </div>
                                <div className="review-author-info">
                                    <h4 className="author-name">{review.name}</h4>
                                    <p className="author-role">{review.role}</p>
                                </div>
                            </div>

                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="review-text">
                                "{review.comment}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

