import React from 'react';
import rwtlogo from '../assets/rwtlogo.png'; 

function Footer() {
  return (
    <footer className="bg-white text-gray-900"> 
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between p-8"> 
        
        <div className="mb-8 md:mb-0">
          <a href = "https://www.nexuxrise.com/">
          <img src={rwtlogo} alt="RWT Logo" className="w-32 h-auto mb-2" /> </a>
          

          <p className="hover:text-yellow-400 cursor-pointer">
            Email us: <a href="mailto:Sales@plotus.co.in" className="hover:text-yellow-400">Sales@plotus.co.in</a>
          </p>

          <p className="hover:text-yellow-400 cursor-pointer">
          Website:<a href="https://www.nexuxrise.com/" className="hover:text-yellow-400">https://www.nexuxrise.com</a>
          </p>


          <h2 className='mt-6'>Address</h2> 
          <div className="w-16 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <p>NEXUX,<br /> KALMANA TALUKA WANI 445304</p>

          <i className="fa-solid fa-building text-5xl mt-4"></i>
        </div>

        {/* Other Sections */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">NEXUX</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">About Us</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Our Services</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Projects</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Contact Us</a>
          </div>
        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Clients</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Careers</a>
            <a href="/" className="block hover:text-yellow-400 cursor-pointer">Partnerships</a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Social Media</h2>
          <div className="w-36 h-1 border-b-2 border-yellow-400 rounded-md mb-4"></div>
          <div className="space-y-2">
            <a href="https://www.facebook.com" aria-label="Facebook" className="block hover:text-yellow-400 cursor-pointer">Facebook</a>
            <a href="https://twitter.com" aria-label="Twitter" className="block hover:text-yellow-400 cursor-pointer">Twitter</a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="block hover:text-yellow-400 cursor-pointer">Instagram</a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="block hover:text-yellow-400 cursor-pointer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* This will be shown on smaller screens */}
      <div className="md:hidden pb-4 text-center">
        <p>Design and Developed by NEXUX</p>
      </div>

      <hr className='' />
      <div className='hidden md:block'>
        <div className="footer-end py-4"> 
          <div className="footer-term">
            <h4>© 2024  <strong>
              &#169; <i>NEXUX</i>
            </strong>. Minerals Pvt Ltd.</h4>
          </div>
          <div className="term footer-term">
            Terms & Conditions | Privacy Policy | Contact Us
          </div>
          <div className="term footer-term">
            Design and Developed by{" "}
            <strong>
              &#169; <i>NEXUX</i>
            </strong>.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
