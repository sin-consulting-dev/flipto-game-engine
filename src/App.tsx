import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="h-screen text-white flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
