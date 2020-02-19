import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import CatSpinner from './CatSpinner'
import axios from 'axios'
const smallCat = require('./cat_small.png')

const App= () => {
  const [facts, setFacts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const api = 'http://localhost:8010/proxy/facts/random?animal_type=cat&amount=5'
  
  const fetch5cats = async () => {
    setLoaded(false)
    await axios
      .get(api)
      .then(res => {
        setLoaded(true)
        setFacts(res.data)
      })
      .catch(error => {
        console.log(error.message)
        setLoaded(true)
        setErrorMsg(true)
        setTimeout(() => {
          setErrorMsg(false)
        }, 5000)
      })
  }
  
  useEffect(()=> {
    fetch5cats()
  },[])

  return loaded 
    ? ( errorMsg 
      ? <p className="app error-msg">Something went wrong</p>
      : (
        <div className="app">
          <Fragment>
            {facts.map(cat => {
              return (
                <p key={cat._id}>
                  <a href={`https://cat-fact.herokuapp.com/facts/${cat._id}`}>
                    {`"${cat.text}"`}
                  </a>
                </p>
              )
            })}
          </Fragment>

          <Fragment>
            <button onClick={fetch5cats}>
              Meeoowwrre cat facts 
              <img src={smallCat} alt="small cat" />
            </button>
          </Fragment>
        </div>
      )
    ) 
    : <CatSpinner/>
}

export default App;
