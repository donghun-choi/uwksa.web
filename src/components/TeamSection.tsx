import { motion } from 'motion/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { executives, teams, memberImages, getEnglishName, type Team } from '../data/teamData';

// Import all exec photos
const execPhotos = import.meta.glob('../assets/exec_pfps/*.{jpeg,jpg,png}', { eager: true, import: 'default' }) as Record<string, string>;

function getMemberImage(name: string): string | undefined {
  const fileName = memberImages[name];
  if (!fileName) return undefined;
  const key = `../assets/exec_pfps/${fileName}`;
  return execPhotos[key];
}

interface TeamSectionProps {
  language: 'en' | 'ko';
}

function MemberPhoto({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) {
  const image = getMemberImage(name);
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`object-cover ${className || ''}`}
        style={style}
      />
    );
  }
  return (
    <div
      className={`bg-slate-200 dark:bg-slate-700 ${className || ''}`}
      style={style}
    />
  );
}

export function TeamSection({ language }: TeamSectionProps) {
  const text = language === 'ko'
    ? {
        sectionTitle: '임원 소개',
        sectionSubtitle: 'UWKSA를 이끄는 임원진을 소개합니다',
        teamLead: '팀 리드',
        lead: '팀 리드',
        member: '팀원',
        memberCount: (n: number) => `${n}명`,
        seeMore: '전체 팀 보기 →',
      }
    : {
        sectionTitle: 'Our Team',
        sectionSubtitle: 'Meet the executives leading UWKSA',
        teamLead: 'Team Lead',
        lead: 'Team Lead',
        member: 'Member',
        memberCount: (n: number) => `${n} members`,
        seeMore: 'See all members →',
      };

  const getLead = (team: Team) => team.members.find((m) => m.role === 'Lead');

  const isKorean = (name: string) => /[\uAC00-\uD7AF]/.test(name);

  const sortMembers = (members: Team['members']) => {
    const lead = members.filter((m) => m.role === 'Lead');
    const rest = members.filter((m) => m.role !== 'Lead');
    const korean = rest.filter((m) => isKorean(m.name));
    const english = rest.filter((m) => !isKorean(m.name));
    korean.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    english.sort((a, b) => a.name.localeCompare(b.name, 'en'));
    return [...lead, ...korean, ...english];
  };

  return (
    <section className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {text.sectionTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">{text.sectionSubtitle}</p>
          </motion.div>

          {/* 3x2 Grid: Row1: 이벤트, 테크, PR / Row2: 마케팅, 부회장, 회장 */}
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {/* Row 1: Event, Tech, PR */}
            {[teams[0], teams[2], teams[3]].map((team, index) => {
              const lead = getLead(team);
              return (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#FDB813]/50 transition-colors text-left w-full cursor-pointer group">
                      <MemberPhoto
                        name={lead?.name || ''}
                        className="w-full rounded-lg mb-4"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">
                        {lead?.name} - {getEnglishName(lead?.name || '')}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                        {team.name[language]}
                      </p>
                      <p className="text-[#FDB813] text-sm font-medium group-hover:underline">
                        {text.seeMore}
                      </p>
                    </DialogTrigger>

                    <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-slate-900 dark:text-slate-100">
                          {team.name[language]}
                        </DialogTitle>
                        <DialogDescription className="text-slate-500 dark:text-slate-400">
                          {text.memberCount(team.members.length)}
                        </DialogDescription>
                      </DialogHeader>
                      <div
                        className="grid gap-4"
                        style={{ gridTemplateColumns: "repeat(3, 1fr)", maxHeight: "70vh", overflowY: "auto" }}
                      >
                        {sortMembers(team.members).map((member) => (
                          <div
                            key={member.name}
                            className="flex flex-col items-center text-center"
                          >
                            <MemberPhoto
                              name={member.name}
                              className="w-full rounded-lg mb-2"
                              style={{ aspectRatio: "1/1", maxWidth: "300px" }}
                            />
                            <p className="text-slate-900 dark:text-slate-100 font-medium text-sm">
                              {member.name} - {getEnglishName(member.name)}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">
                              {member.role === 'Lead' ? text.lead : text.member}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              );
            })}

            {/* Row 2: Marketing, Vice President, President */}
            {(() => {
              const team = teams[1];
              const lead = getLead(team);
              return (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Dialog>
                    <DialogTrigger className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#FDB813]/50 transition-colors text-left w-full cursor-pointer group">
                      <MemberPhoto
                        name={lead?.name || ''}
                        className="w-full rounded-lg mb-4"
                        style={{ aspectRatio: "1/1" }}
                      />
                      <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">
                        {lead?.name} - {getEnglishName(lead?.name || '')}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                        {team.name[language]}
                      </p>
                      <p className="text-[#FDB813] text-sm font-medium group-hover:underline">
                        {text.seeMore}
                      </p>
                    </DialogTrigger>

                    <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-slate-900 dark:text-slate-100">
                          {team.name[language]}
                        </DialogTitle>
                        <DialogDescription className="text-slate-500 dark:text-slate-400">
                          {text.memberCount(team.members.length)}
                        </DialogDescription>
                      </DialogHeader>
                      <div
                        className="grid gap-4"
                        style={{ gridTemplateColumns: "repeat(3, 1fr)", maxHeight: "70vh", overflowY: "auto" }}
                      >
                        {sortMembers(team.members).map((member) => (
                          <div
                            key={member.name}
                            className="flex flex-col items-center text-center"
                          >
                            <MemberPhoto
                              name={member.name}
                              className="w-full rounded-lg mb-2"
                              style={{ aspectRatio: "1/1", maxWidth: "300px" }}
                            />
                            <p className="text-slate-900 dark:text-slate-100 font-medium text-sm">
                              {member.name} - {getEnglishName(member.name)}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs">
                              {member.role === 'Lead' ? text.lead : text.member}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              );
            })()}

            {[executives[1], executives[0]].map((exec, index) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-left">
                  <MemberPhoto
                    name={exec.name}
                    className="w-full rounded-lg mb-4"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">
                    {exec.name} - {getEnglishName(exec.name)}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {exec.title[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
