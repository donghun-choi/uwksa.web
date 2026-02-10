import { motion } from 'motion/react';
import { Check, Star, ExternalLink, MapPin } from 'lucide-react';
import mascotWave from 'figma:asset/2f7119d4264719c8469dedaf506e913cc3affe24.png';

interface MembershipPageProps {
  language: 'en' | 'ko';
}

const partnerRestaurants = [
  {
    name: 'BBQ Village',
    address: '140 University Ave W A1',
    mapUrl: 'https://maps.app.goo.gl/gDdWomSnAULqRdge7',
    hours: '3pm - 12am',
    discount: '10%',
  },
  {
    name: 'Izna Poke Plus',
    address: '170 University Ave W #6B',
    mapUrl: 'https://maps.app.goo.gl/cHFjUk3BteN5Y8Ar8',
    hours: '11am - 9pm',
    discount: '10%',
  },
  {
    name: 'K-GOOD STORE MART',
    address: '363 King St N',
    mapUrl: 'https://maps.app.goo.gl/FndBQ2D3YvNg4UtSA',
    hours: '8am - 12am',
    discount: '10%',
  },
  {
    name: 'Kim\'s Kitchen',
    address: '258 King St N #2',
    mapUrl: 'https://maps.app.goo.gl/tABRcTdw8AQDssHy7',
    hours: 'TBD',
    discount: 'Cash 10%, Card 5%',
  },
  {
    name: 'Manon Bakery',
    address: '258A Sunview St',
    mapUrl: 'https://maps.app.goo.gl/sXYKcMzXfesQGCbb9',
    hours: '10am - 7pm (Mon closed)',
    discount: '5% under $30, 10% over $30',
  },
  {
    name: 'Sweet Dreams Teashop',
    address: '170 University Ave W #14',
    mapUrl: 'https://maps.app.goo.gl/vRBHL34hQHaEM6VcA',
    hours: 'TBD',
    discount: '10% (All food & drinks)',
  },
  {
    name: 'The Bingsu Cafe',
    address: '150 University Ave W #2',
    mapUrl: 'https://maps.app.goo.gl/n3Ef8zJgosZh2Zra8',
    hours: 'TBD',
    discount: '10%',
  },
  {
    name: 'Katsuya',
    address: '23 King St N',
    mapUrl: 'https://maps.app.goo.gl/HNipkiUPheoa58Zg9',
    hours: '12-10pm (Sun 12-9pm)',
    discount: '10%',
  },
  {
    name: 'Chicken Plus',
    address: '572 King St N',
    mapUrl: 'https://maps.app.goo.gl/RzcQzbjC82s4iBJeA',
    hours: 'TBD',
    discount: 'Free side with small chicken (Exec 30%)',
  },
];

export function MembershipPage({ language }: MembershipPageProps) {
  const content = {
    ko: {
      title: 'Membership 안내',
      subtitle: '멤버십 혜택 및 제휴 업체',
      benefitsTitle: '멤버십 혜택 (Korean)',
      benefitsDesc: '멤버십에 가입하고 키치너 & 워털루 지역 가게들에서 제공하는 할인 혜택을 받으세요! UWKSA 멤버가 되어 다양한 이벤트와 커뮤니티에 참여하세요.',
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
      placesTitle: '제휴 업체',
      placesDesc: '제휴 식당 목록입니다. 운영시간 및 위치 기준은 현 학기를 따릅니다.',
      tableHeaders: { restaurant: '식당', address: '주소', hours: '운영시간', discount: '할인' },
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
      placesTitle: 'Partner Restaurants',
      placesDesc: 'List of affiliated restaurants. Operating hours and location are based on the current semester.',
      tableHeaders: { restaurant: 'Restaurant', address: 'Address', hours: 'Hours', discount: 'Discount' },
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
                href="https://forms.gle/XxWFo6NRTjjG3HHN7"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-yellow-600 dark:text-yellow-400 mb-4 text-center">{text.placesTitle}</h2>
          <p className="text-slate-700 dark:text-slate-300 text-center mb-12">{text.placesDesc}</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-4 py-4 text-left text-slate-900 dark:text-slate-100">{text.tableHeaders.restaurant}</th>
                  <th className="px-4 py-4 text-left text-slate-900 dark:text-slate-100">{text.tableHeaders.address}</th>
                  <th className="px-4 py-4 text-left text-slate-900 dark:text-slate-100">{text.tableHeaders.hours}</th>
                  <th className="px-4 py-4 text-left text-slate-900 dark:text-slate-100">{text.tableHeaders.discount}</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
                {partnerRestaurants.map((restaurant, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4 text-slate-900 dark:text-slate-100 font-medium">{restaurant.name}</td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400">
                      <a
                        href={restaurant.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                      >
                        <MapPin size={14} className="flex-shrink-0" />
                        <span className="text-sm">{restaurant.address}</span>
                      </a>
                    </td>
                    <td className="px-4 py-4 text-slate-600 dark:text-slate-400 text-sm">{restaurant.hours}</td>
                    <td className="px-4 py-4 text-yellow-600 dark:text-yellow-400 font-medium text-sm">{restaurant.discount}</td>
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
