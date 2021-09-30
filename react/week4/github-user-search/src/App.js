import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { fetchData } from './helper'
import SearchResult from './searchResult'
import { ContextProvider } from './themeContext'

function App() {

  const [user, setUser] = useState('')
  const [gitUsers, setGitUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  

  React.useEffect(()=>{
    fetchData(user)
    .then(response=>response.json())
    .then((data)=> {
      console.log(data);
      setGitUsers(data.items.slice(0, 15))
      setIsLoading(false)
      })
    .catch((e)=>
      setIsError(true)
          )
  },[user]) 
  
  const buketContent = {user:user, gitUsers:gitUsers, isLoading: isLoading, isError:isError};
  return (
    <ContextProvider value={buketContent}>
      <div>
      <h1> Github user searcher</h1>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)}></input>
      <SearchResult/>
      </div>
    </ContextProvider>
  );
}

export default App;
