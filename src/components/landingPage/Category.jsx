import myData from "../../data/category.json";
import {Link} from "react-router-dom"
export const CategoryItem = () => {
  return (
    <>
      <div className="py-5">
        <h1 className="text-xl md:text-2xl mb-2 font-medium font-noto text-mediumGray">
          Categories
        </h1>
        <div className="text-[#212121] flex flex-wrap gap-0.5 font-noto justify-center items-center">
          {myData.map(({ img, text }, i) =>
            i >= 8 ? (
              ""
            ) : (
              <Link to={"/allCategory"} className="hover:shadow-2xl">
                <div className="w-[158px] h-48 bg-white flex flex-col items-center justify-center">
                  <div className="p-2 h-28 ">
                    <img className="w-20 " src={img} alt="" />
                  </div>
                  <p className="text-[14px] font-[400] mt-1 text-center">
                    {text}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
        <div className="text-[#212121] flex flex-wrap gap-0.5 font-noto justify-center mt-0.5">
          {myData.map(({ img, text }, i) =>
            i < 8 ? (
              ""
            ) : (
              <Link to={"/allCategory"} className="hover:shadow-2xl ">
                <div className="w-[158px] h-48 bg-white flex flex-col items-center justify-center">
                  <div className="p-2 h-28 ">
                    <img className="w-20 " src={img} alt="" />
                  </div>
                  <p className="text-[14px] font-[400] mt-1 text-center">
                    {text}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};
