import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserAlt, FaPhoneAlt, FaMapMarkerAlt, FaCalendarDay, FaQrcode, FaWhatsapp } from 'react-icons/fa';
import './RegistrationForm.css';

function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', age: '', dob: '', contact: '', address: '', batch: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Format message for WhatsApp
    const message = `*New Registration Application* 💃\n\n*Name:* ${formData.name}\n*Age:* ${formData.age}\n*DOB:* ${formData.dob}\n*Contact:* ${formData.contact}\n*Batch:* ${formData.batch}\n\n*Address:* ${formData.address}\n\n_Payment screenshot should be sent by the user directly._`;
    const whatsappUrl = `https://wa.me/919920076293?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="registration" className="section-padding">
      <div className="container">
        <div className="registration-wrapper glass-panel">
          
          <div className="registration-content">
            <motion.h2 
              className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Join the Stars
            </motion.h2>
            <p className="registration-desc text-gradient">
              Fill out the form below to register. Upon submission, please pay the ₹199 registration fee via the QR code provided.
            </p>

            <div className="qr-code-section glass-panel">
              <FaQrcode className="qr-icon" />
              <div>
                <h4>Scan to Pay (PhonePe)</h4>
                <p>DORAPELLI SAI KUMAR</p>
                <div className="qr-image-container">
                  <img src="/qr-code.png" alt="PhonePe QR Code" className="qr-image" />
                </div>
              </div>
            </div>

            <div className="contact-info">
              <h4>Have Questions? Contact Us:</h4>
              <p>
                <a href="https://wa.me/919920076293" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaWhatsapp style={{ color: '#25D366', fontSize: '1.2rem' }} /> +91 9920076293
                </a>
              </p>
              <p>
                <a href="https://wa.me/917506803422" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaWhatsapp style={{ color: '#25D366', fontSize: '1.2rem' }} /> +91 7506803422
                </a>
              </p>
            </div>
          </div>

          <div className="form-container">
            <AnimatePresence>
              {!isSubmitted ? (
                <motion.form 
                  className="registration-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="input-group">
                    <FaUserAlt className="input-icon" />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name of the Student" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="input-group w-50">
                      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
                    </div>
                    <div className="input-group w-50">
                      <FaCalendarDay className="input-icon" />
                      <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
                    </div>
                  </div>

                  <div className="input-group">
                    <FaPhoneAlt className="input-icon" />
                    <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" required />
                  </div>

                  <div className="input-group">
                    <FaMapMarkerAlt className="input-icon" />
                    <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" rows="3" required></textarea>
                  </div>

                  <div className="input-group select-group">
                    <select name="batch" value={formData.batch} onChange={handleChange} required>
                      <option value="" disabled>Select Batch</option>
                      <option value="Kids">Kids (Age 4-9)</option>
                      <option value="Seniors">Senior (Age 10-20)</option>
                      <option value="Zumba">Zumba (Age 15+)</option>
                      <option value="Weekend">Weekend Batch</option>
                    </select>
                  </div>

                  <div className="input-group file-group">
                    <label>Upload Payment Screenshot (₹199):</label>
                    <input type="file" accept="image/*" required />
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">
                    Submit Registration
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  className="success-message glass-panel"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3>🎉 Registration Received!</h3>
                  <p>Welcome to Star Dance Studio!</p>
                  <p>We'll verify your payment and contact you shortly.</p>
                  <button onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', age: '', dob: '', contact: '', address: '', batch: '' });
                  }} className="btn-secondary" style={{ marginTop: '20px' }}>
                    Register Another Student
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
