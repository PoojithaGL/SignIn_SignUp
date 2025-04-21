import "./Welcome.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import { useEffect } from "react";

import supabase from "./createClient";

const Welcome = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await supabase.from("Products").select("*") ;
    setProducts(data);
  };

 

  return (
    <div className="Welcome">
      Products
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.Title}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.Image}  width="100" />
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Welcome;
