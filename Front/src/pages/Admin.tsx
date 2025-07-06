import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backendURL = import.meta.env.MODE === 'development' ? '' : 'https://youshouldntfindthis.jamesalbright.website';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${backendURL}/api/admin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        user: username,
        password: password,
      }),
    });

    const resRes = await res.json();

    if (resRes.pass === 'titch') {
      navigate('/secret');
    } else if (resRes.success) {
      navigate('/');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className='adminForm'>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
