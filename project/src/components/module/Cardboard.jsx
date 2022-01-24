import React from 'react';
import Card from '../module/Card.jsx';
import styles from '../module/Cardboard.module.scss';

function Cardboard() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>My favorite works</h2>
      <Card/>
    </section>
  );
}

export default Cardboard;
