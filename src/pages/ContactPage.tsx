import { motion } from 'motion/react';
import { Mail, Instagram, Facebook, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  language: 'en' | 'ko';
}

export function ContactPage({ language }: ContactPageProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const content = {
    ko: {
      title: '연락처',
      subtitle: 'UWKSA와 연락하고 뉴스레터를 구독하세요',
      contactTitle: '문의하기',
      contactDesc: '질문이나 제안사항이 있으시면 언제든지 연락주세요.',
      emailLabel: '이메일',
      generalEmail: '일반 문의',
      eventsEmail: '이벤트 문의',
      membershipEmail: '멤버십 문의',
      socialTitle: '소셜 미디어',
      socialDesc: 'UWKSA를 팔로우하고 최신 소식을 받아보세요',
      newsletterTitle: '뉴스레터 구독',
      newsletterDesc: 'UWKSA의 최신 소식과 이벤트 정보를 이메일로 받아보세요.',
      emailPlaceholder: '이메일 주소를 입력하세요',
      subscribeButton: '구독하기',
      subscribedMessage: '구독해 주셔서 감사합니다!',
    },
    en: {
      title: 'Contact',
      subtitle: 'Get in touch with UWKSA and subscribe to our newsletter',
      contactTitle: 'Contact Us',
      contactDesc: 'Have questions or suggestions? Feel free to reach out to us.',
      emailLabel: 'Email',
      generalEmail: 'General Inquiries',
      eventsEmail: 'Events',
      membershipEmail: 'Membership',
      socialTitle: 'Social Media',
      socialDesc: 'Follow UWKSA for the latest updates',
      newsletterTitle: 'Newsletter Subscription',
      newsletterDesc: 'Subscribe to receive the latest news and event information from UWKSA.',
      emailPlaceholder: 'Enter your email address',
      subscribeButton: 'Subscribe',
      subscribedMessage: 'Thank you for subscribing!',
    },
  };

  const text = content[language];

  const contactEmails = [
    { label: text.generalEmail, email: 'contact@uwksa.ca' },
    { label: text.eventsEmail, email: 'events@uwksa.ca' },
    { label: text.membershipEmail, email: 'membership@uwksa.ca' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/uwksa', label: 'Instagram', handle: '@uwksa' },
    { icon: Facebook, href: '#', label: 'Facebook', handle: 'UWKSA' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

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

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.contactTitle}</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-8">{text.contactDesc}</p>

              <div className="space-y-4 mb-12">
                {contactEmails.map((contact, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                        <Mail className="text-yellow-400" size={20} />
                      </div>
                      <div>
                        <p className="text-slate-600 dark:text-slate-400">{contact.label}</p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-slate-900 dark:text-slate-100 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.socialTitle}</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">{text.socialDesc}</p>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-yellow-400/50 transition-all"
                  >
                    <social.icon className="text-yellow-400" size={24} />
                    <div>
                      <p className="text-slate-600 dark:text-slate-400">{social.label}</p>
                      <p className="text-slate-900 dark:text-slate-100">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="p-8 bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 border border-yellow-400/20 rounded-2xl">
                <h2 className="text-slate-900 dark:text-slate-100 mb-4">{text.newsletterTitle}</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-8">{text.newsletterDesc}</p>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 mb-2">
                      {text.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={text.emailPlaceholder}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={subscribed}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-yellow-400 text-slate-900 rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {subscribed ? (
                      text.subscribedMessage
                    ) : (
                      <>
                        <Send size={20} />
                        {text.subscribeButton}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
