import { motion } from 'motion/react';
import { Users, Heart, Sparkles, Calendar, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  language: 'en' | 'ko';
}

export function AboutPage({ language }: AboutPageProps) {
  const content = {
    ko: {
      title: '임원 소개',
      subtitle: '2024-2025년 임원진 (제61, 62대 — 심재 임대연 교체)',
      aboutTitle: 'UWKSA 소개',
      aboutDesc: '워터루 한인학생회는 한국 문화를 공유하고, 학생들 간의 네트워킹을 촉진하며, 다양한 이벤트와 활동을 통해 커뮤니티를 형성하는 학생 단체입니다.',
      executives: [
        {
          position: '회장 · 김지훈',
          term: '1450+1050',
          contact: 'president@uwksa.ca',
        },
        {
          position: '부회장 · 이서현',
          term: '1450+1050',
          contact: 'vp@uwksa.ca',
        },
        {
          position: '이벤트 디렉터 · 박민수',
          term: '1450+1050',
          contact: 'events@uwksa.ca',
        },
        {
          position: '재무 · 정예원',
          term: '1450+1050',
          contact: 'finance@uwksa.ca',
        },
        {
          position: '미디어 · 최수연',
          term: '1450+1050',
          contact: 'media@uwksa.ca',
        },
        {
          position: '총무 · 한지우',
          term: '1450+1050',
          contact: 'admin@uwksa.ca',
        },
      ],
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
      title: 'Executive Introduction',
      subtitle: '2024-2025 Executive Board (61st, 62nd Term — Representative Change)',
      aboutTitle: 'About UWKSA',
      aboutDesc: 'The University of Waterloo Korean Student Association is a student organization that shares Korean culture, promotes networking among students, and builds community through various events and activities.',
      executives: [
        {
          position: 'President · Jihoon Kim',
          term: '1450+1050',
          contact: 'president@uwksa.ca',
        },
        {
          position: 'Vice President · Seohyun Lee',
          term: '1450+1050',
          contact: 'vp@uwksa.ca',
        },
        {
          position: 'Event Director · Minsu Park',
          term: '1450+1050',
          contact: 'events@uwksa.ca',
        },
        {
          position: 'Finance · Yewon Jung',
          term: '1450+1050',
          contact: 'finance@uwksa.ca',
        },
        {
          position: 'Media · Sooyeon Choi',
          term: '1450+1050',
          contact: 'media@uwksa.ca',
        },
        {
          position: 'General Affairs · Jiwoo Han',
          term: '1450+1050',
          contact: 'admin@uwksa.ca',
        },
      ],
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

          {/* Executives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {text.executives.map((exec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-yellow-400/50 transition-all"
              >
                <div className="mb-4">
                  <div className="w-full aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-slate-400 dark:text-slate-600">{exec.term}</span>
                  </div>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 mb-2">{exec.position}</h3>
                <a 
                  href={`mailto:${exec.contact}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {exec.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About UWKSA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-yellow-600 dark:text-yellow-400 mb-4">{text.aboutTitle}</h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">{text.aboutDesc}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {text.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="p-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl">
            <h2 className="text-yellow-600 dark:text-yellow-400 mb-6 text-center">
              {language === 'ko' ? '우리의 미션' : 'Our Mission'}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-center mb-6">
              {language === 'ko' 
                ? 'UWKSA는 워터루 대학교 한인 학생들의 커뮤니티를 대표하며, 문화 교류와 학업 지원, 그리고 사회적 네트워킹을 통해 학생들의 대학 생활을 풍요롭게 만듭니다.'
                : 'UWKSA represents the Korean student community at the University of Waterloo, enriching student life through cultural exchange, academic support, and social networking.'}
            </p>
            <div className="flex justify-center">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjI5OTk5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="UWKSA Team"
                className="w-full max-w-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
