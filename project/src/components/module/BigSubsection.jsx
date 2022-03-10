import React from 'react';
import PropTypes from 'prop-types';
import styles from './BigSubsection.module.scss';

function BigSubsection(props) {
  const {
    tag: Tag,
    ...other
  } = props;
  return (
    <Tag className={styles.root} {...other}/>
  );
}

BigSubsection.propTypes = {
  tag: PropTypes.string.isRequired,
};

BigSubsection.defaultProps = {
  tag: 'div',
};

export default BigSubsection;
