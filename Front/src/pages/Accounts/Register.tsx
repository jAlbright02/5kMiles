import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backendURL = import.meta.env.MODE === 'development' ? '' : 'https://youshouldntfindthis.jamesalbright.website';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${backendURL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        user: username,
        password: password,
        // TODO some more data needs to be passed here
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

  /*
    TODO
    More inputs will be needed to pass to backend like email, etc
  */
  return (
    <form onSubmit={handleRegister} className='registerForm'>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  );
}
