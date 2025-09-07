import React from "react";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
function SearchFoundItems({ searchItems }) {

    console.log(searchItems)
  return (

        <div className="flex items-center justify-center flex-wrap gap-4 ">
          {searchItems.map(
            ({ img, text, price, discount, rating, star }, ids) => (
              <div key={ids} className="relative">
                <ProductCard
                  className={
                    "hover:shadow-xl cursor-pointer h-72 w-48"
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
  );
}

export default SearchFoundItems;
