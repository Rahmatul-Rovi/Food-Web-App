import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Router import koren
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer/Footer';
import FoodDetails from './components/FoodDetails'; // 2. Details page-ti import koren

function App() {
  return (
    <div>
      <Navbar />
      
      {/* 3. Routes setup koren */}
      <Routes>
        {/* Main Home Page: Jekhane sob thakbe */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <HeadlineCards />
              <Food />
              <Category />
            </>
          } 
        />

        {/* Dynamic Food Details Page: Jekhane click korle jabe */}
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;