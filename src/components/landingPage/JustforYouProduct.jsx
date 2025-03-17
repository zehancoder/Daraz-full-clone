import { Container } from "../common/Container";
import myData from "../../data/products.json";
import { ProductCard } from "../common/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
export const ForyouProduct = () => {
  const [newEle, setNewEle] = useState(20);
  const [load, setLoad] = useState(false);
  const slice = myData.slice(0, newEle);
  const loadMore = () => {
    setLoad(true);
    setTimeout(() => {
      setNewEle(newEle + 10);
      setLoad(false);
      newEle == myData.length ? setNewEle(20) : "";
    }, 1000);
  };


  return (
    <>
      <div className="px-3 md:px-0 md:mt-0 mt-5">
        <Container className={"py-5"}>
          <h1 className="text-xl md:text-2xl mb-2 font-medium font-noto text-mediumGray">
            Just For You
          </h1>
          <div className="flex items-center gap-3 flex-wrap space-y-4">
            {slice.map(({ img, price, discount, rating, star, text }, i) => (
              <div key={i}>
                <Link key={i} to={"/forYouItem"} className="xl:mx-0 mx-auto">
                  <ProductCard
                    className={"hover:shadow-xl w-[203px]"}
                    img={
                      <img src={img} className="w-full h-40 object-cover"></img>
                    }
                    price={price}
                    discount={discount}
                    star={
                      <div  className="flex items-center gap-1">
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
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center mt-14">
            <button
              onClick={loadMore}
              className={`mx-auto cursor-pointer py-2 px-3 uppercase text-[15px] font-[400] text-[#1a9cb8] font-noto w-[250px] md:w-[400px] ${
                newEle == myData.length || load ? "border-none" : "border"
              } border-[#1a9cb8] `}
            >
              {load ? (
                <img className="h-10 w-10 mx-auto" src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01dmW7OR1TUNRMBH0P4_!!6000000002385-1-tps-200-200.gif"/>
              ) : newEle == myData.length ? (
                <p className="text-xs font-[400]  text-black font-noto capitalize">
                  You have reached the end. Do a search to keep exploring!
                </p>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};
