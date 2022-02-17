import React from 'react';
import styles from '../module/Header.module.scss';

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://habrastorage.org/webt/yl/fr/bj/ylfrbjbynugsy9w4r3myu__yzxq.png"
          alt="george reznikov"
        />
      </div>
      <h1 className={styles.title}>
        <span className={styles.titleName}>George Reznikov</span>
        <span className={styles.titlePosition}>multidisciplinary designer</span>
      </h1>
    </div>
  );
}

export default Header;
