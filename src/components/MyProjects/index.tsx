import React, { useState } from 'react';
import styles from './styles.module.css';
import { TAG_ICONS } from './icons';

const PROJECTS_OVERVIEW_URL = 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects/overview';

// Best 3 projects chosen for the highlights: infra/security, backend API and containerization
// — the strongest match for Junior DevSecOps / Cloud Security roles.
const projects = [
  {
    id: 1,
    name: 'V-Server Setup',
    description:
      'Set up and configured a Linux VPS from scratch — including SSH hardening, firewall rules, Nginx reverse proxy and automated deployments via GitHub Actions.',
    tags: ['Linux', 'Nginx', 'SSH', 'GitHub Actions'],
    github: 'https://github.com/thkbprbxyg-maker/v-server-setup',
    docs: PROJECTS_OVERVIEW_URL,
    image: '/dev-blog/img/projects/v-server-setup.png',
  },
  {
    id: 2,
    name: 'Truck Signs API',
    description:
      'Python-based REST API for managing truck sign orders. Includes authentication, order management and a clean RESTful design following best practices.',
    tags: ['Python', 'REST API', 'Backend'],
    github: 'https://github.com/thkbprbxyg-maker/truck_signs_api',
    docs: PROJECTS_OVERVIEW_URL,
    image: '/dev-blog/img/projects/truck-signs-api.png',
  },
  {
    id: 3,
    name: 'Conduit Container',
    description:
      'Containerized the RealWorld Conduit full-stack application using Docker Compose, connecting a Dockerized frontend with a Dockerized Python/Flask backend.',
    tags: ['Docker', 'Python', 'TypeScript', 'docker-compose'],
    github: 'https://github.com/thkbprbxyg-maker/conduit-container',
    docs: PROJECTS_OVERVIEW_URL,
    image: '/dev-blog/img/projects/conduit-container.png',
  },
];

const MyProjects: React.FC = () => {
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="my-projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>My project highlights</h2>

        {/* Desktop: numbered list + single active feature card */}
        <div className={`${styles.layout} ${styles.desktopOnly}`}>
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
              <a href={PROJECTS_OVERVIEW_URL} target="_blank" rel="noreferrer">
                ↗ see more projects
              </a>
            </li>
          </ul>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{active.name}</h3>
              <div className={styles.tags}>
                {active.tags.map((t) => {
                  const TagIcon = TAG_ICONS[t];
                  return (
                    <span key={t} className={styles.tag}>
                      {TagIcon && <TagIcon />}
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={styles.cardBody}>
              {active.image && (
                <div className={styles.graphic}>
                  <img src={active.image} alt={active.name} />
                </div>
              )}
              <p className={styles.cardDesc}>{active.description}</p>
            </div>
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

        {/* Mobile: all 3 projects as full stacked cards */}
        <div className={styles.mobileOnly}>
          {projects.map((p, i) => (
            <div key={p.id} className={styles.mobileCard}>
              <h3 className={styles.mobileCardTitle}>{i + 1}. {p.name}</h3>
              <div className={styles.tags}>
                {p.tags.map((t) => {
                  const TagIcon = TAG_ICONS[t];
                  return (
                    <span key={t} className={styles.tag}>
                      {TagIcon && <TagIcon />}
                      {t}
                    </span>
                  );
                })}
              </div>
              {p.image && (
                <div className={styles.graphic}>
                  <img src={p.image} alt={p.name} />
                </div>
              )}
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.cardActions}>
                <a href={p.docs} target="_blank" rel="noreferrer" className={styles.btnDocs}>
                  Documentation
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
          <a href={PROJECTS_OVERVIEW_URL} target="_blank" rel="noreferrer" className={styles.seeMoreMobile}>
            ↗ see more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;