import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { fetchData } from './helper'
import SearchResult from './searchResult'

function App() {

  const [user, setUser] = useState('')
  const [gitUsers, setGitUsers] = useState([]);

  React.useEffect(()=>{
    fetchData(user)
    .then(response=>response.json())
    .then((data)=> {
      console.log(data);
      setGitUsers(data.items.slice(0, 15))
      })
    .catch((e)=>{console.log("error in fetching data" + e)
                })
  },[user]) 
  
  return (
    <div>
      <h1> Github user searcher</h1>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)}></input>
      <SearchResult gitUsers={gitUsers}/>
    </div>
  );
}

export default App;
