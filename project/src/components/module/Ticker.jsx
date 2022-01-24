import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from '../module/Ticker.module.scss';

function Ticker() {
  return (
    <section className={styles.ticker}>
      <Marquee gradient={false} pauseOnHover="true" speed={30}>
        <ul className={styles.list}>
          <li className={styles.item}>UX/UI</li>
          <li className={styles.item}>—</li>
          <li className={styles.item}>WEB</li>
          <li className={styles.item}>—</li>
          <li className={styles.item}>GRAPHIC</li>
          <li className={styles.item}>—</li>
          <li className={styles.item}>RETOUCH</li>
          <li className={styles.item}>—</li>
          <li className={styles.item}>ART DIRECTION</li>
          <li className={styles.item}>—</li>
        </ul>
      </Marquee>
    </section>
  );
}

export default Ticker;
