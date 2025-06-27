import request from 'supertest';
import app from '../../src/app.js';
import { jest } from '@jest/globals';
jest.useFakeTimers();

describe('End-to-End Tests', () => {
  it('should convert currency and calculate TVA', async () => {
    // Step 1: Convert currency
    const conversionResponse = await request(app)
      .get('/convert?from=EUR&to=USD&amount=100')
      .expect(200);

    expect(conversionResponse.body).toEqual({
      from: 'EUR',
      to: 'USD',
      originalAmount: 100,
      convertedAmount: 110,
    });

    const convertedAmount = conversionResponse.body.convertedAmount;

    // Step 2: Calculate TVA on the converted amount
    const tvaResponse = await request(app)
      .get(`/tva?ht=${convertedAmount}&taux=20`)
      .expect(200);

    expect(tvaResponse.body).toEqual({
      ht: convertedAmount,
      taux: 20,
      ttc: 132,
    });
  });

  it('should apply discount on a price', async () => {
    const originalPrice = 100;
    const discountPercentage = 10;

    const remiseResponse = await request(app)
      .get(`/remise?prix=${originalPrice}&pourcentage=${discountPercentage}`)
      .expect(200);

    expect(remiseResponse.body).toEqual({
      prixInitial: originalPrice,
      pourcentage: discountPercentage,
      prixFinal: 90,
    });
  });
});