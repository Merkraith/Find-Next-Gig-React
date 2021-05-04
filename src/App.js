import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Map from './components/map';
import NextGigCard from './components/nextgigcard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Map/>
      <NextGigCard/>

    </>
  );
}

export default App;
