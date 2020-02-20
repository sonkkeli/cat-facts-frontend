import React from 'react';

const CatList = ({facts}) =>  {
  return facts.map(cat => {
    return (
      <p key={cat._id} data-testid="cat-item">
        <a href={`https://cat-fact.herokuapp.com/facts/${cat._id}`} data-testid="cat-link">
          {`"${cat.text}"`}
        </a>
      </p>
    )
  })  
}

export default CatList;