import React from 'react';
import styles from '../module/Card.module.scss';

function Card() {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <span>graphic art</span>
        <h3>50 Years of Big Mac</h3>
        <p>Дизайн одного из постеров в рамках рекламного проекта в честь 50-и летия Биг Мака.</p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://thumb.tildacdn.com/tild6462-6266-4465-b832-316530396630/-/cover/716x356/center/center/-/format/webp/collage_bigmac50year.jpg"
          alt="georgy reznikov"
        />
      </div>
    </div>
  );
}

export default Card;
