import React from 'react';
const bigCat = require('./cat.png')

const CatSpinner = () => {  
  return (
    <div className="cat-spinner">
      <img src={bigCat} className="App-logo" alt="logo" data-testid="bigcat"/>
    </div>
  );  
}

export default CatSpinner;