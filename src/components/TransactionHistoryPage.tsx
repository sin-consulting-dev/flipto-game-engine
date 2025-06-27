import React, { useState } from 'react';
import placeholder from '../assets/placeholder.svg';

interface Transaction {
  category: string;
  date: string;
  betId: string;
  event: string;
  betType: string;
  selection: string;
  stake: number;
  odds: number;
  potentialPayout: number;
  status: string;
  actualPayout: number | null;
}

// Generate 30 mock transactions with mixed categories
const mockData: Transaction[] = Array.from({ length: 30 }, (_, i) => {
  const categories = ['Sports', 'Live Casino', 'Slot', 'Original'];
  const sportsEvents = [
    'Real Madrid vs Barcelona', 'Lakers vs Celtics', 'Chelsea vs Arsenal', 'Juventus vs Inter',
    'Bayern vs Dortmund', 'PSG vs Lyon', 'Man City vs Liverpool', 'Heat vs Bulls',
    'Raptors vs Warriors', 'Spurs vs Suns',
  ];
  const liveCasinoEvents = [
    'Lightning Roulette', 'Blackjack Party', 'Mega Wheel', 'Baccarat Squeeze',
    'Monopoly Live', 'Dream Catcher', 'Casino Holdem', 'Super Sic Bo',
    'Football Studio', 'Andar Bahar',
  ];
  const slotEvents = [
    'Gates of Olympus', 'Sweet Bonanza', 'Book of Dead', 'Starburst',
    'Gonzo\'s Quest', 'Wolf Gold', 'Mega Moolah', 'Reactoonz',
    'Dead or Alive 2', 'Jammin\' Jars',
  ];
  const originalEvents = [
    'Flipto Crash', 'Flipto Dice', 'Flipto Mines', 'Flipto Plinko',
    'Flipto Roulette', 'Flipto Keno', 'Flipto Poker', 'Flipto Blackjack',
    'Flipto Baccarat', 'Flipto Slots',
  ];
  const betTypes = ['Single', 'Parlay', 'System', 'Live', 'Pre-match', 'Straight', 'Bonus', 'Feature', 'Manual', 'Auto'];
  const selections = ['Home Win', 'Draw', 'Away Win', 'Over 2.5', 'Under 2.5', 'Red', 'Black', 'Jackpot', '7', 'Ace', 'Crash @2x', 'Safe Bet', 'Scatter', 'Wild', 'Bonus Round'];
  const statuses = ['Won', 'Lost', 'Pending'];
  const category = categories[i % categories.length];
  let event = '';
  switch (category) {
    case 'Sports': event = sportsEvents[i % sportsEvents.length]; break;
    case 'Live Casino': event = liveCasinoEvents[i % liveCasinoEvents.length]; break;
    case 'Slot': event = slotEvents[i % slotEvents.length]; break;
    case 'Original': event = originalEvents[i % originalEvents.length]; break;
  }
  const date = `2024-06-${String(Math.floor(i / 2) + 1).padStart(2, '0')} ${String(12 + (i % 12)).padStart(2, '0')}:${(i % 2 === 0 ? '30' : '00')}`;
  const betId = (12345678 + i).toString();
  const betType = betTypes[i % betTypes.length];
  const selection = selections[i % selections.length];
  const stake = Math.floor(Math.random() * 100) + 10;
  const odds = (Math.random() * 4 + 1).toFixed(2);
  const potentialPayout = +(stake * parseFloat(odds)).toFixed(2);
  const status = statuses[i % statuses.length];
  const actualPayout = status === 'Won' ? potentialPayout : status === 'Lost' ? 0 : null;
  return {
    category,
    date,
    betId,
    event,
    betType,
    selection,
    stake,
    odds: +odds,
    potentialPayout,
    status,
    actualPayout,
  };
});

const columns = [
  { key: 'category', label: 'Category' },
  { key: 'date', label: 'Date/Time' },
  { key: 'betId', label: 'Bet ID' },
  { key: 'event', label: 'Event' },
  { key: 'betType', label: 'Bet Type' },
  { key: 'selection', label: 'Selection' },
  { key: 'stake', label: 'Stake' },
  { key: 'odds', label: 'Odds' },
  { key: 'potentialPayout', label: 'Potential Payout' },
  { key: 'status', label: 'Status' },
  { key: 'actualPayout', label: 'Actual Payout' },
] as const;

type ColumnKey = typeof columns[number]['key'];

