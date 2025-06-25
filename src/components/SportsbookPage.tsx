import React, { useState } from 'react';
import { FaFutbol, FaTableTennis, FaBasketballBall, FaVolleyballBall, FaBaseballBall, FaFootballBall, FaHandRock, FaSearch, FaClock, FaFire, FaFilter, FaSort } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

const sports = [
  { key: 'soccer', label: 'Soccer', icon: <FaFutbol className="text-2xl" /> },
  { key: 'tennis', label: 'Tennis', icon: <FaTableTennis className="text-2xl" /> },
  { key: 'basketball', label: 'Basketball', icon: <FaBasketballBall className="text-2xl" /> },
  { key: 'volleyball', label: 'Volleyball', icon: <FaVolleyballBall className="text-2xl" /> },
  { key: 'baseball', label: 'Baseball', icon: <FaBaseballBall className="text-2xl" /> },
  { key: 'football', label: 'Football', icon: <FaFootballBall className="text-2xl" /> },
  { key: 'boxing', label: 'Boxing', icon: <FaHandRock className="text-2xl" /> },
];

const eventTabs = ['All', 'In-Play', 'Upcoming', 'Popular'];

const featuredEvents = [
  { title: 'FIFA Club World Cup', teams: 'Real Madrid vs Al Ahly', image: placeholder, time: 'Today 20:00', league: 'FIFA Club World Cup' },
  { title: 'NBA', teams: 'LAL vs BOS', image: placeholder, time: 'Tomorrow 02:00', league: 'NBA' },
  { title: 'Premier League', teams: 'Arsenal vs Man United', image: placeholder, time: 'Today 22:00', league: 'Premier League' },
  { title: 'UFC', teams: 'Adesanya vs Pereira', image: placeholder, time: 'Sat 04:00', league: 'UFC' },
];

const liveEvents = [
  { sport: 'Soccer', league: 'Premier League', teams: 'Arsenal vs Man United', time: '22:00', odds: ['1.85', '3.40', '4.20'], isLive: false, score: null },
  { sport: 'Soccer', league: 'FIFA Club World Cup', teams: 'Real Madrid vs Al Ahly', time: '20:00', odds: ['1.60', '3.80', '5.00'], isLive: true, score: '2-1' },
];

const popularEvents = [
  { sport: 'Soccer', league: 'Premier League', teams: 'Arsenal vs Man United', time: '22:00', odds: ['1.85', '3.40', '4.20'] },
  { sport: 'Basketball', league: 'NBA', teams: 'LAL vs BOS', time: '02:00', odds: ['1.95', '1.95'] },
];

