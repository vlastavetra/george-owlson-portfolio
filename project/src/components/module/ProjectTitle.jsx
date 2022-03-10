import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectTitle.module.scss';

function ProjectTitle({title, description}) {
  return (
    <>
      <h1 className={styles.projectTitle}>{title}</h1>
      <span className={styles.description}>{description}</span>
    </>
  );
}

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectTitle;
