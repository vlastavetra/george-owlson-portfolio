import React from 'react';
import PropTypes from 'prop-types';
import './Slide.scss';

function ProjectTitle({src, index, slideIndex, text}) {
  return (
    <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
      <p className='text'>{text}</p>
      <img className='img' src={src}/>
    </div>
  );
}

ProjectTitle.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  index: PropTypes.number.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default ProjectTitle;
