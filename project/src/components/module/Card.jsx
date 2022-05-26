import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Slider from './Slider';
import styles from '../module/Card.module.scss';

function Card({id, name, mainDescription, works, slides, button}) {
  return (
    <div className={styles.root} id={id}>
      <div className={styles.left}>
        <Slider
          slides={slides}
        />
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subTitle}>{works}</p>
        {mainDescription &&
          <p className={styles.text}>
            {mainDescription}
          </p>}
        {button &&
          <Link className={styles.link} to={id}>
            {button}
          </Link>}
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired,
  works: PropTypes.string.isRequired,
  slides: PropTypes.array,
  button: PropTypes.string,
};

export default Card;
