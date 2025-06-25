import { Router } from 'express';
import calculateTTC from '../services/tvaService.js';

const router = Router();

// Route for calculating total amount including tax (TTC)
router.get('/', (req, res) => {
    const ht = Number(req.query.ht);
    const taux = Number(req.query.taux);
    // Validate input
    if (isNaN(ht) || isNaN(taux) || ht < 0 || taux < 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const result = calculateTTC(ht, taux);
    res.json(result);
});

export default router;