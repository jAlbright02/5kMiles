import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <h2><Link to='/' className='nav-home'>5k Miles Club</Link></h2>
        <div>
          <Link to='/admin' className='nav-link'>Admin</Link> 
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
      </Routes>
    </Router>
  );
}

export default App;
