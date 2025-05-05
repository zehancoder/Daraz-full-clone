import { FaRegFaceSmile } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { LuInbox } from "react-icons/lu";
import { PiStarLight } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

export const AccountInfoDropDown = () => {
  return (
    <>
      <div className="absolute mt-4 w-70 px-4 right-8 bg-white border border-gray-400 ">
        <div className="relative px-3  py-8">
          <div className="absolute -top-1 left-[50%] transform -translate-x-[50%] rotate-[135deg] bg-white h-6 w-6 rounded-tr-full">

          </div>
          <div className="space-y-5 ">
            <Link to={"/ManageMyAccount"} className="flex gap-4 items-center">
                <FaRegFaceSmile className="text-[20px] text-gray-400"/>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">Manage My Account</p>
            </Link>
            <Link to={"/MyOrders"} className="flex gap-4 items-center">
                <LuInbox className="text-[20px] text-gray-400"/>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">My Orders</p>
            </Link>
            <Link to={"/MyWishlist"} className="flex gap-4 items-center">
                <FaRegHeart className="text-xl text-gray-400"/>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">My Wishlist & Followed Stores</p>
            </Link>
            <Link to={"/MyReviews"} className="flex gap-4 items-center">
                <div className="border border-gray-400 p-0.5 rounded-full">
                <PiStarLight className="text-[16px] text-gray-400"/>
                </div>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">My Reviews</p>
            </Link>
            <Link to={"/MyReturns"} className="flex gap-4 items-center">
                <IoIosCloseCircleOutline className="text-[23px] text-gray-400"/>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">My Returns & Cancellations</p>
            </Link>
            <Link  className="flex gap-4 items-center">
                <CiLogout className="text-[23px] text-gray-400"/>
                <p className="text-[11px] hover:text-[#f85606] hover:underline  md:text-[13px] font-noto capitalize font-medium text-gray-500">Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
