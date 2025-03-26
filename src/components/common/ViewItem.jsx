import { Container } from "./Container";
import Slider from "react-slick";
import myData from "../../data/products.json";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

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
export const ViewItem = ({ img, text, star, rating }) => {
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

  const [favouriteItem, setFavouriteItem] = useState(false)
  const favourite = () => {
    setFavouriteItem(!favouriteItem)
  }
  return (
    <>
      <div>
        <Container className="bg-white px-2 py-1">
          <div className="flex md:flex-row flex-col gap-2">
            <div className="w-[90%]  mx-auto md:w-[30%] ml-5">
              <div className="h-96 md:w-[80%]">
                <img
                  src={myData[2].img}
                  alt=""
                  className="w-full h-full object-contain pb-2 border-b border-gray-200"
                />
              </div>
              <div className=" slider-container mt-2 ">
                <Slider {...settings} className="space-x-2 ">
                  {/* product all images */}
                  {myData[2].allImages.map((img) => (
                    <div className="h-16 w-5 ">
                      <img
                        src={img}
                        className="bg-contain w-full h-full object-contain -z-20"
                      ></img>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="w-[100%] md:w-[70%] px-3 text-center md:text-start md:mx-0 mx-auto">
              <div className="md:w-[80%]">
                <h1 className="font-noto text-lg md:mt-2 mt-4 md:text-xl font-[400] text-[#212121] max-w-lg">
                  Angelic New Collection Stylish Combo Angelic T-shirt Angelic
                  Pant Set Trouser Shorts T Shirt Combo Set - Sports Edition
                </h1>
                <div className="flex items-center justify-between mt-5 md:mt-8">
                  {/* star with rating */}
                  {star}
                  <div className="flex items-center gap-3">
                    <CiShare2 className="cursor-pointer text-2xl" />
                    <i className={` fa-heart cursor-pointer text-xl ${favouriteItem ? "text-red-500 fa-solid" : "fa-regular"}`} onClick={favourite}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
