import './App.css';
import Start_game from './start_game';
import React from 'react';
import GamePlay from './gamePlay';

import { useState } from 'react';
function App() {
  const [isGameStarted , setisGameStarted]=useState(false);
  const toggleGamePlay = ()=>{
    
    setisGameStarted((prev)=>(!prev));
  }
  
  return (
    <>
      {isGameStarted ? <GamePlay /> : <Start_game toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
