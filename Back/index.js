import express from 'express';
import cors    from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello darling dearest, i hope this finds you well xx' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://whatever:${PORT}`);
});
