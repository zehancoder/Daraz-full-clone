import { useState } from "react";
import myData from "../../data/products.json";
import { ProductCard } from "./ProductCard";
export const CartWorking = ({ addingProduct, cartItems }) => {

  
 
  return (
    <>
      <div>
        {
          addingProduct != "" ? <div className="absolute top-[50%]">{myData[ProductCard.forEach((ids) => {return ids})].text}</div>: console.log("hi")
        }
      </div>
    </>
  );
};


