import React from 'react';
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

const MySkills: React.FC = () => {
  return (
    <section id="my-skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
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
      </div>
    </section>
  );
};

export default MySkills;