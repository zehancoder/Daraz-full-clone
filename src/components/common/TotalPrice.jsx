import { CiLocationOn } from "react-icons/ci";
import mainItems from "../../data/products.json"
import { useState } from "react";
export const TotalPrice = ({addingProduct, storeId, selectAll, setInputTurn}) => {

    const [price, setPrice] = useState([0])

    const addingHandle = () => {
       
    }
    const storeHandle = () => {
      
        setInputTurn ? storeId.forEach((ids) => {
          
        }): ""
        
    }

    console.log(storeId)
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
            <p className="text-lg font-noto font-medium text-[#2e2e2e]">Order Summary</p>
            <div className="mt-2">
                <div className="flex items-center justify-between">
                    <p className="text-[14px] font-noto font-normal text-[#727272] md:text-[15px]">Subtotal({selectAll ? addingProduct.length : storeId.length} items)</p>
                    {
                        
                        
                        
                        
                    }
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
