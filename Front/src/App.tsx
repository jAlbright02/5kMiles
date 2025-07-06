import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import MaintenanceSchedule from './pages/Maintenance';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <h2><Link to='/' className='nav-home'>5k Miles</Link></h2>
        <div>
          <Link to='/admin' className='nav-link'>Admin</Link> 
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/maintenance-schedule" element={<MaintenanceSchedule />} />
      </Routes>
    </Router>
  );
}

export default App;
