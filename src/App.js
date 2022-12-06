import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import userData from './userData';





function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;




{/* {userData.map((element, key) => {
        return (
          <div>
            <p>{element.id}</p>
            <p>{element.name}</p>
            <p>{element.resume}</p>
            <img src={element.image} alt="bgfrtstgh" />
          </div>

        )
      })} */}
