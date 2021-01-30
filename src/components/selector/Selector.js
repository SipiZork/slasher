import React from 'react';
import PropTypes from 'prop-types';
import './Selector.scss';

const Selector = ({ showSelector }) => {
  
  const { left, top, width, height, img } = showSelector;
  
  return (
    <div className={`selector${showSelector.show ? ' show' : ' hide'}`} style={{ left: left, top: top, width: width, height: height }}>
        <img src={img} />
    </div>
  )
}

Selector.propTypes = {

}

export default Selector;