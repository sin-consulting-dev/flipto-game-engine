import { useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

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

const allSlots = [
  { name: 'Gates of Olympus', rtp: '96.5%', tag: 'HOT', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sweet Bonanza', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Book of Dead', rtp: '96.2%', tag: '', provider: 'Playtech', image: placeholder },
  { name: 'Starburst', rtp: '96.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Gonzo\'s Quest', rtp: '96.0%', tag: 'JACKPOT', provider: 'NetEnt', image: placeholder },
  { name: 'Wolf Gold', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Mega Moolah', rtp: '88.1%', tag: 'JACKPOT', provider: 'Microgaming', image: placeholder },
  { name: 'Reactoonz', rtp: '96.5%', tag: '', provider: 'Playtech', image: placeholder },
  { name: 'Dead or Alive 2', rtp: '96.8%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Jammin\' Jars', rtp: '96.8%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Age of the Gods', rtp: '95.0%', tag: 'JACKPOT', provider: 'Playtech', image: placeholder },
  { name: 'Thunderstruck II', rtp: '96.6%', tag: '', provider: 'Microgaming', image: placeholder },
  { name: 'Bonanza', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'The Dog House', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Divine Fortune', rtp: '96.6%', tag: 'JACKPOT', provider: 'NetEnt', image: placeholder },
  { name: 'Buffalo King', rtp: '96.1%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Immortal Romance', rtp: '96.9%', tag: '', provider: 'Microgaming', image: placeholder },
  { name: 'Fire Joker', rtp: '96.2%', tag: '', provider: 'Playtech', image: placeholder },
  { name: 'Vikings Go Berzerk', rtp: '96.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Great Rhino', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Avalon II', rtp: '95.9%', tag: '', provider: 'Microgaming', image: placeholder },
  { name: 'Gladiator', rtp: '95.1%', tag: '', provider: 'Playtech', image: placeholder },
  { name: 'Twin Spin', rtp: '96.6%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Mustang Gold', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Game of Thrones', rtp: '95.0%', tag: '', provider: 'Microgaming', image: placeholder },
  { name: 'Playboy Gold', rtp: '96.2%', tag: '', provider: 'Playtech', image: placeholder },
  { name: 'Jack and the Beanstalk', rtp: '96.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Pirate Gold', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Jurassic Park', rtp: '96.7%', tag: '', provider: 'Microgaming', image: placeholder },
  { name: 'Kong', rtp: '96.0%', tag: '', provider: 'Playtech', image: placeholder },
];

const bonusBuy = [
  { name: 'Gates of Olympus 1000', rtp: '96.5%', tag: 'BONUS', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sweet Bonanza 1000', rtp: '96.3%', tag: 'BONUS', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Wanted Dead or Wild', rtp: '96.4%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Mental', rtp: '96.1%', tag: 'BONUS', provider: 'NetEnt', image: placeholder },
  { name: 'Razor Shark', rtp: '96.7%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Money Train 2', rtp: '96.4%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Fruit Party', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Xways Hoarder', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Extra Juicy', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'San Quentin', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'The Hand of Midas', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Deadwood', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Starlight Princess', rtp: '96.5%', tag: 'BONUS', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Punk Rocker', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Fruit Party 2', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Karen Maneater', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Madame Destiny Megaways', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Tombstone R.I.P.', rtp: '96.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Fire Strike', rtp: '96.2%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Punk Toilet', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Aztec Gems', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Tombstone', rtp: '96.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Big Bass Bonanza', rtp: '96.7%', tag: 'BONUS', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sticky Bandits', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Wild West Gold', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Punk Rocker xWays', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Floating Dragon', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Scudamore\'s Super Stakes', rtp: '96.0%', tag: '', provider: 'NetEnt', image: placeholder },
];

const newSlots = [
  { name: 'Starlight Princess 1000', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sugar Rush 1000', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Fruit Party 3', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Gates of Gatot Kaca', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Curse of the Werewolf', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Wisdom of Athena', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Forge of Olympus', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Christmas Big Bass Bonanza', rtp: '96.7%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Wild Beach Party', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Mystic Chief', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Chicken Drop', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Magician\'s Secrets', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Gems Bonanza', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Bigger Bass Bonanza', rtp: '96.7%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sword of Ares', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Pyramid King', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Cleocatra', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Fire Portals', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Mysterious Egypt', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Aztec Powernudge', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Spartan King', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Candy Stars', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Vampire vs Wolves', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Lucky Lightning', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Treasure Wild', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Smugglers Cove', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Drill that Gold', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Juicy Fruits', rtp: '96.5%', tag: 'NEW', provider: 'Pragmatic Play', image: placeholder },
];

const crashGames = [
  { name: 'Aviator', rtp: '97.0%', tag: 'HOT', provider: 'Pragmatic Play', image: placeholder },
  { name: 'JetX', rtp: '97.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Spaceman', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Crash X', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Balloon', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Rocket Queen', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sky Bounty', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Zeppelin', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Mines', rtp: '97.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Plinko', rtp: '99.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Limbo', rtp: '99.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Keno', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Dice', rtp: '99.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Hi-Lo', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Wheel', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Crash', rtp: '99.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Tower', rtp: '99.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Slide', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Hilo', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Diamonds', rtp: '96.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Rocket', rtp: '97.0%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Moon', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Crash Royale', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Fly', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Blast', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Boom', rtp: '96.5%', tag: '', provider: 'Pragmatic Play', image: placeholder },
];

const tableGames = [
  { name: 'Blackjack', rtp: '99.5%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'European Roulette', rtp: '97.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Baccarat', rtp: '98.9%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Poker', rtp: '98.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'American Roulette', rtp: '94.7%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'French Roulette', rtp: '97.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Pai Gow Poker', rtp: '97.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Three Card Poker', rtp: '96.6%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Caribbean Stud', rtp: '94.8%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Casino Hold\'em', rtp: '97.8%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Red Dog', rtp: '97.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'War', rtp: '97.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Sic Bo', rtp: '97.2%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Craps', rtp: '98.6%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Dragon Tiger', rtp: '96.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Andar Bahar', rtp: '97.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Teen Patti', rtp: '97.2%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Oasis Poker', rtp: '94.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Let It Ride', rtp: '97.1%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Spanish 21', rtp: '99.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Pontoon', rtp: '99.6%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Switch', rtp: '99.9%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Double Exposure', rtp: '99.3%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Super Fun 21', rtp: '99.0%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: 'Perfect Pairs', rtp: '95.9%', tag: '', provider: 'NetEnt', image: placeholder },
  { name: '21 Burn', rtp: '96.2%', tag: '', provider: 'NetEnt', image: placeholder },
];

const dropsWins = [
  { name: 'Drops & Wins Tournament', rtp: '96.5%', tag: 'TOURNAMENT', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Daily Drops', rtp: '96.5%', tag: 'DAILY', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Weekly Wins', rtp: '96.5%', tag: 'WEEKLY', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Monthly Madness', rtp: '96.5%', tag: 'MONTHLY', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Mega Drop', rtp: '96.5%', tag: 'MEGA', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Prize Pool Paradise', rtp: '96.5%', tag: 'POOL', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Cash Cascade', rtp: '96.5%', tag: 'CASCADE', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Bonus Blitz', rtp: '96.5%', tag: 'BLITZ', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Jackpot Journey', rtp: '96.5%', tag: 'JACKPOT', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Fortune Frenzy', rtp: '96.5%', tag: 'FRENZY', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Lucky Legends', rtp: '96.5%', tag: 'LEGENDS', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Treasure Trove', rtp: '96.5%', tag: 'TREASURE', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Golden Giveaway', rtp: '96.5%', tag: 'GOLDEN', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Diamond Dreams', rtp: '96.5%', tag: 'DIAMOND', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Platinum Paradise', rtp: '96.5%', tag: 'PLATINUM', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Silver Sensation', rtp: '96.5%', tag: 'SILVER', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Bronze Bonanza', rtp: '96.5%', tag: 'BRONZE', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Crystal Challenge', rtp: '96.5%', tag: 'CRYSTAL', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Ruby Rush', rtp: '96.5%', tag: 'RUBY', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Emerald Excitement', rtp: '96.5%', tag: 'EMERALD', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Sapphire Spectacular', rtp: '96.5%', tag: 'SAPPHIRE', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Topaz Triumph', rtp: '96.5%', tag: 'TOPAZ', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Opal Odyssey', rtp: '96.5%', tag: 'OPAL', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Pearl Perfection', rtp: '96.5%', tag: 'PEARL', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Amethyst Adventure', rtp: '96.5%', tag: 'AMETHYST', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Garnet Glory', rtp: '96.5%', tag: 'GARNET', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Turquoise Tournament', rtp: '96.5%', tag: 'TURQUOISE', provider: 'Pragmatic Play', image: placeholder },
  { name: 'Jade Jackpot', rtp: '96.5%', tag: 'JADE', provider: 'Pragmatic Play', image: placeholder },
];

const SlotCard = ({ slot }: { slot: typeof allSlots[0] }) => (
  <div className="relative rounded-xl overflow-hidden bg-gray-800/80 group shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-primary-yellow/30">
    <div className="relative aspect-[3/2] bg-gray-700 flex items-center justify-center">
      <img src={slot.image} alt={slot.name} className="w-full h-full object-cover" />
      {slot.tag && (
        <span className="absolute top-3 left-3 bg-primary-yellow text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {slot.tag}
        </span>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <button className="bg-primary-yellow text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all">
          Play Now
        </button>
      </div>
    </div>
    <div className="p-4 bg-gradient-to-b from-gray-800/90 to-gray-900/90">
      <h4 className="font-bold text-white mb-2 truncate" title={slot.name}>{slot.name}</h4>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <span className="text-xs text-primary-yellow font-semibold">RTP:</span>
          <span className="text-xs text-white font-medium">{slot.rtp}</span>
        </div>
        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-md">{slot.provider}</span>
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

const Section = ({ title, slots }: { title: string; slots: SlotGame[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedSlots = isExpanded ? slots : slots.slice(0, 10);
  const hasMoreGames = slots.length > 10;

  return (
    <div className="mb-12">
      {/* Enhanced Section Header */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/60 rounded-xl p-6 mb-6 border border-gray-700/50 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-8 bg-primary-yellow rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
            <span className="bg-primary-yellow/20 text-primary-yellow px-3 py-1 rounded-full text-sm font-semibold">
              {slots.length} games
            </span>
          </div>
          {hasMoreGames && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-primary-yellow hover:text-yellow-400 transition-colors font-semibold group"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Games Grid */}
      <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {slots.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No games found</div>
              <div className="text-gray-500 text-sm">Try adjusting your search or filter settings</div>
            </div>
          ) : (
            displayedSlots.map(slot => (
              <SlotCard key={slot.name} slot={slot} />
            ))
          )}
        </div>
        
        {/* Show More/Less Button at Bottom */}
        {hasMoreGames && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 text-primary-yellow hover:text-yellow-400 transition-all px-6 py-3 rounded-lg border border-gray-600/50 hover:border-primary-yellow/30 group"
            >
              <span className="font-semibold">
                {isExpanded ? `Hide ${slots.length - 10} games` : `Show ${slots.length - 10} more games`}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

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
      {/* Main Sections with enhanced visual separation */}
      <div className="space-y-8">
        <Section title="🔥 Top Slots" slots={filterGames(allSlots)} />
        <Section title="💰 Bonus Buy" slots={filterGames(bonusBuy)} />
        <Section title="✨ New Slots" slots={filterGames(newSlots)} />
        <Section title="🚀 Crash Games" slots={filterGames(crashGames)} />
        <Section title="🃏 Card & Table" slots={filterGames(tableGames)} />
        <Section title="🎁 Drops & Wins" slots={filterGames(dropsWins)} />
      </div>
    </main>
  );
};

export default SlotsPage; 