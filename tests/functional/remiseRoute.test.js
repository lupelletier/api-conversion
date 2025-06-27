import request from 'supertest';
import app from '../../src/app.js';

describe('GET /remise', () => {
    it('should return the final price after discount', async () => {
        const response = await request(app)
            .get('/remise?prix=100&pourcentage=10');
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            prixInitial: 100,
            pourcentage: 10,
            prixFinal: 90
        });
    });

    it('should return 400 for negative price', async () => {
        const response = await request(app)
            .get('/remise?prix=-100&pourcentage=10');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input: price cannot be negative' });
    });

    it('should return 400 for negative percentage', async () => {
        const response = await request(app)
            .get('/remise?prix=100&pourcentage=-10');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input: discount percentage cannot be negative' });
    });

    it('should return 400 for missing parameters', async () => {
        const response = await request(app)
            .get('/remise');
        
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid input' });
    });
});