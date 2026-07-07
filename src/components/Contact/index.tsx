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
              <span className={styles.dot}></span>
              ibrahimonat3@gmail.com
            </a>
            <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer" className={styles.link}>
              <span className={styles.dot}></span>
              Profile Page
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.tagline}>Looking forward to hearing from you!</p>
        </div>
      </div>

      <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>

      <div className={styles.footer}>
        <p>© Ibrahim Onat 2026 · <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer">Legal notice</a></p>
      </div>
    </section>
  );
};

export default Contact;