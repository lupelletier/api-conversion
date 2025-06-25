import convertCurrency from '../../src/services/conversionService.js';

describe('Conversion Service', () => {
  test('should convert EUR to USD correctly', () => {
    const result = convertCurrency('EUR', 'USD', 100);
    expect(result).toEqual({
      from: 'EUR',
      to: 'USD',
      originalAmount: 100,
      convertedAmount: 110,
    });
  });
  test('should convert USD to GBP correctly', () => {
    const result = convertCurrency('USD', 'GBP', 100);
    expect(result).toEqual({
      from: 'USD',
      to: 'GBP',
      originalAmount: 100,
      convertedAmount: 80,
    });
  });
  test('should convert USD to EUR correctly', () => {
    const result = convertCurrency('USD', 'EUR', 110);
    expect(result).toEqual({
      from: 'USD',
      to: 'EUR',
      originalAmount: 110,
      
    });
  });

  test('should throw error for negative amount', () => {
    expect(() => convertCurrency('EUR', 'USD', -100)).toThrow();
  });

  test('should throw error for unsupported currency', () => {
    expect(() => convertCurrency('EUR', 'JPY', 100)).toThrow();
  });
});