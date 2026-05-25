import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { portfolioData } from '../data/portfolioData.js';
import { FiMail, FiMapPin, FiSend, FiEye, FiLoader, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(formRef.current);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ type: 'success', text: 'Message Sent Successfully!' });
        formRef.current.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => setStatusMessage(null), 5000);
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together?" />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 mt-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                <a href={portfolioData.hero.socials.email} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors break-all">
                  {portfolioData.hero.socials.email.replace('mailto:', '')}
                </a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Global / Remote
                </p>
              </div>
            </div>

            <a 
              href={portfolioData.hero.socials.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-105 border border-white/10 w-full md:w-auto"
            >
              <FiEye size={18} /> View Resume
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 glass-card p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Web3Forms Subject Config */}
              <input type="hidden" name="subject" value="New Portfolio Contact Submission" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {statusMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-500/20' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-500/20'}`}
                >
                  {statusMessage.type === 'success' && <FiCheckCircle size={20} />}
                  {statusMessage.text}
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="self-start px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(37,99,235,0.4)] min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" size={18} /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
