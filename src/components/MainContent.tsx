import Hero from './Hero';
import InfoCards from './InfoCards';
import ProvablyFair from './ProvablyFair';
import GameGrid from './GameGrid';
import GameCategories from './GameCategories';

const MainContent = () => {
    return (
        <main className="flex-1 p-8 overflow-y-auto">
            <Hero />
            <InfoCards />
            <ProvablyFair />
            <GameGrid />
            <GameCategories />
        </main>
    );
};

export default MainContent; 