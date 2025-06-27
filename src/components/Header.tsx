import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { name: 'Originals', path: '/' },
    { name: 'Slots', path: '/slots' },
    { name: 'Live Casino', path: '/live-casino' },
    { name: 'Sports', path: '/sports' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'VIP', path: '/vip' },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-secondary-dark/50 border-b border-border-color">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-primary-yellow hover:opacity-80 transition-opacity">Flipto</Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors px-1 pb-1 ${
                  (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path))
                    ? 'text-primary-yellow border-b-2 border-primary-yellow font-bold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-primary-dark p-2 rounded-md">
            <span className="font-semibold">0.00 USDT</span>
          </div>
          <button className="bg-transparent border border-primary-yellow text-primary-yellow font-bold py-2 w-32 rounded-md hover:bg-primary-yellow/10 transition-colors">
            Withdraw
          </button>
          <button className="bg-primary-yellow text-gray-900 font-bold py-2 w-32 rounded-md hover:bg-yellow-400 transition-colors">
            Deposit
          </button>
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown}>
              <FaUserCircle className="text-3xl text-gray-400 cursor-pointer" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-secondary-dark rounded-md shadow-lg py-1 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-dark">
                  Profile Detail
                </a>
                <Link to="/transaction-history" className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-dark">
                  Transaction History
                </Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary-dark">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 