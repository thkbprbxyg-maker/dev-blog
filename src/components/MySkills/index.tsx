import React, { useRef, useState, useEffect } from 'react';
import styles from './styles.module.css';

const skills = [
  {
    name: 'Linux',
    icon: '🐧',
    description: 'Set up and administered Linux servers, configured SSH hardening, firewall rules and managed services on Ubuntu VPS.',
  },
  {
    name: 'Docker',
    icon: '🐳',
    description: 'Containerized full-stack applications using custom Dockerfiles and docker-compose, including WordPress, Conduit and a Minecraft server.',
  },
  {
    name: 'Git',
    icon: '🔀',
    description: 'Used Git for version control across all projects, working with feature branches, pull requests and merge workflows on GitHub.',
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Built security tools for XSS scanning, dictionary attacks and mask attacks. Also worked with Python REST APIs and backend services.',
  },
  {
    name: 'Bash Scripting',
    icon: '💻',
    description: 'Wrote shell scripts for server automation, deployment pipelines and security tasks in Kali Linux environments.',
  },
  {
    name: 'YAML',
    icon: '📄',
    description: 'Wrote GitHub Actions workflows for CI/CD pipelines and docker-compose files for multi-container application setups.',
  },
  {
    name: 'GitHub Actions',
    icon: '⚙️',
    description: 'Built CI/CD pipelines for automated testing, building and deploying Docusaurus to GitHub Pages on every push.',
  },
  {
    name: 'IT Security',
    icon: '🔐',
    description: 'Performed XSS attacks, hash cracking with Hashcat, KeePass CVE exploitation, ZIP/Office document cracking and SQL injection on OWASP Juice Shop.',
  },
  {
    name: 'Kali Linux',
    icon: '🛡️',
    description: 'Used Kali Linux as primary pentesting environment for security challenges including Hashcat, Nmap, and custom Python security tools.',
  },
  {
    name: 'Hashcat',
    icon: '🔑',
    description: 'Cracked MD5, SHA-1, SHA-256 and KeePass hashes using dictionary, brute-force and mask attacks with rockyou.txt wordlist.',
  },
  {
    name: 'Networking',
    icon: '🌐',
    description: 'Configured Nginx as reverse proxy, set up firewall rules, managed DNS and worked with network scanning tools like Nmap.',
  },
  {
    name: 'DevSecOps',
    icon: '🚀',
    description: 'Completing a TÜV-certified DevSecOps training program combining development, security and operations practices.',
  },
];

// Group skills into pages of 3 for the mobile swipe-slider
const PAGE_SIZE = 3;
const pages: (typeof skills)[] = [];
for (let i = 0; i < skills.length; i += PAGE_SIZE) {
  pages.push(skills.slice(i, i + PAGE_SIZE));
}

const MySkills: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const pageWidth = track.clientWidth;
      const index = Math.round(track.scrollLeft / pageWidth);
      setActivePage(index);
    };
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPage = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
  };

  return (
    <section id="my-skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>

        {/* Desktop: full flip-card grid */}
        <div className={`${styles.grid} ${styles.desktopOnly}`}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.flipCard}>
              <div className={styles.flipInner}>
                <div className={styles.flipFront}>
                  <span className={styles.icon}>{skill.icon}</span>
                  <span className={styles.name}>{skill.name}</span>
                </div>
                <div className={styles.flipBack}>
                  <p className={styles.backTitle}>How I used this skill</p>
                  <p className={styles.backDesc}>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: swipeable slider, 3 skills per page */}
        <div className={styles.mobileOnly}>
          <div className={styles.track} ref={trackRef}>
            {pages.map((page, pageIndex) => (
              <div className={styles.page} key={pageIndex}>
                {page.map((skill) => (
                  <div key={skill.name} className={styles.mobileSkill}>
                    <span className={styles.mobileIcon}>{skill.icon}</span>
                    <div>
                      <p className={styles.mobileName}>{skill.name}</p>
                      <p className={styles.mobileDesc}>{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.dots}>
            {pages.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activePage ? styles.dotActive : ''}`}
                onClick={() => goToPage(i)}
                aria-label={`Go to skills page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;