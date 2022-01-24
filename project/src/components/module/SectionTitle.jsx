import React from 'react';
import PropTypes from 'prop-types';
import styles from '../module/SectionTitle.module.scss';

function SectionTitle({title}) {
  return (
    <h2 className={styles.root}>{title}</h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
