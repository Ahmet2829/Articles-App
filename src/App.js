import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import userData from './userData';
import articlesData from './articlesData';
import Cards from './components/cards/Cards';


console.log(articlesData);


function App() {
  return (
    <div className="App">


      <AppRouter userData={userData} articlesData={articlesData} />
    </div>
  );
}











export default App;





