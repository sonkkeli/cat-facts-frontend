import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import CatList from './components/CatList'
import CatSpinner from './components/spinner/CatSpinner'
import CatButton from './components/button/CatButton';

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
    ? ( 
      errorMsg 
        ? <p className="app error-msg">Something went wrong</p>
        : (
          <div className="app">
            <CatList facts={facts} />
            <CatButton fetch5cats={fetch5cats} />
          </div>
        )
      )
    : <CatSpinner/>
}

export default App;
