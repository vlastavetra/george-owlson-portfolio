import React from 'react';
import Card from '../module/Card.jsx';
import styles from '../module/Cardboard.module.scss';

function Cardboard() {
  return (
    <section className={styles.root}>
      <Card/>
      <Card/>
    </section>
  );
}

export default Cardboard;
