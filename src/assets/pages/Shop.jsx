import "bootstrap/dist/css/bootstrap.css";
import AddToCart from '../components/AddToCart'

export default function Shop() {
  return (
    <div className="m-5">
      <AddToCart item="Shoe"/>
      <AddToCart item="Bag"/>
      <AddToCart item="Utensils"/>
      <AddToCart item="Books"/>
      <AddToCart item="Furniture"/>
    </div>
  );
}
