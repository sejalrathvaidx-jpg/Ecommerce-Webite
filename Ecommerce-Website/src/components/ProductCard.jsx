import { Link, useNavigate  } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-content">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-price">${product.price}</p>
          <div className="product-card-actions">
            <button
              className="btn banner-btn"
              onClick={(e) => {
                e.preventDefault(); // ⛔ prevent navigation
                addToCart(product.id);
                navigate("/checkout");
              }}
            >
              Add to Cart  
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}