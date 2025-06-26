import { useState } from 'react';
import { FaFutbol, FaTableTennis, FaBasketballBall, FaVolleyballBall, FaBaseballBall, FaFootballBall, FaHandRock, FaSearch, FaClock, FaFilter, FaSort, FaStar, FaChartLine, FaTrophy, FaUsers, FaShoppingCart, FaFire, FaBolt, FaEye, FaChevronRight, FaCalendarAlt, FaSignal, FaTimes } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

const sports = [
  { key: 'soccer', label: 'Soccer', icon: <FaFutbol className="text-xl" />, count: 145 },
  { key: 'tennis', label: 'Tennis', icon: <FaTableTennis className="text-xl" />, count: 89 },
  { key: 'basketball', label: 'Basketball', icon: <FaBasketballBall className="text-xl" />, count: 67 },
  { key: 'volleyball', label: 'Volleyball', icon: <FaVolleyballBall className="text-xl" />, count: 34 },
  { key: 'baseball', label: 'Baseball', icon: <FaBaseballBall className="text-xl" />, count: 28 },
  { key: 'football', label: 'Football', icon: <FaFootballBall className="text-xl" />, count: 15 },
  { key: 'boxing', label: 'Boxing', icon: <FaHandRock className="text-xl" />, count: 12 },
];

const eventTabs = [
  { key: 'all', label: 'All', count: 390 },
  { key: 'live', label: 'In-Play', count: 78 },
  { key: 'upcoming', label: 'Upcoming', count: 234 },
  { key: 'popular', label: 'Popular', count: 45 },
  { key: 'today', label: 'Today', count: 156 },
];

const featuredEvents = [
  { 
    title: 'FIFA Club World Cup', 
    teams: 'Real Madrid vs Al Ahly', 
    image: placeholder, 
    time: 'Today 20:00', 
    league: 'FIFA Club World Cup', 
    odds: ['1.60', '3.80', '5.00'],
    viewers: '2.3M',
    trending: true
  },
  { 
    title: 'NBA Finals', 
    teams: 'LAL vs BOS', 
    image: placeholder, 
    time: 'Tomorrow 02:00', 
    league: 'NBA', 
    odds: ['1.95', '1.95'],
    viewers: '1.8M',
    trending: true
  },
  { 
    title: 'Premier League', 
    teams: 'Arsenal vs Man United', 
    image: placeholder, 
    time: 'Today 22:00', 
    league: 'Premier League', 
    odds: ['1.85', '3.40', '4.20'],
    viewers: '1.2M',
    trending: false
  },
];

const quickBets = [
  { label: 'Over 2.5 Goals', odds: '1.85', category: 'Popular' },
  { label: 'Both Teams Score', odds: '1.70', category: 'Popular' },
  { label: 'First Goal Scorer', odds: '4.50', category: 'Specials' },
  { label: 'Correct Score 2-1', odds: '8.00', category: 'Specials' },
  { label: 'Red Card Shown', odds: '2.30', category: 'Cards' },
  { label: 'Penalty Awarded', odds: '3.20', category: 'Specials' },
];

const liveScores = [
  { homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeScore: 2, awayScore: 1, minute: '67\'', status: 'live' },
  { homeTeam: 'Man City', awayTeam: 'Arsenal', homeScore: 1, awayScore: 1, minute: '45+2\'', status: 'live' },
  { homeTeam: 'Lakers', awayTeam: 'Warriors', homeScore: 98, awayScore: 102, minute: 'Q3 8:45', status: 'live' },
];

const trendingEvents = [
  { teams: 'Barcelona vs Real Madrid', league: 'La Liga', odds: '2.10', bets: '45.2K', change: '+12%' },
  { teams: 'Bayern vs Dortmund', league: 'Bundesliga', odds: '1.75', bets: '38.7K', change: '+8%' },
  { teams: 'PSG vs Marseille', league: 'Ligue 1', odds: '1.55', bets: '29.1K', change: '+15%' },
];

