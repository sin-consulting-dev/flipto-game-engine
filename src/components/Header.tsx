import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const navItems = ['Originals', 'Slots', 'Live Casino', 'Sports', 'Promotions', 'VIP'];

  return (
    <header className="bg-secondary-dark/50 border-b border-border-color">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-primary-yellow">Flipto</h1>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
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
          <FaUserCircle className="text-3xl text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header; 