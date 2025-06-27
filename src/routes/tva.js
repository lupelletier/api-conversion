import { Router } from 'express';
import calculateTTC from '../services/tvaService.js';

const router = Router();

// Route for calculating total amount including tax (TTC)
router.get('/', (req, res) => {
    const ht = req.query.ht;
    const taux = req.query.taux;
    // Check if parameters are provided
    if (ht === undefined || taux === undefined) {
        return res.status(400).json({ error: 'Missing required parameters: ht and taux.' });
    }
    const nHt = Number(ht);
    const nTaux = Number(taux);
    // Validate input
    if (isNaN(nHt)) {
        return res.status(400).json({ error: 'Invalid input: HT must be a non-negative value.' });
    }
    if (isNaN(nTaux)) {
        return res.status(400).json({ error: 'Invalid input: Tax rate must be a non-negative value.' });
    }
    if (nHt < 0) {
        return res.status(400).json({ error: 'Invalid input: HT must be a non-negative value.' });
    }
    if (nTaux < 0) {
        return res.status(400).json({ error: 'Invalid input: Tax rate must be a non-negative value.' });
    }
    const result = calculateTTC(nHt, nTaux);
    res.json(result);
});

export default router;