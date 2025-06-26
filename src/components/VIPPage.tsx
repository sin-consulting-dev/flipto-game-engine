import { useState } from 'react';
import { FaRocket, FaCrown, FaChevronDown, FaChevronUp, FaGem, FaShieldAlt, FaTrophy, FaUserTie } from 'react-icons/fa';

const VIPPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const vipTiers = [
    {
      name: 'Bronze',
      color: 'from-amber-600 to-amber-800',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      requirement: '$10k',
      subtitle: 'TOTAL WAGERED',
      benefits: [
        'Monthly bonuses',
        'Level Up bonuses',
        'Rakeback',
        'Weekly bonuses'
      ]
    },
    {
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      borderColor: 'border-gray-400',
      textColor: 'text-gray-300',
      bgColor: 'bg-gray-400/10',
      requirement: '$50k',
      subtitle: 'TOTAL WAGERED',
      benefits: [
        'Monthly bonuses',
        'Level Up bonuses',
        'Rakeback',
        'Weekly bonuses',
        'Bonus growth'
      ]
    },
    {
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-400',
      textColor: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      requirement: '$100k',
      subtitle: 'TOTAL WAGERED',
      benefits: [
        'Monthly bonuses',
        'Level Up bonuses',
        'Rakeback',
        'Weekly bonuses',
        'Bonus growth'
      ]
    },
    {
      name: 'Platinum VIP',
      color: 'from-cyan-400 to-cyan-600',
      borderColor: 'border-cyan-400',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      requirement: '$250k - $1M',
      subtitle: 'TOTAL WAGERED',
      benefits: [
        'Monthly bonuses',
        'Level Up bonuses',
        'Rakeback',
        'Weekly bonuses',
        'Bonus growth',
        'Daily bonuses / Reload'
      ]
    }
  ];

  const vipBenefits = [
    {
      icon: <FaRocket className="text-3xl text-primary-yellow" />,
      title: 'Accelerated Rewards',
      description: 'Experience lightning-fast bonus accumulation based on your gaming activity. The more you play, the greater your rewards become.'
    },
    {
      icon: <FaUserTie className="text-3xl text-primary-yellow" />,
      title: 'Dedicated VIP Host',
      description: 'Receive your own dedicated VIP host who will provide personalized support and cater to your exclusive gaming needs.'
    },
    {
      icon: <FaGem className="text-3xl text-primary-yellow" />,
      title: 'Exclusive Play Bonuses',
      description: 'Unlock a treasure trove of exclusive Flipto offers, including money-back on losses every time you level up.'
    },
    {
      icon: <FaTrophy className="text-3xl text-primary-yellow" />,
      title: 'Elite Level-Ups',
      description: 'Unlock a new level and get paid. The bonuses get better the higher you climb in our VIP hierarchy.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-primary-yellow" />,
      title: 'Bespoke Benefits',
      description: 'Work with your dedicated VIP host to tailor exclusive benefits to your gaming preferences and lifestyle.'
    }
  ];

  const faqItems = [
    {
      question: "Why is Flipto's VIP program the best?",
      answer: "Flipto's VIP program offers unparalleled benefits including dedicated hosts, exclusive bonuses, faster withdrawals, and personalized rewards tailored to your gaming style. Our multi-tier system ensures every player gets rewarded appropriately."
    },
    {
      question: "How much has Flipto given out in bonuses?",
      answer: "Flipto has distributed over $50 million in bonuses to our VIP members since launch, with monthly distributions exceeding $2 million. Our commitment to rewarding loyal players is unmatched in the industry."
    },
    {
      question: "How do I enter the $75,000 weekly raffle?",
      answer: "VIP members automatically enter our weekly $75,000 raffle based on their wagering activity. The more you play, the more tickets you earn. Gold tier and above receive additional bonus entries."
    },
    {
      question: "Where can I find the Flipto Telegram Channel?",
      answer: "Join our exclusive VIP Telegram channel for real-time updates, exclusive promotions, and direct communication with our VIP team. Links are provided in your VIP dashboard upon qualification."
    },
    {
      question: "Where can I find the Flipto VIP Telegram channel?",
      answer: "Our VIP Telegram channel is exclusively for Platinum members and above. You'll receive an invitation link from your dedicated VIP host once you reach the qualifying tier."
    },
    {
      question: "How do I qualify for VIP status?",
      answer: "VIP qualification is based on your total wagering activity. Start with Bronze at $10k wagered and work your way up to Platinum VIP. Each tier unlocks additional exclusive benefits and personalized rewards."
    },
    {
      question: "What are the withdrawal limits for VIP members?",
      answer: "VIP members enjoy significantly higher withdrawal limits and priority processing. Platinum VIP members have unlimited withdrawals with same-day processing guaranteed by our dedicated team."
    },
    {
      question: "Can I lose my VIP status?",
      answer: "VIP status is permanent once achieved. However, some tier-specific benefits may require ongoing activity to maintain. Your dedicated VIP host will keep you informed about maintaining your benefits."
    },
    {
      question: "How often are VIP bonuses distributed?",
      answer: "VIP bonuses are distributed on multiple schedules: weekly bonuses every Monday, monthly bonuses on the 1st, and instant level-up bonuses. Platinum members also receive daily reload bonuses."
    },
    {
      question: "Is there a VIP mobile app?",
      answer: "Yes! VIP members get access to our exclusive mobile app with enhanced features, priority customer support, and exclusive mobile-only promotions. Download links are provided in your VIP dashboard."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-secondary-dark min-h-0 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-yellow/20 via-gray-900/80 to-primary-yellow/20 rounded-3xl p-12 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-yellow/5 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-4">
                The Unrivaled VIP Experience
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Unlock exclusive benefits and receive instantly withdrawable bonuses without any strings attached. Join the elite circle of Flipto VIP members.
              </p>
              <button className="bg-primary-yellow text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all shadow-lg">
                Join VIP Program
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-yellow/30 to-transparent rounded-full flex items-center justify-center">
                  <FaCrown className="text-8xl text-primary-yellow animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIP Ranking System */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Flipto VIP Ranking System</h2>
          <p className="text-gray-400 text-lg">Climb the ranks and unlock increasingly exclusive rewards</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vipTiers.map((tier, index) => (
            <div key={tier.name} className={`relative bg-gray-800/60 rounded-xl p-6 border-2 ${tier.borderColor} hover:scale-105 transition-transform duration-300`}>
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${tier.bgColor} ${tier.textColor}`}>
                {tier.name}
              </div>
              
              <div className="mt-8 mb-6">
                <div className={`text-3xl font-bold ${tier.textColor} mb-1`}>
                  {tier.requirement}
                </div>
                <div className="text-xs text-gray-400 font-semibold">
                  {tier.subtitle}
                </div>
              </div>

              <div className="space-y-3">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${tier.textColor.replace('text-', 'bg-')}`}></div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {index === 3 && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-primary-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                    PREMIUM
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* VIP Club Benefits */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Flipto VIP Club Benefits</h2>
          <p className="text-gray-400 text-lg">Exclusive perks designed for our most valued players</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipBenefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-primary-yellow/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary-yellow/10 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Reach out to our award-winning support team</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-800/60 rounded-lg border border-gray-700">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{item.question}</span>
                  {openFAQ === index ? (
                    <FaChevronUp className="text-primary-yellow text-xl flex-shrink-0 ml-4" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-xl flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gradient-to-r from-primary-yellow/10 to-gray-900/50 rounded-xl p-8 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Live, 24-hour Customer Support</h3>
            <p className="text-gray-300">
              Real support from real people. We're always here through live chat and email to help you.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <select className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition">
              Chat with us
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-800/40 rounded-xl p-12 border border-gray-700">
        <FaCrown className="text-6xl text-primary-yellow mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Join the Elite?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Start your journey to VIP status today and unlock a world of exclusive benefits, personalized service, and unmatched rewards.
        </p>
        <button className="bg-primary-yellow text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all shadow-lg">
          Start Playing Now
        </button>
      </div>
    </main>
  );
};

export default VIPPage; 