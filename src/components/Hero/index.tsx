import React from 'react';
import styles from './styles.module.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.greeting}>Hey there 👋 I am</p>
          <h1 className={styles.name}>Ibrahim Onat</h1>
          <p className={styles.title}>Junior DevSecOps Engineer</p>
          <p className={styles.bio}>
            I am a career changer with a background in metalworking, now completing a
            TÜV-certified DevSecOps training program. I am passionate about IT security,
            Linux, Docker and cloud technologies. I am constantly learning and working
            towards a role as a Junior DevSecOps Engineer or Cloud Security Engineer.
          </p>
          <button className={styles.cta} onClick={scrollToContact}>
            Contact me
          </button>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/img/ibrahim.jpg" alt="Ibrahim Onat" className={styles.photo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;