import calculateTTC from '../../src/services/tvaService.js';

describe('TVA Service', () => {
    test('should calculate TTC correctly for given HT and taux', () => {
        const ht = 100;
        const taux = 20;
        const expectedTtc = 120;

        const result = calculateTTC(ht, taux).ttc;
        expect(result).toBe(expectedTtc);
    });

    test('should return 0 for 0 HT', () => {
        const ht = 0;
        const taux = 20;
        const expectedTtc = 0;

        const result = calculateTTC(ht, taux).ttc;
        expect(result).toBe(expectedTtc);
    });

    test('should throw error for negative HT', () => {
        const ht = -100;
        const taux = 20;

        expect(() => calculateTTC(ht, taux)).toThrow('Invalid amount');
    });

    test('should throw error for negative taux', () => {
        const ht = 100;
        const taux = -20;

        expect(() => calculateTTC(ht, taux)).toThrow('Invalid tax rate');
    });
});