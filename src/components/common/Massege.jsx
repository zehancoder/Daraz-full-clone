import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Massege = () => {
      const [massegeBox, setMassegeBox] = useState(false);
      const massegeChange = () => {
        setMassegeBox(!massegeBox);
      };
  return (
    <>
      <div className="fixed bottom-0 right-0 md:right-12 text-[#044254] ">
        <div
          className={`h-[450px] relative bg-[#f9f9f9] transition duration-200 shadows  ${
            massegeBox ? "scale-100 md:w-[650px] w-full block" : "scale-0 w-0 hidden"
          } origin-bottom-right `}
        >
          <div className="flex items-center h-full">
            <div className="w-[40%] bg-[#eff0f5] h-full">
              <div
                className={`px-5 border-b border-gray-200 flex items-center gap-3 py-3 text-[#757575] bg-white text-base md:text-lg`}
              >
                <FaMessage />
                <p className=" font-medium">Massege</p>
              </div>
            </div>
            <div className=" w-[60%] h-full border-l border-gray-200">
              <div className="px-5 border-b border-l border-gray-200 flex items-center justify-between py-3 text-gray-700 bg-white font-[400] text-base md:text-lg">
                <p>Daraz</p>

                <IoMdClose className="cursor-pointer" onClick={massegeChange} />
              </div>
              <div className=" flex flex-col items-center justify-end font-roboto h-[60%] bg-[#f9f9f9]">
                <MdEmail className="text-5xl text-gray-400" />
                <div className="mt-5 text-center">
                  <p className="text-[13px] font-[500] text-[#00b5e0]">
                    Use the App for exclusive offers!
                  </p>
                  <p className="text-[#757575] text-[14px] font-[400] mt-1">
                    Once you start a new conversation, you’ll see <br /> it
                    listed here.
                  </p>
                </div>
              </div>
              <div className="h-[40%] bg-white">
                <div className="flex items-center text-[#4c8296] justify-center mt-2">
                  <Link to={"/login"}>Login</Link>/
                  <Link to={"/signup"}>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`px-5 w-[140px] md:w-[165px] float-end flex items-center gap-3 py-2 bg-white text-lg md:text-xl shadows cursor-pointer ${
            massegeBox ? "hidden" : "block"
          }`}
          onClick={massegeChange}
        >
          <FaMessage />
          <p className=" font-medium">Massege</p>
        </div>
      </div>
    </>
  );
};
