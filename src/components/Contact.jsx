import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { contact } = portfolioData;
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = values;

    if (!name || !email || !subject || !message) {
      setStatus('Please complete all fields before sending your message.');
      return;
    }

    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    setStatus('Your email client is opening with a pre-filled message.');
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-wrap">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Contact</div>
          <h3>Let’s Connect, Collaborate and Create Impact.</h3>
          <p>
            Open to academic collaboration, research partnerships, technical education, renewable energy, and emerging technology initiatives.
          </p>

          <div className="contact-list">
            <a href={`mailto:${contact.email}`}>
              <Mail size={18} /> {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <Phone size={18} /> {contact.phone}
            </a>
            <span>
              <MapPin size={18} /> {contact.location}
            </span>
          </div>

          <div className="contact-actions">
            <a className="button primary" href={`mailto:${contact.email}`}>
              Email Me
            </a>
            <a className="button secondary" href={contact.phoneHref}>
              Call Me
            </a>
            <a className="button tertiary" href={`mailto:${contact.email}?subject=CV%20Request`}>
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-panel"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="field-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" value={values.name} onChange={handleChange} />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={values.email} onChange={handleChange} />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" value={values.subject} onChange={handleChange} />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="6" value={values.message} onChange={handleChange} />
          </label>

          {status && <p className="form-status">{status}</p>}

          <button className="button primary" type="submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
