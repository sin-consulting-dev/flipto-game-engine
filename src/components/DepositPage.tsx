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
    amount: '10.89',
    date: '2025-07-01 18:57',
    network: 'TRX',
    address: 'TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM',
    txid: '87c5...8d3f1',
    status: 'Completed',
  },
  {
    amount: '9.89',
    date: '2025-06-24 22:02',
    network: 'TRX',
    address: 'TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM',
    txid: '09361...cbe21',
    status: 'Completed',
  },
  {
    amount: '1.00',
    date: '2025-06-24 22:00',
    network: 'TRX',
    address: 'TKdEpaX7oezMt2jc7XLzykzuGvHR1knCLM',
    txid: 'c3ba9...3fe8b',
    status: 'Completed',
  },
];

const DepositPage = () => {
  const [walletAddress, setWalletAddress] = useState(randomTronAddress());

  useEffect(() => {
    setWalletAddress(randomTronAddress());
  }, []);

  return (
    <div className="flex flex-col max-w-4xl mx-auto pt-12 pb-8 px-4 w-full">
      {/* Stepper */}
      <div className="flex flex-row items-center mb-8">
        <div className="flex flex-col items-center mr-8">
          <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">1</div>
          <div className="h-12 w-1 bg-gray-700" />
          <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">2</div>
          <div className="h-12 w-1 bg-gray-700" />
          <div className="w-8 h-8 rounded-full bg-primary-yellow text-gray-900 flex items-center justify-center font-extrabold text-lg shadow-md border-2 border-yellow-400">3</div>
        </div>
        <h2 className="text-2xl font-bold text-primary-yellow">Deposit Crypto</h2>
      </div>
      {/* Select Coin */}
      <div className="mb-6">
        <div className="text-lg font-bold text-white mb-2">Select Coin</div>
        <div className="flex items-center gap-3 bg-[#232b39] rounded-lg px-4 py-3 border border-[#2d3748] w-full max-w-md">
          <span className="bg-[#181e29] px-3 py-1 rounded-lg text-primary-yellow font-extrabold text-base uppercase tracking-wider flex items-center gap-1 shadow border border-yellow-400">USDT</span>
          <span className="text-gray-400 text-base font-medium ml-1">TetherUS</span>
        </div>
      </div>
      {/* Select Network */}
      <div className="mb-6">
        <div className="text-lg font-bold text-white mb-2">Select Network</div>
        <div className="flex items-center gap-3 bg-[#232b39] rounded-lg px-4 py-3 border border-[#2d3748] w-full max-w-md">
          <span className="bg-[#181e29] px-3 py-1 rounded-lg text-primary-yellow font-extrabold text-base uppercase tracking-wider flex items-center gap-1 shadow border border-yellow-400">TRX</span>
          <span className="text-gray-400 text-base font-medium ml-1">Tron (TRC20)</span>
          <span className="text-gray-500 text-sm ml-4">Contract address ending in <span className="font-mono">{walletAddress.slice(-4)}</span></span>
        </div>
      </div>
      {/* Deposit Address */}
      <div className="mb-6">
        <div className="text-lg font-bold text-white mb-2">Deposit Address</div>
        <div className="flex items-center gap-4 bg-[#232b39] rounded-lg px-4 py-4 border border-[#2d3748] w-full max-w-md">
          <div className="bg-[#181e29] p-2 rounded-lg flex items-center border border-[#2d3748]">
            <QRCodeSVG value={walletAddress} size={72} bgColor="#181e29" fgColor="#fff" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xs text-gray-400 font-medium mb-1">Address</div>
            <div className="font-mono text-primary-yellow text-base font-extrabold flex items-center gap-2 whitespace-nowrap">
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
      {/* Recent Deposits */}
      <div className="mt-10">
        <div className="text-lg font-bold text-white mb-4">Recent Deposits</div>
        <div className="bg-[#232b39] rounded-lg border border-[#2d3748] p-4 w-full max-w-2xl">
          {mockDeposits.map((d, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#2d3748] last:border-b-0 py-3 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-primary-yellow font-bold text-base">{d.amount} USDT</span>
                <span className="bg-green-700 text-green-200 text-xs font-bold px-2 py-1 rounded ml-2">{d.status}</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
                <span>Date {d.date}</span>
                <span>Network {d.network}</span>
                <span>Address {d.address.slice(0, 6)}...{d.address.slice(-6)}</span>
                <span>TxID {d.txid}</span>
                <span>Deposit wallet Spot Wallet</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositPage; 