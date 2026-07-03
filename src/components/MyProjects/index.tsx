import React, { useState } from 'react';
import styles from './styles.module.css';

const projects = [
  {
    id: 1,
    name: 'V-Server Setup',
    description:
      'Set up and configured a Linux VPS from scratch — including SSH hardening, firewall rules, Nginx reverse proxy and automated deployments via GitHub Actions.',
    tags: ['Linux', 'Nginx', 'SSH', 'GitHub Actions'],
    github: 'https://github.com/thkbprbxyg-maker/v-server-setup',
    docs: 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview',
  },
  {
    id: 2,
    name: 'Minecraft Server',
    description:
      'Minecraft Java Edition server running in Docker using a custom Dockerfile and docker-compose setup with persistent world data and automated backups.',
    tags: ['Docker', 'docker-compose', 'Linux'],
    github: 'https://github.com/thkbprbxyg-maker/minecraft-server',
    docs: 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview',
  },
  {
    id: 3,
    name: 'Conduit Container',
    description:
      'Containerized the RealWorld Conduit full-stack application using Docker Compose, connecting a Dockerized frontend with a Dockerized Python/Flask backend.',
    tags: ['Docker', 'Python', 'TypeScript', 'docker-compose'],
    github: 'https://github.com/thkbprbxyg-maker/conduit-container',
    docs: 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview',
  },
  {
    id: 4,
    name: 'Truck Signs API',
    description:
      'Python-based REST API for managing truck sign orders. Includes authentication, order management and a clean RESTful design following best practices.',
    tags: ['Python', 'REST API', 'Backend'],
    github: 'https://github.com/thkbprbxyg-maker/truck_signs_api',
    docs: 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview',
  },
  {
    id: 5,
    name: 'WordPress on Docker',
    description:
      'Deployed a fully functional WordPress instance using Docker Compose with a MySQL database, persistent volumes and Nginx as a reverse proxy.',
    tags: ['Docker', 'WordPress', 'MySQL', 'Nginx'],
    github: 'https://github.com/thkbprbxyg-maker/wordpress-compose-review',
    docs: 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview',
  },
];

const MyProjects: React.FC = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="my-projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>My project highlights</h2>
        <div className={styles.layout}>
          <ul className={styles.list}>
            {projects.map((p, i) => (
              <li
                key={p.id}
                className={`${styles.listItem} ${active.id === p.id ? styles.listItemActive : ''}`}
                onClick={() => setActive(p)}
              >
                <span className={styles.listNum}>{i + 1}.</span> {p.name}
              </li>
            ))}
            <li className={styles.seeMore}>
              <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer">
                ↗ see more projects
              </a>
            </li>
          </ul>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{active.name}</h3>
              <div className={styles.tags}>
                {active.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
            <p className={styles.cardDesc}>{active.description}</p>
            <div className={styles.cardActions}>
              <a href={active.docs} target="_blank" rel="noreferrer" className={styles.btnDocs}>
                Documentation
              </a>
              <a href={active.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;