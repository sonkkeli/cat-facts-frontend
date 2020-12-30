import React from 'react';
import bigCat from './cat.png';

const CatSpinner = () => {
  return (
    <div className="cat-spinner">
      <img src={bigCat} className="App-logo" alt="logo" data-testid="bigcat" />
    </div>
  );
};

export default CatSpinner;
