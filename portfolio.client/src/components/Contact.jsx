import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitStatus('success');

            // Reset form
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            title: 'Email',
            detail: 'premaramfagoriya@gmail.com',
            link: 'mailto:premaramfagoriya@gmail.com'
        },
        {
            icon: <FiMapPin />,
            title: 'Location',
            detail: 'Jaipur, Rajasthan, India',
            link: 'https://maps.google.com/?q=Jaipur,Rajasthan,India'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                {/* Section Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        I'm currently open to new opportunities, collaborations, and interesting projects.
                        Let's discuss how we can work together.
                    </p>
                </motion.div>

                <div className="contact-wrapper">

                    {/* Left Contact Information */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="info-title">Let's Connect</h3>
                        <p className="info-description">
                            Whether you have a project in mind, a role that matches my skills,
                            or just want to say hello—I'd love to hear from you.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="contact-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="contact-icon">{item.icon}</div>
                                    <div className="contact-text">
                                        <span className="contact-label">{item.title}</span>
                                        <p className="contact-value">{item.detail}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Availability Status */}
                        <div className="availability">
                            <div className="status-indicator"></div>
                            <span>Available for new opportunities</span>
                        </div>
                    </motion.div>

                    {/* Right Contact Form */}
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-header">
                            <h3>Send a Message</h3>
                            <p>I typically respond within 24 hours</p>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <FiUser className="input-icon" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Your Name</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <FiMail className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                />
                                <label>Email Address</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <FiMessageSquare className="input-icon textarea-icon" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder=" "
                                    rows="5"
                                />
                                <label>Your Message</label>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="spinner"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FiSend className="btn-icon" />
                                    Send Message
                                </>
                            )}
                        </motion.button>

                        {submitStatus === 'success' && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                ✓ Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;