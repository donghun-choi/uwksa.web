import type { LucideIcon } from 'lucide-react';

// Language types
export type Language = 'en' | 'ko';

export interface LanguageProps {
  language: Language;
}

// Localized content helper
export interface LocalizedContent<T = string> {
  ko: T;
  en: T;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Social links
export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  handle?: string;
}

// Events
export interface EventData {
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
  color?: string;
}

// Team members
export interface TeamMember {
  name: string;
  role: 'Lead' | 'Member';
}

export interface Team {
  id: string;
  name: LocalizedContent;
  members: TeamMember[];
}

export interface Executive {
  name: string;
  title: LocalizedContent;
}

// Partner restaurants (Membership page)
export interface PartnerRestaurant {
  name: string;
  discount: string;
  address: string;
  mapUrl: string;
}
