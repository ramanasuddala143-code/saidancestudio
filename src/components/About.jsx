import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// To use the uploaded image, we will assume it is placed in the assets folder as 'profile.jpg'
// You can change this path or name when you save the photo to your project.
import profileImage from '../assets/profile.png';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-border-glow"></div>
          {/* We use the profile image here */}
          <img src={profileImage} alt="Founder on stage" className="about-image" />
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">The Visionary Behind the Magic <span className="sparkle">✨</span></h2>
          <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 'bold' }}>Founder: Saikumar Dorapelli</h3>
          <p className="about-description text-gradient">
            Step into the spotlight with our founder, Saikumar Dorapelli. With passion that echoes through every beat and a vision that turns stages into masterpieces, we are here to transform your dance journey.
          </p>
          <p className="about-description" style={{ color: 'rgba(255, 255, 255, 0.7)'}}>
            From mastering the rhythm to performing for the crowds, we believe everyone has a dancer inside them waiting to break out. Let's make it cool, let's make it legendary!
          </p>
          
          <div className="about-stats">
            <div className="stat-item glass-panel">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-number">100+</span>
              <span className="stat-label">Stage Shows</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
