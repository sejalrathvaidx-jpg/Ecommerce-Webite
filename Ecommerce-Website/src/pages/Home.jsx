import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products"; 

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-banner container">
        <div className="banner-content">
          <h1>Grab Upto 50% Off On Selected Headphone</h1>
          <button className="banner-btn" onClick={() => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }}>Buy Now</button>
        </div>

        <div className="banner-image">
          <img src="/public/assets/girl-headphone.png" alt="Headphones" />
        </div>
      </div>
      <div className="container" id="products">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}