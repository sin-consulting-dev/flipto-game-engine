import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FaRegCopy } from 'react-icons/fa';

// Helper to generate a random TRON (TRC20) address (starts with T, 34 chars)
function randomTronAddress() {
  const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  let addr = 'T';
  for (let i = 0; i < 33; i++) addr += chars[Math.floor(Math.random() * chars.length)];
  return addr;
}

const mockDeposits = [
  {
    amount: '100.00',
    date: '2025-07-02 10:15',
    network: 'TRX',
    address: 'TNewPendingTRXAddress123456789ABCDEFGHJKLMNPQ',
    txid: 'pending1234567890',
    status: 'Pending',
  },
  // 10 completed
  ...Array.from({ length: 10 }, (_, i) => ({
    amount: (Math.random() * 100 + 1).toFixed(2),
    date: `2025-06-${String(30 - i).padStart(2, '0')} 12:00`,
    network: ['TRX', 'ETH', 'BSC'][i % 3],
    address: `TCompleted${i}AddressABCDEFGHJKLMNPQ${i}`,
    txid: `completedtxid${i}ABCDEFGHJKLMNPQ`,
    status: 'Completed',
  })),
  // 5 failed
  ...Array.from({ length: 5 }, (_, i) => ({
    amount: (Math.random() * 50 + 1).toFixed(2),
    date: `2025-06-${String(19 - i).padStart(2, '0')} 15:30`,
    network: ['TRX', 'ETH', 'BSC'][i % 3],
    address: `TFailed${i}AddressABCDEFGHJKLMNPQ${i}`,
    txid: `failedtxid${i}ABCDEFGHJKLMNPQ`,
    status: 'Failed',
  })),
  // 5 more completed
  ...Array.from({ length: 5 }, (_, i) => ({
    amount: (Math.random() * 200 + 1).toFixed(2),
    date: `2025-06-${String(14 - i).padStart(2, '0')} 09:45`,
    network: ['TRX', 'ETH', 'BSC'][i % 3],
    address: `TCompleted${i+10}AddressABCDEFGHJKLMNPQ${i+10}`,
    txid: `completedtxid${i+10}ABCDEFGHJKLMNPQ`,
    status: 'Completed',
  })),
];

