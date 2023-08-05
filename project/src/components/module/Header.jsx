import React from "react";
import styles from "../module/Header.module.scss";

function Header() {
  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        src="https://habrastorage.org/webt/yl/fr/bj/ylfrbjbynugsy9w4r3myu__yzxq.png"
        alt="george reznikov"
      />
      <h1 className={styles.title}>
        <span className={styles.titleName}>George Reznikov</span>
        <span className={styles.titlePosition}>Product-designer</span>
      </h1>
      <div className={styles.tip}>
        <svg
          className={styles.arrow}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m6.71677 40c-1.31021-2.736-3.39113-5.2794-6.242771-7.6301v-2.0231c1.233141.5781 2.312141 1.1561 3.236991 1.7341.92486.5395 1.69557 1.079 2.31214 1.6185v-33.6994h2.42775v33.6994c.6551-.5395 1.44509-1.079 2.36992-1.6185.9249-.578 1.9846-1.156 3.1792-1.7341v2.0231c-2.8131 2.3507-4.89402 4.8941-6.24276 7.6301z"
            fill="#000"
          />
        </svg>
        Scroll down
      </div>
    </div>
  );
}

export default Header;
