import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://5kMilesBackend:5001/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Message from backend:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
