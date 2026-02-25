import { Scissors, Sparkles, Droplet, Palette, Flower2, HeartHandshake, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Services.css";

export default function Services() {
    const navigate = useNavigate();

    const services = [
        {
            icon: <Scissors className="w-8 h-8 text-[#d4a373]" />,
            title: "Hair Styling",
            description: "Professional haircuts, styling, coloring, and treatments tailored to your look.",
            price: "₹499+"
        },
        // ... (rest of services array remains same, assuming I don't need to redeclare it if I target just the button change, but Services function start changes too)
        // Wait, replace_file_content replaces lines. I need to be careful not to delete the services array if I just target the top and bottom separately.
        // Actually, replace_file_content is best used to replace blocks.
        // I will replace the imports and the function definition start, then the button part separately if needed, but since I need `navigate` inside component, I must update the component start.
        // Let's do imports first and start of function.

        {
            icon: <Palette className="w-8 h-8 text-[#d4a373]" />,
            title: "Makeup & Bridal",
            description: "Flawless makeup for weddings, parties, and special occasions.",
            price: "₹2,500+"
        },
        {
            icon: <Droplet className="w-8 h-8 text-[#d4a373]" />,
            title: "Skin Treatments",
            description: "Rejuvenating facials, cleanups, and advanced skin therapies.",
            price: "₹1,200+"
        },
        {
            icon: <Flower2 className="w-8 h-8 text-[#d4a373]" />,
            title: "Spa & Wellness",
            description: "Relaxing body massages, scrubs, and holistic therapies.",
            price: "₹1,800+"
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-[#d4a373]" />,
            title: "Manicure & Pedicure",
            description: "Pamper your hands and feet with our signature nail care.",
            price: "₹799+"
        },
        {
            icon: <Sparkles className="w-8 h-8 text-[#d4a373]" />,
            title: "Tattoo & Nail Art",
            description: "Consult with our artists for custom tattoos and trendy nail designs.",
            price: "Consultation"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Increased stagger for more distinct entry
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 }, // Started slightly lower for more dramatic rise
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        },
    };

    return (
        <section id="services" className="services-section">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="services-header">
                    <span className="services-label">Our Services</span>
                    <h2 className="services-title">
                        Transform Your Look
                    </h2>
                    <p className="services-desc">
                        Discover our range of premium beauty and wellness services designed to help you look and feel your absolute best.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="services-grid"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="service-card group"
                        >
                            <div className="service-icon-box">
                                {service.icon}
                            </div>
                            <h3 className="service-title">
                                {service.title}
                            </h3>
                            <p className="service-text">
                                {service.description}
                            </p>
                            <div className="service-footer">
                                <span className="service-price">{service.price}</span>
                                <button
                                    onClick={() => navigate('/booking', { state: { serviceName: service.title } })}
                                    className="service-link flex items-center gap-1"
                                >
                                    Book Now <MoveRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
