import express from 'express';
import cors    from 'cors';

import adminRouter from './routes/admin.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  "credentials": true,
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Backend listening on http://whatever:${PORT}`);
});
