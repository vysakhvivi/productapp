import Register from './components/Register';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
