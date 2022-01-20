import React from 'react';
import Header from '../module/Header';
import Ticker from '../module/Ticker';
import Intro from '../module/Intro';
import styles from '../page/main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <Header/>
      <Ticker/>
      <Intro/>
    </main>
  );
}

export default Main;
