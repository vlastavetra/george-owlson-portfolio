import React from 'react';
import Header from '../module/Header';
import Intro from '../module/Intro';
import Card from '../module/Card';
import translations from '../../translations';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <section className={styles.section}>
          <Intro/>
          <Header/>
        </section>
        {translations.projects.map((card) =>
          <section key={card.id} className={styles.section}><Card {...card}/></section>)}
      </div>
    </main>
  );
}

export default Main;
