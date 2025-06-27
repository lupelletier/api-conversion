export default function convertCurrency(from, to, amount) {
    const conversionRates = {
        EUR: { USD: 1.1 },
        USD: { EUR: 1 / 1.1, GBP: 0.8 },
        GBP: { USD: 1 / 0.8 }
    };

    if (amount < 0) {
        throw new Error("Amount must be a positive number");
    }

    if (!conversionRates[from] || !conversionRates[from][to]) {
        throw new Error("Invalid currency conversion.");
    }

    let convertedAmount = amount * conversionRates[from][to];
    convertedAmount = Math.round(convertedAmount * 100) / 100;
    return {
        from,
        to,
        originalAmount: amount,
        convertedAmount
    };
}