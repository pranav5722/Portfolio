import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_hez4ymo';
const EMAILJS_TEMPLATE_ID = 'template_yx6zoz7';
const EMAILJS_PUBLIC_KEY = 'vPhmNhvCQSDpexiNm';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-4xl lg:text-5xl mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {formStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                formStatus.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
              }`}
            >
              {formStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{formStatus.message}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-gray-50 peer-focus:dark:bg-gray-900 peer-focus:px-2
                         peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-50 peer-[:not(:placeholder-shown)]:dark:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-gray-50 peer-focus:dark:bg-gray-900 peer-focus:px-2
                         peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-50 peer-[:not(:placeholder-shown)]:dark:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200
                         peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-gray-50 peer-focus:dark:bg-gray-900 peer-focus:px-2
                         peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-gray-50 peer-[:not(:placeholder-shown)]:dark:bg-gray-900 peer-[:not(:placeholder-shown)]:px-2"
              >
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              className="button w-full flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="mailto:contact@example.com"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}