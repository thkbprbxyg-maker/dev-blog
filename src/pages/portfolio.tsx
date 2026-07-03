import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import Hero from '@site/src/components/Hero';
import MySkills from '@site/src/components/MySkills';
import MyProjects from '@site/src/components/MyProjects';
import Contact from '@site/src/components/Contact';
import styles from './portfolio.module.css';

export default function Portfolio(): JSX.Element {
  return (
    <Layout
      title="Ibrahim Onat | Portfolio"
      description="Junior DevSecOps Engineer – Portfolio of Ibrahim Onat"
      noFooter
    >
      <div className={styles.page}>
        <Header />
        <Hero />
        <MySkills />
        <MyProjects />
        <Contact />
      </div>
    </Layout>
  );
}