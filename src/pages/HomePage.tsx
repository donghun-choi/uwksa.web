import { motion } from 'motion/react';
import { TeamSection } from '../components/TeamSection';

interface HomePageProps {
  language: 'en' | 'ko';
}

export function HomePage({ language }: HomePageProps) {
  const content = {
    ko: {
      ksa: 'KSA',
      mainTitle: 'UWKSA는 워터루 대학교 한인 학생회로, 학생들이 한국 문화를 공유하고\n친목을 다지며, 다양한 이벤트와 활동을 즐길 수 있는\n공간을 제공하는 단체입니다.',
      joinCTA: 'Join Now & Get a',
      memberDiscount: 'Member Discount',
      joinDescription: '멤버십에 가입하고 워터루 지역 한식당에서 제공하는\n할인 혜택을 받으세요! UWKSA 멤버가 되어 다양한\n이벤트와 커뮤니티에 참여하세요.',
      joinButton: '멤버십 가입하기',
      eventsTitle: '주요 이벤트',
      events: [
        { title: '발렌타인 데이 (2/13)', description: '위치: 미정 · 시간: 미정' },
        { title: '삼일절 기념 (3/1)', description: '위치: CMH 67th floor · 시간: 미정' },
        { title: 'W26 EOT', description: '위치: 미정 · 시간: 미정 · 날짜: 미정' },
      ],
      newsTitle: '소식',
      news: [
        { title: 'UWKSA에서 멤버를 모집합니다!', link: 'UWKSA에서 멤버를 모집합니다 공지사항 읽기' },
        { title: 'EOT 행사가 다가옵니다!', link: 'EOT 행사가 다가옵니다 공지사항 읽기' },
        { title: '멘토링 나이트', link: '멘토링 나이트 공지사항 읽기' },
      ],
    },
    en: {
      ksa: 'KSA',
      mainTitle: 'UWKSA is the University of Waterloo Korean Student Association,\nproviding students with a space to share Korean culture,\nbuild friendships, and enjoy various events and activities.',
      joinCTA: 'Join Now & Get a',
      memberDiscount: 'Member Discount',
      joinDescription: 'Join our membership and receive discount benefits at Korean\nrestaurants in the Waterloo area! Become a UWKSA member\nand participate in various events and community activities.',
      joinButton: 'Join Membership',
      eventsTitle: 'Main Events',
      events: [
        { title: 'Valentine\'s Day (2/13)', description: 'Location: TBD · Time: TBD' },
        { title: 'March 1st Independence Day (3/1)', description: 'Location: CMH 67th floor · Time: TBD' },
        { title: 'W26 EOT', description: 'Location: TBD · Time: TBD · Date: TBD' },
      ],
      newsTitle: 'News',
      news: [
        { title: 'UWKSA is recruiting members!', link: 'Read the UWKSA member recruitment announcement' },
        { title: 'EOT event is coming up!', link: 'Read the EOT event announcement' },
        { title: 'Mentoring Night', link: 'Read the Mentoring Night announcement' },
      ],
    },
  };

  const text = content[language];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] overflow-hidden">
        {/* Background Image/Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-2xl aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* KSA Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full"
            >
              <span className="text-slate-900 dark:text-slate-100">{text.ksa}</span>
            </motion.div>

            {/* Main Title - UWKSA */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
              style={{ 
                fontSize: 'clamp(3rem, 12vw, 8rem)',
                lineHeight: '1',
                letterSpacing: '-0.02em',
                fontWeight: '700'
              }}
            >
              <span className="text-[#FDB813]">UWKSA</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400 mb-12 whitespace-pre-line"
            >
              {text.mainTitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA Section - Join & Get Discount */}
      <section className="py-20 bg-slate-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-600">Image</span>
                </div>
              </motion.div>

              {/* CTA Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-slate-900 dark:text-slate-100">
                  {text.joinCTA}<br />
                  <span className="text-[#FDB813]">{text.memberDiscount}</span>
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line">
                  {text.joinDescription}
                </p>

                <a
                  href="#/membership"
                  className="inline-block px-8 py-3 bg-[#FDB813] text-slate-900 rounded-full hover:bg-[#FDB813]/90 transition-colors"
                >
                  {text.joinButton}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection language={language} />

      {/* Events Section */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 dark:text-slate-100 mb-8">{text.eventsTitle}</h2>
            
            <div className="space-y-3">
              {text.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#FDB813]/50 transition-colors"
                >
                  <h3 className="text-slate-900 dark:text-slate-100 mb-2">{event.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#111111]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 dark:text-slate-100 mb-8">{text.newsTitle}</h2>
            
            <div className="space-y-3">
              {text.news.map((newsItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                >
                  <h3 className="text-slate-900 dark:text-slate-100 mb-2">{newsItem.title}</h3>
                  <a href="#/contact" className="text-slate-500 dark:text-slate-500 hover:text-[#FDB813] transition-colors">
                    {newsItem.link}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
