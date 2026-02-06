export interface TeamMember {
  name: string;
  role: 'Lead' | 'Member';
}

export interface Team {
  id: string;
  name: { ko: string; en: string };
  members: TeamMember[];
}

export interface Executive {
  name: string;
  title: { ko: string; en: string };
}

// Member name to image file mapping
export const memberImages: Record<string, string> = {
  // Executives
  '정예운': 'exec_yewoon.png',
  '박전진': 'exec_justin.jpeg',
  // Event Team
  '서동완': 'event_dongwan.jpeg',
  '김지율': 'event_jack.jpeg',
  '임승권': 'event_seungkwon.jpeg',
  '최윤서': 'event_viviana.jpeg',
  '김태윤': 'event_taeyun.jpeg',
  '장호준': 'event_joey.jpeg',
  '정인하': 'event_roy.jpeg',
  '유주연': 'event_jooyeon.jpeg',
  '이현준': 'event_hyunjun.jpeg',
  // Marketing Team
  '추승연': 'marketing_seungyeon.jpg',
  '안소현': 'marketing_sohyun.png',
  '배서윤': 'marketing_lydia.jpeg',
  '하윤진': 'marketing_yoonjin.png',
  '김지헌': 'marketing_jihun.jpeg',
  '김미가': 'marketing_miga.jpeg',
  '최정미': 'marketing_rayna.jpeg',
  // Tech Team
  '이건희': 'tech_kunhee.jpg',
  '최동훈': 'tech_donghun.jpeg',
  '고건': 'tech_james.jpeg',
  '전재영': 'tech_kevin.jpeg',
  // PR Team
  '박시원': 'pr_siwon.jpeg',
  '김관식': 'pr_kwansik.jpeg',
  '정우진': 'pr_nick.jpg',
  '한수아': 'pr_avery.jpeg',
};

// Korean name to English name mapping
export const memberEnglishNames: Record<string, string> = {
  '박전진': 'Justin Park',
  '정예운': 'Yewoon Jung',
  '장호준': 'Joey Chang',
  '안소현': 'Sohyun An',
  '유주연': 'Jooyeon Yoo',
  '이현준': 'Jun Lee',
  '김나영': 'Chloe Kim',
  '김지율': 'Jack Kim',
  '김태윤': 'Taeyun Kim',
  '정인하': 'Roy Chong',
  '최윤서': 'Viviana Choi',
  '서동완': 'Dongwan Seoh',
  '임승권': 'Seungkwon Lim',
  '이건희': 'Kunhee Lee',
  '권혁준': 'Jun Kwon',
  '박시원': 'Siwon Park',
  '정우진': 'Nick Jeong',
  '최동훈': 'Donghun Choi',
  '배서윤': 'Lydia Bae',
  '고건': 'James Ko',
  '김미가': 'Miga Kim',
  '신동호': 'Caleb Shin',
  '이종빈': 'Jongbin Lee',
  '하윤진': 'Yoonjin Ha',
  '김지헌': 'Jihun Kim',
  '전재영': 'Kevin Jeon',
  '김관식': 'Kwansik Kim',
  '한수아': 'Avery Han',
  '추승연': 'Seungyeon Choo',
  '최정미': 'Rayna Cui',
};

export function getEnglishName(name: string): string {
  return memberEnglishNames[name] || name;
}

export const executives: Executive[] = [
  { name: '정예운', title: { ko: '회장', en: 'President' } },
  { name: '박전진', title: { ko: '부회장', en: 'Vice President' } },
];

export const teams: Team[] = [
  {
    id: 'event',
    name: { ko: '이벤트 팀', en: 'Event Team' },
    members: [
      { name: '박전진', role: 'Lead' },
      { name: '서동완', role: 'Member' },
      { name: '김지율', role: 'Member' },
      { name: '임승권', role: 'Member' },
      { name: '김태윤', role: 'Member' },
      { name: '이현준', role: 'Member' },
      { name: '유주연', role: 'Member' },
      { name: '최윤서', role: 'Member' },
      { name: '정인하', role: 'Member' },
      { name: '권혁준', role: 'Member' },
      { name: '장호준', role: 'Member' },
      { name: '김나영', role: 'Member' },
    ],
  },
  {
    id: 'marketing',
    name: { ko: '마케팅 팀', en: 'Marketing Team' },
    members: [
      { name: '추승연', role: 'Lead' },
      { name: '김미가', role: 'Member' },
      { name: '배서윤', role: 'Member' },
      { name: '하윤진', role: 'Member' },
      { name: '안소현', role: 'Member' },
      { name: '신동호', role: 'Member' },
      { name: '김지헌', role: 'Member' },
      { name: 'Hunter Kim', role: 'Member' },
      { name: '최정미', role: 'Member' },
    ],
  },
  {
    id: 'tech',
    name: { ko: '기술 팀', en: 'Tech Team' },
    members: [
      { name: '이건희', role: 'Lead' },
      { name: '고건', role: 'Member' },
      { name: '최동훈', role: 'Member' },
      { name: '이종빈', role: 'Member' },
      { name: '전재영', role: 'Member' },
    ],
  },
  {
    id: 'pr',
    name: { ko: 'PR 팀', en: 'PR Team' },
    members: [
      { name: '박시원', role: 'Lead' },
      { name: '김관식', role: 'Member' },
      { name: '정우진', role: 'Member' },
      { name: '한수아', role: 'Member' },
    ],
  },
];

export function getInitials(name: string): string {
  if (/[\uAC00-\uD7AF]/.test(name)) {
    return name.slice(-2);
  }
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
