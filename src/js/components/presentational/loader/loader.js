import React from 'react';
import './loader.css';

const LoaderComp = (props) => {
  return props.loading?
   (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  ):null
}

export default LoaderComp;