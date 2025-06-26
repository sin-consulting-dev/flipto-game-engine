import { useState } from 'react';
import { FaFutbol, FaTableTennis, FaBasketballBall, FaVolleyballBall, FaBaseballBall, FaFootballBall, FaHandRock, FaSearch, FaClock, FaFilter, FaSort, FaStar } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

const sports = [
  { key: 'soccer', label: 'Soccer', icon: <FaFutbol className="text-xl" /> },
  { key: 'tennis', label: 'Tennis', icon: <FaTableTennis className="text-xl" /> },
  { key: 'basketball', label: 'Basketball', icon: <FaBasketballBall className="text-xl" /> },
  { key: 'volleyball', label: 'Volleyball', icon: <FaVolleyballBall className="text-xl" /> },
  { key: 'baseball', label: 'Baseball', icon: <FaBaseballBall className="text-xl" /> },
  { key: 'football', label: 'Football', icon: <FaFootballBall className="text-xl" /> },
  { key: 'boxing', label: 'Boxing', icon: <FaHandRock className="text-xl" /> },
];

const eventTabs = ['All', 'In-Play', 'Upcoming', 'Popular'];

const featuredEvents = [
  { title: 'FIFA Club World Cup', teams: 'Real Madrid vs Al Ahly', image: placeholder, time: 'Today 20:00', league: 'FIFA Club World Cup', odds: ['1.60', '3.80', '5.00'] },
  { title: 'NBA Finals', teams: 'LAL vs BOS', image: placeholder, time: 'Tomorrow 02:00', league: 'NBA', odds: ['1.95', '1.95'] },
  { title: 'Premier League', teams: 'Arsenal vs Man United', image: placeholder, time: 'Today 22:00', league: 'Premier League', odds: ['1.85', '3.40', '4.20'] },
];

const soccerEvents = [
  { league: 'Premier League', homeTeam: 'Arsenal', awayTeam: 'Manchester United', time: '15:30', date: 'Today', homeOdds: '1.85', drawOdds: '3.40', awayOdds: '4.20', isLive: false },
  { league: 'Premier League', homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '18:00', date: 'Today', homeOdds: '2.10', drawOdds: '3.20', awayOdds: '3.80', isLive: true },
  { league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', time: '21:00', date: 'Tomorrow', homeOdds: '2.30', drawOdds: '3.10', awayOdds: '3.40', isLive: false },
  { league: 'Bundesliga', homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', time: '19:30', date: 'Tomorrow', homeOdds: '1.70', drawOdds: '3.60', awayOdds: '5.20', isLive: false },
  { league: 'Serie A', homeTeam: 'Juventus', awayTeam: 'AC Milan', time: '20:45', date: 'Sunday', homeOdds: '2.20', drawOdds: '3.30', awayOdds: '3.50', isLive: false },
  { league: 'Ligue 1', homeTeam: 'PSG', awayTeam: 'Marseille', time: '21:00', date: 'Sunday', homeOdds: '1.50', drawOdds: '4.20', awayOdds: '6.50', isLive: false },
  { league: 'Champions League', homeTeam: 'Manchester City', awayTeam: 'Real Madrid', time: '20:00', date: 'Wednesday', homeOdds: '2.00', drawOdds: '3.40', awayOdds: '3.80', isLive: false },
  { league: 'Europa League', homeTeam: 'Arsenal', awayTeam: 'Atletico Madrid', time: '18:45', date: 'Thursday', homeOdds: '2.40', drawOdds: '3.20', awayOdds: '3.20', isLive: false },
];

const basketballEvents = [
  { league: 'NBA', homeTeam: 'Los Angeles Lakers', awayTeam: 'Boston Celtics', time: '02:00', date: 'Tomorrow', homeOdds: '1.95', awayOdds: '1.95', isLive: false },
  { league: 'NBA', homeTeam: 'Golden State Warriors', awayTeam: 'Miami Heat', time: '04:30', date: 'Tomorrow', homeOdds: '1.80', awayOdds: '2.10', isLive: false },
  { league: 'EuroLeague', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', time: '20:30', date: 'Today', homeOdds: '1.70', awayOdds: '2.20', isLive: true },
];

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

const sortOptions = ['Popular', 'Newest', 'A-Z', 'Time'];

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

const SportsbookPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeSport, setActiveSport] = useState('soccer');
  const [search, setSearch] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('All Leagues');
  const [sort, setSort] = useState('Popular');

  const getCurrentEvents = (): SportEvent[] => {
    switch (activeSport) {
      case 'basketball':
        return basketballEvents;
      case 'soccer':
      default:
        return soccerEvents;
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
    <main className="flex-1 p-8 overflow-y-auto bg-secondary-dark min-h-0 pt-20">
      {/* Featured Events Banner */}
      <div className="bg-gradient-to-r from-primary-yellow/10 to-gray-900/50 p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredEvents.map((event, idx) => (
            <div key={idx} className="bg-gray-800/80 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-primary-yellow font-semibold">{event.league}</span>
                <FaStar className="text-primary-yellow text-sm" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{event.teams}</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm flex items-center">
                  <FaClock className="mr-1" />
                  {event.time}
                </span>
                <div className="flex space-x-2">
                  {event.odds.slice(0, 2).map((odd, i) => (
                    <button key={i} className="bg-primary-yellow text-gray-900 px-3 py-1 rounded text-sm font-bold hover:bg-yellow-400 transition">
                      {odd}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
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
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                  activeSport === sport.key 
                    ? 'bg-primary-yellow text-gray-900 shadow-lg' 
                    : 'bg-gray-800 text-gray-300 hover:text-primary-yellow hover:bg-gray-700'
                }`}
              >
                {sport.icon}
                <span>{sport.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Event Tabs */}
        <div className="flex space-x-1 mb-6">
          {eventTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                activeTab === tab 
                  ? 'bg-primary-yellow text-gray-900' 
                  : 'bg-gray-800 text-gray-300 hover:text-primary-yellow hover:bg-gray-700'
              }`}
            >
              {tab}
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
        <div className="bg-gray-800/60 rounded-lg overflow-hidden border border-gray-700">
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
                        <div className="text-gray-400 text-sm flex items-center mt-1">
                          <FaClock className="mr-1" />
                          {event.date} {event.time}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Odds */}
                  <div className="flex items-center space-x-3">
                    {activeSport === 'soccer' ? (
                      <>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">1</div>
                          <button className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]">
                            {event.homeOdds}
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">X</div>
                          <button className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]">
                            {'drawOdds' in event ? event.drawOdds : 'N/A'}
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">2</div>
                          <button className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]">
                            {event.awayOdds}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">1</div>
                          <button className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]">
                            {event.homeOdds}
                          </button>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-400 mb-1">2</div>
                          <button className="bg-gray-900 text-primary-yellow font-bold px-4 py-2 rounded border border-gray-600 hover:bg-primary-yellow hover:text-gray-900 transition min-w-[60px]">
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
  );
};

export default SportsbookPage;