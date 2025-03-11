import { Container } from "../common/Container";
import myData from "../../data/products.json";
import { ProductCard } from "../common/ProductCard";
import { Link } from "react-router-dom";
export const ForyouProduct = () => {
  return (
    <>
      <div>
        <Container>
          <h1 className="text-xl md:text-2xl mb-2 font-medium font-noto text-mediumGray">Just For You</h1>
          <div className="flex items-center gap-3 flex-wrap space-y-4">
            {myData.map(({ img, price, discount, rating, star, text }, i) => (
              <Link key={i} to={"/forYouItem"}>
                <ProductCard
                  className={"hover:shadow-xl w-[203px]"}
                  img={<img src={img} className="w-full h-40 object-cover"></img>}
                  price={price}
                  discount={discount}
                  star={
                    <div className="flex items-center gap-1">
                      {star.map((item) => (
                        <div>
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
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
