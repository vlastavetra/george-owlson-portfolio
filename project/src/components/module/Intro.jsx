import React from 'react';
import styles from '../module/Intro.module.scss';

function Intro() {
  return (
    <section className={styles.root}>
      <div className={styles.left}>
        <p className={styles.text}>
        Hi 🖖🏻
        </p>
        <p className={styles.text}>
        This is my portfolio. Here you can find my favorite works: apps, web sites and graphic design.
        </p>
        <p className={styles.text}>
          I have a lot of skills in different design directions and 8 years of expirience, but now I’m focusing on UI design.
        </p>
        <p className={styles.textContact}>
          You always can write me in Telegram or by e-mail
        </p>
      </div>
      <div className={styles.right}></div>
    </section>
  );
}

export default Intro;
