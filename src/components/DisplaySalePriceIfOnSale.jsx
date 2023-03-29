/**
 * Displays the sale price of a product if it is on sale.
 * @param {Object} props - The props object.
 * @param {number} props.salePrice - The sale price of the product.
 * @param {number} props.normalPrice - The normal price of the product.
 * @returns {JSX.Element} The component that displays the sale price.
 */
export default function DisplaySalePriceIfOnSale(props) {
  return (
    <div>
      {props.salePrice === props.normalPrice ? (
        `${props.normalPrice.toFixed(2)},-`
      ) : (
        <span>{props.salePrice.toFixed(2)},-</span>
      )}
    </div>
  );
}
