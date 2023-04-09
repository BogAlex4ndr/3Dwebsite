import express from 'express';
import * as dotnv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotnv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello' });
  res.header('Access-Control-Allow-Origin', 'https://wonderful-cranachan-0ffde5.netlify.app');
});

app.listen(8080, () => console.log('server has started on port 8080'));
