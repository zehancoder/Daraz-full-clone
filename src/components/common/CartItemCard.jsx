import { useState } from "react";
import { cn } from "../../classReplaceing/replace";
import { CiHeart } from "react-icons/ci";
import { PiTrash } from "react-icons/pi";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export const CartCard = ({ className, text, img, codes, cateImg, price, removehandle, trashRemove }) => {
  const [checkedTurn, setCheckedTurn] = useState(false);
  const isChacked = (e) => {
    setCheckedTurn(!checkedTurn)
  };
  const categoryProduct = [
    "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01y23xZt1u7vnF19f2u_!!6000000005991-2-tps-72-72.png_2200x2200q80.png_.webp",
    "https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01m9OC6a1UK86X51Dcq_!!6000000002498-2-tps-108-54.png_2200x2200q80.png_.webp",
  ];

  const brands = [
    "Sony",
    "Samsung",
    "Apple",
    "Nike",
    "Adidas",
    "Zara",
    "Levi's",
    "Dell",
    "HP",
    "Lenovo",
    "Logitech",
    "Canon",
  ];

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Purple",
    "Pink",
    "Gray",
    "Orange",
    "Brown",
    "Silver",
  ];

  const [line, setLine] = useState(false);

  const lineClampEdit = () => {
    setLine(!line);
  };

  const [Itemquantity, setQuantity] = useState(1);
  const [quantityPlus, setQuantityPlus] = useState(price);
  const quantityUp = () => {
    setQuantityPlus(parseInt(price) * (Itemquantity + 1));

    Itemquantity >= 15 ? setQuantity(15) : setQuantity(Itemquantity + 1);
  };
  const quantityDown = () => {
    Itemquantity == 1 ? setQuantity(1) : setQuantity(Itemquantity - 1);
        parseInt(price) == quantityPlus ? setQuantityPlus(price) : setQuantityPlus(quantityPlus -  parseInt(price));

  };

  return (
    <>
      <div className={cn("bg-white cartShadow", className)}>
        <div className="">
          <div className="flex items-center  gap-4 px-2 py-2 border-b-2 border-[#dfdcdcb4] ">
            <input
              type="checkbox"
              className="h-4 w-4 rounded"
              id={`selection${codes}`}
              checked = {checkedTurn}
              onClick={isChacked}
            />
            <div className="flex items-center  gap-2 cursor-pointer">
              <img className="w-4" src={categoryProduct[cateImg]} alt="" />
              <label
                className="text-[14px] font-medium font-noto text-[#212121]"
                for={`selection${codes}`}
              >
                Next Gadget
              </label>
            </div>
          </div>
          <div className="bg-white flex  items-center px-1 md:px-2 py-2 md:py-4 gap-4" >
            <div className="flex items-center justify-between">
              <input
                type="checkbox"
                className="h-4 w-4 rounded md:block hidden"
                id={`selection${codes}`}
                checked = {checkedTurn}
                onClick={isChacked}
              />
            </div>
            <div className="flex gap-3 md:flex-row w-full flex-col md:items-start items-center">
              <div className="md:w-[60%] flex gap-3">
                <img
                  className="w-20 h-20 bg-contain"
                  src={img}
                  alt="cartImages"
                />
                <div>
                  <p
                    className={`text-[12px] md:text-[14px] font-medium text-[#212121] font-noto text-wrap line-clamp-3 ${
                      line ? "line-clamp-none" : "line-clamp-3"
                    }`}
                  >
                    {text}
                  </p>
                  <button
                    className="underline text-[12px] md:text-[14px] cursor-pointer ml-1 md:hidden block text-gray-400 font-noto font-medium"
                    onClick={lineClampEdit}
                  >
                    read more
                  </button>
                  <p className="text-[10px] md:text-[12px] mt-1 font-normal font-noto text-[#757575]">
                    {
                      <p>
                        Brands:{" "}
                        {brands[Math.floor(Math.random() * brands.length)]},
                        Color:{" "}
                        {colors[Math.floor(Math.random() * colors.length)]}
                      </p>
                    }
                  </p>
                  <p className="text-[#8d8d8dc7] font-medium text-[17[px] font-noto"></p>
                  <p className="text-[10px] md:text-[12px] font-medium text-red-400 mt-3">
                    Only {Math.floor(Math.random() * 100)} item(s) in stock
                  </p>
                </div>
              </div>
              <div className="mb-3 md:ml-4 flex items-center md:justify-start justify-center gap-4 md:gap-[5%] lg:gap-[30%] w-full md:w-[40%]">
                <div>
                  <p className="text-lg md:text-xl font-noto font-medium text-[#f57224]">
                    ৳ {quantityPlus}
                  </p>
                  <p className="text-sm line-through md:text-[15px] font-normal font-noto text-[#757575]">
                    ৳{Math.floor(Math.random() * 1000)}
                  </p>
                  <div className="flex items-center gap-2 text-[22px] md:text-[25px] font-light font-noto text-gray-400 mt-2">
                    <div>
                      <CiHeart />
                    </div>
                    <div>
                      <PiTrash className="text-xl cursor-pointer" onClick={trashRemove}/>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center">
                    <div
                      className={`text-[14px] font-noto py-1 md:py-2 px-2 md:px-3 font-extralight cursor-pointer ${
                        Itemquantity > 1
                          ? "bg-gray-200 text-gray-400"
                          : "bg-gray-100 text-gray-200"
                      }`}
                      onClick={quantityDown}
                    >
                      <FaMinus />
                    </div>
                    <div className="px-4 py-2 select-none">{Itemquantity}</div>
                    <div
                      className={`"text-xl font-noto px-2 md:px-3 py-1 md:py-2 font-bold cursor-pointer  ${
                        Itemquantity == 15
                          ? "bg-gray-100 text-gray-200"
                          : "bg-gray-200 text-gray-400"
                      }`}
                      onClick={quantityUp}
                    >
                      <IoMdAdd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
