import { FaCalendarDay, FaCrown, FaGift } from 'react-icons/fa';

const InfoCards = () => {
    const cards = [
        {
            icon: <FaCalendarDay className="text-primary-yellow" />,
            title: 'Daily Bonus',
            description: 'Claim up to 100 USDT daily',
            buttonText: 'Claim Now',
        },
        {
            icon: <FaCrown className="text-primary-yellow" />,
            title: 'VIP Program',
            description: 'Exclusive host for high rollers',
            buttonText: 'Learn More',
        },
        {
            icon: <FaGift className="text-primary-yellow" />,
            title: 'Drops & Rewards',
            description: 'Redeem codes for bonuses',
            buttonText: 'Redeem Code',
        },
    ];

    return (
        <section className="grid md:grid-cols-3 gap-8 my-8">
            {cards.map((card) => (
                <div key={card.title} className="bg-secondary-dark p-6 rounded-lg flex items-center space-x-6">
                    <div className="text-4xl">
                        {card.icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.description}</p>
                        <a href="#" className="text-primary-yellow font-semibold mt-2 inline-block hover:underline">
                            {card.buttonText}
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoCards; 