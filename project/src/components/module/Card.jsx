import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from '../module/Card.module.scss';

function Card({id}) {
  return (
    <Link className={styles.root} to={`project-${id}`}>
      <div className={styles.textContainer}>
        <span className={styles.tag}>#graphic art</span>
        <h3 className={styles.title}>50 Years of Big Mac</h3>
        <p className={styles.text}>
          Poster for&#160;an&#160;advertising project for&#160;the&#160;50th&#160;anniversary of&#160;the&#160;Big&#160;Mac. <br />
          The poster won 2&#160;bronze Cannes&#160;Lions and graced the streets of&#160;Cannes during the&#160;festival.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="https://thumb.tildacdn.com/tild6630-3432-4132-b435-616537396534/-/format/webp/collage_bigmac50year.jpg"
          alt="georgy reznikov"
        />
      </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Card;
