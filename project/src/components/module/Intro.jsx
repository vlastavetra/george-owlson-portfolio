import React from 'react';
import styles from '../module/Intro.module.scss';

function Intro() {
  return (
    <section className={styles.root}>
      <p className={styles.text}>
        Hi 🖖🏻 <br/>
        This is my portfolio. Here you can find my favorite works: apps, web sites and graphic design.<br/>
        I have a lot of skills in different design directions and 8 years of expirience, but now I’m focusing on UI design.
      </p>
      <p className={styles.textContact}>
        You always can write me in Telegram&nbsp;
        <a className={styles.link}
          href='https://t.me/georgeowlson'
          rel='noopener noreferrer'
          target='_blank'
        >@georgeowlson
        </a>
        &nbsp;or by e-mail&nbsp;
        <a
          className={styles.link}
          href='mailto:icebergakaib@gmail.com'
          rel='noopener noreferrer'
        >
          icebergakaib@gmail.com
        </a>
      </p>
    </section>
  );
}

export default Intro;
