import React from 'react';
import styles from '../module/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>George Reznikov</span>
      <a href='https://t.me/georgeowlson' className={styles.telegram}>
        <svg width="30" height="30" viewBox="0 0 63 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6833 32.7025C20.6833 36.2043 21.084 39.6864 21.084 43.1838C21.084 44.7021 21.2843 46.1689 21.2843 47.6863C21.2843 48.1106 21.3089 50.4348 22.0855 50.4727C22.6221 50.4988 23.7076 50.6284 24.1776 50.3804C24.7914 50.0565 25.334 49.44 25.8468 49.0149C27.443 47.6915 28.5099 45.9386 29.6527 44.3278C30.6965 42.8567 30.5938 42.509 31.5 41.0063" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          <path d="M59.0333 3.98081C55.5174 5.90869 54.4428 7.39881 51.1702 9.08337C50.379 9.49065 45.8627 12.832 45.2423 13.4486C42.0032 16.667 39.9538 16.441 36.6522 19.6305C35.3485 20.8899 33.8439 21.8649 32.5574 23.0721C31.4414 24.1194 29.8752 24.6916 28.6722 25.6684C28.0952 26.1369 21.6076 31.8931 21.1404 30.7756" stroke="black" strokeWidth="3" strokeLinecap="round"/>
          <path d="M59.1486 3.212C59.8198 3.34444 60.4297 3.35839 60.4297 4.13742C60.4297 4.69268 60.4297 5.24794 60.4297 5.80319C60.4297 8.10358 60.438 10.363 60.1552 12.6514C59.6718 16.5616 58.535 20.1124 56.9929 23.7154C55.294 27.6848 54.3384 31.8841 52.9359 35.9619C51.8268 39.1865 51.1433 42.4761 50.221 45.7405C49.8398 47.0899 49.4274 48.6343 49.2551 50.0283C49.1349 51.0007 48.7779 53 47.618 53C46.752 53 45.5824 52.2371 44.9642 51.6119C43.7775 50.4119 42.3214 49.4741 41.1308 48.27C40.5872 47.7203 40.1041 47.0878 39.5548 46.5323C38.6989 45.6668 37.5384 45.213 36.6772 44.3421C33.7292 41.3609 30.7784 38.2717 27.1193 36.1572C25.4071 35.1678 23.902 33.7624 22.3606 32.5378C21.8294 32.1156 20.8208 30.9553 20.4897 30.4196C20.0193 29.6584 18.5085 29.124 17.6833 29.124C16.3807 29.124 15.0552 28.7538 13.7585 28.7538C10.9546 28.7538 8.12301 27.8884 5.43088 27.2834C4.36958 27.0449 3.15031 26.399 2.41097 25.6073C2.19395 25.375 1.83475 24.67 2.0856 24.3529C2.34337 24.027 2.91471 24.1377 3.14307 23.849C3.65998 23.1956 4.87194 22.7119 5.52239 22.0907C6.52418 21.1339 9.87443 20.2091 11.1689 19.7727C16.8141 17.8698 21.7167 17.3875 27.1193 14.75C31.0752 12.8187 35.2275 11.6721 39.3819 10.2452C43.263 8.91228 47.4655 7.96141 51.0955 6.02941C53.1009 4.96205 54.7616 3.82066 56.9116 3.06804C57.735 2.77982 58.7275 2.10148 59.6061 2.10148C59.8143 2.10148 60.755 1.94702 60.7958 2.01922C61.0062 2.39165 61.1909 3.02691 60.6128 3.02691" stroke="black" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </a>
    </header>
  );
}

export default Header;
