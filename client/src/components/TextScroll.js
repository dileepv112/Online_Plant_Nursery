import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const TextScroll = () => {
  return (
    <div>
      <Link to="test1" smooth={true} duration={500}>Test 1</Link>
      <Element name="test1" className="element">Test 1</Element>
    </div>
  );
};

export default TextScroll;
