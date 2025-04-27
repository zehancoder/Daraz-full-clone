import { Container } from "../../common/Container";
import myData from "../../../data/products.json";
import { ProductCard } from "../../common/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Massege } from "../../common/Massege";
import { CategoryHeader } from "../../CategoryHeader";

export const ShopAllItem = (props) => {
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
  const [itemId, setItemId] = useState(false);
  const [click, setClick] = useState(false);
  const findClickItem = (e) => {
    if (parseInt(e.target.id) >= 0) {
      setClick(true);

      setItemId(parseInt(e.target.previousElementSibling.id));
    }
  };
  props.IdHandler(itemId)
//   const closeViewItem = () => {
//     setClick(false);
//   };

  return (
    <>
    <CategoryHeader/>
      <div className={`px-3 xl:px-0 md:mt-0 mt-5 ${click ? "blur-sm " : ""} `}>
        <Container className={"py-5"}>
          <div
            className="flex items-center gap-3 flex-wrap space-y-4"
            onClick={(e) => {
              findClickItem(e);
            }}
          >
            {slice.map(({ img, price, discount, rating, star, text }, i) => (
              <div key={i} className="relative xl:mx-0 mx-auto">
                <div key={i} className="xl:mx-0 mx-auto" id={i}>
                  <ProductCard
                    className={"hover:shadow-xl h-auto w-[170px] cursor-pointer"}
                    img={
                      <img src={img} className="w-full h-40 object-cover"></img>
                    }
                    price={price}
                    
                    star={
                      //ACTUAL PRICE
                      <div className="flex items-center gap-2">
                        <p className="text-[#9e9e9e] text-[12px] line-through ">{parseInt(rating) > 500 ? parseInt(rating) + 200 : parseInt(rating) + 400}</p>
                        <p className="bg-[#d3232a] px-0.5  py-0.5 font-noto text-[10px] text-white">{discount}</p>
                      </div>
                    }
                    text={text}
                  />
                </div>
                <Link to={"/viewItem"}
                  className="absolute top-0 left-0 h-full w-full cursor-pointer"
                  id={i + 1}
                ></Link>
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
                <img
                  className="h-10 w-10 mx-auto"
                  src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01dmW7OR1TUNRMBH0P4_!!6000000002385-1-tps-200-200.gif"
                />
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
      {/* View Product */}
      <div
        className={`fixed h-[100vh] top-0 right-0 transform transition duration-200 w-[100%] bg-[#eff0f5]   ${
          click ? "translate-[0%]" : "translate-[140%]"
        } `}
      >
        <div className="md:h-32 h-16"></div>
        <div></div>

        {/* Category Header */}
        <CategoryHeader />

        {/* item viewer */}
        {/* <ViewItem closeViewItem={closeViewItem} /> */}

        {/* <Container>
          {click ? (
            <div className="">
              <div
                className="  mb-4 mt-2 text-orange md:mt-5 cursor-pointer text-3xl font-bold"
                onClick={closeViewItem}
              >
                <FaAngleLeft />
              </div>
              <ProductCard
                className={
                  "flex md:flex-row flex-col w-[97%] h-auto md:h-52 items-center gap-3 "
                }
                text={myData[itemId].text}
                img={
                  <div className="w-[200px] h-48">
                    <img
                      className="h-full w-full object-contain"
                      src={myData[itemId].img}
                    ></img>
                  </div>
                }
                discount={myData[itemId].discount}
                price={myData[itemId].price}
                star={
                  <div className="flex items-center gap-1 ">
                    {myData[itemId].star.map((item, i) => (
                      <div key={i}>
                        <img src={item} alt="" className="w-3 mt-2" />
                      </div>
                    ))}
                    <div className="text-xs mt-2 font-medium text-[#9e9e9e] font-noto">
                      {`(${myData[itemId].rating})`}
                    </div>
                  </div>
                }
              />
            </div>
          ) : (
            ""
          )}
        </Container> */}
      </div>
      {/* MASSEGE BOX */}
      <Massege />
    </>
  );
};
