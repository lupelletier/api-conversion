export default function convertCurrency(from, to, amount) {
    const conversionRates = {
        EUR: { USD: 1.1, GBP: 0.8 },
        USD: { EUR: 0.909, GBP: 0.8 },
        GBP: { EUR: 1.25, USD: 1.25 }
    };

    if (amount < 0) {
        throw new Error("Amount must be a non-negative value.");
    }

    if (!conversionRates[from] || !conversionRates[from][to]) {
        throw new Error("Invalid currency conversion.");
    }

    const convertedAmount = amount * conversionRates[from][to];
    return {
        from,
        to,
        originalAmount: amount,
        convertedAmount: parseFloat(convertedAmount.toFixed(2))
    };
};