import { motion } from 'motion/react';
import { Users, Calendar, Heart, Sparkles } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ko';
}

export function About({ language }: AboutProps) {
  const content = {
    ko: {
      title: 'UWKSA 소개',
      description: '워터루 한인학생회는 한국 문화를 공유하고, 학생들 간의 네트워킹을 촉진하며, 다양한 이벤트와 활동을 통해 커뮤니티를 형성하는 학생 단체입니다.',
      features: [
        {
          icon: Users,
          title: '커뮤니티',
          description: '워터루 한인 학생들과의 네트워킹',
        },
        {
          icon: Calendar,
          title: '이벤트',
          description: '다양한 문화 행사 및 활동',
        },
        {
          icon: Heart,
          title: '문화 공유',
          description: '한국 문화를 함께 나누고 즐기기',
        },
        {
          icon: Sparkles,
          title: '성장',
          description: '개인과 커뮤니티의 발전',
        },
      ],
    },
    en: {
      title: 'About UWKSA',
      description: 'The University of Waterloo Korean Student Association is a student organization that shares Korean culture, promotes networking among students, and builds community through various events and activities.',
      features: [
        {
          icon: Users,
          title: 'Community',
          description: 'Networking with Korean students at Waterloo',
        },
        {
          icon: Calendar,
          title: 'Events',
          description: 'Diverse cultural events and activities',
        },
        {
          icon: Heart,
          title: 'Culture Sharing',
          description: 'Share and enjoy Korean culture together',
        },
        {
          icon: Sparkles,
          title: 'Growth',
          description: 'Development of individuals and community',
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {text.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-yellow-400/50 transition-all group"
            >
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                <feature.icon className="text-yellow-400" size={24} />
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
