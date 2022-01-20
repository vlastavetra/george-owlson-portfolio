import React from 'react';
import styles from '../module/Intro.module.css';

function Intro() {
  return (
    <div className={styles.intro}>
      <img
        className={styles.photo}
        src="https://thumb.tildacdn.com/tild6337-3762-4038-b266-346364313738/-/resize/816x/-/format/webp/me_port_photo_1.jpg"
        alt="georgy reznikov"
      />
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Hi, My name is Georgy! <br />
          And i&apos;m a designer and art-director from Moscow. <br />
          I&apos;ve been working for famous agencies with the world&apos;s largest brands for 8 years. <br />
          Now i&apos;m focused on creating useful interfaces and prefer long term meaningful projects.
        </p>
        <ul className={styles.text}>
          <p>
            My experience:
          </p>
          <li>— web and mobile apps</li>
          <li>— landings</li>
          <li>— packing design</li>
          <li>— retouch</li>
          <li>— posters</li>
        </ul>
        <ul className={styles.text}>
          <p>
            My achievements:
          </p>
          <li>— 2 Cann&apos;s Lions for MacDonnalds case</li>
          <li>— winning Nissan tender</li>
          <li>— winning Coca-Cola tender</li>
          <li>— and so on</li>
          <li>— and so on</li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
