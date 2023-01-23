import React, { useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';

// compoent
import Quote from "./Component/Quote.jsx"

function App() {
  const [user, setUser] = useState(null)
  const [quote, setQuote] = useState(null)

  useEffect(()=>{
    fetch(("/api/user"))
      .then((res) => {
        return res.json()
      })
      .then((resJson) => setUser(resJson.users))
    
    fetch(("/api/quote"))
      .then((res) => {
        return res.json()
      })
      .then((resJson) => setQuote(resJson.quotes))

  },[])

  useEffect(()=>{
    console.log(user)
  },[user])

  if(!user || !quote) {
     return (
    <div className="App">
      <header className="App-header">
        <h1>LOADING</h1>
      </header>
    </div>
  );
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user.map((name, idx) =>(
            <h1 key={idx}>{name}</h1>
          ))
        }
        <Quote data={quote}/>
      </header>
    </div>
  );
}

export default App;