// Dropdown components (from SlotsPage/LiveCasinoPage)
type Provider = { name: string };
type ProviderDropdownProps = {
  providers: Provider[];
  selected: string;
  onSelect: (name: string) => void;
};
const ProviderDropdown = ({ providers, selected, onSelect }: ProviderDropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center bg-gray-900 px-4 py-2 rounded-md text-white font-semibold focus:outline-none min-w-[120px]"
        onClick={() => setOpen((o) => !o)}
      >
        Providers
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-40 bg-gray-900 rounded-md shadow-lg z-20">
          {providers.map((p: Provider) => (
            <button
              key={p.name}
              className={`block w-full text-left px-4 py-2 hover:bg-primary-yellow/10 ${selected === p.name ? 'text-primary-yellow font-bold' : 'text-white'}`}
              onClick={() => { onSelect(p.name); setOpen(false); }}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

type SortDropdownProps = {
  options: string[];
  selected: string;
  onSelect: (name: string) => void;
};
const SortDropdown = ({ options, selected, onSelect }: SortDropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center bg-gray-900 px-4 py-2 rounded-md text-white font-semibold focus:outline-none min-w-[100px]"
        onClick={() => setOpen((o) => !o)}
      >
        {selected}
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-900 rounded-md shadow-lg z-20">
          {options.map((o: string) => (
            <button
              key={o}
              className={`block w-full text-left px-4 py-2 hover:bg-primary-yellow/10 ${selected === o ? 'text-primary-yellow font-bold' : 'text-white'}`}
              onClick={() => { onSelect(o); setOpen(false); }}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Example providers and sort options for demo
const allProviders = [
  { name: 'All Providers' },
  { name: 'FIFA' },
  { name: 'NBA' },
  { name: 'Premier League' },
  { name: 'UFC' },
];
const sortOptions = ['Popular', 'Newest', 'A-Z', 'Time'];

const SportsbookPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeSport, setActiveSport] = useState('soccer');
  const [search, setSearch] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [sort, setSort] = useState('Popular');

  // Filtered featured events
  const filteredFeatured = featuredEvents.filter(e =>
    activeSport === 'all' || e.league.toLowerCase().includes(activeSport)
  ).filter(e => e.teams.toLowerCase().includes(search.toLowerCase()));

  // Section header
  const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex items-center text-lg font-bold text-white mb-4">
      <span className="text-primary-yellow mr-2">{icon}</span>
      {title}
    </div>
  );

  // Event card
  const EventCard = ({ event, showScore = false, showLive = false }: any) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-800 rounded-xl p-4 mb-3 border border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 flex-1">
        <span className="font-bold text-white text-base md:text-lg">{event.teams}</span>
        <span className="text-xs text-gray-400 ml-0 md:ml-2">{event.league}</span>
        <span className="flex items-center text-xs text-primary-yellow ml-0 md:ml-4"><FaClock className="mr-1" />{event.time}</span>
        {showScore && event.score && (
          <span className="ml-0 md:ml-4 text-xs font-bold text-white bg-gray-700 px-2 py-1 rounded">{event.score}</span>
        )}
        {showLive && event.isLive && (
          <span className="ml-0 md:ml-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>LIVE
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        {event.odds && event.odds.map((odd: string, idx: number) => (
          <button key={idx} className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded-lg border border-gray-700 hover:bg-primary-yellow hover:text-gray-900 transition-all text-sm min-w-[60px]">
            {odd}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="flex-1 bg-secondary-dark min-h-0 pt-24 p-0">
      {/* Header */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Sportsbook</h1>
            <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 border border-gray-600 max-w-md">
              <FaSearch className="text-gray-400 mr-3 text-lg" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search event or team"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-base"
              />
            </div>
          </div>
          {/* Sports Navigation */}
          <div className="flex space-x-6 mb-6 overflow-x-auto pb-2">
            {sports.map(sport => (
              <button
                key={sport.key}
                onClick={() => setActiveSport(sport.key)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all min-w-[80px] ${
                  activeSport === sport.key 
                    ? 'bg-primary-yellow text-gray-900 shadow-lg' 
                    : 'text-gray-300 hover:text-primary-yellow hover:bg-gray-800/50'
                }`}
              >
                {sport.icon}
                <span className="mt-2">{sport.label}</span>
              </button>
            ))}
          </div>
          {/* Event Tabs */}
          <div className="flex space-x-1 mb-0">
            {eventTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === tab 
                    ? 'bg-primary-yellow text-gray-900' 
                    : 'text-gray-300 hover:text-primary-yellow hover:bg-gray-800/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6 pt-0">
        {/* Featured Events */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredFeatured.map((event, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl shadow border border-gray-700 p-4 flex flex-col justify-between min-h-[120px]">
                <div className="text-xs text-gray-400 mb-1">{event.league}</div>
                <div className="font-bold text-white text-base mb-2">{event.teams}</div>
                <div className="flex items-center text-xs text-primary-yellow font-semibold">
                  <FaClock className="mr-1" />
                  {event.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Live Events */}
        <div className="mb-10">
          <SectionHeader icon={<FaFire />} title="Live Events" />
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="mb-4 flex items-center text-primary-yellow font-bold text-lg">
              <FaFutbol className="mr-2" /> Soccer
            </div>
            {liveEvents.map((event, idx) => (
              <EventCard key={idx} event={event} showScore={true} showLive={true} />
            ))}
          </div>
        </div>
        {/* Popular Events */}
        <div className="mb-10">
          <SectionHeader icon={<FaFire />} title="Popular Events" />
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            {popularEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SportsbookPage; 