import { cn } from "../../classReplaceing/replace";

export const ProductCard = ({
  className,
  img,
  text,
  price,
  mainPrice,
  discount,
  star,
}) => {
  return (
    <>
      <div className={cn("w-[188px] px-2 py-2 h-[290px] font-noto bg-white", className)}>
        <div className="">
          {/* images */}
          {img}
        </div>
        <div className="px-2 py-1 ">
          {/* driscription */}
          <p className="styleing text-[14px] font-[400]">{text}</p>
          {/* pricing */}
          <div className="flex items-center gap-2 mt-1">
            <p className="text-orange font-[500] text-lg ">৳{price}</p>
            <p className="mt-2 text-[13px] text-gray-500 font-[500]">
              {discount}
            </p>
          </div>
          {/* main price use in another card */}
          <div>{mainPrice}</div>
          <div>
            {/* star with rating */}
            {star}
          </div>
        </div>
      </div>
    </>
  );
};
