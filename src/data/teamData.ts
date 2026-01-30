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
      { name: 'Rayna Cui', role: 'Member' },
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
