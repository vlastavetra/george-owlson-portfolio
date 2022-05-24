import React from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <svg fill="none" height="14" viewBox="0 0 8 14" width="8" xmlns="http://www.w3.org/2000/svg">
        <path d="m1 1 5 6-5 6" stroke="#000" strokeWidth="1"/>
      </svg>
    </button>
  );
}

BtnSlider.propTypes = {
  direction: PropTypes.string.isRequired,
  moveSlide: PropTypes.string.isRequired,
};
