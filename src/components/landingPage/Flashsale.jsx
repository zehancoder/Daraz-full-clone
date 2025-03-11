import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import myData from "../../data/flashSaleData.json";
import { ProductCard } from "../common/ProductCard";
export const FlashSaleItem = () => {
  return (
    <>
      <div>
        <Container>
          <h1 className="text-xl md:text-2xl mb-2 font-medium font-noto text-mediumGray">
            Flash Sale
          </h1>
          <div className="flex items-center md:text-[15px] text-[13px] justify-between px-3 md:px-5 lg:px-8 font-noto font-medium text-[#f57224] py-3 md:py-4 border-b border-[#d5d5d5] bg-white">
            <p>On Sale Now</p>
            <button className="uppercase  text-[#f57224] py-[5px] md:py-[7px] px-3 border border-[#f57224]">
              <Link to={"/shopAll"}>SHOP ALL PRODUCT</Link>
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-between bg-white gap-3">
            {myData.map(({ img, text, id, parcent, price, discount }) => (
              <Link key={id} to={"/shopAll"}>
                <div>
                  <ProductCard
                    className={"hover:shadow-xl cursor-pointer"}
                    img={<img src={img} className="w-full h-40 object-cover"></img>}
                    text={text}
                    price={price}
                    mainPrice={
                      <div className=" flex mt-2 text-[13px] text-gray-500 font-[500]">
                        ৳<div className="line-through">{discount}</div>
                        <div className="ml-1">{parcent}</div>
                      </div>
                    }
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