const statusColors: Record<string, string> = {
  Won: 'text-green-600 bg-green-100',
  Lost: 'text-red-600 bg-red-100',
  Pending: 'text-yellow-700 bg-yellow-100',
};

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const TransactionHistoryPage: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  // Filtering logic
  const filteredData = mockData.filter((row) =>
    columns.every((col) =>
      !filters[col.key] || String(row[col.key as ColumnKey]).toLowerCase().includes(filters[col.key].toLowerCase())
    )
  );

  // Pagination logic
  const pageCount = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1); // Reset to first page on filter
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-secondary-dark min-h-0 pt-20">
      {/* Hero Banner (Flipto style) */}
      <div className="rounded-b-3xl shadow-lg bg-gradient-to-r from-primary-yellow/20 to-gray-900 flex flex-col md:flex-row items-center justify-between p-0 md:p-12 mb-6 min-h-[320px] w-full">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">Track Your Bets & Winnings!</h1>
          <p className="text-gray-200 mb-4 max-w-lg">View your complete betting history, filter by details, and analyze your performance. Stay in control with Flipto!</p>
          <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-6 rounded shadow hover:bg-yellow-400 transition">Deposit Now</button>
        </div>
        <div className="flex justify-center">
          <img src={placeholder} alt="Transaction History Banner" className="w-72 h-48 object-contain rounded-xl shadow-lg border-4 border-primary-yellow/30" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-primary-yellow drop-shadow">Transaction History</h1>
      {/* Page size selector */}
      <div className="flex justify-end mb-2">
        <label className="text-sm text-gray-300 mr-2 font-semibold" htmlFor="page-size-select">Show</label>
        <select
          id="page-size-select"
          className="bg-gray-900 border border-gray-700 text-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-yellow/40"
          value={pageSize}
          onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
        >
          {PAGE_SIZE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <span className="text-sm text-gray-300 ml-2">entries</span>
      </div>
      <div className="w-full h-full bg-secondary-dark/80 rounded-2xl shadow-xl border border-border-color overflow-x-auto">
        <table className="w-full table-fixed text-sm text-left rounded-2xl overflow-hidden">
          <colgroup>
            <col className="w-[110px] min-w-[80px]" /> {/* Category */}
            <col className="w-[110px] min-w-[80px]" /> {/* Date/Time */}
            <col className="w-[90px] min-w-[70px]" /> {/* Bet ID */}
            <col className="w-[140px] min-w-[100px]" /> {/* Event */}
            <col className="w-[80px] min-w-[60px]" /> {/* Bet Type */}
            <col className="w-[110px] min-w-[80px]" /> {/* Selection */}
            <col className="w-[60px] min-w-[50px]" /> {/* Stake */}
            <col className="w-[50px] min-w-[40px]" /> {/* Odds */}
            <col className="w-[90px] min-w-[70px]" /> {/* Potential Payout */}
            <col className="w-[70px] min-w-[50px]" /> {/* Status */}
            <col className="w-[90px] min-w-[70px]" /> {/* Actual Payout */}
            <col className="w-[70px] min-w-[50px]" /> {/* Action */}
          </colgroup>
          <thead className="bg-primary-dark/80">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-3 py-3 text-xs font-bold text-primary-yellow uppercase tracking-wider border-b border-border-color">
                  <div className="flex flex-col gap-1">
                    <span>{col.label}</span>
                    <input
                      type="text"
                      value={filters[col.key] || ''}
                      onChange={(e) => handleFilterChange(col.key, e.target.value)}
                      placeholder={`Filter ${col.label}`}
                      className="px-2 py-1 border border-gray-700 bg-gray-900 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-yellow/40 text-xs placeholder-gray-500"
                    />
                  </div>
                </th>
              ))}
              <th className="px-3 py-3 text-xs font-bold text-primary-yellow uppercase tracking-wider border-b border-border-color">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="text-center py-8 text-gray-400">
                  No transactions found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr key={row.betId + idx} className={`hover:bg-primary-yellow/10 transition-colors border-b border-border-color ${idx === paginatedData.length - 1 ? 'last:border-b-0' : ''}`}>
                  {columns.map((col) => (
                    <td key={col.key} className="px-3 py-2 whitespace-nowrap text-gray-200 truncate max-w-[120px]">
                      {col.key === 'status' ? (
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[row.status] || 'bg-gray-700 text-gray-200'}`}>
                          {row.status}
                        </span>
                      ) : col.key === 'stake' || col.key === 'potentialPayout' || col.key === 'actualPayout' ? (
                        row[col.key as ColumnKey] !== null ? `$${row[col.key as ColumnKey]}` : '-'
                      ) : (
                        row[col.key as ColumnKey] ?? '-'
                      )}
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <button className="text-primary-yellow hover:underline text-xs font-bold">View Details</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={columns.length + 1} className="p-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-4 bg-primary-dark/80 border-t border-border-color rounded-b-2xl">
                  <div className="text-sm text-gray-400 mb-2 md:mb-0">
                    Showing {filteredData.length === 0 ? 0 : (page - 1) * pageSize + 1} to {Math.min(page * pageSize, filteredData.length)} of {filteredData.length} entries
                  </div>
                  <div className="flex gap-2 md:ml-auto md:justify-end w-full md:w-auto">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-1 rounded bg-gray-800 border border-border-color text-primary-yellow font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-yellow/10 transition"
                    >
                      Previous
                    </button>
                    <span className="px-2 text-sm text-gray-300">Page {page} of {pageCount}</span>
                    <button
                      onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                      disabled={page === pageCount}
                      className="px-4 py-1 rounded bg-gray-800 border border-border-color text-primary-yellow font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-yellow/10 transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
};

export default TransactionHistoryPage;
