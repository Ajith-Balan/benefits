import React from 'react';
import Layout from '../components/layout/Layout';
import { FaGlobe, FaPassport, FaBriefcase } from 'react-icons/fa';

// Replace this URL with a relevant consultancy-related image URL
const aboutImage = 'https://st2.depositphotos.com/3591429/10566/i/450/depositphotos_105666254-stock-photo-business-people-at-meeting-and.jpg';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Layout title={'About Us | Benefitz International Consultancy'}>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">About Benefitz International Consultancy</h1>
          <img src={aboutImage} alt="About Benefitz International Consultancy" className="w-full h-64 object-cover rounded-md mb-6" />

          <p className="text-gray-700 leading-relaxed mb-4">
            Benefitz International Consultancy is a trusted partner in achieving your dreams of studying abroad, securing visit visas, or landing the perfect job. Established in 2023, our mission has been to empower individuals by providing tailored solutions that pave the way for global opportunities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            With a deep understanding of immigration policies, global education systems, and job markets, we are uniquely positioned to guide you through every step of your journey. Whether it’s choosing the right university, navigating visa requirements, or connecting with employers worldwide, we are here to help.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Benefitz, we believe in a personalized approach. Every client has unique aspirations, and our dedicated team ensures that you receive solutions tailored to your needs. Join us in turning your ambitions into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center p-6 bg-blue-600 text-white rounded-lg shadow-md">
              <FaGlobe className="h-10 w-10 mr-4" />
              <div>
                <h3 className="font-bold text-lg">Study Abroad</h3>
                <p className="text-sm mt-1">Explore top universities and courses that match your aspirations.</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-blue-600 text-white rounded-lg shadow-md">
              <FaPassport className="h-10 w-10 mr-4" />
              <div>
                <h3 className="font-bold text-lg">Visit Visa Assistance</h3>
                <p className="text-sm mt-1">Hassle-free visa services for your travel and exploration needs.</p>
              </div>
            </div>
            <div className="flex items-center p-6 bg-blue-600 text-white rounded-lg shadow-md">
              <FaBriefcase className="h-10 w-10 mr-4" />
              <div>
                <h3 className="font-bold text-lg">Job Consultancy</h3>
                <p className="text-sm mt-1">Connect with global employers and find your dream job.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
