import express from 'express';
import cors    from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello Patrick, it is me your father please send money paypal.me/jimjamflimflam' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://myownwebsite:${PORT}`);
});
