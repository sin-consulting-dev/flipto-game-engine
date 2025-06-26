import { FaCalendarDay, FaCrown, FaGift } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InfoCards = () => {
    const cards = [
        {
            icon: <FaCalendarDay className="text-primary-yellow" />,
            title: 'Daily Bonus',
            description: 'Claim up to 100 USDT daily',
            buttonText: 'Claim Now',
            link: '#',
        },
        {
            icon: <FaCrown className="text-primary-yellow" />,
            title: 'VIP Program',
            description: 'Exclusive host for high rollers',
            buttonText: 'Learn More',
            link: '/vip',
        },
        {
            icon: <FaGift className="text-primary-yellow" />,
            title: 'Drops & Rewards',
            description: 'Redeem codes for bonuses',
            buttonText: 'Redeem Code',
            link: '#',
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
                        {card.link === '/vip' ? (
                            <Link to={card.link} className="text-primary-yellow font-semibold mt-2 inline-block hover:underline">
                                {card.buttonText}
                            </Link>
                        ) : (
                            <a href={card.link} className="text-primary-yellow font-semibold mt-2 inline-block hover:underline">
                                {card.buttonText}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoCards; 