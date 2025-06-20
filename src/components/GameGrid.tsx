import React from 'react';
import PlinkoIcon from './icons/PlinkoIcon';
import CrashIcon from './icons/CrashIcon';
import DiceIcon from './icons/DiceIcon';
import MinesIcon from './icons/MinesIcon';
import RouletteIcon from './icons/RouletteIcon';

interface Game {
    name: string;
    icon: React.ReactNode;
    rtp: string;
    bgColor: string;
    popular?: boolean;
}

const games: Game[] = [
    { name: 'Plinko', icon: <PlinkoIcon />, rtp: '99%', bgColor: 'bg-purple-600/50', popular: true },
    { name: 'Crash', icon: <CrashIcon />, rtp: '97%', bgColor: 'bg-red-600/50' },
    { name: 'Dice', icon: <DiceIcon />, rtp: '98%', bgColor: 'bg-blue-600/50' },
    { name: 'Mines', icon: <MinesIcon />, rtp: '97%', bgColor: 'bg-yellow-600/50' },
    { name: 'Roulette', icon: <RouletteIcon />, rtp: '97.3%', bgColor: 'bg-green-600/50' },
]

const GameCard = ({ game }: { game: Game }) => (
    <div className={`relative rounded-lg p-4 flex flex-col justify-between h-48 ${game.bgColor}`}>
        {game.popular && <span className="absolute top-2 right-2 bg-primary-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded">Popular</span>}
        <div className="flex-1 flex items-center justify-center text-6xl text-white">
            {game.icon}
        </div>
        <div className="flex justify-between items-center">
            <div>
                <h4 className="font-bold">{game.name}</h4>
                <p className="text-xs text-gray-400">RTP: {game.rtp}</p>
            </div>
            <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-bold py-2 px-4 rounded">Play</button>
        </div>
    </div>
)

const GameGrid = () => {
    return (
        <section className="my-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Originals</h2>
                <a href="#" className="text-primary-yellow hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {games.map(game => <GameCard key={game.name} game={game} />)}
            </div>
        </section>
    );
};

export default GameGrid;
