import { useState } from 'react';
import { FaFire, FaDice, FaStar, FaUserFriends, FaFutbol, FaRocket, FaCrown } from 'react-icons/fa';
import GameList from './GameList';

const tabs = [
    { name: 'Hot Games', icon: <FaFire /> },
    { name: 'Flipto Original Games', icon: <FaDice /> },
    { name: 'Slots Favourite', icon: <FaStar /> },
    { name: 'Live Casino Favourite', icon: <FaUserFriends /> },
    { name: 'Sports Game', icon: <FaFutbol /> },
    { name: 'New Game Release', icon: <FaRocket /> },
    { name: 'VIP Member Exclusive', icon: <FaCrown /> },
];

const GameCategories = () => {
    const [activeTab, setActiveTab] = useState('Hot Games');

    return (
        <section className="my-8">
            <div className="flex border-b border-border-color overflow-x-auto pb-1">
                {tabs.map((tab) => (
                    <button 
                        key={tab.name} 
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex items-center flex-shrink-0 space-x-2 py-3 px-6 font-semibold whitespace-nowrap transition-colors duration-300 ${activeTab === tab.name ? 'text-primary-yellow border-b-2 border-primary-yellow' : 'text-gray-400 hover:text-white'}`}>
                        <span>{tab.icon}</span>
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>

            <GameList category={activeTab} />
        </section>
    );
};

export default GameCategories; 