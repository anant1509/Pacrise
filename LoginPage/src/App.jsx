import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Home from './Home';
import About from './About';
import Login from './Login';
import Registration from './Registration';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
