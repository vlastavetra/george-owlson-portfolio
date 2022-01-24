import React from 'react';
import Header from '../module/Header';
import Ticker from '../module/Ticker';
import Intro from '../module/Intro';
import Cardboard from '../module/Cardboard';
import Gallery from '../module/Gallery';
import styles from '../page/main.module.scss';

function Main() {
  return (
    <main className={styles.root}>
      <Header/>
      <main>
        <Ticker/>
        <Intro/>
        <Cardboard/>
        <Gallery/>
      </main>
    </main>
  );
}

export default Main;
