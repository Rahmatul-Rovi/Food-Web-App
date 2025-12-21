import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-10 px-6 font-sans">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and About Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">
            Best <span className="text-orange-500">Eats</span>
          </h1>
          <p className="text-sm leading-6">
            Apnar priyo khabar akhon apnar dorgoṛay. Fresh, gorom ebong druto delivery nishchit korai amader lokkhyo.
          </p>
          <div className="flex gap-4 mt-6">
            <FaFacebook size={25} className="hover:text-orange-500 cursor-pointer transition" />
            <FaInstagram size={25} className="hover:text-orange-500 cursor-pointer transition" />
            <FaTwitter size={25} className="hover:text-orange-500 cursor-pointer transition" />
            <FaLinkedin size={25} className="hover:text-orange-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="font-bold uppercase text-white mb-4">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Careers</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h6 className="font-bold uppercase text-white mb-4">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Help Center</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Terms of Service</li>
            <li className="py-2 text-sm hover:text-orange-500 cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* App Download Section */}
        <div>
          <h6 className="font-bold uppercase text-white mb-4">Download Our App</h6>
          <div className="flex flex-col gap-3">
            <button className="bg-black border border-gray-600 flex items-center px-4 py-2 rounded-lg hover:border-orange-500 transition">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="w-32" />
            </button>
            <button className="bg-black border border-gray-600 flex items-center px-4 py-2 rounded-lg hover:border-orange-500 transition">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="w-32" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-[1240px] mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2024 Best Eats. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;