const coinOptions = [
  { value: 'USDT', label: 'TetherUS' },
  { value: 'BTC', label: 'Bitcoin' },
  { value: 'ETH', label: 'Ethereum' },
];
const networkOptions = [
  { value: 'TRX', label: 'Tron (TRC20)' },
  { value: 'ETH', label: 'Ethereum (ERC20)' },
  { value: 'BSC', label: 'Binance Smart Chain (BEP20)' },
];

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const DepositPage = () => {
  const [walletAddress, setWalletAddress] = useState(randomTronAddress());
  const [selectedCoin, setSelectedCoin] = useState(coinOptions[0].value);
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0].value);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mockDeposits.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedDeposits = mockDeposits.slice(startIndex, endIndex);
  const [amount, setAmount] = useState('');
  const [showDepositAddress, setShowDepositAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setWalletAddress(randomTronAddress());
  }, []);

  return (
    <main className="flex-1 overflow-y-auto bg-secondary-dark min-h-0 pt-20 w-full">
      <div className="flex flex-col max-w-3xl pb-8 px-2 sm:px-4 md:px-8 w-full">
        {/* Stepper */}
        <div className="flex flex-col w-full relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-8 bottom-0 w-1 bg-gray-700 z-0" style={{left: '1.5rem'}} />
          {/* Step 1: Select Coin */}
          <div className="flex flex-row items-start mb-8 relative z-10">
            <div className="flex flex-col items-center min-w-[56px]">
              <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">1</div>
            </div>
            <div className="flex flex-col w-full ml-4">
              <div className="text-lg font-bold text-white mb-2">Select Coin</div>
              <select
                className="bg-[#232b39] border border-[#2d3748] rounded-lg px-4 py-3 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full mb-2"
                value={selectedCoin}
                onChange={e => setSelectedCoin(e.target.value)}
              >
                {coinOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Step 2: Enter Amount */}
          <div className="flex flex-row items-start mb-8 relative z-10">
            <div className="flex flex-col items-center min-w-[56px]">
              <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">2</div>
            </div>
            <div className="flex flex-col w-full ml-4">
              <div className="text-lg font-bold text-white mb-2">Enter Amount</div>
              <input
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter deposit amount"
                className="bg-[#232b39] border border-[#2d3748] rounded-lg px-4 py-3 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full mb-2"
                value={amount}
                onChange={e => {
                  // Only allow integer values, strip non-digits
                  const val = e.target.value.replace(/[^\d]/g, '');
                  setAmount(val);
                }}
                onKeyDown={e => {
                  // Block non-numeric keys except for navigation and backspace
                  if (
                    !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
                    !/^[0-9]$/.test(e.key)
                  ) {
                    e.preventDefault();
                  }
                }}
                disabled={showDepositAddress}
              />
            </div>
          </div>
          {/* Step 3: Select Network */}
          <div className="flex flex-row items-start mb-8 relative z-10">
            <div className="flex flex-col items-center min-w-[56px]">
              <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">3</div>
            </div>
            <div className="flex flex-col w-full ml-4">
              <div className="text-lg font-bold text-white mb-2">Select Network</div>
              <select
                className="bg-[#232b39] border border-[#2d3748] rounded-lg px-4 py-3 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full mb-2"
                value={selectedNetwork}
                onChange={e => setSelectedNetwork(e.target.value)}
              >
                {networkOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <span className="text-gray-500 text-sm mt-1">Contract address ending in <span className="font-mono">{walletAddress.slice(-4)}</span></span>
            </div>
          </div>
          {/* Submit Deposit Button (after Step 3, hide if loading or address is shown) */}
          {!showDepositAddress && !isLoading && (
            <div className="flex justify-center mt-6">
              <button
                className="bg-primary-yellow text-gray-900 font-extrabold text-lg py-3 px-16 rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setShowDepositAddress(true);
                  }, 1000 + Math.random() * 2000); // 1-3 seconds
                }}
                disabled={!amount || !selectedCoin || !selectedNetwork}
              >
                Submit Deposit
              </button>
            </div>
          )}
          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center mt-6">
              <svg className="animate-spin h-10 w-10 text-primary-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          )}
          {/* Step 4: Deposit Address (show only after submit) */}
          {showDepositAddress && (
            <div className="flex flex-row items-start mb-8 relative z-10 mt-8">
              <div className="flex flex-col items-center min-w-[56px]">
                <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">4</div>
              </div>
              <div className="flex flex-col w-full ml-4">
                <div className="text-lg font-bold text-white mb-2">Deposit Address</div>
                <div className="flex items-center gap-4 bg-[#232b39] rounded-lg px-4 py-4 border border-[#2d3748] w-full">
                  <div className="bg-[#181e29] p-2 rounded-lg flex items-center border border-[#2d3748]">
                    <QRCodeSVG value={walletAddress} size={128} bgColor="#181e29" fgColor="#fff" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0 w-full">
                    <div className="text-xs text-gray-400 font-medium mb-1">Address</div>
                    <div className="font-mono text-primary-yellow text-base font-extrabold flex items-center gap-2 break-all w-full">
                      {walletAddress}
                      <button type="button" className="ml-1 text-primary-yellow hover:text-yellow-400" onClick={() => {navigator.clipboard.writeText(walletAddress)}}>
                        <FaRegCopy className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Minimum deposit <span className="font-extrabold text-primary-yellow">More than 0.01 USDT</span></div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2 cursor-pointer select-none">More Details ▼</div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Deposit History Table - full width */}
      <div className="w-full px-2 sm:px-4 md:px-8 mt-8">
        <div className="text-lg font-bold text-white mb-4">Deposit History</div>
        <div className="overflow-x-auto rounded-lg bg-[#232b39] border border-[#2d3748] w-full">
          <table className="min-w-full text-sm text-left w-full">
            <thead>
              <tr className="bg-[#181e29] text-primary-yellow">
                <th className="px-4 py-3 font-bold">Amount</th>
                <th className="px-4 py-3 font-bold">Date</th>
                <th className="px-4 py-3 font-bold">Network</th>
                <th className="px-4 py-3 font-bold">Address</th>
                <th className="px-4 py-3 font-bold">TxID</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Balance Before</th>
                <th className="px-4 py-3 font-bold">Balance After</th>
                <th className="px-4 py-3 font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                let runningBalance = 0;
                return paginatedDeposits.map((d, i) => {
                  const amountNum = parseFloat(d.amount);
                  const balanceBefore = runningBalance;
                  let balanceAfter = balanceBefore;
                  if (d.status === 'Completed') {
                    balanceAfter += amountNum;
                  }
                  runningBalance = balanceAfter;
                  return (
                    <tr key={i} className="border-t border-[#2d3748]">
                      <td className="px-4 py-2 text-primary-yellow font-bold">{d.amount} USDT</td>
                      <td className="px-4 py-2 text-white">{d.date}</td>
                      <td className="px-4 py-2 text-white">{d.network}</td>
                      <td className="px-4 py-2 text-white font-mono break-all">{d.address}</td>
                      <td className="px-4 py-2 text-white font-mono break-all">{d.txid}</td>
                      <td className="px-4 py-2">
                        {d.status === 'Completed' && (
                          <span className="bg-green-700 text-green-200 text-xs font-bold px-2 py-1 rounded">Completed</span>
                        )}
                        {d.status === 'Pending' && (
                          <span className="bg-yellow-700 text-yellow-200 text-xs font-bold px-2 py-1 rounded">Pending</span>
                        )}
                        {d.status === 'Failed' && (
                          <span className="bg-red-700 text-red-200 text-xs font-bold px-2 py-1 rounded">Failed</span>
                        )}
                      </td>
                      <td className="px-4 py-2 text-white">{balanceBefore.toFixed(2)} USDT</td>
                      <td className="px-4 py-2 text-white">{balanceAfter.toFixed(2)} USDT</td>
                      <td className="px-4 py-2 text-center">
                        {d.status === 'Pending' ? (
                          <button className="bg-primary-yellow text-gray-900 font-bold px-4 py-1 rounded hover:bg-yellow-400 transition text-xs">Check Status</button>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        </div>
        {/* Pagination Controls - styled like SportsbookPage */}
        <div className="flex items-center justify-between mt-6 p-4 bg-[#232b39] rounded-lg border border-[#2d3748]">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Show:</span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="bg-[#181e29] text-white px-3 py-1 rounded border border-[#2d3748] text-sm"
            >
              {PAGE_SIZE_OPTIONS.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <span className="text-gray-400 text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, mockDeposits.length)} of {mockDeposits.length} events
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-[#181e29] text-white rounded border border-[#2d3748] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#232b39] transition text-sm"
            >
              Previous
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-1 rounded text-sm transition ${
                      currentPage === pageNumber
                        ? 'bg-primary-yellow text-gray-900 font-bold'
                        : 'bg-[#181e29] text-white border border-[#2d3748] hover:bg-[#232b39]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-[#181e29] text-white rounded border border-[#2d3748] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#232b39] transition text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DepositPage; 