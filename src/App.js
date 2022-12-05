import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import userData from './userData';





function App() {

  useEffect(() => {
    console.log(userData);
  }, [])



  return (
    <div className="App">
      {userData.map((element, key) => {
        return (
          <div>
            <p>{element.id}</p>
            <p>{element.name}</p>
            <p>{element.resume}</p>
            <img src={element.image} alt="bgfrtstgh" />
          </div>

        )
      })}
    </div>
  );
}

export default App;
