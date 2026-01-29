import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventsProps {
  language: 'en' | 'ko';
}

export function Events({ language }: EventsProps) {
  const content = {
    ko: {
      title: '주요 이벤트',
      description: '다가오는 알찬 이벤트에 함께 하세요',
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
          description: '새로운 멤버들과의 만남',
          color: 'from-pink-500/20 to-pink-600/10',
        },
      ],
    },
    en: {
      title: 'Upcoming Events',
      description: 'Join us for exciting upcoming events',
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
          description: 'Meet new members and socialize',
          color: 'from-pink-500/20 to-pink-600/10',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="events" className="py-20 bg-slate-50 dark:bg-slate-900">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative p-6">
                {/* Date badge */}
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
                  <Calendar className="text-yellow-400" size={16} />
                  <span className="text-yellow-400">{event.date}</span>
                </div>

                <h3 className="text-slate-900 dark:text-slate-100 mb-3">{event.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
