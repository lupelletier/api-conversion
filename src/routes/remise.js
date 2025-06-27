import { Router } from 'express';
import calculateFinalPrice from '../services/remiseService.js';

const router = Router();

router.get('/', (req, res) => {
    const prix = Number(req.query.prix);
    const pourcentage = Number(req.query.pourcentage);
    if (isNaN(prix) || isNaN(pourcentage)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    try {
        const prixFinal = calculateFinalPrice(prix, pourcentage);
        res.json({
            prixInitial: prix,
            pourcentage,
            prixFinal
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

export default router;