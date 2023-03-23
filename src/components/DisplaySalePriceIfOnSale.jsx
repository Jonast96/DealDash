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
