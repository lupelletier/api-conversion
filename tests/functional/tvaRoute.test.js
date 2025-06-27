import request from 'supertest';
import app from '../../src/app.js';

describe('GET /tva', () => {
    it('should return the total amount including tax for valid input', async () => {
        const response = await request(app)
            .get('/tva?ht=100&taux=20');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            ht: 100,
            taux: 20,
            ttc: 120
        });
    });

    it('should return 400 for negative HT value', async () => {
        const response = await request(app)
            .get('/tva?ht=-100&taux=20');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Invalid input: HT must be a non-negative value.'
        });
    });

    it('should return 400 for negative tax rate', async () => {
        const response = await request(app)
            .get('/tva?ht=100&taux=-20');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Invalid input: Tax rate must be a non-negative value.'
        });
    });

    it('should return 400 for missing parameters', async () => {
        const response = await request(app)
            .get('/tva');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'Missing required parameters: ht and taux.'
        });
    });

    it('should return 400 for non-numeric HT', async () => {
        const response = await request(app)
            .get('/tva?ht=abc&taux=20');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
        error: 'Invalid input: HT must be a non-negative value.'
    });
});

it('should return 400 for non-numeric tax rate', async () => {
    const response = await request(app)
        .get('/tva?ht=100&taux=abc');
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
        error: 'Invalid input: Tax rate must be a non-negative value.'
    });
});
});
