import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

const categories = [
  { key: 'top', label: 'Top Slots' },
  { key: 'bonus', label: 'Bonus Buy' },
  { key: 'new', label: 'New Slots' },
  { key: 'crash', label: 'Crash Games' },
  { key: 'table', label: 'Card & Table' },
  { key: 'drops', label: 'Drops & Wins' },
];

const allProviders = [
  { name: 'All Providers', image: placeholder },
  { name: 'Pragmatic Play', image: placeholder },
  { name: 'Playtech', image: placeholder },
  { name: 'NetEnt', image: placeholder },
  { name: 'Microgaming', image: placeholder },
];

const sortOptions = ['Popular', 'Newest', 'A-Z', 'RTP'];

type SlotGame = {
  name: string;
  rtp: string;
  tag: string;
  provider: string;
  image: string;
};

const allSlots = Array.from({ length: 10 }, (_, i) => ({
  name: `Slot Game ${i + 1}`,
  rtp: `${96 + i * 0.2}%`,
  tag: i === 0 ? 'HOT' : i === 1 ? 'NEW' : i === 4 ? 'JACKPOT' : '',
  provider: i % 2 === 0 ? 'Pragmatic Play' : 'Playtech',
  image: placeholder,
}));

const bonusBuy = Array.from({ length: 8 }, (_, i) => ({
  name: `Bonus Buy ${i + 1}`,
  rtp: `${95 + i * 0.3}%`,
  tag: i === 2 ? 'BONUS' : '',
  provider: i % 2 === 0 ? 'NetEnt' : 'Microgaming',
  image: placeholder,
}));

const newSlots = Array.from({ length: 8 }, (_, i) => ({
  name: `New Slot ${i + 1}`,
  rtp: `${97 + i * 0.1}%`,
  tag: i === 0 ? 'NEW' : '',
  provider: i % 2 === 0 ? 'Pragmatic Play' : 'NetEnt',
  image: placeholder,
}));

const crashGames = Array.from({ length: 6 }, (_, i) => ({
  name: `Crash Game ${i + 1}`,
  rtp: `${97 + i * 0.2}%`,
  tag: '',
  provider: i % 2 === 0 ? 'Microgaming' : 'Playtech',
  image: placeholder,
}));

const tableGames = Array.from({ length: 6 }, (_, i) => ({
  name: `Table Game ${i + 1}`,
  rtp: `${98 + i * 0.1}%`,
  tag: '',
  provider: i % 2 === 0 ? 'NetEnt' : 'Pragmatic Play',
  image: placeholder,
}));

const dropsWins = Array.from({ length: 8 }, (_, i) => ({
  name: `Drop & Win ${i + 1}`,
  rtp: `${96 + i * 0.2}%`,
  tag: '',
  provider: i % 2 === 0 ? 'Microgaming' : 'Playtech',
  image: placeholder,
}));

const SlotCard = ({ slot }: { slot: typeof allSlots[0] }) => (
  <div className="relative w-48 min-w-[12rem] rounded-lg overflow-hidden bg-gray-800/60 group shadow-md mx-2">
    <div className="relative h-32 bg-gray-700 flex items-center justify-center">
      <img src={slot.image} alt={slot.name} className="w-full h-full object-cover" />
      {slot.tag && (
        <span className="absolute top-2 left-2 bg-primary-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded">
          {slot.tag}
        </span>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-4 rounded shadow-lg">Play</button>
      </div>
    </div>
    <div className="p-3">
      <h4 className="font-bold truncate whitespace-nowrap text-white">{slot.name}</h4>
      <div className="flex justify-between items-center mt-1">
        <span className="text-xs text-gray-400">RTP: {slot.rtp}</span>
        <span className="text-xs text-gray-400">{slot.provider}</span>
      </div>
    </div>
  </div>
);

const ProviderDropdown = ({ providers, selected, onSelect }: { providers: typeof allProviders, selected: string, onSelect: (name: string) => void }) => {
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

const Section = ({ title, slots, viewAllHref }: { title: string; slots: SlotGame[]; viewAllHref?: string }) => (
  <div className="mb-12">
    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      <a href={viewAllHref || '#'} className="text-primary-yellow hover:underline text-sm font-semibold">View All</a>
    </div>
    <div className="pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {slots.length === 0 ? (
          <div className="text-gray-400 italic p-8 col-span-full">No games found for this provider.</div>
        ) : (
          slots.map(slot => (
            <SlotCard key={slot.name} slot={slot} />
          ))
        )}
      </div>
    </div>
  </div>
);

const SlotsPage = () => {
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [sort, setSort] = useState('Popular');
  const [search, setSearch] = useState('');

  // Filter function
  const filterByProvider = (games: SlotGame[]) =>
    selectedProvider === 'All Providers' ? games : games.filter(g => g.provider === selectedProvider);

  // Search function
  const filterBySearch = (games: SlotGame[]) =>
    search.trim() === '' ? games : games.filter(g => g.name.toLowerCase().includes(search.toLowerCase()));

  // Compose filters
  const filterGames = (games: SlotGame[]) => filterBySearch(filterByProvider(games));

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-secondary-dark min-h-0 pt-20">
      {/* Hero Banner */}
      <div className="rounded-b-3xl shadow-lg bg-gradient-to-r from-primary-yellow/20 to-gray-900 flex flex-col md:flex-row items-center justify-between p-0 md:p-12 mb-6 min-h-[320px] w-full">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">Spin & Win Big on Flipto Slots!</h1>
          <p className="text-gray-200 mb-4 max-w-lg">Discover the best slot games with high RTP, exciting features, and instant rewards. Play now and experience the thrill of winning on Flipto!</p>
          <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-6 rounded shadow hover:bg-yellow-400 transition">Play Now</button>
        </div>
        <div className="flex justify-center">
          <img src={placeholder} alt="Slots Banner" className="w-72 h-48 object-contain rounded-xl shadow-lg border-4 border-primary-yellow/30" />
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
            placeholder="Search your game"
            className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-base"
          />
        </div>
      </div>
      {/* Filter/Sort Row */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <FaFilter className="text-gray-400 text-lg" />
          <span className="font-semibold text-white">Filter</span>
          <ProviderDropdown providers={allProviders} selected={selectedProvider} onSelect={setSelectedProvider} />
        </div>
        <div className="flex items-center space-x-4">
          <FaSort className="text-gray-400 text-lg" />
          <span className="font-semibold text-white">Sort</span>
          <SortDropdown options={sortOptions} selected={sort} onSelect={setSort} />
        </div>
      </div>
      {/* Main Sections with clean separation */}
      <Section title="Top Slots" slots={filterGames(allSlots)} />
      <Section title="Bonus Buy" slots={filterGames(bonusBuy)} />
      <Section title="New Slots" slots={filterGames(newSlots)} />
      <Section title="Crash Games" slots={filterGames(crashGames)} />
      <Section title="Card & Table" slots={filterGames(tableGames)} />
      <Section title="Drops & Wins" slots={filterGames(dropsWins)} />
    </main>
  );
};

export default SlotsPage; 