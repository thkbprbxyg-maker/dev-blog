import React from 'react';
import styles from './styles.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact me</h2>
          <p className={styles.intro}>Include the information like:</p>
          <ul className={styles.infoList}>
            <li>Feel free to reach out with job offers or opportunities like internships.</li>
            <li>What role are you looking for?</li>
            <li>How can you contribute to the new team?</li>
            <li>Are you open for remote work or even relocating?</li>
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
      <div className={styles.footer}>
        <p>© Ibrahim Onat 2025 · <a href="https://github.com/thkbprbxyg-maker" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact;