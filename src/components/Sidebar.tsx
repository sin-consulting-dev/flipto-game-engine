import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Home, Shield, Star, Users as UsersIcon, Gift } from 'lucide-react';

const initialMessages = [
    { user: 'CryptoCat', message: 'Let\'s gooo!' },
    { user: 'SpinQueen', message: 'Let\'s gooo!' },
    { user: 'CryptoCat', message: 'LFG!' },
    { user: 'JackpotJoe', message: 'LFG!' },
    { user: 'JackpotJoe', message: 'What\'s the RTP on the new game?' },
    { user: 'JackpotJoe', message: 'Big win coming.' },
    { user: 'SpinQueen', message: 'Nice hit!' },
    { user: 'JackpotJoe', message: 'Let\'s gooo!' },
    { user: 'JackpotJoe', message: 'LFG!' },
    { user: 'SpinQueen', message: 'Nice hit!' },
];

const userColors = [
    'text-red-400', 'text-green-400', 'text-blue-400', 
    'text-purple-400', 'text-pink-400', 'text-indigo-400', 'text-yellow-400'
];

const sampleUsers = ['CryptoCat', 'SpinQueen', 'JackpotJoe', 'GamerX', 'BetLord'];
const sampleMessages = ['LFG!', 'Nice hit!', 'What\'s the RTP on the new game?', 'Let\'s gooo!', 'Big win coming.'];

const getUserColor = (username: string) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    return userColors[Math.abs(hash) % userColors.length];
};

const Sidebar = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        const interval = setInterval(() => {
            const user = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
            const message = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
            setMessages(prev => [...prev, { user, message }]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if(newMessage.trim()){
            setMessages([...messages, { user: 'You', message: newMessage }]);
            setNewMessage('');
        }
    }
    
    return (
        <aside className="w-72 p-4 flex flex-col space-y-6 pt-20">
            <div>
                <h2 className="text-xl font-bold text-primary-yellow mb-4">Quick Access</h2>
                <nav className="space-y-2">
                    <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-secondary-dark/80 rounded-md transition-colors duration-200">
                        <Home size={20} className="mr-3 text-primary-yellow" />
                        <span>Home</span>
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-secondary-dark/80 rounded-md transition-colors duration-200">
                        <Shield size={20} className="mr-3 text-primary-yellow" />
                        <span>Fairness</span>
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-secondary-dark/80 rounded-md transition-colors duration-200">
                        <Star size={20} className="mr-3 text-primary-yellow" />
                        <span>Promotions</span>
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-secondary-dark/80 rounded-md transition-colors duration-200">
                        <UsersIcon size={20} className="mr-3 text-primary-yellow" />
                        <span>Affiliate</span>
                    </a>
                    <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-secondary-dark/80 rounded-md transition-colors duration-200">
                        <Gift size={20} className="mr-3 text-primary-yellow" />
                        <span>Rewards</span>
                    </a>
                </nav>
            </div>
            <div className="bg-secondary-dark/60 p-4 flex flex-col rounded-lg flex-1 min-h-0">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <h2 className="text-xl font-bold text-primary-yellow">Community Chat</h2>
                </div>
                
                <div className="bg-primary-dark/50 rounded-lg p-2 flex-1 flex flex-col min-h-0">
                    <div className="flex-1 space-y-2 overflow-y-auto pr-2 mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className="text-sm break-words bg-secondary-dark rounded-md p-2">
                                <p>
                                    <span className={`font-bold ${getUserColor(msg.user)}`}>{msg.user}:</span>
                                    <span className="text-gray-200 ml-2">{msg.message}</span>
                                </p>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="relative flex-shrink-0">
                        <input 
                            type="text" 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="bg-secondary-dark w-full p-2 pr-10 rounded-md text-sm text-white placeholder-gray-500 border border-border-color focus:outline-none focus:border-primary-yellow"
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-yellow hover:text-yellow-300">
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar; 