import React from 'react';
import Header from '../module/Header';
import Intro from '../module/Intro';
import styles from './Main.module.scss';

function Main() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Intro/>
      </main>
    </>
  );
}

export default Main;
