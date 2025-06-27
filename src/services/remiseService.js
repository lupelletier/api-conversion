export default function calculateFinalPrice(originalPrice, discountPercentage) {
    if (originalPrice < 0) {
        throw new Error("Invalid input: price cannot be negative");
    }
    if (discountPercentage < 0) {
        throw new Error("Invalid input: discount percentage cannot be negative");
    }
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
}