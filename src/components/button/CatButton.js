import React from 'react';
import smallCat from './cat_small.png';

const CatButton = ({ fetch5cats }) => {
  return (
    <button onClick={fetch5cats} data-testid="catbutton">
      Meeoowwrre cat facts
      <img src={smallCat} alt="small cat" data-testid="smallcat" />
    </button>
  );
};

export default CatButton;
