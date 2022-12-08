import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import userData from './userData';
import articlesData from './articlesData';
import Cards from './components/cards/Cards';


console.log(articlesData[0].article);


function App() {
  return (
    <div className="App">
      {/* {articlesData.article.map((element, key) => {
        return (
          <div>
            <p>{element}</p>



          </div>

        )
      })} */}

      <AppRouter />
    </div>
  );
}











export default App;





