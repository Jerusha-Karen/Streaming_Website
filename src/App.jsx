import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from "./components/ProductionHouse"
import GenreMovieList from './components/GenreMovieList'


function App() {
 

  return (
    
      <div  
      className="bg-black text-white min-h-screen">
         <Header/>
         <Slider/>
        <ProductionHouse/> 
      <GenreMovieList/>
     
      </div>
   
  );
}

export default App
