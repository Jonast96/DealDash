/**
 * Calculates the amount saved based on the original price and the discount price.
 *
 * @param {number} originalPrice - The original price of the item.
 * @param {number} discountPrice - The discounted price of the item.
 * @returns {number} The amount saved by the discount.
 */
export default function savedAmountCalculator(originalPrice, discountPrice) {
    const savedAmount = originalPrice - discountPrice;
    return savedAmount;
}
