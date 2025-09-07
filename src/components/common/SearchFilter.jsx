import React, { useEffect } from "react";
import myData from "../../data/products.json";
import { CartCard } from "./CartItemCard";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
function SearchFilter({ searchInput, setSearchItems, searchItems }) {
  useEffect(() => {
    if (searchInput != "") {
      setSearchItems(
        myData.filter(({ text }) => {
          return text.toLowerCase().startsWith(searchInput.toLowerCase());
        })
      );
    } else {
      setSearchItems([]);
    }
  }, [searchInput]);
  console.log(searchItems);
  return (
    <>
      <div>
        {searchItems.map(
          ({ img, text, price, discount, rating, star }, ids) => (
            <div key={ids} className="relative">
              <ProductCard
                className={
                  "hover:shadow-xl h-auto cursor-pointer flex items-center gap-3 w-full"
                }
                img={<img src={img} className="w-[170px] object-cover"></img>}
                price={price}
                discount={discount}
                star={
                  <div className="flex items-center gap-1">
                    {star.map((item, i) => (
                      <div key={i}>
                        <img src={item} alt="" className="w-3 mt-2" />
                      </div>
                    ))}
                    <div className="text-xs mt-2 font-medium text-[#9e9e9e] font-noto">
                      {`(${rating})`}
                    </div>
                  </div>
                }
                text={text}
              />
              <Link
                to={"/viewItem"}
                className="absolute top-0 left-0 h-full w-full cursor-pointer"
                id={ids + 1}
              ></Link>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default SearchFilter;
