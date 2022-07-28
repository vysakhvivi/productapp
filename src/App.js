import Register from './components/Register';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Addproduct from './components/Addproduct'
import Listproduct from './components/Listproduct'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/addproduct' element={<Addproduct/>}/>
          <Route path='/dashboard/listproduct' element={<Listproduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
