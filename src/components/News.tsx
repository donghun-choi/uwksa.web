import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';

interface NewsProps {
  language: 'en' | 'ko';
}

export function News({ language }: NewsProps) {
  const content = {
    ko: {
      title: '소식',
      description: '공지 및 업데이트',
      news: [
        {
          title: 'UWKSA 2025 임원진 모집 공고',
          date: '지원 마감 12/01 (토)',
          description: '새로운 임원진을 모집합니다. 관심있는 학생들의 많은 지원 바랍니다.',
        },
        {
          title: '가을학기 Mentoring Night 예고',
          date: '1월 중 2일 예정',
          description: '선후배 간의 멘토링 및 네트워킹 이벤트를 준비 중입니다.',
        },
        {
          title: '코리너스 멘토링',
          date: '신규 세션 2주 후',
          description: '한인 학생들을 위한 학업 및 진로 멘토링 프로그램',
        },
      ],
    },
    en: {
      title: 'News',
      description: 'Announcements and Updates',
      news: [
        {
          title: 'UWKSA 2025 Executive Board Recruitment',
          date: 'Application deadline: 12/01 (Sat)',
          description: 'We are recruiting new executive board members. We welcome applications from interested students.',
        },
        {
          title: 'Fall Term Mentoring Night Announcement',
          date: 'Scheduled for 2 days in January',
          description: 'We are preparing a mentoring and networking event for seniors and juniors.',
        },
        {
          title: 'Koreannus Mentoring',
          date: 'New session in 2 weeks',
          description: 'Academic and career mentoring program for Korean students',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-yellow-600 dark:text-yellow-400 mb-4">{text.title}</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            {text.description}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {text.news.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-yellow-400" size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-slate-900 dark:text-slate-100 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {news.title}
                    </h3>
                    <ArrowRight className="text-slate-400 dark:text-slate-600 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors flex-shrink-0" size={20} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">{news.description}</p>
                  <span className="text-slate-500 dark:text-slate-500">{news.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
