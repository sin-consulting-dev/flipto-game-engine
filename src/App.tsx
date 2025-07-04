import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import SlotsPage from './components/SlotsPage'
import Footer from './components/Footer'
import LiveCasinoPage from './components/LiveCasinoPage'
import SportsbookPage from './components/SportsbookPage'
import VIPPage from './components/VIPPage'
import TransactionHistoryPage from './components/TransactionHistoryPage';
import DepositPage from './components/DepositPage';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen text-white flex flex-col">
        <Header />
        <div className="flex flex-row flex-1 min-h-0 overflow-hidden">
          <Sidebar />
          <Routes>
            <Route path="/slots" element={<SlotsPage />} />
            <Route path="/live-casino" element={<LiveCasinoPage />} />
            <Route path="/sports" element={<SportsbookPage />} />
            <Route path="/vip" element={<VIPPage />} />
            <Route path="/transaction-history" element={<TransactionHistoryPage />} />
            <Route path="/deposit" element={<DepositPage />} />
            <Route path="/*" element={<MainContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
