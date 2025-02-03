import React, { useState, useEffect } from 'react';
import bannerImage from '/src/assets/banner.webp';
import coalImage from '/src/assets/logo2.jpg';
import mineralImage from '/src/assets/coalmining.webp';
import { FaCheckCircle } from 'react-icons/fa';
import sectionImage1 from '/src/assets/sectionimage3.jpg'
import Line from '/src/components/Line.jsx';
import miningimage2 from '/src/assets/miningimage2.jpg'
import miningvideo from  '/src/assets/video1.mp4'
import ScrollToTop from '../components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import miningimage1 from  '/src/assets/miningimage1.jpg'
import miningimage3 from  '/src/assets/miningimage4.jpg'
import { FaIndustry, FaTruckMoving, FaHardHat } from "react-icons/fa";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200,    // Offset from the viewport
      once: false,     // Whether animation should happen only once
    });
  }, []);

  const services = [
    {
      name: 'Mineral Processing',
      description: 'Understanding the critical nature of coal quality, our state-of-the-art mineral processing facilities are the cornerstone of our operation.',
      image: coalImage, // Replace with actual image path
      icon: <FaIndustry className="text-4xl text-yellow-500" />
    },
    {
      name: 'Logistics',
      description: 'Our logistics network is tailored to navigate the complexities of transportation, whether it\'s by rail, road, or a combination of both.',
      image: miningimage1, // Replace with actual image path
      icon: <FaTruckMoving className="text-4xl text-yellow-500" />
    },
    {
      name: 'Sourcing from Mines',
      description: 'We engage in meticulous selection and procurement from mines that align with our quality standards and ethical practices.',
      image: miningimage3, // Replace with actual image path
      icon: <FaHardHat className="text-4xl text-yellow-500" />
    },
  ];
 

  return (
    <>
    <div className="bg-white text-gray-900 relative">
      {/* Full-Width Banner Section with Top Margin */}
      <div className="w-full mt-56 relative overflow-hidden">
        <img 
          src={bannerImage} 
          alt="Nexux Rise Banner" 
          className="w-full h-auto object-cover opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10" />

        <div className="absolute left-8 bottom-20" data-aos="fade-up">
  <h2 className="text-4xl font-serif font-bold text-white py-2">
    Powering Progress with Quality Coal
  </h2>
</div>


        {/* Hamburger Menu Icon */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-8 right-8 z-10 focus:outline-none"
        >
          <div className="w-8 h-1 bg-white mb-1 transition duration-300 ease-in-out transform hover:scale-110"></div>
          <div className="w-8 h-1 bg-white mb-1 transition duration-300 ease-in-out transform hover:scale-110"></div>
          <div className="w-8 h-1 bg-white transition duration-300 ease-in-out transform hover:scale-110"></div>
        </button>

        {/* Overlay Menu */}
        {menuOpen && (
          <div className="absolute top-0 right-0 w-64 h-auto bg-gradient-to-r from-white to-gray-100 opacity-95 z-20 flex flex-col items-center justify-start p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 text-gray-700 text-2xl"
            >
              &times; {/* Close Icon */}
            </button>
            <nav className="flex flex-col items-center space-y-3">
              <a 
                href="#about" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                About Us
              </a>
              <a 
                href="#careers" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Careers
              </a>
              <a 
                href="#services" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Services
              </a>
              <a 
                href="#contacts" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Contacts
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Expanded Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:py-40 bg-gradient-to-r from-white via-gray-100 to-cream text-gray-900">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-start mb-10 md:mb-0 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" data-aos="fade-up">
            Welcome to Nexux Rise
          </h1>
          <p className="text-lg md:text-xl text-left max-w-2xl mb-6 animate-fade-in-up">
            Nexux Rise is your trusted partner in the minerals industry, specializing in coal sourcing and distribution. We are committed to delivering high-quality minerals to meet your business needs.
          </p>

          {/* Bullet Points */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 animate-fade-in-up">Why Choose Us?</h3>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              <p>High-Quality Coal and Minerals</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              <p>Sustainable Practices</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-2" />
              <p>Expert Consultation and Support</p>
            </div>
          </div>

          <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 animate-bounce">
            Learn More
          </button>
        </div>

<ScrollToTop />
        {/* Images Section */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> {/* Adjusted to make it single column on smaller screens */}
          <img 
            src={coalImage} 
            alt="Coal" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 animate-fade-in-right"
          />
          <img 
            src={mineralImage} 
            alt="Mineral" 
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 animate-fade-in-right"
          />
        </div>
      </div>

<Line />

      {/* Heading section */}
      <div className="bg-gray-100 py-12 bg-gradient-to-r from-white via-gray-100 to-cream text-gray-900 flex items-center justify-between px-4">
        <img 
          src={sectionImage1} 
          alt="Section Image" 
          className="w-32 h-32 rounded-full border-4 border-gray-900 ml-4" // Added margin-left
        />
        <h2 className="text-5xl font-bold leading-relaxed flex-grow text-center" data-aos="fade-up"> {/* Full width heading */}
          Contributing in making Atmanirbhar Bharat
          <br />
          with tailored coal solutions,
          <br />
          rivaling imports for self-reliance.
        </h2>
      </div>

      {/* Video section */}
      <div className="w-full relative overflow-hidden">
        <video autoPlay muted loop playsInline >
          <source src = {miningvideo}/>
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-10" />

        <div className="absolute left-8 bottom-20 animate-fade-up">
          <h2 className="text-4xl font-serif font-bold text-white px-4 py-2">
  
          </h2>
        </div>
      </div>
<Line />

{/* Service section */}
<div className="py-16 bg-gradient-to-r from-white via-gray-100 to-cream text-gray-900 flex flex-col items-center overflow-x-hidden">
  <h2 className="text-5xl font-extrabold mb-12 tracking-wide text-center" data-aos="fade-up">Our Services</h2> {/* Increased heading size */}

  {/* Loop through services */}
  {services.map((service, index) => (
    <div 
      key={index} 
      className={`flex flex-col md:flex-row justify-center items-center mb-16 ${service.imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Left Side: Service Details */}
      <div className="md:w-1/2 p-6 flex flex-col items-center text-center ml-4">
        <div className="flex flex-col items-center mb-4">
          <span className="animate-bounce">{service.icon}</span>
          <h3 className="text-3xl font-semibold mt-2">{service.name}</h3> {/* Increased service name size */}
        </div>
        <p className="text-gray-700 mb-4 text-xl"> {/* Increased paragraph size */}
          {service.description}
        </p>
      </div>

      {/* Right Side: Service Image */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <img 
          src={service.image} 
          alt={service.name} 
          className="max-w-lg h-auto rounded shadow-md" 
          data-aos="slide-left" // AOS animation for the image
          data-aos-duration="700" // Decreased duration for faster animation
          data-aos-delay="200" // Delay before the animation starts
          data-aos-easing="ease-in-out" // Easing function for smoothness
        />
      </div>
    </div>
  ))}
</div>




    <Line />
    <div className="container mx-auto px-4 flex items-center justify-center">
  <div className="w-1/2 ml-8">
    <h1 className="text-center md:text-5xl font-bold" data-aos="fade-up">
      We Plan, <br />
      We Source, <br />
      We Deliver
    </h1>
    <p className="mt-4 text-center text-lg text-gray-700">
      As a pivotal player in the industry, 
      <br />Nexus has established itself as a beacon of innovation and reliability, dedicated to simplifying the intricacies of coal acquisition and distribution.
    </p>
    
    {/* Centered Button */}
    <div className="flex justify-center mt-6">
      <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-semibold rounded-md hover:from-yellow-500 hover:to-yellow-700">
        Learn more
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
  
  <div className="w-1/2" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
  <img src={miningimage2} alt="Mining" className="w-full h-auto rounded-lg shadow-lg" />
</div>

</div>

    <Line />
    </div>
    </>
  );
}

export default Home;
