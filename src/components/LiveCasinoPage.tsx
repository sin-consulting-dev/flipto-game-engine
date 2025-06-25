import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaCircle } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

const liveProviders = [
  { name: 'All Providers', image: placeholder },
  { name: 'Evolution', image: placeholder },
  { name: 'Pragmatic Play Live', image: placeholder },
  { name: 'Ezugi', image: placeholder },
  { name: 'Playtech Live', image: placeholder },
];

const sortOptions = ['Popular', 'Newest', 'A-Z', 'Table Type'];

const topLive = [
  { name: 'Lightning Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'HOT', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Blackjack Party', provider: 'Evolution', type: 'Blackjack', rtp: '99.3%', tag: 'LIVE', minBet: 5, maxBet: 1000, image: placeholder },
  { name: 'Mega Wheel', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.5%', tag: 'NEW', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Baccarat Squeeze', provider: 'Ezugi', type: 'Baccarat', rtp: '98.9%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Monopoly Live', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
];

const blackjackTables = [
  { name: 'Blackjack Classic', provider: 'Evolution', type: 'Blackjack', rtp: '99.3%', tag: 'LIVE', minBet: 5, maxBet: 1000, image: placeholder },
  { name: 'Speed Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.2%', tag: '', minBet: 10, maxBet: 2000, image: placeholder },
  { name: 'VIP Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.4%', tag: 'VIP', minBet: 50, maxBet: 10000, image: placeholder },
];

const rouletteTables = [
  { name: 'Immersive Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'LIVE', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Auto Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 0.5, maxBet: 1000, image: placeholder },
];

const baccaratTables = [
  { name: 'No Commission Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Speed Baccarat', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.9%', tag: 'NEW', minBet: 5, maxBet: 2000, image: placeholder },
];

const gameShows = [
  { name: 'Crazy Time', provider: 'Evolution', type: 'Game Show', rtp: '96.1%', tag: 'HOT', minBet: 0.1, maxBet: 1000, image: placeholder },
  { name: 'Deal or No Deal', provider: 'Evolution', type: 'Game Show', rtp: '95.5%', tag: '', minBet: 0.5, maxBet: 2000, image: placeholder },
];

const newLiveGames = [
  { name: 'PowerUP Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: 'NEW', minBet: 1, maxBet: 4000, image: placeholder },
  { name: 'ONE Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 5, maxBet: 1500, image: placeholder },
];

const LiveCard = ({ game }: { game: typeof topLive[0] }) => (
  <div className="relative w-56 min-w-[14rem] rounded-lg overflow-hidden bg-gray-800/60 group shadow-md mx-2">
    <div className="relative h-36 bg-gray-700 flex items-center justify-center">
      <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
      {game.tag && (
        <span className="absolute top-2 left-2 bg-primary-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded">
          {game.tag}
        </span>
      )}
      <span className="absolute top-2 right-2 flex items-center gap-1 text-xs text-green-400 font-bold">
        <FaCircle className="text-green-400 animate-pulse" /> Live
      </span>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-4 rounded shadow-lg">Join Table</button>
      </div>
    </div>
    <div className="p-3">
      <h4 className="font-bold truncate whitespace-nowrap text-white">{game.name}</h4>
      <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
        <span>{game.provider}</span>
        <span>{game.type}</span>
      </div>
      <div className="flex justify-between items-center mt-1 text-xs text-gray-400">
        <span>RTP: {game.rtp}</span>
        <span>Min: ${game.minBet} / Max: ${game.maxBet}</span>
      </div>
    </div>
  </div>
);

const ProviderDropdown = ({ providers, selected, onSelect }: { providers: typeof liveProviders, selected: string, onSelect: (name: string) => void }) => {
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
          {providers.map((p) => (
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

const SortDropdown = ({ options, selected, onSelect }: { options: string[], selected: string, onSelect: (name: string) => void }) => {
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
          {options.map((o) => (
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

const Section = ({ title, games, viewAllHref }: { title: string; games: any[]; viewAllHref?: string }) => (
  <div className="mb-12">
    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      <a href={viewAllHref || '#'} className="text-primary-yellow hover:underline text-sm font-semibold">View All</a>
    </div>
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-4">
        {games.length === 0 ? (
          <div className="text-gray-400 italic p-8">No games found for this provider.</div>
        ) : (
          games.map(game => (
            <LiveCard key={game.name} game={game} />
          ))
        )}
      </div>
    </div>
  </div>
);

const LiveCasinoPage = () => {
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [sort, setSort] = useState('Popular');
  const [search, setSearch] = useState('');

  // Filter function
  const filterByProvider = (games: any[]) =>
    selectedProvider === 'All Providers' ? games : games.filter(g => g.provider === selectedProvider);

  // Search function
  const filterBySearch = (games: any[]) =>
    search.trim() === '' ? games : games.filter(g => g.name.toLowerCase().includes(search.toLowerCase()));

  // Compose filters
  const filterGames = (games: any[]) => filterBySearch(filterByProvider(games));

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-secondary-dark min-h-0 pt-20">
      {/* Hero Banner */}
      <div className="rounded-b-3xl shadow-lg bg-gradient-to-r from-primary-yellow/20 to-gray-900 flex flex-col md:flex-row items-center justify-between p-0 md:p-12 mb-6 min-h-[320px] w-full">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">Experience Live Casino Thrills!</h1>
          <p className="text-gray-200 mb-4 max-w-lg">Join real dealers and players in our top-rated live casino games. Enjoy blackjack, roulette, baccarat, and game shows—streamed in HD, 24/7!</p>
          <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-6 rounded shadow hover:bg-yellow-400 transition">Play Live Now</button>
        </div>
        <div className="flex justify-center">
          <img src={placeholder} alt="Live Casino Banner" className="w-72 h-48 object-contain rounded-xl shadow-lg border-4 border-primary-yellow/30" />
        </div>
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center bg-gray-900 rounded-md px-4 py-3 border border-gray-700">
          <FaSearch className="text-gray-400 mr-3 text-lg" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search live game"
            className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-base"
          />
        </div>
      </div>
      {/* Filter/Sort Row */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <FaFilter className="text-gray-400 text-lg" />
          <span className="font-semibold text-white">Filter</span>
          <ProviderDropdown providers={liveProviders} selected={selectedProvider} onSelect={setSelectedProvider} />
        </div>
        <div className="flex items-center space-x-4">
          <FaSort className="text-gray-400 text-lg" />
          <span className="font-semibold text-white">Sort</span>
          <SortDropdown options={sortOptions} selected={sort} onSelect={setSort} />
        </div>
      </div>
      {/* Main Sections with clean separation */}
      <Section title="Top Live Casino" games={filterGames(topLive)} />
      <Section title="Blackjack Tables" games={filterGames(blackjackTables)} />
      <Section title="Roulette Tables" games={filterGames(rouletteTables)} />
      <Section title="Baccarat Tables" games={filterGames(baccaratTables)} />
      <Section title="Game Shows" games={filterGames(gameShows)} />
      <Section title="New Live Games" games={filterGames(newLiveGames)} />
    </main>
  );
};

export default LiveCasinoPage; 