import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backendURL = import.meta.env.MODE === 'development' ? '' : 'https://youshouldntfindthis.jamesalbright.website';

export default function Register() {
  const [account, setAccount] = useState({user: '', email: '', password: ''});

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`${backendURL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: account.user,
        email: account.email,
        password: account.password,
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
    <form onSubmit={handleRegister} className='registerForm'>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={account.user}
        onChange={(e) => setAccount({...account, user: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        value={account.email}
        onChange={(e) => setAccount({...account, email: e.target.value})}
      />
      <input
        type="password"
        placeholder="Password"
        value={account.password}
        onChange={(e) => setAccount({...account, password: e.target.value})}
      />
      <button type="submit">Register</button>
    </form>
  );
}
