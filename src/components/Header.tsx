import { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

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
  const [isDepositOpen, setIsDepositOpen] = useState(false);

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
          <button className="bg-primary-yellow text-gray-900 font-bold py-2 w-32 rounded-md hover:bg-yellow-400 transition-colors" onClick={() => setIsDepositOpen(true)}>
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
      {isDepositOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-secondary-dark rounded-xl shadow-2xl p-8 w-full max-w-md relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setIsDepositOpen(false)}>
              <FaTimes size={22} />
            </button>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-bold">1</div>
                    <div className="h-8 w-1 bg-gray-700" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs font-semibold">Select Coin</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-primary-dark px-2 py-1 rounded text-primary-yellow font-bold text-sm flex items-center gap-1">
                        <img src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=032" alt="USDT" className="w-5 h-5 inline-block mr-1" /> USDT
                      </span>
                      <span className="text-gray-400 text-xs">TetherUS</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-bold">2</div>
                    <div className="h-8 w-1 bg-gray-700" />
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs font-semibold">Select Network</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-primary-dark px-2 py-1 rounded text-primary-yellow font-bold text-sm flex items-center gap-1">
                        <img src="https://cryptologos.cc/logos/tron-trx-logo.png?v=032" alt="TRX" className="w-5 h-5 inline-block mr-1" /> TRX
                      </span>
                      <span className="text-gray-400 text-xs">Tron (TRC20)</span>
                      <span className="text-gray-500 text-xs ml-2">Contract address ending in <span className="font-mono">jLj6t</span></span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-xs font-semibold">Deposit Address</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="bg-primary-dark p-2 rounded-md flex items-center">
                        <QRCodeSVG value="TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM" size={64} bgColor="#23272f" fgColor="#fff" />
                      </div>
                      <div className="ml-2">
                        <div className="text-xs text-gray-400">Address</div>
                        <div className="font-mono text-white text-sm flex items-center gap-2">
                          TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM
                          <button className="ml-1 text-primary-yellow hover:text-yellow-400" onClick={() => {navigator.clipboard.writeText('TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-7 8h6a2 2 0 002-2V7a2 2 0 00-2-2h-5.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 007.586 2H6a2 2 0 00-2 2v16a2 2 0 002 2h2" /></svg>
                          </button>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Minimum deposit <span className="font-semibold text-primary-yellow">More than 0.01 USDT</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-8 rounded-md hover:bg-yellow-400 transition-colors" onClick={() => setIsDepositOpen(false)}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 