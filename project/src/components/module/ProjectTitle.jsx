import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ProjectTitle.module.scss';

function ProjectTitle({title, description, color}) {
  return (
    <>
      <h1 className={cx(styles.projectTitle, styles[color])}>{title}</h1>
      <span className={cx(styles.description, styles[color])}>{description}</span>
    </>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ProjectTitle;
