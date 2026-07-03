import React from 'react';
import styles from './styles.module.css';

const skills = [
  { name: 'Linux', icon: '🐧' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '🔀' },
  { name: 'Python', icon: '🐍' },
  { name: 'Bash Scripting', icon: '💻' },
  { name: 'YAML', icon: '📄' },
  { name: 'GitHub Actions', icon: '⚙️' },
  { name: 'IT Security', icon: '🔐' },
  { name: 'Kali Linux', icon: '🛡️' },
  { name: 'Hashcat', icon: '🔑' },
  { name: 'Networking', icon: '🌐' },
  { name: 'DevSecOps', icon: '🚀' },
];

const MySkills: React.FC = () => {
  return (
    <section id="my-skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>My skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;