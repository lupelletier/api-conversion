export function validateAmount(amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Invalid amount: must be a non-negative number');
    }
}

export function validatePercentage(percentage) {
    if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
        throw new Error('Invalid percentage: must be a number between 0 and 100');
    }
}