import React from 'react';
import styles from '../module/Intro.module.scss';

function Intro() {
  return (
    <section className={styles.root}>
      <p className={styles.text}>
        Hi 🖖🏻 <br/>
        My name is George.
        I&apos;m a multidisciplinary designer with 8 year experience.
        Last years I specialize in UX/UI design for digital services and products.
        Below you can find some of my works.

      </p>
      <p className={styles.textContact}>
        You always can write&nbsp;me in&nbsp;
        <a className={styles.link}
          href='https://t.me/georgeowlson'
          rel='noopener noreferrer'
          target='_blank'
        >
          Telegram
        </a>
        <span> </span>
          or&nbsp;by&nbsp;
        <a
          className={styles.link}
          href='mailto:icebergakaib@gmail.com'
          rel='noopener noreferrer'
        >
          email
        </a>
      </p>
    </section>
  );
}

export default Intro;
