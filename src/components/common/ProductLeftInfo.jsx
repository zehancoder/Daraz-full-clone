import { LazadaIcon } from "./Icons/LazadaIcons";
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { Link, Links } from "react-router-dom";
import { MdAssignmentReturn } from "react-icons/md";
import { AiOutlineCloseSquare } from "react-icons/ai";

export const ProductLeftInfos = () => {
  return (
    <>
      <div className="max-w-3xl  xl:w-[26%] bg-[#fafafa] opacity-80  py-3">
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
          <div className="flex items-center gap-2 py-3 mt-3 ">
            <GiReceiveMoney className="text-2xl mb-0.5 font-medium text-gray-500" />
            <p className="text-black font-normal  font-noto text-sm">
              Cash on Delivery Available
            </p>
          </div>
        </div>
        <div className="py-3 px-3 border-b border-gray-200">
          <div className="flex items-center justify-between ">
            <p className="text-[#757575] font-medium font-noto text-[13px]">
              Return & Warranty
            </p>
            <LazadaIcon />
          </div>
          <div className="flex items-center gap-2 py-3">
            <MdAssignmentReturn className="text-2xl text-gray-500 mb-0.5 font-medium" />
            <p className="text-black font-normal  font-noto text-sm">
              7 Days Returns
            </p>
          </div>
          <div className="flex items-center gap-2 py-3">
            <AiOutlineCloseSquare className="text-2xl text-gray-500 mb-0.5 font-medium" />
            <p className="text-black font-normal  font-noto text-sm">
              Warranty not available
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className=" w-36">
            <img src="/images/icons/qr.png" alt="" />
          </div>
          <div className="bg-white px-2 py-2 h-32 customShadow rounded-md cursor-pointer w-[50%] relative">
            <div className="absolute top-[50%] transform -translate-y-[50%] h-5 w-5 bg-white rounded-tr-[100%] rotate-[55deg] -left-1"></div>
            <img
              src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01XrNYQP1paGCVispyM_!!6000000005376-2-tps-82-82.png"
              alt="" className="w-12 mb-2"
            />
            <p className="text-[#757575] font-normal font-noto text-[13px] ">Download app to enjoy exclusive discounts!</p>
          </div>
        </div>
      </div>
    </>
  );
};
