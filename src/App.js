import './App.css';
import Sidebar from './components/Sidebar'
import Page from './components/Page'

import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <Page />      
      </div>
    </Router>
    
  );
}

export default App;
