import { Router } from 'express';
import calculateFinalPrice from '../services/remiseService.js';

const router = Router();

router.get('/', (req, res) => {
    const prix = Number(req.query.prix);
    const pourcentage = Number(req.query.pourcentage);
    if (isNaN(prix) || isNaN(pourcentage) || prix < 0 || pourcentage < 0) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const prixFinal = calculateFinalPrice(prix, pourcentage);
    res.json({
        prixInitial: prix,
        pourcentage,
        prixFinal
    });
});

export default router;