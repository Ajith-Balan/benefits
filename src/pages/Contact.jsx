import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setMessageStatus('');

    emailjs
      .sendForm(
        'service_r74e53r', // Replace with your EmailJS service ID
        'template_4hx610l', // Replace with your EmailJS template ID
        e.target,
        'DXIWuxbV9blr57MhN' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setIsSending(false);
          setMessageStatus('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setIsSending(false);
          setMessageStatus('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Layout title={'Contact Us'}>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-semibold mt-6 mb-4 text-center text-blue-600">
            Get in Touch
          </h1>
          <p className="text-center text-gray-700 mb-6">
            Whether you’re looking for study abroad opportunities, visa assistance, or career guidance, we’re here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Details */}
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
                <p>123 Consultancy Avenue, City Center, Kochi, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 w-6 h-6" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 w-6 h-6" />
                <p>info@benefitzconsultancy.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {messageStatus && (
              <div className="mt-4 text-center text-gray-700">
                <p>{messageStatus}</p>
              </div>
            )}
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.57912771065!2d76.14084757567613!3d10.511545762907867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1734782158718!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowfullscreen=""
              loading="lazy"
              className="border rounded-md"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
