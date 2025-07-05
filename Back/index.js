import express from 'express';

const app = express();
const PORT = 5001;

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello darling dearest, i hope this finds you well xx' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on http://0.0.0.0:${PORT}`);
});
