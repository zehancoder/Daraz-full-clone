import { Container } from "./Container";
import Slider from "react-slick";
import myData from "../../data/products.json";
import { IoCloseOutline } from "react-icons/io5";

import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebook,
  FaMinus,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BuyBTn, SellBTn } from "./ProductButtons";
import { ProductLeftInfos } from "./ProductLeftInfo";
import { CategoryHeader } from "../CategoryHeader";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      ></div>
      <FaAngleLeft
        style={{}}
        className="absolute top-[50%] -left-5 text-lg transform -translate-y-[50%] cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      ></div>
      <FaAngleRight
        style={{}}
        className="absolute top-[50%] -right-5 text-lg transform -translate-y-[50%] cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}
export const ViewItem = ({
  productId,
  handleCartItems,
  handleCart,
  setloginStart,
  load,
  setLoad,
  loginSuccess,
  addingMassege,
  setaddingMassege
}) => {
  //slider functionality
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // fanctionality end

  const [favouriteItem, setFavouriteItem] = useState(false);
  const favourite = () => {
    setFavouriteItem(!favouriteItem);
  };
  const [shareDiv, setShareDiv] = useState(false);
  const openShareDiv = () => {
    setShareDiv(!shareDiv);
  };

  // productItem

  let { img, text, price, discount, rating, star, allImages } =
    myData[productId];

  // quantity
  const [Itemquantity, setQuantity] = useState(1);
  const quantityUp = () => {
    Itemquantity >= 15 ? setQuantity(15) : setQuantity(Itemquantity + 1);
  };
  const quantityDown = () => {
    Itemquantity == 1 ? setQuantity(1) : setQuantity(Itemquantity - 1);
  };

  //hover iamge track
  const [hoverImgSrc, setHoverImgSrc] = useState(null);
  const hoverImage = (e) => {
    setHoverImgSrc(e.target.src);
  };
  const mouseLeave = () => {
    setHoverImgSrc(null);
  };

  // items adding system
  const AddToCart = () => {
    handleCartItems(productId);
    handleCart(productId);
    setLoad(true);
    loginSuccess
      ? setLoad(false)
      : setTimeout(() => {
          setLoad(false);
          setloginStart(true);
        }, 300);
  };
  // item added massege
  const addedHandle =() => {
    loginSuccess && setaddingMassege(true)
  }
  return (
    <>
      <CategoryHeader />
      <div>
        <Container className="bg-white justify-between px-2 py-4 flex xl:flex-row  flex-col">
          <div className="flex md:flex-row flex-col gap-2 w-full xl:w-[70%] pb-6">
            <div
              className="w-[90%]  mx-auto md:w-[40%] ml-5"
              onMouseLeave={mouseLeave}
            >
              <div className="h-96 md:w-[80%]">
                <img
                  src={hoverImgSrc == null ? img : hoverImgSrc}
                  alt=""
                  className="w-full h-full object-contain pb-2 border-b border-gray-200"
                />
                {/* {myData[2].img} */}
              </div>
              <div className=" slider-container mt-2 w-[200px] md:mx-0 mx-auto md:w-[300px]">
                <Slider {...settings} className="space-x-2 ">
                  {/* product all images */}
                  {allImages.map((img, i) => (
                    <div key={i} className="h-16 w-5 cursor-pointer">
                      <img
                        src={img}
                        className="bg-contain w-full h-full object-contain -z-20"
                        onMouseOver={hoverImage}
                      ></img>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="w-[100%] md:w-[60%] px-3 text-center md:text-start md:mx-0 mx-auto">
              <div className="w-full border-b border-gray-200">
                <h1 className="font-noto text-[16px] md:py-0 py-4 md:mt-4 mt-4 md:text-xl font-[400] text-[#212121] max-w-lg">
                  {/* text */}
                  {text}
                </h1>
                <div className="flex items-center justify-between mt-3 md:mt-5">
                  {/* star with rating */}
                  <div className="flex items-center justify-center gap-1">
                    {star.map((starImg) => (
                      <img src={starImg} alt="" className=" w-3" />
                    ))}
                    <p className="text-[13px] ml-3 mt-1 font-[400] font-noto text-[#136cff]">
                      Rating {rating}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <CiShare2
                        onClick={openShareDiv}
                        className="cursor-pointer text-gray-400 text-2xl"
                      />
                      <div
                        className={`${
                          shareDiv ? "block" : "hidden"
                        } bg-white md:mt-2 px-3 py-2  customShadow h-28 w-52 md:right-0 right-2  absolute z-50 text-3xl font-bold font-roboto `}
                      >
                        <p className="text-[14px] text-[#202020] md:text-[16px] font-noto font-normal mt-5 px-3">
                          Share Via:
                        </p>
                        <div className="absolute top-0 right-3 md:right-4 h-10 md:h-16 w-10 md:w-16 rotate-[135deg] bg-white customBorder"></div>
                        <div className="flex items-center justify-around mt-3">
                          <Link
                            className="transform transition duration-200 hover:scale-105 hover:-translate-0.5"
                            to="https://www.facebook.com/"
                          >
                            <img
                              className="w-8 "
                              src="https://img.lazcdn.com/us/media/757a279866786e7ad865f47ea86a8b2b-396-396.png_80x80q80.png_.webp"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="transform transition duration-200 hover:scale-105 hover:-translate-0.5"
                            to="https://www.whatsapp.com/"
                          >
                            <img
                              className="w-8 "
                              src="https://img.lazcdn.com/us/media/1c7bd6703f72e9313ce8df74e11438af-396-396.png_80x80q80.png_.webp"
                              alt=""
                            />
                          </Link>
                          <Link
                            className="transform transition duration-200 hover:scale-105 hover:-translate-0.5"
                            to="https://x.com/?lang=en"
                          >
                            <img
                              className="w-8 "
                              src="https://img.lazcdn.com/us/media/65a5210f010d98456396e5264152d40d-396-396.png_80x80q80.png_.webp"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <i
                      className={` fa-heart cursor-pointer text-xl text-gray-400 ${
                        favouriteItem ? "text-red-500 fa-solid" : "fa-regular"
                      }`}
                      onClick={favourite}
                    />
                  </div>
                </div>
                <div>
                  <div className="py-2">
                    <p className="text-[13px] text-[#136cff] font-medium my-3">
                      <span className="text-gray-500 ">Brand: </span>{" "}
                      <span className="cursor-pointer hover:border-b border-b-[#136cff]">
                        No Brand
                      </span>{" "}
                      <span className="font-extralight text-sm"> |</span>{" "}
                      <span className="cursor-pointer hover:border-b border-b-[#136cff]">
                        More Wearable Technology from No Brand
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-2 border-b border-gray-200">
                <p className="text-lg font-medium text-[#f57224] font-noto md:text-3xl ">
                  <span className="">৳</span> {price}
                </p>
                <p className="text-sm font-noto  md:text-[15px] text-[#9e9e9e]">
                  <span className="line-through">৳ 1900</span>{" "}
                  <span className="text-[#212121]">{discount}</span>
                </p>
              </div>
              <div className="py-2">
                <p className="text-[13px] md:text-[14px] font-[400] font-noto text-[#757575]">
                  Color Family{" "}
                  <span className="ml-3 text-[14px] text-[#9e9e9e] font-light">
                    Please select the option
                  </span>
                </p>
                <div className="flex items-center justify-center md:max-w-[30%]  py-2">
                  <img
                    src={allImages[1]}
                    className="w-12 border border-gray-200 hover:border-gray-700 cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
              {/* quantity */}
              <div>
                <div className="flex items-center w-[80%] md:max-w-[50%] mt-4 ml-4 justify-between">
                  <p className="text-[14px] select-none  md:text-[15px] font-noto font-[400] text-[#757575]">
                    Quantity
                  </p>
                  <div className="w-40 flex items-center">
                    <div
                      className={`text-[14px] font-noto py-2 px-3 font-extralight cursor-pointer ${
                        Itemquantity > 1 ? "bg-gray-300" : "bg-gray-100"
                      }`}
                      onClick={quantityDown}
                    >
                      <FaMinus />
                    </div>
                    <div className="px-4 py-2 select-none">{Itemquantity}</div>
                    <div
                      className={`"text-xl font-noto px-3 py-2 font-bold cursor-pointer  ${
                        Itemquantity == 15 ? "bg-gray-100" : "bg-gray-300"
                      }`}
                      onClick={quantityUp}
                    >
                      <IoMdAdd />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3">
                <div className="w-[40%]" onClick={AddToCart}>
                  <BuyBTn className={"w-full"} />
                </div>
                <div className="w-[40%]" onClick={AddToCart}>
                  <SellBTn className={"w-full"} />
                </div>
              </div>
            </div>
          </div>
          {/* location & product information */}
          <ProductLeftInfos />
        </Container>
        {load ? (
          <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] h-12 w-12">
            <img
              src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01dmW7OR1TUNRMBH0P4_!!6000000002385-1-tps-200-200.gif"
              alt=""
            />
          </div>
        ) : (
          ""
        )}

        <div
          className={`absolute transform  top-[30%] left-[50%] -translate-x-[50%] -translate-y-[30%]   ${
            addingMassege ? "hidden" : "block fullShadow"
          }`}
        >
          <div className="relative w-[60vw] md:py-16 bg-white z-50">
            <p className="flex gap-2 items-center  md:py-3 py-6 border border-gray-300 md:px-7 px-5 text-[#4caf50] font-normal text-[15px] md:text-xl">
            <img className="w-4 md:w-6" src="/images/icons/added.png" alt="" />
            Added to cart successfully!
          </p>
          <IoCloseOutline className="absolute top-4 right-4 md:text-2xl text-xl" onClick={addedHandle}/>
          </div>
        </div>
      </div>
    </>
  );
};
