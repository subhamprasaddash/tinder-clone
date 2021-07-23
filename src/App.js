import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import SwipeControls from './Components/SwipeControls/SwipeControls';

function App() {
  return (
    <div className="app">
    {/* Swipe conntrols */}
    <Navbar />
    <ProfileCard />
    <SwipeControls />
    </div>
  );
}

export default App;
