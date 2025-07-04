import { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

// Helper to generate a random TRON (TRC20) address (starts with T, 34 chars)
function randomTronAddress() {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let addr = 'T';
  for (let i = 0; i < 33; i++) addr += chars[Math.floor(Math.random() * chars.length)];
  return addr;
}

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
  const [depositAmount, setDepositAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState(randomTronAddress());

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Reset wallet address each time modal opens
  useEffect(() => {
    if (isDepositOpen) setWalletAddress(randomTronAddress());
  }, [isDepositOpen]);

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
          <div className="bg-[#232b39] rounded-2xl shadow-2xl px-8 pt-8 pb-6 w-full max-w-lg relative border border-[#2d3748]">
            <button className="absolute top-5 right-5 text-gray-400 hover:text-white" onClick={() => setIsDepositOpen(false)}>
              <FaTimes size={28} />
            </button>
            <form className="flex flex-col gap-7" onSubmit={e => { e.preventDefault(); setIsDepositOpen(false); }}>
              {/* 1. Select Coin */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-yellow-400">1</div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base mb-1">Select Coin</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#181e29] px-3 py-1 rounded-lg text-primary-yellow font-extrabold text-base uppercase tracking-wider flex items-center gap-1 shadow border border-yellow-400">USDT</span>
                    <span className="text-gray-400 text-sm font-medium ml-1">TetherUS</span>
                  </div>
                </div>
              </div>
              {/* 2. Amount */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-yellow-400">2</div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base mb-1">Amount</div>
                  <input
                    type="number"
                    min="10"
                    step="any"
                    className="w-full bg-[#181e29] border border-[#2d3748] rounded-lg px-4 py-2 text-primary-yellow font-extrabold text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-yellow/40"
                    placeholder="Minimum amount 10 USDT"
                    value={depositAmount}
                    onChange={e => setDepositAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* 3. Transfer Method */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-yellow-400">3</div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base mb-1">Transfer Method</div>
                  <span className="bg-[#181e29] px-3 py-1 rounded-lg text-primary-yellow font-extrabold text-base uppercase tracking-wider shadow border border-yellow-400">TRON (TRC20)</span>
                </div>
              </div>
              {/* 4. Wallet Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-yellow-400">4</div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base mb-2">Wallet Address</div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#181e29] p-2 rounded-lg flex items-center border border-[#2d3748]">
                      <QRCodeSVG value={walletAddress} size={72} bgColor="#181e29" fgColor="#fff" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-xs text-gray-400 font-medium mb-1">Address</div>
                      <div className="font-mono text-primary-yellow text-base font-extrabold flex items-center gap-2 whitespace-nowrap">
                        {walletAddress}
                        <button type="button" className="ml-1 text-primary-yellow hover:text-yellow-400" onClick={() => {navigator.clipboard.writeText(walletAddress)}}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-7 8h6a2 2 0 002-2V7a2 2 0 00-2-2h-5.586a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 007.586 2H6a2 2 0 00-2 2v16a2 2 0 002 2h2" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 5. Submit Button */}
              <div className="mt-2 flex justify-center">
                <button type="submit" className="bg-primary-yellow text-gray-900 font-extrabold text-lg py-3 px-16 rounded-lg hover:bg-yellow-400 transition-colors shadow-md">
                  Submit Deposit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 