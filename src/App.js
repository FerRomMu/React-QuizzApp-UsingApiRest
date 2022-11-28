import { useContext } from 'react';
import Menu from './containers/menu/Menu';
import Questions from './containers/questions/Questions';
import Results from './containers/results/Results';
import DifficultyContext from './context/DifficultyContext'
import QuizzContext from './context/QuizzContext';
import './App.css'
import Background from './containers/Background';
function App() {
  const { difficulty } = useContext(DifficultyContext)
  const { quizz } = useContext(QuizzContext)
  const hasEnded = quizz.hasEnded

  return (
    <>
      <div className="gameContainer">
        { !difficulty? <Menu/> : null }
        { difficulty && !hasEnded? <Questions/> : null }
        { difficulty && hasEnded? <Results/> : null }
      </div>
      <Background/>
    </>
  );
}

export default App;