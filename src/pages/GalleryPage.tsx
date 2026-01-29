import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface GalleryPageProps {
  language: 'en' | 'ko';
}

export function GalleryPage({ language }: GalleryPageProps) {
  const content = {
    ko: {
      title: '갤러리',
      subtitle: 'UWKSA의 추억을 함께 나눕니다',
      recent: '최근 활동',
    },
    en: {
      title: 'Gallery',
      subtitle: 'Sharing memories from UWKSA',
      recent: 'Recent Activities',
    },
  };

  const text = content[language];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZXZlbnQlMjBwYXJ0eXxlbnwxfHx8fDE3NjI5NjYwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '학기말 파티' : 'End of Term Party',
    },
    {
      url: 'https://images.unsplash.com/photo-1708388065014-abafa002040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmb29kJTIwY3VsdHVyZXxlbnwxfHx8fDE3NjMwMDU2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '한국 문화 체험' : 'Korean Culture Experience',
    },
    {
      url: 'https://images.unsplash.com/photo-1684560208024-929ab9295d4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwZnJpZW5kc3xlbnwxfHx8fDE3NjMwMDU3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '캠퍼스 모임' : 'Campus Gathering',
    },
    {
      url: 'https://images.unsplash.com/photo-1758384077017-7310b0e30a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjdWx0dXJhbCUyMGV2ZW50fGVufDF8fHx8MTc2Mjk1NDg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '문화 행사' : 'Cultural Event',
    },
    {
      url: 'https://images.unsplash.com/photo-1498842521358-9a958db11fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwbWVtb3JpZXMlMjBwaG90b3N8ZW58MXx8fHwxNzYzMDA1NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '추억의 순간' : 'Memorable Moments',
    },
    {
      url: 'https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjI5OTk5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: language === 'ko' ? '임원진 회의' : 'Executive Meeting',
    },
  ];

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

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-slate-900 dark:text-slate-100 mb-8">{text.recent}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 hover:border-yellow-400/50 transition-all cursor-pointer"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-slate-900 mb-4">
            {language === 'ko' ? '더 많은 사진을 보고 싶으신가요?' : 'Want to see more photos?'}
          </h2>
          <p className="text-slate-700 mb-6">
            {language === 'ko' 
              ? 'Instagram에서 UWKSA를 팔로우하고 최신 소식과 사진을 확인하세요!'
              : 'Follow UWKSA on Instagram for the latest updates and photos!'}
          </p>
          <a
            href="https://www.instagram.com/uwksa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            @uwksa
          </a>
        </div>
      </section>
    </div>
  );
}
