import React from 'react';
import Header from '../module/Header';
import Intro from '../module/Intro';
import Card from '../module/Card';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section}>
          <Intro/>
          <Header/>
        </section>
        <section className={styles.section}>
          <Card id='1'/>
        </section>
        <section className={styles.section}>
          <Card id='2'/>
        </section>
      </div>
    </main>
  );
}

export default Main;
