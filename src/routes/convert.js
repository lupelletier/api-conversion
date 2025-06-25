import { Router } from 'express';
import convertCurrency from '../services/conversionService.js';

const router = Router();

router.get('/', (req, res) => {
    const { from, to, amount } = req.query;
    const numAmount = Number(amount);
    if (!from || !to || isNaN(numAmount) || numAmount < 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    try {
        const convertedAmount = convertCurrency(from, to, numAmount);
        res.json({
            from,
            to,
            originalAmount: numAmount,
            convertedAmount
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

export default router;