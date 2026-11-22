import { useEffect, useState } from "react";
import apiClient from "../axiosConfig";

import iphone from "./images/iphone.jpg";
import headphones from "./images/headphones.jpg";
import chair from "./images/chair.png";
import lappy from "./images/lappy.jpg";
import keyboard from "./images/keyboard.jpg";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const images = [lappy, headphones, chair, iphone, keyboard];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiClient.get("/products");
        setProducts(response.data);
      } catch (error) {
        setError("failed to load products, try again later");
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products... </p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="wholePage">
      <h2>Static products </h2>
      <div>
        {images.map((product, index) => (
          <img
            src={product}
            key={index}
            width={200}
            height={200}
            alt="product image"
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
