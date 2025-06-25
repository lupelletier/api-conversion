import express, { json } from 'express';
import convertRoutes from './routes/convert.js';
import tvaRoutes from './routes/tva.js';
import remiseRoutes from './routes/remise.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/convert', convertRoutes);
app.use('/tva', tvaRoutes);
app.use('/remise', remiseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;