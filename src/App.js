import { useState } from 'react';
import Menu from './containers/menu/Menu';
import Questions from './containers/questions/Questions';
import Results from './containers/results/Results';

function App() {
  const [container, setContainer] = useState(0)
  const nextContainer = container === 2? 0 : container+1
  
  return (
    <div>
      { !container? <Menu/> : null }
      { container === 1? <Questions/> : null }
      { container === 2? <Results/> : null }
      <button onClick={ () => setContainer(nextContainer)}>Change</button>
    </div>
  );
}

export default App;
