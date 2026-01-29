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
          date: '10/18',
          title: '조회',
          location: 'Columbia Fields',
          time: '12:00~17:00',
          description: '캠퍼스 필드에서 즐기는 야외 활동',
          color: 'from-blue-500/20 to-blue-600/10',
        },
        {
          date: '11/29',
          title: 'EOT Party',
          location: 'SLC Great Hall',
          time: '18:00~22:00',
          description: '학기말 파티 및 네트워킹 이벤트',
          color: 'from-purple-500/20 to-purple-600/10',
        },
        {
          date: '03/05',
          title: '신입생 환영',
          location: 'MC 2066',
          time: '17:00~19:30',
          description: '전부학생/신규 Q&A',
          color: 'from-pink-500/20 to-pink-600/10',
        },
      ],
    },
    en: {
      title: 'Upcoming Events',
      subtitle: 'Tentative schedule — subject to change based on circumstances.',
      upcoming: 'Upcoming Events',
      events: [
        {
          date: '10/18',
          title: 'Assembly',
          location: 'Columbia Fields',
          time: '12:00~17:00',
          description: 'Outdoor activities at campus fields',
          color: 'from-blue-500/20 to-blue-600/10',
        },
        {
          date: '11/29',
          title: 'EOT Party',
          location: 'SLC Great Hall',
          time: '18:00~22:00',
          description: 'End of term party and networking event',
          color: 'from-purple-500/20 to-purple-600/10',
        },
        {
          date: '03/05',
          title: 'Welcome New Members',
          location: 'MC 2066',
          time: '17:00~19:30',
          description: 'New student orientation and Q&A',
          color: 'from-pink-500/20 to-pink-600/10',
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
