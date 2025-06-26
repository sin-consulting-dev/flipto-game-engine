import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaCrown } from 'react-icons/fa';

const promoBanners = [
    {
      title: 'Welcome Bonus Bash',
      description: 'Get a 200% bonus on your first deposit up to 1 BTC!',
      buttonText: 'Claim Now',
      imageUrl: 'https://images.unsplash.com/photo-1593454517839-a7a3e6a9ddb5?q=80&w=2940&auto=format&fit=crop'
    },
    {
      title: 'Free Spins Frenzy',
      description: '200 Free Spins on our hottest new slot game!',
      buttonText: 'Spin for Free',
      imageUrl: 'https://images.unsplash.com/photo-1519669556878-63bd584d8469?q=80&w=2940&auto=format&fit=crop'
    },
    {
      title: 'High Roller Heaven',
      description: 'Exclusive tables and massive cashbacks for VIPs.',
      buttonText: 'Join the Elite',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1679547372290-95b741366144?q=80&w=2940&auto=format&fit=crop'
    },
    {
        title: 'Crypto Reload Thursday',
        description: 'Every Thursday, get a 50% reload bonus using any cryptocurrency.',
        buttonText: 'Reload Now',
        imageUrl: 'https://images.unsplash.com/photo-1614926120392-f345f3d79148?q=80&w=2874&auto=format&fit=crop'
    },
    {
        title: 'Slot Masters Tournament',
        description: 'Compete for a $100,000 prize pool in our weekly slot tournament.',
        buttonText: 'Enter Tournament',
        imageUrl: 'https://images.unsplash.com/photo-1526040665513-3467bfb30c33?q=80&w=2940&auto=format&fit=crop'
    },
    {
        title: 'Live Casino Cashback',
        description: 'Get 25% cashback on all your live casino losses this weekend.',
        buttonText: 'Play Live',
        imageUrl: 'https://images.unsplash.com/photo-1541336528062-15a6b0b57117?q=80&w=2940&auto=format&fit=crop'
    },
    {
        title: 'Refer-a-Friend Rewards',
        description: 'Invite friends and earn $50 in crypto for each one who signs up!',
        buttonText: 'Invite Friends',
        imageUrl: 'https://images.unsplash.com/photo-1505536035235-3bf3b3c3c751?q=80&w=2874&auto=format&fit=crop'
    },
    {
        title: 'New Game Launch Party',
        description: 'Celebrate our new game release with double rewards and free plays.',
        buttonText: 'Check it Out',
        imageUrl: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2940&auto=format&fit=crop'
    },
    {
        title: 'Daily Login Loot',
        description: 'Log in every day for a week to unlock a mystery crypto prize.',
        buttonText: 'Log In',
        imageUrl: 'https://images.unsplash.com/photo-1605216938290-33771a4989a5?q=80&w=2940&auto=format&fit=crop'
    },
    {
        title: 'Weekend Wager Race',
        description: 'The more you bet, the higher you climb. Win a share of $50,000!',
        buttonText: 'Start Betting',
        imageUrl: 'https://images.unsplash.com/photo-1556742521-97136706db29?q=80&w=2940&auto=format&fit=crop'
    }
];

const Hero = () => {
    return (
        <section className="relative w-full rounded-3xl overflow-hidden mb-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="h-[320px] md:h-[340px] lg:h-[360px]"
            >
                {promoBanners.map((banner, index) => (
                    <SwiperSlide 
                        key={index} 
                        style={{ backgroundImage: `url(${banner.imageUrl})` }}
                        className="bg-cover bg-center"
                    >
                        {/* Gradient overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-gray-900/70 to-primary-yellow/10" />
                        <div className="relative h-full flex flex-col md:flex-row items-center md:items-stretch justify-between px-8 py-8 md:py-0 z-10">
                            {/* Left: Text content */}
                            <div className="flex-1 flex flex-col justify-center md:justify-center md:items-start items-center text-white">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left drop-shadow-lg">{banner.title}</h2>
                                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center md:text-left drop-shadow-lg">{banner.description}</p>
                                <button className="bg-primary-yellow text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all shadow-lg">
                                    {banner.buttonText}
                                </button>
                            </div>
                            {/* Right: Icon in yellow-tinted circle */}
                            <div className="hidden md:flex items-center justify-center ml-8">
                                <div className="w-48 h-48 rounded-full bg-primary-yellow/20 flex items-center justify-center shadow-xl">
                                    <FaCrown className="text-[5rem] text-primary-yellow drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero; 