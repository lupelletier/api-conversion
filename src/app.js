import express, { json } from 'express';
import convertRoutes from './routes/convert.js';
import tvaRoutes from './routes/tva.js';
import remiseRoutes from './routes/remise.js';

const app = express();

app.use(json());

app.use('/convert', convertRoutes);
app.use('/tva', tvaRoutes);
app.use('/remise', remiseRoutes);

export default app;