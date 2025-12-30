import React, { useState } from "react";

function EcommerceApp() {
  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Mobile Phone", price: 18000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart 🛒`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-Commerce Product Listing</h2>

      {/* Product List */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "15px",
              width: "200px",
              borderRadius: "8px"
            }}
          >
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <hr />

      {/* Cart Section */}
      <h3>Cart Items</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EcommerceApp;
