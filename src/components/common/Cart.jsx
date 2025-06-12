import { useEffect, useState } from "react";
import myData from "../../data/products.json";
import { ProductCard } from "./ProductCard";
import { CategoryHeader } from "../CategoryHeader";
import { CartCard } from "./CartItemCard";

export const CartWorking = ({ addingProduct }) => {

  let codes = 1;
  return (
    <>
    <CategoryHeader/>
      <div className=" ">
        {
          addingProduct.map((ids) => (
            <div className="mt-2">
              {/* {
                myData[ids].text
              } */}

              <CartCard img={myData[ids].img} text={myData[ids].text} codes={codes += codes} cateImg={Math.floor(Math.random() * 2)}/>
            </div>

            
          ))
        }
      </div>
    </>
  );
};
