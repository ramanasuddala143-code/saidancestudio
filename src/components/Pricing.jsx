import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaUserGraduate, FaHotjar, FaCalendarAlt } from 'react-icons/fa';
import './Pricing.css';

const batches = [
  {
    icon: <FaChild />,
    title: "Kids Batch",
    age: "Age 4-9",
    price: "₹499",
    color: "#00f0ff"
  },
  {
    icon: <FaUserGraduate />,
    title: "Seniors Batch",
    age: "Age 10-20",
    price: "₹499",
    color: "#ff0055"
  },
  {
    icon: <FaHotjar />,
    title: "Zumba",
    age: "Age 15+",
    price: "₹1199",
    color: "#ffd700"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Weekend Batch",
    age: "All Ages",
    price: "₹999",
    color: "#aa00ff"
  }
];

function Pricing() {
  return (
    <section id="batches" className="section-padding">
      <div className="container">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Available Batches</h2>
          <p className="pricing-subtitle text-gradient">Find the perfect batch for your passion!</p>
          <div className="registration-fee-pill glass-panel">
            One-time Registration Fee: <strong>₹199</strong>
          </div>
        </motion.div>

        <div className="pricing-grid">
          {batches.map((batch, idx) => (
            <motion.div 
              key={idx} 
              className="pricing-card glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 15px 40px ${batch.color}40`,
                borderColor: batch.color
              }}
            >
              <div className="batch-icon" style={{ color: batch.color, textShadow: `0 0 15px ${batch.color}` }}>
                {batch.icon}
              </div>
              <h3 className="batch-title">{batch.title}</h3>
              <p className="batch-age">{batch.age}</p>
              <div className="batch-price-container" style={{ borderTopColor: batch.color }}>
                <span className="batch-price">{batch.price}</span>
                <span className="batch-duration">/month</span>
              </div>
              <a href="#registration" className="btn-primary batch-btn" style={{ background: `linear-gradient(135deg, ${batch.color}, #ffffff20)` }}>
                Select Batch
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
