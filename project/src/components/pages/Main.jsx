import React from 'react';
import Header from '../module/Header';
import Ticker from '../module/Ticker';
import Intro from '../module/Intro';
import Cardboard from '../module/Cardboard';
import Gallery from '../module/Gallery';
import SectionTitle from '../module/SectionTitle';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.root}>
      <Header/>
      <main className={styles.main}>
        <Ticker/>
        <Intro/>
        <SectionTitle title='My favorite works'/>
        <Cardboard/>
        <SectionTitle title='And more'/>
        <Gallery/>
      </main>
    </div>
  );
}

export default Main;
