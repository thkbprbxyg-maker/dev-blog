import React, { useState } from 'react';
import styles from './styles.module.css';
import { TAG_ICONS } from './icons';

const DOCS_BASE = 'https://thkbprbxyg-maker.github.io/dev-blog/docs/projects';
const PROJECTS_OVERVIEW_URL = `${DOCS_BASE}/overview`;

// Matches the 5 entries shown in the Figma "My project highlights" frame,
// in the same order, with Minecraft selected by default (as in the mockup).
const projects = [
  {
    id: 1,
    name: 'Baby Tools Shop',
    description:
      'Simple e-commerce demo app built with Django, including user authentication, product/category management and an admin interface. Fully containerized with Docker for a reproducible setup.',
    tags: ['Python', 'Docker', 'Backend'],
    github: 'https://github.com/thkbprbxyg-maker/baby-tools-shop',
    docs: `${DOCS_BASE}/baby-tools-shop`,
    image: '/dev-blog/img/projects/baby-tools-shop.png',
  },
  {
    id: 2,
    name: 'Truck Signs API',
    description:
      'Python-based REST API for managing truck sign orders. Includes authentication, order management and a clean RESTful design following best practices.',
    tags: ['Python', 'REST API', 'Backend', 'Docker'],
    github: 'https://github.com/thkbprbxyg-maker/truck_signs_api',
    docs: `${DOCS_BASE}/truck-signs-api`,
    image: '/dev-blog/img/projects/truck-signs-api.png',
  },
  {
    id: 3,
    name: 'Juice Shop Meister',
    description:
      'Documents my solutions to hacking challenges in the OWASP Juice Shop — including XSS attacks, hash cracking and SQL injection. Purely for educational purposes.',
    tags: ['IT Security'],
    github: null,
    docs: `${DOCS_BASE}/juice-shop-master`,
    image: '/dev-blog/img/projects/juice-shop-master.png',
  },
  {
    id: 4,
    name: 'Minecraft',
    description:
      'Minecraft Java Edition server running in Docker using a custom Dockerfile and docker-compose setup with persistent world data — no prebuilt image, the server JAR is downloaded at build time.',
    tags: ['YAML', 'Shell Scripting', 'IT Security', 'Container'],
    github: 'https://github.com/thkbprbxyg-maker/minecraft-server',
    docs: `${DOCS_BASE}/minecraft-server`,
    image: '/dev-blog/img/projects/minecraft-server.png',
  },
  {
    id: 5,
    name: 'WordPress hosten',
    description:
      'Minimal Docker Compose setup running WordPress with a MariaDB database — simple, reproducible and secure, with no passwords or tokens stored in the repository.',
    tags: ['Docker', 'Container', 'Backend'],
    github: 'https://github.com/thkbprbxyg-maker/wordpress-compose-review',
    docs: `${DOCS_BASE}/wordpress`,
    image: '/dev-blog/img/projects/wordpress.png',
  },
];

const DEFAULT_ACTIVE = projects.find((p) => p.name === 'Minecraft') ?? projects[0];

const MyProjects: React.FC = () => {
  const [active, setActive] = useState(DEFAULT_ACTIVE);

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
              <div className={styles.cardContent}>
                <p className={styles.cardDesc}>{active.description}</p>
                <div className={styles.cardActions}>
                  <a href={active.docs} target="_blank" rel="noreferrer" className={styles.btnDocs}>
                    Documentation
                  </a>
                  {active.github && (
                    <a href={active.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: top 3 highlighted projects as full stacked cards, matching Figma */}
        <div className={styles.mobileOnly}>
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id} className={styles.mobileCard}>
              <h3 className={styles.mobileCardTitle}>{i + 1}.{p.name}</h3>
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
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnGithub}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
          <p className={styles.mobileMoreIntro}>
            Write some information about your other projects. What other projects have you been working on so far?
          </p>
          <a href={PROJECTS_OVERVIEW_URL} target="_blank" rel="noreferrer" className={styles.seeMoreMobile}>
            ↗ see more projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
