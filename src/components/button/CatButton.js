import React from 'react';
const smallCat = require('./cat_small.png')

const CatButton = ({fetch5cats}) => {
  return (
    <button onClick={fetch5cats}>
      Meeoowwrre cat facts 
      <img src={smallCat} alt="small cat" />
    </button>
  );
}

export default CatButton;