const soccerEvents = [
  { 
    league: 'Premier League', 
    homeTeam: 'Arsenal', 
    awayTeam: 'Manchester United', 
    time: '15:30', 
    date: 'Today', 
    homeOdds: '1.85', 
    drawOdds: '3.40', 
    awayOdds: '4.20', 
    isLive: false,
    stats: { homeForm: 'WWDWL', awayForm: 'LWWDW', h2h: '2-1-2' },
    markets: 15
  },
  { 
    league: 'Premier League', 
    homeTeam: 'Liverpool', 
    awayTeam: 'Chelsea', 
    time: '18:00', 
    date: 'Today', 
    homeOdds: '2.10', 
    drawOdds: '3.20', 
    awayOdds: '3.80', 
    isLive: true,
    stats: { homeForm: 'WWWDW', awayForm: 'WLDWW', h2h: '3-1-1' },
    markets: 18
  },
  { 
    league: 'La Liga', 
    homeTeam: 'Real Madrid', 
    awayTeam: 'Barcelona', 
    time: '21:00', 
    date: 'Tomorrow', 
    homeOdds: '2.30', 
    drawOdds: '3.10', 
    awayOdds: '3.40', 
    isLive: false,
    stats: { homeForm: 'WWWWL', awayForm: 'WDWWW', h2h: '1-1-3' },
    markets: 25
  },
];

const basketballEvents = [
  { 
    league: 'NBA', 
    homeTeam: 'Los Angeles Lakers', 
    awayTeam: 'Boston Celtics', 
    time: '02:00', 
    date: 'Tomorrow', 
    homeOdds: '1.95', 
    awayOdds: '1.95', 
    isLive: false,
    stats: { homeForm: 'WWLWW', awayForm: 'LWWWL', h2h: '2-1' },
    markets: 12
  },
];

type BetSlipItem = {
  id: string;
  eventName: string;
  selection: string;
  odds: number;
  stake: number;
};

type SoccerEvent = {
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
  isLive: boolean;
  stats: { homeForm: string; awayForm: string; h2h: string };
  markets: number;
};

type BasketballEvent = {
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  homeOdds: string;
  awayOdds: string;
  isLive: boolean;
  stats: { homeForm: string; awayForm: string; h2h: string };
  markets: number;
};

type SportEvent = SoccerEvent | BasketballEvent;

const sportsProviders = [
  { name: 'All Leagues', image: '' },
  { name: 'Premier League', image: '' },
  { name: 'La Liga', image: '' },
  { name: 'Bundesliga', image: '' },
  { name: 'Serie A', image: '' },
  { name: 'NBA', image: '' },
  { name: 'EuroLeague', image: '' },
];

const sortOptions = ['Popular', 'Newest', 'A-Z', 'Time', 'Odds'];

