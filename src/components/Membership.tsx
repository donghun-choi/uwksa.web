import { motion } from 'motion/react';
import { Check, Star, Store } from 'lucide-react';

interface MembershipProps {
  language: 'en' | 'ko';
}

const partnerRestaurants = [
  { name: 'BBQ Village', discount: '10%' },
  { name: 'Izna Poke Plus', discount: '10%' },
  { name: 'K-GOOD STORE MART', discount: '10%' },
  { name: 'Kim\'s Kitchen', discount: 'Cash 10%, Card 5%' },
  { name: 'Manon Bakery', discount: '5% under $30, 10% over $30' },
  { name: 'Sweet Dreams Teashop', discount: '10% (All food & drinks)' },
  { name: 'The Bingsu', discount: '10%' },
  { name: 'Katsuya', discount: '10%' },
  { name: 'Chicken Plus', discount: 'Free item with small chicken order (Executives 30% off)' },
];

export function Membership({ language }: MembershipProps) {
  const content = {
    ko: {
      badge: '멤버십 혜택',
      title: '멤버십 안내',
      description: '멤버십에 가입하고 키치너 & 워털루 지역 가게들에서 제공하는 할인 혜택을 받으세요! UWKSA 멤버가 되어 다양한 이벤트와 커뮤니티에 참여하세요.',
      cta: '멤버십 가입하기',
      partnersTitle: '제휴 업체',
      benefits: [
        'UWKSA 주최 이벤트 우선 참가',
        '한인 커뮤니티 네트워킹 기회',
        '멤버 전용 소셜 이벤트 참가',
        '졸업생 네트워크 접근',
        '한국 문화 체험 프로그램',
      ],
    },
    en: {
      badge: 'Membership Benefits',
      title: 'Membership Information',
      description: 'Join UWKSA membership to become part of an active Korean community with various benefits.',
      cta: 'Join Membership',
      partnersTitle: 'Partner Businesses',
      benefits: [
        'Priority registration for UWKSA events',
        'Korean community networking opportunities',
        'Access to member-exclusive social events',
        'Alumni network access',
        'Korean culture experience programs',
      ],
    },
  };

  const text = content[language];

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <Star className="text-yellow-400" size={16} />
              <span className="text-yellow-400">{text.badge}</span>
            </div>

            <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.title}</h2>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              {text.description}
            </p>

            <div className="space-y-3 mb-8">
              {text.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-yellow-400" size={16} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              {text.cta}
            </motion.a>
          </motion.div>

          {/* Partner Restaurants */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl p-6 border border-yellow-400/20">
              <div className="flex items-center gap-2 mb-4">
                <Store className="text-yellow-400" size={20} />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{text.partnersTitle}</h3>
              </div>
              <div className="space-y-3">
                {partnerRestaurants.map((restaurant, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="flex justify-between items-start gap-4 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg"
                  >
                    <span className="font-medium text-slate-900 dark:text-slate-100">{restaurant.name}</span>
                    <span className="text-sm text-yellow-600 dark:text-yellow-400 text-right whitespace-nowrap">{restaurant.discount}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
