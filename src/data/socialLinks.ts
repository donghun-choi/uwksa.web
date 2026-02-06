import { Instagram, Mail, Music, MessageCircle } from 'lucide-react';
import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/uwaterloo_ksa',
    label: 'Instagram',
    handle: '@uwaterloo_ksa',
  },
  {
    icon: Music,
    href: 'https://www.tiktok.com/@uwaterloo_ksa',
    label: 'TikTok',
    handle: '@uwaterloo_ksa',
  },
  {
    icon: MessageCircle,
    href: 'https://discord.com/invite/9VZ6AGYY94',
    label: 'Discord',
    handle: 'UWKSA',
  },
  {
    icon: Mail,
    href: 'mailto:uofwaterlooksa@gmail.com',
    label: 'Email',
    handle: 'uofwaterlooksa@gmail.com',
  },
];

export const CONTACT_EMAIL = 'uofwaterlooksa@gmail.com';
