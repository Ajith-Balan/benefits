import React,{useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Cards from './Cards.jsx';
import { AiOutlinePhone } from 'react-icons/ai';
import { div } from 'framer-motion/client';
import Jobscountry from './Jobscountry.jsx';
const Home = () => {


//latest news or updates
  const newsData = [
    { id: 1, title: 'News Title 1', description: 'good', image: 'https://www.y-axis.com/assets/cms/2023-09/Counseling.webp' },
    { id: 2, title: 'News Title 2', description: 'Brief 1', image: 'https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp' },
    { id: 3, title: 'News Title 3', description: 'news 3', image: 'https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp' },
  ];




//services
const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};





//visiting visa
const countries = [
  "USA", "Canada", "Germany", "France", "Italy", "Spain", "Japan", "Australia",
  "India", "Brazil", "South Korea", "Mexico"
];





//study abroad











//happy clients
const testimonials = [
  {
    name: "Menon",
    feedback:
      "Amazing service! The team guided me through the entire process seamlessly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Ajay",
    feedback:
      "The best consultancy service I've ever experienced. They helped me achieve my dream of studying abroad.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ruben",
    feedback:
      "Their visa processing was quick and hassle-free. I couldn't have asked for a better experience!",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Abhiram",
    feedback:
      "The team was supportive and professional. I’m now working abroad thanks to their guidance!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];


  return (
    

    <Layout >

    <div className="min-h-full  bg-white flex items-center justify-center ">

      <div className="container mx-auto py-5 px-4 border">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="overflow-hidden "
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img
              src="https://edabroad.in/wp-content/uploads/2023/08/single-image.webp"
              alt="Study Abroad"
              className="w-full h-full bg-cover p-5"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center text-center md:text-left space-y-8 p-6 md:p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              What can we do for you today?
            </h1>
            <div className="grid grid-cols-2 gap-4 w-full lg:p-12">
  <Link to={`/study`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 hover:border-yellow-500 border transition-all duration-300">
      Study Abroad
    </button>
  </Link>
  <Link to={`/job`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-violet-500 text-white hover:bg-white hover:text-violet-500 hover:border-violet-500 border transition-all duration-300">
      Job Consulting
    </button>
  </Link>
  <Link to={`/visiting-visa`} className="w-full">
    <button className="w-full h-20 py-3 px-6 text-lg font-medium bg-cyan-500 text-white hover:bg-white hover:text-cyan-500 hover:border-cyan-500 border transition-all duration-300">
      Visiting Visa
    </button>
  </Link>
  <Link to={`/immigration`} className="w-full">
    <button className="w-full h-20 p-3 py-3 px-6 text-lg font-medium bg-emerald-500 text-white hover:bg-white hover:text-emerald-500 hover:border-emerald-500 border transition-all duration-300">
      Immigrate
    </button>
  </Link>
</div>
          </motion.div>
        </motion.div>
             
     
      </div>
    </div>





<Cards/>



<br />

<Jobscountry/>



<div className=" container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white border hover:border-red-500 overflow-hidden transition-shadow duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 object-cover "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>







    


    <div className="container mx-auto mt-10 px-6 sm:px-12 lg:px-20 border pb-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 mt-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
     
        <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden ">
            <img
              src="https://5.imimg.com/data5/GB/JT/GLADMIN-48059143/travel-visa-services.jpg"
              alt="Visiting Visa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Visiting Visa</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Simplify your travel plans with our visiting visa services. Get
            expert guidance on documentation and applications.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>

                <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              src="https://www.multirecruit.com/wp-content/uploads/2023/10/Choosing-the-Right-IT-Job-Consultancy-in-Bangalore-Factors-to-Consider.jpg"
              alt="Job Consultancy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Job Consultancy</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Unlock your potential with expert career advice. Resume building,
            interview prep, and job placements are just a click away.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>
        <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?semt=ais_hybrid"
              alt="Study Abroad"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Study Abroad</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Explore global education opportunities. Get assistance with
            admissions, scholarships, and visa applications.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>
        
      </div>
    </div>




    <div className="container relative mx-auto mt-10 bg-white p-8 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 
        <div className="flex justify-center items-center">
          <img
            src="https://www.y-axis.com/assets/cms/2023-09/Counseling.webp"
            alt="Job Consultancy"
            className="max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Career Counseling & Job Consultancy
          </h1>
          <p className="text-sm font-semibold text-center text-gray-700">
            We provide professional career counseling services to guide you in choosing the right job path. Our experts
            help you craft resumes, improve interview skills, and find opportunities that match your skills and aspirations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      

           
       <Link to={`/job`}>
       <button className="bg-white text-black font-semibold py-3 px-8 border border-emerald-500 hover:bg-emerald-500 hover:text-white transition duration-300 w-full text-center">
              Register Now
            </button>
       </Link>
          </div>
        </div>
      </div>
    </div>
















    <div className="container mx-auto mt-10 bg-white p-8 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Visiting Visa Consultancy by Country
          </h1>
          <p className="text-sm font-semibold text-gray-600">
            We offer personalized consultancy services for visiting visas. Choose the country you're interested in, and our experts will assist you in the process.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <button
                key={index}
                className="bg-white text-black font-semibold py-3 px-4 border border-red-600 hover:bg-red-600 hover:text-white transition duration-300 flex justify-center"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://visamint.com/blogs/uploads/images/image_750x_5fa59adf133cb.jpg"
            alt="Visiting Visa Consultancy"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>





    <div className="container mx-auto mt-10 bg-white p-8 bg-red-600 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="https://www.studyabroadudaipur.com/wp-content/uploads/2016/11/banner-guidence.jpg"
            alt="Study Abroad"
            className="max-w-full h-auto xl:h-96 bg-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Explore Study Abroad Opportunities
          </h1>
          <p className="text-sm font-semibold text-gray-700">
            Discover global education programs that open doors to top universities and unique cultural experiences.
            Whether you're planning to study in the USA, UK, Canada, or Australia, our expert advisors are here to help
            with admission processes, visa applications, and beyond.
          </p>

      
        </div>
      </div>
    </div>







    <div className="container mx-auto mt-10 bg-white p-8 border border-gray-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            About Benefits International
          </h1>
          <p className="text-base text-gray-600">
            Benefits International is a trusted consultancy firm with over a decade of experience providing exceptional
            services to individuals seeking visiting visas, career guidance, and personalized support for international
            travel and settlement. Our mission is to simplify complex processes and ensure our clients achieve their goals
            with ease.
          </p>
          <p className="text-base text-gray-600">
            We specialize in a wide range of services, including visa assistance, career counseling, and travel planning.
            With a dedicated team of experts, we are committed to offering the highest level of professionalism and care to
            meet your unique needs.
          </p>
          <a
      href="tel:+11234567890"
      className="text-red-500 hover:text-white font-semibold py-3 px-8 border hover:bg-red-600 transition duration-300 w-full sm:w-60"
    >
      <button className="w-full">
        Contact Us
      </button>
    </a>
        </div>

               <div className="flex justify-center items-center">
          <img
            src="https://kommandtravel.com/wp-content/uploads/2023/02/Study_Visa1.jpg"
            alt="About Benefits International"
            className="max-w-full h-auto "
          />
        </div>
      </div>
    </div>














    <section className="bg-white">
      <div className="container mx-auto px-6 text-center border p-6">
       
        <motion.h1
          className="text-4xl md:text-5xl font-bold text--600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Trusted Visa Consultant
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto mb-10 font-semibold "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We help you achieve your dream of studying or working abroad with expert guidance, tailored services, and proven success stories.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Study Abroad Services',
              description: 'Expert counseling and visa processing for students.',
              icon: '🎓',
            },
            {
              title: 'Work Abroad Guidance',
              description: 'Career opportunities and work visa assistance.',
              icon: '💼',
            },
            {
              title: 'Immigration Support',
              description: 'Hassle-free immigration and relocation services.',
              icon: '✈️',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 hover:scale-105  transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-600 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-xs">{service.description}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
        <Link to={`/visiting-visa`}>
        <a
            href="#contact"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-6  hover:bg-blue-700 transition-colors duration-300"
          >
            Get Consultation Fast
          </a>
        </Link>
        </motion.div>
      </div>
    </section>







    <div className="bg-white pt-5">
      <div className="container mx-auto px-6 border">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">
          Happy Clients
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {testimonials.map((testimonial, index) => (
           <div
           key={index}
           className="min-w-[300px] h-[40vh] p-12 flex-shrink-0 flex items-center text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
         >
           <img
             src={testimonial.image}
             alt={testimonial.name}
             className="w-20 h-20 rounded-full border-4 border-blue-500 mr-6"
           />
           <div className="flex flex-col justify-center h-full">
             <h3 className="text-lg font-semibold text-blue-600 mb-2">
               {testimonial.name}
             </h3>
             <p className="text-gray-700 text-center text-base leading-relaxed">
               {testimonial.feedback}
             </p>
           </div>
         </div>
         
            ))}
          </motion.div>
        </div>
      </div>
    </div>



    </Layout>
  );
};

export default Home;
