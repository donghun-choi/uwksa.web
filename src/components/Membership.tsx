import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import mascotWave from 'figma:asset/2f7119d4264719c8469dedaf506e913cc3affe24.png';

interface MembershipProps {
  language: 'en' | 'ko';
}

export function Membership({ language }: MembershipProps) {
  const content = {
    ko: {
      badge: '멤버십 혜택',
      title: '멤버십 안내',
      description: 'UWKSA 멤버십에 가입하시면 다양한 혜택과 함께 활발한 한인 커뮤니티의 일원이 되실 수 있습니다.',
      cta: '멤버십 가입하기',
      benefits: [
        '제휴 식당 및 업체에서 10% 할인',
        'UWKSA 주최 이벤트 우선 참가',
        '한인 커뮤니티 네트워킹 기회',
        '멤버 전용 소셜 이벤트 참가',
        '졸업생 네트워크 접근',
        '한국 문화 체험 프로그램',
      ],
    },
    en: {
      badge: 'Membership Benefits',
      title: 'Membership Information',
      description: 'Join UWKSA membership to become part of an active Korean community with various benefits.',
      cta: 'Join Membership',
      benefits: [
        '10% discount at affiliated restaurants and businesses',
        'Priority registration for UWKSA events',
        'Korean community networking opportunities',
        'Access to member-exclusive social events',
        'Alumni network access',
        'Korean culture experience programs',
      ],
    },
  };

  const text = content[language];

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <Star className="text-yellow-400" size={16} />
              <span className="text-yellow-400">{text.badge}</span>
            </div>

            <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.title}</h2>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              {text.description}
            </p>

            <div className="space-y-3 mb-8">
              {text.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-yellow-400" size={16} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              {text.cta}
            </motion.a>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 rounded-3xl p-12 border border-yellow-400/20">
              <motion.img
                src={mascotWave}
                alt="UWKSA Mascot"
                className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
