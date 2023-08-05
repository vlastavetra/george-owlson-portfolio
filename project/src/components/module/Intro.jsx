import React from "react";
import styles from "../module/Intro.module.scss";

function Intro() {
  return (
    <section className={styles.root}>
      <p className={styles.text}>
        Hi 🖖🏻 <br />
        My name is George.
        <br />
        I'm a designer with 9 years of professional experience.
        <br />
        I love designing beautiful and intuitive interfaces on any platform.
        <br />I constantly follow trends, learn fast and know how to makecomplex
        things simple.
      </p>
      <p className={styles.textContact}>
        You always can write&nbsp;me by&nbsp;
        <a
          className={styles.link}
          href="https://wa.me/+972533639477"
          rel="noopener noreferrer"
          target="_blank"
        >
          WatsApp
        </a>
        <span> or&nbsp;by&nbsp;</span>
        <a
          className={styles.link}
          href="mailto:georgereznikov86@gmail.com"
          rel="noopener noreferrer"
        >
          email
        </a>
        <span> and download </span>
        <a
          href="../../../CV_GeorgeReznikov.pdf"
          className={styles.link}
          download
        >
          my CV
        </a>
      </p>
    </section>
  );
}

export default Intro;
