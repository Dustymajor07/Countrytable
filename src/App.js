import React,{useState , useEffect}from 'react';
import './App.css';
import CountriesTables from './Components/CountriesTables';
import axios from 'axios';
function App() {
  

  return (
    <>
    <div className="d-flex flex-column align-items-center">
      <h1 align="centre ">React DataTable</h1>


    </div>
    <CountriesTables />

    </>

  );
}

export default App;
