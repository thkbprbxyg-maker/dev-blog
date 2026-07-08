import React from 'react';
import styles from './styles.module.css';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact me</h2>
          <p className={styles.intro}>Looking forward to hearing from you if:</p>
          <ul className={styles.infoList}>
            <li>You have a job offer or opportunity, including internships.</li>
            <li>You're hiring for a Junior DevSecOps or Cloud Security Engineer role.</li>
            <li>You want to know how I can contribute to your team.</li>
            <li>Remote work or relocating within Germany works for you too.</li>
          </ul>
          <div className={styles.links}>
            <a href="mailto:ibrahimonat3@gmail.com" className={styles.link}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ibrahimonat3@gmail.com
            </a>
            <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer" className={styles.link}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              Profile Page
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.tagline}>Looking forward to hearing from you!</p>
        </div>
      </div>

      <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles.footer}>
        <p>© Ibrahim Onat 2026 · <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer">Legal notice</a></p>
      </div>
    </section>
  );
};

export default Contact;