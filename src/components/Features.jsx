import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaStar, FaMusic, FaHeartbeat, FaSmileBeam } from 'react-icons/fa';
import './Features.css';

const featuresData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Professional Trainers",
    desc: "Learn from friendly and experienced professionals who guide you every step of the way."
  },
  {
    icon: <FaStar />,
    title: "Stage Performance",
    desc: "Get opportunities to shine and showcase your talent in front of live audiences."
  },
  {
    icon: <FaMusic />,
    title: "Multiple Styles",
    desc: "From contemporary to hip-hop, master various dance forms under one roof."
  },
  {
    icon: <FaHeartbeat />,
    title: "Boost Fitness",
    desc: "Improve your physical fitness, confidence, and unleash your inner creativity."
  },
  {
    icon: <FaSmileBeam />,
    title: "Fun Environment",
    desc: "Join a highly energetic, fun, and supportive community of dance lovers."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Why Join Us?
        </motion.h2>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="feature-card glass-panel">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
