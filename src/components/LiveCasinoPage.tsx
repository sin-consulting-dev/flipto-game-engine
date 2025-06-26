import { useState } from 'react';
import { FaSearch, FaFilter, FaSort, FaCircle } from 'react-icons/fa';
import placeholder from '../assets/placeholder.svg';

type LiveGame = {
  name: string;
  provider: string;
  type: string;
  rtp: string;
  tag: string;
  minBet: number;
  maxBet: number;
  image: string;
};

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
  { name: 'Dream Catcher', provider: 'Evolution', type: 'Game Show', rtp: '96.6%', tag: '', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Casino Holdem', provider: 'Ezugi', type: 'Poker', rtp: '97.8%', tag: '', minBet: 1, maxBet: 2000, image: placeholder },
  { name: 'Super Sic Bo', provider: 'Pragmatic Play Live', type: 'Dice', rtp: '97.2%', tag: 'NEW', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'Football Studio', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 1, maxBet: 1000, image: placeholder },
  { name: 'Andar Bahar', provider: 'Ezugi', type: 'Card', rtp: '97.0%', tag: '', minBet: 1, maxBet: 1200, image: placeholder },
  { name: 'Lightning Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: 'HOT', minBet: 2, maxBet: 3500, image: placeholder },
  { name: 'Crazy Time', provider: 'Evolution', type: 'Game Show', rtp: '96.1%', tag: 'HOT', minBet: 0.1, maxBet: 1000, image: placeholder },
  { name: 'Speed Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.2%', tag: '', minBet: 10, maxBet: 2000, image: placeholder },
  { name: 'Immersive Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'LIVE', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Dragon Tiger', provider: 'Ezugi', type: 'Baccarat', rtp: '97.5%', tag: '', minBet: 1, maxBet: 1500, image: placeholder },
  { name: 'Teen Patti', provider: 'Ezugi', type: 'Card', rtp: '97.2%', tag: '', minBet: 2, maxBet: 2000, image: placeholder },
  { name: 'Deal or No Deal', provider: 'Evolution', type: 'Game Show', rtp: '95.5%', tag: '', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Auto Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'VIP Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.4%', tag: 'VIP', minBet: 50, maxBet: 10000, image: placeholder },
  { name: 'Lightning Dice', provider: 'Evolution', type: 'Dice', rtp: '96.5%', tag: '', minBet: 1, maxBet: 1500, image: placeholder },
  { name: 'Mega Ball', provider: 'Evolution', type: 'Game Show', rtp: '95.4%', tag: '', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Speed Baccarat', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.9%', tag: 'NEW', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Double Ball Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 3000, image: placeholder },
  { name: 'Casino Stud Poker', provider: 'Playtech Live', type: 'Poker', rtp: '97.5%', tag: '', minBet: 5, maxBet: 2500, image: placeholder },
  { name: 'Sic Bo', provider: 'Ezugi', type: 'Dice', rtp: '97.0%', tag: '', minBet: 1, maxBet: 1000, image: placeholder },
  { name: 'Quantum Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 2, maxBet: 3500, image: placeholder },
  { name: 'Infinite Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.5%', tag: '', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Cash or Crash', provider: 'Evolution', type: 'Game Show', rtp: '96.8%', tag: 'NEW', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'Prestige Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 5, maxBet: 4000, image: placeholder },
  { name: 'PowerUP Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: 'NEW', minBet: 1, maxBet: 4000, image: placeholder },
];

const blackjackTables = [
  { name: 'Blackjack Classic', provider: 'Evolution', type: 'Blackjack', rtp: '99.3%', tag: 'LIVE', minBet: 5, maxBet: 1000, image: placeholder },
  { name: 'Speed Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.2%', tag: '', minBet: 10, maxBet: 2000, image: placeholder },
  { name: 'VIP Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.4%', tag: 'VIP', minBet: 50, maxBet: 10000, image: placeholder },
  { name: 'Infinite Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.5%', tag: '', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Free Bet Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '98.5%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Power Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '98.8%', tag: '', minBet: 5, maxBet: 4000, image: placeholder },
  { name: 'Blackjack Azure', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.3%', tag: '', minBet: 10, maxBet: 2500, image: placeholder },
  { name: 'Soho Blackjack', provider: 'Ezugi', type: 'Blackjack', rtp: '98.9%', tag: '', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Grand Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 20, maxBet: 8000, image: placeholder },
  { name: 'Blackjack Party', provider: 'Evolution', type: 'Blackjack', rtp: '99.3%', tag: 'LIVE', minBet: 5, maxBet: 1000, image: placeholder },
  { name: 'Lightning Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.0%', tag: 'NEW', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Salon Prive Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.2%', tag: 'VIP', minBet: 100, maxBet: 15000, image: placeholder },
  { name: 'ONE Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 5, maxBet: 1500, image: placeholder },
  { name: 'All Bets Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.0%', tag: '', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Blackjack Ruby', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.3%', tag: '', minBet: 15, maxBet: 2000, image: placeholder },
  { name: 'Classic Blackjack', provider: 'Ezugi', type: 'Blackjack', rtp: '98.8%', tag: '', minBet: 5, maxBet: 1800, image: placeholder },
  { name: 'Blackjack Platinum', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.2%', tag: '', minBet: 25, maxBet: 5000, image: placeholder },
  { name: 'Speed Blackjack 2', provider: 'Evolution', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 10, maxBet: 2500, image: placeholder },
  { name: 'Blackjack Emerald', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.4%', tag: '', minBet: 20, maxBet: 3500, image: placeholder },
  { name: 'Hi-Lo Blackjack', provider: 'Ezugi', type: 'Blackjack', rtp: '98.7%', tag: '', minBet: 5, maxBet: 2200, image: placeholder },
  { name: 'Blackjack Gold', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.3%', tag: '', minBet: 30, maxBet: 6000, image: placeholder },
  { name: 'Multi-Hand Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.0%', tag: '', minBet: 10, maxBet: 4000, image: placeholder },
  { name: 'Blackjack Diamond', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.2%', tag: '', minBet: 15, maxBet: 2800, image: placeholder },
  { name: 'European Blackjack', provider: 'Ezugi', type: 'Blackjack', rtp: '98.9%', tag: '', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Blackjack Silver', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 20, maxBet: 4500, image: placeholder },
  { name: 'Perfect Pairs Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '98.8%', tag: '', minBet: 10, maxBet: 3200, image: placeholder },
  { name: 'Blackjack Sapphire', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.3%', tag: '', minBet: 25, maxBet: 4000, image: placeholder },
  { name: 'Switch Blackjack', provider: 'Ezugi', type: 'Blackjack', rtp: '98.6%', tag: '', minBet: 10, maxBet: 2500, image: placeholder },
  { name: 'Blackjack Bronze', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.0%', tag: '', minBet: 15, maxBet: 3800, image: placeholder },
];

const rouletteTables = [
  { name: 'Immersive Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'LIVE', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Auto Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'Speed Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.2%', tag: '', minBet: 2, maxBet: 2000, image: placeholder },
  { name: 'Double Ball Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 3000, image: placeholder },
  { name: 'Prestige Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 5, maxBet: 4000, image: placeholder },
  { name: 'VIP Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.5%', tag: 'VIP', minBet: 10, maxBet: 10000, image: placeholder },
  { name: 'French Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.4%', tag: '', minBet: 2, maxBet: 2500, image: placeholder },
  { name: 'Lightning Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'HOT', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Quantum Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 2, maxBet: 3500, image: placeholder },
  { name: 'PowerUP Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: 'NEW', minBet: 1, maxBet: 4000, image: placeholder },
  { name: 'European Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 2000, image: placeholder },
  { name: 'American Roulette', provider: 'Evolution', type: 'Roulette', rtp: '94.7%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Mini Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '96.2%', tag: '', minBet: 0.5, maxBet: 1500, image: placeholder },
  { name: 'Multi-Wheel Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 1, maxBet: 2200, image: placeholder },
  { name: 'Salon Prive Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'VIP', minBet: 50, maxBet: 15000, image: placeholder },
  { name: 'Age of Gods Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Turbo Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.0%', tag: '', minBet: 1, maxBet: 1800, image: placeholder },
  { name: 'XXXtreme Lightning Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.1%', tag: 'NEW', minBet: 2, maxBet: 4000, image: placeholder },
  { name: 'Diamond Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 5, maxBet: 5000, image: placeholder },
  { name: 'Lucky Ball Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.2%', tag: '', minBet: 1, maxBet: 2000, image: placeholder },
  { name: 'Instant Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 3500, image: placeholder },
  { name: 'Mega Fire Blaze Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: '', minBet: 2, maxBet: 4000, image: placeholder },
  { name: 'Spread Bet Roulette', provider: 'Ezugi', type: 'Roulette', rtp: '97.1%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
  { name: 'Live Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 3000, image: placeholder },
  { name: 'Premium Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 10, maxBet: 8000, image: placeholder },
  { name: 'Roulette Lobby', provider: 'Ezugi', type: 'Roulette', rtp: '97.2%', tag: '', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'Speed Auto Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 1, maxBet: 2800, image: placeholder },
];

const baccaratTables = [
  { name: 'No Commission Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Speed Baccarat', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.9%', tag: 'NEW', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Baccarat Control Squeeze', provider: 'Evolution', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 10, maxBet: 4000, image: placeholder },
  { name: 'Lightning Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 2, maxBet: 3500, image: placeholder },
  { name: 'Salon Prive Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.9%', tag: 'VIP', minBet: 100, maxBet: 20000, image: placeholder },
  { name: 'Dragon Tiger', provider: 'Ezugi', type: 'Baccarat', rtp: '97.5%', tag: '', minBet: 1, maxBet: 1500, image: placeholder },
  { name: 'Golden Wealth Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.6%', tag: '', minBet: 5, maxBet: 2500, image: placeholder },
  { name: 'Baccarat Squeeze', provider: 'Ezugi', type: 'Baccarat', rtp: '98.9%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Peek Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.7%', tag: 'NEW', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Speed Baccarat 2', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 5, maxBet: 2200, image: placeholder },
  { name: 'Commission Free Baccarat', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 5, maxBet: 3000, image: placeholder },
  { name: 'Mini Baccarat', provider: 'Ezugi', type: 'Baccarat', rtp: '98.5%', tag: '', minBet: 1, maxBet: 1000, image: placeholder },
  { name: 'VIP Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.9%', tag: 'VIP', minBet: 50, maxBet: 15000, image: placeholder },
  { name: 'Baccarat Controlled Squeeze', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 10, maxBet: 2500, image: placeholder },
  { name: 'Super 6 Baccarat', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.6%', tag: '', minBet: 2, maxBet: 2000, image: placeholder },
  { name: 'Punto Banco', provider: 'Ezugi', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 5, maxBet: 2500, image: placeholder },
  { name: 'Baccarat Deluxe', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 10, maxBet: 4000, image: placeholder },
  { name: 'Speed Baccarat 3', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.9%', tag: '', minBet: 8, maxBet: 2800, image: placeholder },
  { name: 'Baccarat Pro', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 5, maxBet: 3500, image: placeholder },
  { name: 'Dragon Bonus Baccarat', provider: 'Ezugi', type: 'Baccarat', rtp: '98.5%', tag: '', minBet: 2, maxBet: 1800, image: placeholder },
  { name: 'Baccarat Classic', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 5, maxBet: 3000, image: placeholder },
  { name: 'Turbo Baccarat', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Premium Baccarat', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.9%', tag: '', minBet: 15, maxBet: 5000, image: placeholder },
  { name: 'Baccarat Lobby', provider: 'Ezugi', type: 'Baccarat', rtp: '98.6%', tag: '', minBet: 1, maxBet: 1200, image: placeholder },
  { name: 'Baccarat Platinum', provider: 'Evolution', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 20, maxBet: 6000, image: placeholder },
  { name: 'Speed Baccarat 4', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.8%', tag: '', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Baccarat Gold', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.7%', tag: '', minBet: 10, maxBet: 4000, image: placeholder },
];

const gameShows = [
  { name: 'Crazy Time', provider: 'Evolution', type: 'Game Show', rtp: '96.1%', tag: 'HOT', minBet: 0.1, maxBet: 1000, image: placeholder },
  { name: 'Deal or No Deal', provider: 'Evolution', type: 'Game Show', rtp: '95.5%', tag: '', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Mega Ball', provider: 'Evolution', type: 'Game Show', rtp: '95.4%', tag: '', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Monopoly Live', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
  { name: 'Football Studio', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 1, maxBet: 1000, image: placeholder },
  { name: 'Dream Catcher', provider: 'Evolution', type: 'Game Show', rtp: '96.6%', tag: '', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Cash or Crash', provider: 'Evolution', type: 'Game Show', rtp: '96.8%', tag: 'NEW', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'Adventures Beyond Wonderland', provider: 'Playtech Live', type: 'Game Show', rtp: '96.7%', tag: '', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Mega Wheel', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.5%', tag: 'NEW', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Boom City', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.4%', tag: 'NEW', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Lightning Dice', provider: 'Evolution', type: 'Game Show', rtp: '96.5%', tag: '', minBet: 1, maxBet: 1500, image: placeholder },
  { name: 'Spin a Win', provider: 'Playtech Live', type: 'Game Show', rtp: '96.3%', tag: '', minBet: 0.5, maxBet: 1800, image: placeholder },
  { name: 'Wheel of Fortune', provider: 'Ezugi', type: 'Game Show', rtp: '96.1%', tag: '', minBet: 1, maxBet: 2000, image: placeholder },
  { name: 'Gonzo\'s Treasure Hunt', provider: 'Evolution', type: 'Game Show', rtp: '96.0%', tag: '', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'Sweet Bonanza CandyLand', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.4%', tag: '', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Funky Time', provider: 'Evolution', type: 'Game Show', rtp: '96.3%', tag: '', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'The Money Drop', provider: 'Playtech Live', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
  { name: 'Keno', provider: 'Ezugi', type: 'Game Show', rtp: '95.8%', tag: '', minBet: 1, maxBet: 1000, image: placeholder },
  { name: 'Mega Fire Blaze Roulette', provider: 'Playtech Live', type: 'Game Show', rtp: '96.5%', tag: '', minBet: 2, maxBet: 3000, image: placeholder },
  { name: 'Buffalo Blitz Live', provider: 'Playtech Live', type: 'Game Show', rtp: '96.5%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
  { name: 'Bingo', provider: 'Evolution', type: 'Game Show', rtp: '95.9%', tag: '', minBet: 0.5, maxBet: 1500, image: placeholder },
  { name: 'PowerUP Roulette', provider: 'Playtech Live', type: 'Game Show', rtp: '96.4%', tag: '', minBet: 1, maxBet: 2000, image: placeholder },
  { name: 'Lucky 7', provider: 'Ezugi', type: 'Game Show', rtp: '96.0%', tag: '', minBet: 1, maxBet: 1800, image: placeholder },
  { name: 'Crazy Coin Flip', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: '', minBet: 0.2, maxBet: 1000, image: placeholder },
  { name: 'Spaceman', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.5%', tag: '', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Top Card', provider: 'Playtech Live', type: 'Game Show', rtp: '96.1%', tag: '', minBet: 1, maxBet: 2200, image: placeholder },
  { name: 'Hi-Lo', provider: 'Ezugi', type: 'Game Show', rtp: '95.7%', tag: '', minBet: 1, maxBet: 1500, image: placeholder },
];

const newLiveGames = [
  { name: 'PowerUP Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: 'NEW', minBet: 1, maxBet: 4000, image: placeholder },
  { name: 'ONE Blackjack', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.1%', tag: '', minBet: 5, maxBet: 1500, image: placeholder },
  { name: 'Peek Baccarat', provider: 'Evolution', type: 'Baccarat', rtp: '98.7%', tag: 'NEW', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Boom City', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.4%', tag: 'NEW', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Buffalo Blitz Live', provider: 'Playtech Live', type: 'Slots', rtp: '96.5%', tag: '', minBet: 1, maxBet: 2500, image: placeholder },
  { name: 'Mega Sic Bo', provider: 'Pragmatic Play Live', type: 'Dice', rtp: '97.2%', tag: '', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'All Bets Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.0%', tag: '', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Quantum Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: '', minBet: 2, maxBet: 3500, image: placeholder },
  { name: 'Lightning Blackjack', provider: 'Evolution', type: 'Blackjack', rtp: '99.0%', tag: 'NEW', minBet: 10, maxBet: 3000, image: placeholder },
  { name: 'Cash or Crash', provider: 'Evolution', type: 'Game Show', rtp: '96.8%', tag: 'NEW', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'Speed Baccarat 5', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.9%', tag: 'NEW', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'XXXtreme Lightning Roulette', provider: 'Evolution', type: 'Roulette', rtp: '97.1%', tag: 'NEW', minBet: 2, maxBet: 4000, image: placeholder },
  { name: 'Funky Time', provider: 'Evolution', type: 'Game Show', rtp: '96.3%', tag: 'NEW', minBet: 0.5, maxBet: 1200, image: placeholder },
  { name: 'Mega Fire Blaze Blackjack', provider: 'Playtech Live', type: 'Blackjack', rtp: '99.2%', tag: 'NEW', minBet: 10, maxBet: 3500, image: placeholder },
  { name: 'Spaceman', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.5%', tag: 'NEW', minBet: 0.5, maxBet: 2000, image: placeholder },
  { name: 'Quantum Baccarat', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.8%', tag: 'NEW', minBet: 5, maxBet: 3000, image: placeholder },
  { name: 'Lightning Storm', provider: 'Evolution', type: 'Game Show', rtp: '96.4%', tag: 'NEW', minBet: 1, maxBet: 1500, image: placeholder },
  { name: 'Speed Blackjack Ruby', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.3%', tag: 'NEW', minBet: 15, maxBet: 2500, image: placeholder },
  { name: 'Mega Fire Blaze Roulette Live', provider: 'Playtech Live', type: 'Roulette', rtp: '97.2%', tag: 'NEW', minBet: 2, maxBet: 4000, image: placeholder },
  { name: 'Crazy Coin Flip', provider: 'Evolution', type: 'Game Show', rtp: '96.2%', tag: 'NEW', minBet: 0.2, maxBet: 1000, image: placeholder },
  { name: 'Turbo Baccarat Pro', provider: 'Pragmatic Play Live', type: 'Baccarat', rtp: '98.7%', tag: 'NEW', minBet: 5, maxBet: 2000, image: placeholder },
  { name: 'Lightning Roulette XXX', provider: 'Evolution', type: 'Roulette', rtp: '97.3%', tag: 'NEW', minBet: 1, maxBet: 5000, image: placeholder },
  { name: 'Sweet Bonanza CandyLand', provider: 'Pragmatic Play Live', type: 'Game Show', rtp: '96.4%', tag: 'NEW', minBet: 0.2, maxBet: 1500, image: placeholder },
  { name: 'Mega Fire Blaze Baccarat', provider: 'Playtech Live', type: 'Baccarat', rtp: '98.9%', tag: 'NEW', minBet: 10, maxBet: 4000, image: placeholder },
  { name: 'Gonzo\'s Treasure Hunt Live', provider: 'Evolution', type: 'Game Show', rtp: '96.0%', tag: 'NEW', minBet: 0.5, maxBet: 1000, image: placeholder },
  { name: 'Speed Blackjack Diamond', provider: 'Pragmatic Play Live', type: 'Blackjack', rtp: '99.2%', tag: 'NEW', minBet: 15, maxBet: 2800, image: placeholder },
  { name: 'Quantum Auto Roulette', provider: 'Playtech Live', type: 'Roulette', rtp: '97.3%', tag: 'NEW', minBet: 1, maxBet: 3500, image: placeholder },
];

const LiveCard = ({ game }: { game: typeof topLive[0] }) => (
  <div className="relative rounded-lg overflow-hidden bg-gray-800/60 group shadow-md">
    <div className="relative aspect-[3/2] bg-gray-700 flex items-center justify-center">
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

const Section = ({ title, games }: { title: string; games: LiveGame[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedGames = isExpanded ? games : games.slice(0, 10);
  const hasMoreGames = games.length > 10;

  return (
    <div className="mb-12">
      {/* Enhanced Section Header */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/60 rounded-xl p-6 mb-6 border border-gray-700/50 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-8 bg-primary-yellow rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
            <span className="bg-primary-yellow/20 text-primary-yellow px-3 py-1 rounded-full text-sm font-semibold">
              {games.length} games
            </span>
          </div>
          {hasMoreGames && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center w-10 h-10 text-primary-yellow hover:text-yellow-400 transition-colors group bg-gray-700/30 hover:bg-gray-600/50 rounded-lg border border-gray-600/50 hover:border-primary-yellow/30"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
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
          {games.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No games found</div>
              <div className="text-gray-500 text-sm">Try adjusting your search or filter settings</div>
            </div>
          ) : (
            displayedGames.map(game => (
              <LiveCard key={game.name} game={game} />
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
                {isExpanded ? `Hide ${games.length - 10} games` : `Show ${games.length - 10} more games`}
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

const LiveCasinoPage = () => {
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [sort, setSort] = useState('Popular');
  const [search, setSearch] = useState('');

  // Filter function
  const filterByProvider = (games: LiveGame[]) =>
    selectedProvider === 'All Providers' ? games : games.filter(g => g.provider === selectedProvider);

  // Search function
  const filterBySearch = (games: LiveGame[]) =>
    search.trim() === '' ? games : games.filter(g => g.name.toLowerCase().includes(search.toLowerCase()));

  // Compose filters
  const filterGames = (games: LiveGame[]) => filterBySearch(filterByProvider(games));

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