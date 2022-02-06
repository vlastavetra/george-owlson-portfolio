import React from 'react';
import Card from '../module/Card.jsx';
import styles from '../module/Cardboard.module.scss';

function Cardboard() {
  return (
    <section className={styles.root}>
      <Card id='1'/>
      <Card id='2'/>
    </section>
  );
}

export default Cardboard;
