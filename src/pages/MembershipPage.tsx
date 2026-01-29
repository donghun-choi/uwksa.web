import { motion } from 'motion/react';
import { Check, Star, ExternalLink } from 'lucide-react';
import mascotWave from 'figma:asset/2f7119d4264719c8469dedaf506e913cc3affe24.png';

interface MembershipPageProps {
  language: 'en' | 'ko';
}

export function MembershipPage({ language }: MembershipPageProps) {
  const content = {
    ko: {
      title: 'Membership 안내',
      subtitle: '멤버십 혜택 및 제휴 업체',
      benefitsTitle: '멤버십 혜택 (Korean)',
      benefitsDesc: 'UWKSA 멤버십에 가입하시면 다양한 혜택과 함께 활발한 한인 커뮤니티의 일원이 되실 수 있습니다.',
      benefits: [
        'Who: UWKSA members',
        'Perk: 10% off at contracted restaurants (some exclusions/terms may apply)',
        'How: Show membership during order/checkout → discount applied',
        'Note: Terms vary by location and are subject to change with notice.',
      ],
      benefitsKorean: [
        '대상: 워터루 한인학생회(UWKSA) 회원',
        '혜택: 제휴 식당에서 10% 할인 (일부 품목/시간 제외 가능)',
        '방법: 주문/체크 시 멤버십 제시 → 할인 적용',
        '유의: 각 제휴 장소마다 다른 조건이 있을 수 있으며, 예고 없이 변경될 수 있습니다.',
      ],
      enrollTitle: '멤버십 가입',
      enrollButton: '멤버십 가입 (Direct Link)',
      placesTitle: 'Membership Places - Opening Hours',
      placesDesc: '제휴 식당 목록입니다. 운영시간 및 위치 기준은 현 학기를 따릅니다.',
      restaurants: [
        { name: 'BBQ', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: '본비빔', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'K Good Store', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'Luna', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'Sweet Dreams', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'Matron Bakery', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'The Burgal', location: 'TBD TBD', hours: '매일 10% 할인' },
        { name: 'Katsuya', location: 'TBD TBD', hours: '매일 10% 할인' },
      ],
    },
    en: {
      title: 'Membership Information',
      subtitle: 'Membership Benefits & Partner Restaurants',
      benefitsTitle: 'Membership Benefits (English)',
      benefitsDesc: 'With a valid UWKSA membership, students receive a 10% discount at partnered restaurants. Please present your valid membership (e.g., digital card/name verification at the counter) before payment:',
      benefits: [
        'Who: UWKSA members',
        'Perk: 10% off at contracted restaurants (some exclusions/terms may apply)',
        'How: Show membership during order/checkout → discount applied',
        'Note: Terms vary by location and are subject to change with notice.',
      ],
      benefitsKorean: [
        'Subject: Waterloo Korean Student Association (UWKSA) members',
        'Benefits: 10% discount at affiliated restaurants (some items/times may be excluded)',
        'Method: Present membership during order/checkout → discount applied',
        'Note: Each affiliated location may have different conditions and may change without notice.',
      ],
      enrollTitle: 'Join Membership',
      enrollButton: 'Join Membership (Direct Link)',
      placesTitle: 'Membership Places - Opening Hours',
      placesDesc: 'List of affiliated restaurants. Operating hours and location are based on the current semester.',
      restaurants: [
        { name: 'BBQ', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'BonBibim', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'K Good Store', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'Luna', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'Sweet Dreams', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'Matron Bakery', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'The Burgal', location: 'TBD TBD', hours: '10% off daily' },
        { name: 'Katsuya', location: 'TBD TBD', hours: '10% off daily' },
      ],
    },
  };

  const text = content[language];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-yellow-600 dark:text-yellow-400 mb-4">{text.title}</h1>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">{text.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                <Star className="text-yellow-400" size={16} />
                <span className="text-yellow-400">{language === 'ko' ? '멤버십 혜택' : 'Membership Benefits'}</span>
              </div>

              <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.benefitsTitle}</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{text.benefitsDesc}</p>

              <div className="space-y-3 mb-8">
                {text.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-yellow-400" size={16} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {text.benefitsKorean.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-yellow-400" size={16} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="https://example.com/membership-signup"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                {text.enrollButton}
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl p-12 border border-yellow-400/20">
                <motion.img
                  src={mascotWave}
                  alt="UWKSA Mascot"
                  className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl" />
                <div className="absolute bottom-8 left-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant List */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-yellow-600 dark:text-yellow-400 mb-4 text-center">{text.placesTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300 text-center mb-12">{text.placesDesc}</p>

          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-900 dark:text-slate-100">{language === 'ko' ? '식당' : 'Restaurant'}</th>
                  <th className="px-6 py-4 text-left text-slate-900 dark:text-slate-100">{language === 'ko' ? '주소' : 'Location'}</th>
                  <th className="px-6 py-4 text-left text-slate-900 dark:text-slate-100">{language === 'ko' ? '혜택' : 'Discount'}</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
                {text.restaurants.map((restaurant, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 dark:text-slate-100">{restaurant.name}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{restaurant.location}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{restaurant.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
