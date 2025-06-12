import { useState } from "react";
import { cn } from "../../classReplaceing/replace";

export const CartCard = ({ className, text, img, codes, cateImg }) => {
  const [checkeds, setCheckeds] = useState(false);
  const chacked = () => {
    document.getElementById("selection1").setAttribute("checked");
    document.getElementById("selection2").setAttribute("checked");
  };

  const categoryProduct = [
    "https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01y23xZt1u7vnF19f2u_!!6000000005991-2-tps-72-72.png_2200x2200q80.png_.webp",
    "https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01m9OC6a1UK86X51Dcq_!!6000000002498-2-tps-108-54.png_2200x2200q80.png_.webp",
  ];

  

  return (
    <>
      <div className={cn("bg-white cartShadow", className)}>
        <div className="">
          <div className="flex items-center  gap-4 px-2 py-2 border-b-2 border-[#dfdcdcb4] ">
            <input
              type="checkbox"
              className="h-4 w-4 rounded"
              id={`selection${codes}`}
              onChange={chacked}
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
          <div className="bg-white flex items-center px-2 py-4 gap-4">
            <div>
              <input
                type="checkbox"
                className="h-4 w-4 rounded"
                id={`selection${codes}`}
                onChange={chacked}
              />
            </div>
            <div className="flex gap-3 flex-row md:flex-row">
              <img
                className="w-20 h-20 object-cover"
                src={img}
                alt="cartImages"
              />
              <div>
                <p className="text-[14px] font-medium text-[#212121] font-noto text-wrap">
                  {text}
                </p>
                <p className="text-[12px] mt-1 font-normal font-noto text-[#757575]">
                  {
                    [cateImg]
                  }
                </p>
                <p className="text-[#8d8d8dc7] font-medium text-[17[px] font-noto">
                  Ends at Jun 12 23:59:59{" "}
                </p>
                <p className="text-[12px] font-medium text-red-400 mt-3">
                  Only 7 item(s) in stock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
