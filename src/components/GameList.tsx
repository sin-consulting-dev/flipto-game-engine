import React from 'react';
import placeholder from '../assets/placeholder.svg';

interface Game {
    id: number;
    name: string;
    provider: string;
    image: string;
    players?: number;
    overlayText?: string;
}

const generateMockData = (category: string): Game[] => {
    const overlays = ['7.0x', '900x', '18+', null, null];
    return Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        name: `${category} Game ${i + 1}`,
        provider: 'Flipto Originals',
        image: placeholder,
        players: Math.floor(Math.random() * 5000) + 200,
        overlayText: overlays[i % overlays.length] || undefined,
    }));
};

const GameList = ({ category }: { category: string }) => {
    const games = generateMockData(category);

    if (!category) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-8">
            {games.map(game => (
                <div key={game.id} className="bg-secondary-dark rounded-lg overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative">
                        <img src={game.image} alt={game.name} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
                        {game.overlayText && (
                            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded">
                                {game.overlayText}
                            </div>
                        )}
                    </div>
                    <div className="p-3">
                        <h4 className="font-bold text-white truncate">{game.name}</h4>
                        <p className="text-sm text-gray-400">{game.provider}</p>
                        {game.players && (
                            <div className="flex items-center text-xs text-gray-400 mt-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                {game.players.toLocaleString()} playing
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GameList; 