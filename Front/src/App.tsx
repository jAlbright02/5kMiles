import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Accounts/Login';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import MaintenanceSchedule from './pages/Maintenance';
import Shhh from './pages/Shhh';
import Register from './pages/Accounts/Register';

function NavBar() {

  // TODO register needs to be added

  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <h2><Link to='/' className='nav-home'>5k Miles</Link></h2>
        <div>
            <Link to='/register' className='nav-link'>Register</Link>
            <Link to='/login' className='nav-link'>Login</Link> 
            <Link to='/bikes' className='nav-link'>Bikes</Link> 
            <Link to='/maintenance-schedule' className='nav-link'>Maintenance</Link>  
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/maintenance-schedule" element={<MaintenanceSchedule />} />
        <Route path="/secret" element={<Shhh />} />
      </Routes>
    </Router>
  );
}

export default App;
