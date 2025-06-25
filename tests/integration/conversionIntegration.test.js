import request from 'supertest';
import app from '../../src/app.js';

describe('Integration Tests for Currency Conversion', () => {
  it('should convert EUR to USD', async () => {
    const response = await request(app)
      .get('/convert?from=EUR&to=USD&amount=100');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      from: 'EUR',
      to: 'USD',
      originalAmount: 100,
      convertedAmount: 110,
    });
  });

  it('should convert USD to GBP', async () => {
    const response = await request(app)
      .get('/convert?from=USD&to=GBP&amount=100');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      from: 'USD',
      to: 'GBP',
      originalAmount: 100,
      convertedAmount: 80,
    });
  });

  it('should return 400 for negative amount', async () => {
    const response = await request(app)
      .get('/convert?from=EUR&to=USD&amount=-100');

    expect(response.status).toBe(400);
  });

  it('should return 400 for invalid currency', async () => {
    const response = await request(app)
      .get('/convert?from=INVALID&to=USD&amount=100');

    expect(response.status).toBe(400);
  });
});