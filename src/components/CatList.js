import React from 'react';

const CatList = ({facts}) =>  {
  return facts.map(cat => {
    return (
      <p key={cat._id}>
        <a href={`https://cat-fact.herokuapp.com/facts/${cat._id}`}>
          {`"${cat.text}"`}
        </a>
      </p>
    )
  })  
}

export default CatList;