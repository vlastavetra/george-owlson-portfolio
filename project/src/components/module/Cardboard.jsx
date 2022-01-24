import React from 'react';
import Card from '../module/Card.jsx';
import styles from '../module/Cardboard.module.css';

function Cardboard() {
  return (
    <section className={styles.cardboard}>
      <h2 className={styles.cardboardTitle}>My favorite works</h2>
      <Card/>
    </section>
  );
}

export default Cardboard;
