import React from 'react';
import styles from '../module/Cardboard.module.css';

function Card() {
  return (
    <div className={styles.card}>
      <span>graphic art</span>
      <h3>50 Years of Big Mac</h3>
      <p>Дизайн одного из постеров в рамках рекламного проекта в честь 50-и летия Биг Мака.</p>
    </div>
  );
}

export default Card;
