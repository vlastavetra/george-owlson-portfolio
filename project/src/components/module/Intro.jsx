import React from 'react';
import styles from '../module/Intro.module.css';

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.photoContainer}>
        <img
          className={styles.photo}
          src="https://thumb.tildacdn.com/tild6337-3762-4038-b266-346364313738/-/resize/816x/-/format/webp/me_port_photo_1.jpg"
          alt="georgy reznikov"
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Hi, my name is George! <br /><br />
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
          <li>— photo retouch</li>
          <li>— graphic art</li>
          <li>— motion design</li>
        </ul>
      </div>
    </section>
  );
}

export default Intro;
