import "./Welcome.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import { useEffect } from "react";

import supabase from "./createClient";

const Welcome = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchItem,setSearchItem] = useState('')
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data } = await supabase.from("Products").select("*") ;
    
    setProducts(data);
  };



  const sorted = [...products].sort((a, b) => {

 

    
    const nameA = a.Title.toLowerCase();
    const nameB = b.Title.toLowerCase();

  
    if (nameA > nameB) return  sortAsc ? 1 : -1;
    if (nameA < nameB) return  sortAsc ? -1 : 1;
    return 0;
  
});

  const handleSearchItem = (event) =>{
      setSearchItem(event.target.value)
  }

  const filteredProducts = sorted.filter(product =>{

   const productTitle = product.Title.toLowerCase().includes(searchItem.toLowerCase());
   const productPrice = product.price.toString().includes(searchItem);
   return productTitle || productPrice;
  }
  );
 

  return (
    <div className="bg-gray-200  w-300 font-bold flex-col ">
      <h2 className="text-xl p-5 mb-4 underline text-center bg-gray-400 ">Products</h2>
      <div className="flex  justify-center ">
  <div className="relative w-full max-w-sm">
    <input
      className="w-full pl-10 pr-3 py-2 border font-semibold border-gray-400 rounded-md"
      type="text"
      placeholder="Search Products"
      value={searchItem}
      onChange={handleSearchItem}
    />
    <img
      src="magnifying-glass-solid.svg"
      alt="Search"
      width={16}
      className="absolute left-3 top-1/2 transform -translate-y-1/2"
    />
  </div>
</div>


      <table className="w-full table-auto b " >
        <thead className="bg-grey-50 border-b-2 border-gray-400 ">
          <tr>
            <th className=" p-3 text-sm font-semibold ">ID</th>
            <th className="p-3 text-sm font-semibold">Product</th>
            <th className="p-3 text-sm font-semibold">Price</th>
            <th className="p-3 text-sm font-semibold">Image</th>
          </tr>
        </thead>

        <tbody className="p-3 mb-2 text-sm border-b-2 font-semibold text-left">
          {filteredProducts.map((product,index) => (
            <tr key={product.id} className={index % 2 === 0 ? "bg-white" : 'bg-gray'}>
              <td  className="p-5  text-sm border-b-2 border-gray-400 font-semibold text-center " >{index + 1}</td>
              <td  className="p-3  text-sm border-b-2 border-gray-400 font-semibold text-center ">{product.Title}</td>
              <td className="p-3  text-sm border-b-2 border-gray-400 font-semibold text-center">{product.price}</td>
              <td className="border-b-2 border-gray-400 ">
                <img src={product.Image}  width="100" className="mx-auto" />
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Welcome;
