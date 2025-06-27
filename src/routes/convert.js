import { Router } from 'express';
import convertCurrency from '../services/conversionService.js';

const router = Router();

router.get('/', (req, res) => {
    const { from, to, amount } = req.query;
    const numAmount = Number(amount);
    if (!from || !to || isNaN(numAmount) || numAmount < 0) {
        return res.status(400).json({ error: 'Amount must be a positive number' });
    }
    try {
        const result = convertCurrency(from, to, numAmount);
        res.json(result);
    } catch (e) {
        if (e.message === 'Invalid currency conversion.') {
            res.status(400).json({ error: 'Invalid currency provided' });
        } else {
            res.status(400).json({ error: e.message });
        }
    }
});

export default router;