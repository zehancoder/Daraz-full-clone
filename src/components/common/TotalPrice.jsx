import { CiLocationOn } from "react-icons/ci";
import mainItems from "../../data/products.json";
import { useEffect, useState } from "react";
import myData from "../../data/products.json";
import { div } from "framer-motion/client";
export const TotalPrice = ({
  addingProduct,
  storeId,
  selectAll,
  setInputTurn,
}) => {
  // count total price
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;

    selectAll
      ? addingProduct.forEach((id) => {
          const item = myData[id];
          if (item) {
            total += parseInt(item.price);
          }
        })
      : storeId.forEach((id) => {
          const item = myData[id];
          if (item) {
            total += parseInt(item.price);
          }
        });

    settotalPrice(total);
  }, [storeId, selectAll, addingProduct]);
  console.log(addingProduct);
  return (
    <div className="bg-white w-full lg:w-[35%]">
      <div className="p-3 ">
        <div className="border-b-2 border-[#9e9e9e4d] pb-5 md:pb-7">
          <p className="text-[13px] md:text-[15px] font-normal font-noto text-[#9e9e9e]">
            Location
          </p>
          <div className="flex items-center gap-3 mt-3">
            <CiLocationOn className="text-[#9e9e9e] text-2xl" />
            <p className="text-[11px] md:text-[12px] font-noto text-[#202020] ">
              Add Shipping Address
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-lg font-noto font-medium text-[#2e2e2e]">
            Order Summary
          </p>
          <div className="md:mt-5 mt-3 lg:mt-8 font-noto">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-noto font-medium text-[#686868] md:text-[15px]">
                Subtotal({selectAll ? addingProduct.length : storeId.length}{" "}
                items)
              </p>
              <p className="text-[15px] font-noto font-medium text-gray-800  md:text-[17px]">
                ৳ {totalPrice}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[14px] font-noto font-medium text-[#707070]  md:text-[15px]">
                Shipping Fee
              </p>
              <p className="text-[15px] font-noto font-medium text-gray-800  md:text-[17px]">
                {
                  storeId.length > 0 || selectAll ? `৳ 120` : 0
                }
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-8 flex items-center gap-3 w-full md:px-5 px-0">
            <input
              className="border border-[#99a1afb2] outline-none w-[80%] px-2 py-2 text-sm md:text-[16px]"
              type="text"
              placeholder="Enter Voucher Code"
            />
            <button className="px-6 cursor-pointer  uppercase py-2 bg-[#25a5d8] text-[14px] text-white font-normal md:text-base">
              Apply
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[14px] font-noto font-medium text-gray-800  md:text-[15px]">
                Total
              </p>
              <p className="text-[15px] font-noto font-medium text-[#f57224]  md:text-[17px]">
                {
                  storeId.length > 0 || selectAll ? `৳ ${totalPrice + 120}` : 0
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
