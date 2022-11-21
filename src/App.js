import { useContext, useState } from 'react';
import Menu from './containers/menu/Menu';
import Questions from './containers/questions/Questions';
import Results from './containers/results/Results';
import DifficultyContext from './context/DifficultyContext'

function App() {
  const { difficulty } = useContext(DifficultyContext)
  const hasEnded = false
  console.log(difficulty)

  return (
    <div>
      { !difficulty? <Menu/> : null }
      { difficulty && !hasEnded? <Questions/> : null }
      { difficulty && hasEnded? <Results/> : null }
    </div>
  );
}

export default App;