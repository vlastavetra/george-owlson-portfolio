import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BtnSlider from './BtnSlider';
import Slide from './Slide';
import './Slider.scss';

function Slider({slides}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if(slideIndex !== slides.length){
      setSlideIndex(slideIndex + 1);
    }
    if (slideIndex === slides.length){
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1);
    }
    if (slideIndex === 1){
      setSlideIndex(slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className='container-slider'>
      <div className='sliderWrapper'>
        {slides.map((obj, index) => <Slide key={obj.id} index={index} slideIndex={slideIndex} {...obj}/>)}
      </div>
      {slides.length > 1 &&
      <>
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
      </>}
      {slides.length > 1 &&
      <div className='container-dots'>
        {slides.map((item) => (
          <div
            key={item.id}
            onClick={() => moveDot(item.id)}
            className={slideIndex === item.id ? 'dot active' : 'dot'}
          />
        ))}
      </div>}
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.array,
};

export default Slider;
