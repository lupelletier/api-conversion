import calculateFinalPrice from '../../src/services/remiseService.js';

describe('Remise Service', () => {
    test('should calculate final price after discount', () => {
        const prixInitial = 100;
        const pourcentage = 10;
        const expectedPrixFinal = 90;

        const result = calculateFinalPrice(prixInitial, pourcentage);
        expect(result).toBe(expectedPrixFinal);
    });

    test('should return the same price if discount is 0%', () => {
        const prixInitial = 100;
        const pourcentage = 0;
        const expectedPrixFinal = 100;

        const result = calculateFinalPrice(prixInitial, pourcentage);
        expect(result).toBe(expectedPrixFinal);
    });

    test('should throw an error for negative initial price', () => {
        const prixInitial = -100;
        const pourcentage = 10;

        expect(() => {
            calculateFinalPrice(prixInitial, pourcentage);
        }).toThrow('Invalid input: price cannot be negative');
    });

    test('should throw an error for negative discount percentage', () => {
        const prixInitial = 100;
        const pourcentage = -10;

        expect(() => {
            calculateFinalPrice(prixInitial, pourcentage);
        }).toThrow('Invalid input: discount percentage cannot be negative');
    });
});