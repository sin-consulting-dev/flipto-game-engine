import React, { useEffect, useState } from 'react';
import { FaTwitter, FaDiscord, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setExpanded(scrollY + windowHeight >= docHeight - 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!expanded) {
    return (
      <footer className="bg-secondary-dark border-t border-gray-700 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0">
          <Link to="/" className="text-lg font-bold text-primary-yellow mr-4">Flipto</Link>
          <div className="text-right">&copy; {new Date().getFullYear()} Flipto. All rights reserved.</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-secondary-dark border-t border-gray-700 mt-12 text-gray-300 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Link to="/" className="text-2xl font-bold text-primary-yellow mb-2 inline-block">Flipto</Link>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            Flipto is your next-gen crypto gaming platform. Enjoy provably fair games, instant rewards, and a vibrant community.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-bold text-white mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary-yellow">Home</Link></li>
            <li><Link to="/slots" className="hover:text-primary-yellow">Slots</Link></li>
            <li><Link to="/live-casino" className="hover:text-primary-yellow">Live Casino</Link></li>
            <li><Link to="/sports" className="hover:text-primary-yellow">Sports</Link></li>
            <li><Link to="/promotions" className="hover:text-primary-yellow">Promotions</Link></li>
            <li><Link to="/vip" className="hover:text-primary-yellow">VIP</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h4 className="font-bold text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary-yellow">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-yellow">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-yellow">Responsible Gaming</a></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h4 className="font-bold text-white mb-3">Join the Community</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Twitter" className="hover:text-primary-yellow"><FaTwitter /></a>
            <a href="#" aria-label="Discord" className="hover:text-primary-yellow"><FaDiscord /></a>
            <a href="#" aria-label="Telegram" className="hover:text-primary-yellow"><FaTelegram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-800 bg-secondary-dark">
        &copy; {new Date().getFullYear()} Flipto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 