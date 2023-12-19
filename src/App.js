
import './App.css';
import {Route,Routes} from 'react-router-dom'

import XrHitModelContainer from './components/xr-hit-model/XrHitModelContainer';
function App() {
  return (
    <Routes>
     
      <Route path="/" element={<XrHitModelContainer  />} />
    
   
    </Routes>
  )
  
}

export default App;
