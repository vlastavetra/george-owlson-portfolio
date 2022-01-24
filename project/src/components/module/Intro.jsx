import React from 'react';
import styles from '../module/Intro.module.scss';

function Intro() {
  return (
    <section className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://thumb.tildacdn.com/tild6630-3465-4666-a238-303731383962/-/format/webp/G_prisma.jpg"
          alt="georgy reznikov"
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Hi, my name is George! <br /><br />
          I&apos;m a designer and art-director from Moscow. <br />
          I&apos;ve been working for famous agencies with the world&apos;s largest brands for&#160;8&#160;years. <br />
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
