import React from 'react';
import PropTypes from 'prop-types';
import styles from './SmallSubsection.module.scss';

function SmallSubsection(props) {
  const {
    tag: Tag,
    ...other
  } = props;
  return (
    <Tag className={styles.root} {...other}/>
  );
}

SmallSubsection.propTypes = {
  tag: PropTypes.string.isRequired,
};

SmallSubsection.defaultProps = {
  tag: 'div',
};

export default SmallSubsection;
