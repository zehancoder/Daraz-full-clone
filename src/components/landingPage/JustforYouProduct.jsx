import { Container } from "../common/Container";
import myData from "../../data/products.json";
import { ProductCard } from "../common/ProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ForYouItem } from "./LinkingPages/ForyouItem";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
  const [itemId, setItemId] = useState(false);
  const [click, setClick] = useState(false);
  const findClickItem = (e) => {
    setClick(true);

    setItemId(parseInt(e.target.previousElementSibling.id));
  };
  const closeViewItem = () => {
    setClick(false);
  };
  const [massegeBox, setMassegeBox] = useState(false);
  const massegeChange = () => {
    setMassegeBox(!massegeBox);
  };
  return (
    <>
      <div className={`px-3 xl:px-0 md:mt-0 mt-5 ${click ? "blur-sm " : ""} `}>
        <Container className={"py-5"}>
          <h1 className="text-xl md:text-2xl mb-2 font-medium font-noto text-mediumGray">
            Just For You
          </h1>
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
                    className={"hover:shadow-xl w-[203px] cursor-pointer"}
                    img={
                      <img src={img} className="w-full h-40 object-cover"></img>
                    }
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
                </div>
                <div
                  className="absolute top-0 left-0 h-full w-full cursor-pointer"
                  id={i + 1}
                ></div>
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
      <div
        className={`fixed h-[100vh] top-0 right-0 transform transition duration-200 w-[100%] bg-[#f85606]  p-4 ${
          click ? "translate-[0%]" : "translate-[140%]"
        } `}
      >
        <div className="md:h-32 h-16"></div>
        <div></div>
        {click ? (
          <div className="">
            <div
              className=" lg:mb-12 mb-4 md:mb-8 cursor-pointer text-white text-3xl font-bold"
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
      </div>
      <div className="fixed bottom-0 right-0 md:right-12 text-[#044254] ">
        <div
          className={`h-[450px] relative bg-[#f9f9f9] transition duration-200 shadows  ${
            massegeBox ? "scale-100 md:w-[650px] w-full" : "scale-0 w-0"
          } origin-bottom-right`}
        >
          <div className="flex items-center h-full">
            <div className="w-[40%] bg-[#eff0f5] h-full">
              <div
                className={`px-5 border-b border-gray-200 flex items-center gap-3 py-3 text-[#757575] bg-white text-base md:text-lg`}
              >
                <FaMessage />
                <p className=" font-medium">Massege</p>
              </div>
            </div>
            <div className=" w-[60%] h-full border-l border-gray-200">
              <div className="px-5 border-b border-l border-gray-200 flex items-center justify-between py-3 text-gray-700 bg-white font-[400] text-base md:text-lg">
                <p>Daraz</p>

                <IoMdClose className="cursor-pointer" onClick={massegeChange} />
              </div>
              <div className=" flex flex-col items-center justify-end font-roboto h-[60%] bg-[#f9f9f9]">
                <MdEmail className="text-5xl text-gray-400" />
                <div className="mt-5 text-center">
                  <p className="text-[13px] font-[500] text-[#00b5e0]">
                    Use the App for exclusive offers!
                  </p>
                  <p className="text-[#757575] text-[14px] font-[400] mt-1">
                    Once you start a new conversation, you’ll see <br /> it
                    listed here.
                  </p>
                </div>
              </div>
              <div className="h-[40%] bg-white">
                <div className="flex items-center text-[#4c8296] justify-center mt-2">
                  <Link to={"/login"}>Login</Link>/
                  <Link to={"/signup"}>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`px-5 w-[165px] float-end flex items-center gap-3 py-2 bg-white text-lg md:text-xl shadows cursor-pointer ${
            massegeBox ? "hidden" : "block"
          }`}
          onClick={massegeChange}
        >
          <FaMessage />
          <p className=" font-medium">Massege</p>
        </div>
      </div>
    </>
  );
};
