import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventsPageProps {
  language: 'en' | 'ko';
}

export function EventsPage({ language }: EventsPageProps) {
  const content = {
    ko: {
      title: '주요 이벤트',
      subtitle: '예비 일정 — 심재 및마지노선으로 금일 변경이십시오.',
      upcoming: '다가오는 이벤트',
      events: [
        {
          date: '2/13',
          title: '발렌타인 데이',
          location: '미정',
          time: '미정',
          description: '발렌타인 데이 이벤트',
          color: 'from-pink-500/20 to-pink-600/10',
        },
        {
          date: '3/1',
          title: '삼일절 기념',
          location: 'CMH 67th floor',
          time: '미정',
          description: '시원이형 태극기 들고 삼일절 기념',
          color: 'from-blue-500/20 to-blue-600/10',
        },
        {
          date: 'TBD',
          title: 'W26 EOT',
          location: '미정',
          time: '미정',
          description: '학기말 파티 및 네트워킹 이벤트',
          color: 'from-purple-500/20 to-purple-600/10',
        },
      ],
    },
    en: {
      title: 'Upcoming Events',
      subtitle: 'Tentative schedule — subject to change based on circumstances.',
      upcoming: 'Upcoming Events',
      events: [
        {
          date: '2/13',
          title: 'Valentine\'s Day',
          location: 'TBD',
          time: 'TBD',
          description: 'Valentine\'s Day event',
          color: 'from-pink-500/20 to-pink-600/10',
        },
        {
          date: '3/1',
          title: 'March 1st Independence Day',
          location: 'CMH 67th floor',
          time: 'TBD',
          description: 'Celebrating Korean Independence Day',
          color: 'from-blue-500/20 to-blue-600/10',
        },
        {
          date: 'TBD',
          title: 'W26 EOT',
          location: 'TBD',
          time: 'TBD',
          description: 'End of term party and networking event',
          color: 'from-purple-500/20 to-purple-600/10',
        },
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
            className="text-center mb-16"
          >
            <h1 className="text-yellow-600 dark:text-yellow-400 mb-4">{text.title}</h1>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">{text.subtitle}</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 dark:text-slate-100 mb-8">{text.upcoming}</h2>
            
            <div className="space-y-6">
              {text.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="relative p-8 flex flex-col md:flex-row gap-6">
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-yellow-400/10 border-2 border-yellow-400/20 rounded-xl flex flex-col items-center justify-center">
                        <Calendar className="text-yellow-400 mb-1" size={24} />
                        <span className="text-yellow-400">{event.date}</span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h3 className="text-slate-900 dark:text-slate-100 mb-3">{event.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <MapPin size={18} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Clock size={18} />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