const ProviderDropdown = ({ providers, selected, onSelect }: { providers: typeof sportsProviders, selected: string, onSelect: (name: string) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center bg-gray-900 px-4 py-2 rounded-md text-white font-semibold focus:outline-none min-w-[120px]"
        onClick={() => setOpen((o) => !o)}
      >
        Leagues
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

const BetSlip = ({ betSlip, setBetSlip }: { betSlip: BetSlipItem[], setBetSlip: (items: BetSlipItem[]) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateStake = (id: string, stake: number) => {
    setBetSlip(betSlip.map(item => item.id === id ? { ...item, stake } : item));
  };

  const removeFromBetSlip = (id: string) => {
    setBetSlip(betSlip.filter(item => item.id !== id));
  };

  const totalStake = betSlip.reduce((sum, item) => sum + item.stake, 0);
  const potentialWin = betSlip.reduce((sum, item) => sum + (item.stake * item.odds), 0);

  if (betSlip.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-gray-900 border border-primary-yellow rounded-lg shadow-2xl transition-all duration-300 ${isOpen ? 'w-96' : 'w-auto'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 bg-primary-yellow text-gray-900 font-bold rounded-t-lg"
        >
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <span>Bet Slip ({betSlip.length})</span>
          </div>
          <span className="text-sm">${totalStake.toFixed(2)}</span>
        </button>
        
        {isOpen && (
          <div className="p-4 max-h-96 overflow-y-auto">
            {betSlip.map((item) => (
              <div key={item.id} className="border-b border-gray-700 pb-3 mb-3 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{item.eventName}</div>
                    <div className="text-gray-400 text-xs">{item.selection}</div>
                    <div className="text-primary-yellow font-bold">{item.odds.toFixed(2)}</div>
                  </div>
                  <button
                    onClick={() => removeFromBetSlip(item.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">Stake:</span>
                  <input
                    type="number"
                    value={item.stake}
                    onChange={(e) => updateStake(item.id, parseFloat(e.target.value) || 0)}
                    className="bg-gray-800 text-white px-2 py-1 rounded text-sm w-20"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            ))}
            
            <div className="border-t border-gray-700 pt-3 mt-3">
              <div className="flex justify-between text-white mb-2">
                <span>Total Stake:</span>
                <span>${totalStake.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-primary-yellow font-bold mb-4">
                <span>Potential Win:</span>
                <span>${potentialWin.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary-yellow text-gray-900 font-bold py-2 rounded hover:bg-yellow-400 transition">
                Place Bet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SportsbookPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [activeSport, setActiveSport] = useState('soccer');
  const [search, setSearch] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All Leagues');
  const [sort, setSort] = useState('Popular');
  const [betSlip, setBetSlip] = useState<BetSlipItem[]>([]);
  const [showStats, setShowStats] = useState<string | null>(null);

  const getCurrentEvents = (): SportEvent[] => {
    switch (activeSport) {
      case 'basketball':
        return basketballEvents;
      case 'soccer':
      default:
        return soccerEvents;
    }
  };

  const addToBetSlip = (eventName: string, selection: string, odds: number) => {
    const id = `${eventName}-${selection}`;
    if (!betSlip.find(item => item.id === id)) {
      setBetSlip([...betSlip, { id, eventName, selection, odds, stake: 10 }]);
    }
  };

  // Filter function
  const filterByProvider = (events: SportEvent[]) =>
    selectedProvider === 'All Leagues' ? events : events.filter(e => e.league === selectedProvider);

  // Search function
  const filterBySearch = (events: SportEvent[]) =>
    search.trim() === '' ? events : events.filter(e => 
      e.homeTeam.toLowerCase().includes(search.toLowerCase()) || 
      e.awayTeam.toLowerCase().includes(search.toLowerCase()) ||
      e.league.toLowerCase().includes(search.toLowerCase())
    );

  // Compose filters
  const filterEvents = (events: SportEvent[]) => filterBySearch(filterByProvider(events));

  const filteredEvents = filterEvents(getCurrentEvents());

  return (
    <div className="w-full min-w-0">
      <main className="w-full overflow-y-auto bg-secondary-dark min-h-0 pt-20">
        {/* Featured Events Banner */}
        <div className="bg-gradient-to-r from-primary-yellow/10 to-gray-900/50 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <FaFire className="mr-2 text-primary-yellow" />
              Featured Events
            </h2>
            <button className="text-primary-yellow hover:text-yellow-400 text-sm font-semibold flex items-center">
              View All <FaChevronRight className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredEvents.map((event, idx) => (
              <div key={idx} className="bg-gray-800/80 rounded-lg p-4 border border-gray-700 hover:border-primary-yellow/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary-yellow font-semibold">{event.league}</span>
                  <div className="flex items-center space-x-2">
                    {event.trending && <FaBolt className="text-primary-yellow text-sm" />}
                    <FaStar className="text-primary-yellow text-sm" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{event.teams}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm flex items-center">
                    <FaClock className="mr-1" />
                    {event.time}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <FaEye className="mr-1" />
                    {event.viewers}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {event.odds.slice(0, 2).map((odd, i) => (
                    <button 
                      key={i} 
                      onClick={() => addToBetSlip(event.teams, i === 0 ? 'Home Win' : 'Away Win', parseFloat(odd))}
                      className="bg-primary-yellow text-gray-900 px-3 py-1 rounded text-sm font-bold hover:bg-yellow-400 transition flex-1"
                    >
                      {odd}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 px-4">
          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm">Total Events</div>
                <div className="text-2xl font-bold text-white">390</div>
              </div>
              <FaCalendarAlt className="text-primary-yellow text-2xl" />
            </div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm">Live Events</div>
                <div className="text-2xl font-bold text-red-500">78</div>
              </div>
              <FaSignal className="text-red-500 text-2xl" />
            </div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm">Active Bets</div>
                <div className="text-2xl font-bold text-green-500">1.2M</div>
              </div>
              <FaUsers className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm">Prize Pool</div>
                <div className="text-2xl font-bold text-primary-yellow">$2.5M</div>
              </div>
              <FaTrophy className="text-primary-yellow text-2xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 px-4">
          {/* Live Scores */}
          <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <FaSignal className="mr-2 text-red-500" />
              Live Scores
            </h3>
            <div className="space-y-3">
              {liveScores.map((score, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded border border-gray-600">
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{score.homeTeam} vs {score.awayTeam}</div>
                    <div className="text-red-500 text-xs flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-1"></div>
                      {score.minute}
                    </div>
                  </div>
                  <div className="text-primary-yellow font-bold text-lg">
                    {score.homeScore} - {score.awayScore}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Bets */}
          <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <FaBolt className="mr-2 text-primary-yellow" />
              Quick Bets
            </h3>
            <div className="space-y-2">
              {quickBets.map((bet, idx) => (
                <button
                  key={idx}
                  onClick={() => addToBetSlip('Quick Bet', bet.label, parseFloat(bet.odds))}
                  className="w-full flex items-center justify-between p-3 bg-gray-900/50 rounded border border-gray-600 hover:border-primary-yellow/50 transition-colors"
                >
                  <div className="text-left">
                    <div className="text-white text-sm font-semibold">{bet.label}</div>
                    <div className="text-gray-400 text-xs">{bet.category}</div>
                  </div>
                  <div className="text-primary-yellow font-bold">{bet.odds}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Events */}
          <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
            <h3 className="text-white font-bold mb-4 flex items-center">
              <FaChartLine className="mr-2 text-green-500" />
              Trending
            </h3>
            <div className="space-y-3">
              {trendingEvents.map((event, idx) => (
                <div key={idx} className="p-3 bg-gray-900/50 rounded border border-gray-600">
                  <div className="text-white font-semibold text-sm mb-1">{event.teams}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-xs">{event.league}</div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500 text-xs font-bold">{event.change}</span>
                      <span className="text-primary-yellow font-bold">{event.odds}</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{event.bets} bets</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="flex items-center bg-gray-900 rounded-md px-4 py-3 border border-gray-700">
              <FaSearch className="text-gray-400 mr-3 text-lg" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search events, teams, leagues..."
                className="bg-transparent outline-none w-full text-white placeholder-gray-400 text-base"
              />
            </div>
          </div>

          {/* Sports Navigation */}
          <div className="mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {sports.map(sport => (
                <button
                  key={sport.key}
                  onClick={() => setActiveSport(sport.key)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                    activeSport === sport.key 
                      ? 'bg-primary-yellow text-gray-900 shadow-lg' 
                      : 'bg-gray-800 text-gray-300 hover:text-primary-yellow hover:bg-gray-700'
                  }`}
                >
                  {sport.icon}
                  <span>{sport.label}</span>
                  <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{sport.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Event Tabs */}
          <div className="flex space-x-1 mb-6 overflow-x-auto">
            {eventTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.key 
                    ? 'bg-primary-yellow text-gray-900' 
                    : 'bg-gray-800 text-gray-300 hover:text-primary-yellow hover:bg-gray-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Filter/Sort Row */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-400 text-lg" />
              <span className="font-semibold text-white">Filter</span>
              <ProviderDropdown providers={sportsProviders} selected={selectedProvider} onSelect={setSelectedProvider} />
            </div>
            <div className="flex items-center space-x-4">
              <FaSort className="text-gray-400 text-lg" />
              <span className="font-semibold text-white">Sort</span>
              <SortDropdown options={sortOptions} selected={sort} onSelect={setSort} />
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-gray-800/60 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-900/80 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center">
                  {sports.find(s => s.key === activeSport)?.icon}
                  <span className="ml-2">{sports.find(s => s.key === activeSport)?.label} Events</span>
                </h3>
                <span className="text-gray-400 text-sm">{filteredEvents.length} events</span>
              </div>
            </div>

            {/* Events List */}
            <div className="divide-y divide-gray-700">
              {filteredEvents.map((event, idx) => (
                <div key={idx} className="px-6 py-4 hover:bg-gray-700/30 transition-colors">
                  <div className="flex items-center justify-between">
                    {/* Event Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        {event.isLive && (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-500 text-xs font-bold">LIVE</span>
                          </div>
                        )}
                        <div>
                          <div className="text-gray-400 text-xs font-semibold mb-1">{event.league}</div>
                          <div className="text-white font-bold text-base">
                            {event.homeTeam} vs {event.awayTeam}
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="text-gray-400 text-sm flex items-center">
                              <FaClock className="mr-1" />
                              {event.date} {event.time}
                            </div>
                            <button
                              onClick={() => setShowStats(showStats === `${idx}` ? null : `${idx}`)}
                              className="text-primary-yellow text-sm hover:text-yellow-400 flex items-center"
                            >
                              <FaChartLine className="mr-1" />
                              Stats
                            </button>
                            <span className="text-gray-400 text-sm">{event.markets} markets</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stats Panel */}
                      {showStats === `${idx}` && (
                        <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-600">
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="text-gray-400 mb-1">Home Form</div>
                              <div className="text-white font-mono">{event.stats.homeForm}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">H2H (Last 5)</div>
                              <div className="text-white font-mono">{event.stats.h2h}</div>
                            </div>
                            <div>
                              <div className="text-gray-400 mb-1">Away Form</div>
                              <div className="text-white font-mono">{event.stats.awayForm}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Odds */}
                    <div className="flex items-center space-x-3">
                      {activeSport === 'soccer' ? (
                        <>
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">1</div>
                            <button 
                              onClick={() => addToBetSlip(`${event.homeTeam} vs ${event.awayTeam}`, 'Home Win', parseFloat(event.homeOdds))}
                              className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]"
                            >
                              {event.homeOdds}
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">X</div>
                            <button 
                              onClick={() => addToBetSlip(`${event.homeTeam} vs ${event.awayTeam}`, 'Draw', parseFloat('drawOdds' in event ? event.drawOdds : '0'))}
                              className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]"
                            >
                              {'drawOdds' in event ? event.drawOdds : 'N/A'}
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">2</div>
                            <button 
                              onClick={() => addToBetSlip(`${event.homeTeam} vs ${event.awayTeam}`, 'Away Win', parseFloat(event.awayOdds))}
                              className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]"
                            >
                              {event.awayOdds}
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">1</div>
                            <button 
                              onClick={() => addToBetSlip(`${event.homeTeam} vs ${event.awayTeam}`, 'Home Win', parseFloat(event.homeOdds))}
                              className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]"
                            >
                              {event.homeOdds}
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">2</div>
                            <button 
                              onClick={() => addToBetSlip(`${event.homeTeam} vs ${event.awayTeam}`, 'Away Win', parseFloat(event.awayOdds))}
                              className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]"
                            >
                              {event.awayOdds}
                            </button>
                          </div>
                        </>
                      )}
                      <button className="text-gray-400 hover:text-primary-yellow transition ml-4">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">No events found</div>
                <div className="text-gray-500 text-sm">Try adjusting your search or check back later</div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bet Slip */}
      <BetSlip betSlip={betSlip} setBetSlip={setBetSlip} />
    </div>
  );
};

export default SportsbookPage;