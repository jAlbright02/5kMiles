import express from 'express';
import cors    from 'cors';

import adminRouter from './routes/admin.js';
import bikesRouter from './routes/bikes.js';
import maintRouter from './routes/maintenance.js';

const app = express();
const PORT = 5001;

const corsOptions = {
  // Have to do this so I can use cookies/credentials
  // The cors stuff is because I have two domains and both are https
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:5000',
      'https://5kmiles.jamesalbright.website'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  "credentials": true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/admin', adminRouter);

app.use('/api/bikes', bikesRouter);

app.use('/api/maintenance-schedule', maintRouter);

app.listen(PORT, () => {
  console.log(`Backend listening on http://whatever:${PORT}`);
});
