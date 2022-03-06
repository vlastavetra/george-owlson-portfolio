import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import translations from '../../translations';
import styles from '../module/Card.module.scss';

function Card({id, name, mainDescription, works}) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.imageBoard}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="https://static.tildacdn.com/tild3339-6337-4565-a132-303162383162/mockup_PSD_07_flip.png"
              alt="img"
            />
          </div>
        </div>
        <p className={styles.text}>
          {mainDescription}
        </p>
        <Link className={styles.link} to={id}>
          {translations.buttons.readMore}
          <svg className={styles.arrow} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.71677 40c-1.31021-2.736-3.39113-5.2794-6.242771-7.6301v-2.0231c1.233141.5781 2.312141 1.1561 3.236991 1.7341.92486.5395 1.69557 1.079 2.31214 1.6185v-33.6994h2.42775v33.6994c.6551-.5395 1.44509-1.079 2.36992-1.6185.9249-.578 1.9846-1.156 3.1792-1.7341v2.0231c-2.8131 2.3507-4.89402 4.8941-6.24276 7.6301z" fill="#000"/>
          </svg>
        </Link>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subTitle}>{works}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired,
  works: PropTypes.string.isRequired,
};

export default Card;
