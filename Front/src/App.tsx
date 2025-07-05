import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://ukg8o8k0woowggk88wo0wwcg.78.47.143.65.sslip.io/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Message from James:</h1>
      <p>{message || 'Loading...'}</p>
      <p>Not sure how these will look btw</p>
      <img src='https://i.pinimg.com/736x/e5/d1/f5/e5d1f519da3abe6631fed6850e73b924.jpg'></img>
      <img src='https://media1.tenor.com/m/PDiYbMpkf-8AAAAd/dog-smile.gif'></img>
    </div>
  );
}

export default App;
