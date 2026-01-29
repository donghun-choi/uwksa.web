import { motion } from 'motion/react';
import mascotHappy from 'figma:asset/cfa341d0aa8e805d0c33ac9c4653ce4c95cd62a5.png';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ko';
}

export function Hero({ language }: HeroProps) {
  const content = {
    ko: {
      subtitle: 'University of Waterloo Korean Student Association',
      title: ['환영합니다!', 'UWKSA에 오신 것을 환영합니다'],
      description: '워터루 한인학생회는 한국 문화를 공유하고, 학생들 간의 네트워킹을 촉진하며, 다양한 이벤트와 활동을 통해 커뮤니티를 형성하는 학생 단체입니다.',
      ctaJoin: '멤버십 가입하기',
      ctaLearn: '더 알아보기',
    },
    en: {
      subtitle: 'University of Waterloo Korean Student Association',
      title: ['Welcome!', 'Welcome to UWKSA'],
      description: 'The University of Waterloo Korean Student Association is a student organization that shares Korean culture, promotes networking among students, and builds community through various events and activities.',
      ctaJoin: 'Join Membership',
      ctaLearn: 'Learn More',
    },
  };

  const text = content[language];
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full"
            >
              <span className="text-yellow-400">{text.subtitle}</span>
            </motion.div>
            
            <h1 className="text-slate-900 dark:text-slate-100 mb-6">
              {text.title[0]}<br />
              {text.title[1]}
            </h1>
            
            <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-xl">
              {text.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#membership"
                className="px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                {text.ctaJoin}
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                {text.ctaLearn}
              </a>
            </div>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl scale-150" />
              <img
                src={mascotHappy}
                alt="UWKSA Tiger Mascot"
                className="relative w-full max-w-md h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-yellow-400" size={32} />
      </motion.div>
    </section>
  );
}
