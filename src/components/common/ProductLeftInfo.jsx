import { LazadaIcon } from "./Icons/LazadaIcons";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";

export const ProductLeftInfos = () => {
  return (
    <>
      <div className="w-full xl:w-[30%] bg-[#fafafa] opacity-80  py-3">
        <div className="border-b border-gray-200 py-3 px-3">
          <div className="flex items-center justify-between">
            <p className="text-[#757575] font-medium font-noto text-[13px]">
              Delivery Option
            </p>
            <LazadaIcon />
          </div>
          <div className="flex items-center justify-between gap-3 mt-4">
            <div className="flex items-center gap-2 ">
              <CiLocationOn className="text-2xl mb-0.5 font-medium text-gray-500" />
              <p className="text-[14px] font-normal leading-4 text-[#000000] font-noto">
                Dhaka, Dhaka North, Banani <br /> Road No. 12 - 19{" "}
              </p>
            </div>
            <Link className="text-[#136cff] p-3 text-sm font-noto font-medium cursor-pointer uppercase">
              Change
            </Link>
          </div>
        </div>
        <div className="px-3 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex items-center justify-center gap-2">
              <CiDeliveryTruck className="text-2xl text-gray-500 mb-0.5 font-medium" />
              <div>
                <p className="text-sm font-medium font-noto text-[#000000]">
                  Standard Delivery
                </p>
                <p className="text-[12px] text-[#9e9e9e] font-medium font-noto">
                  Guaranteed by 19-22 Apr
                </p>
              </div>
            </div>
            <p className="text-base font-medium font-noto  text-[#000000]">
              ৳60
            </p>
          </div>
          <div className="flex items-center gap-2 py-3 mt-3">
            <GiReceiveMoney className="text-2xl mb-0.5 font-medium text-gray-500" />
            <p className="text-black font-normal  font-noto text-sm">
              Cash on Delivery Available
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
