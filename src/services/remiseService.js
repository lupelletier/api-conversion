export default function calculateFinalPrice(originalPrice, discountPercentage) {
    if (originalPrice < 0 || discountPercentage < 0) {
        throw new Error("Original price and discount percentage must be non-negative.");
    }
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
}