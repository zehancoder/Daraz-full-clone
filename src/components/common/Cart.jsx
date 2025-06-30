import { useEffect, useRef, useState } from "react";
import myData from "../../data/products.json";
import { ProductCard } from "./ProductCard";
import { CategoryHeader } from "../CategoryHeader";
import { CartCard } from "./CartItemCard";
import { Container } from "./Container";
import { PiTrash } from "react-icons/pi";
import { FaExclamationTriangle } from "react-icons/fa";
import { TotalPrice } from "./TotalPrice";

const removehandle = () => {};

export const CartWorking = ({ addingProduct, setAddingProduct }) => {
  let codes = 1;
  let refId = useRef(null);
  if (refId == "") {
    refId = null;
  }
  const [removeItems, setRemoveItems] = useState();
  const trashRemove = (e) => {
    setRemoveItems(
      /*(prev) => [...prev,*/ parseInt(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement.parentElement
          .id
      ) /*]*/
    );
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  };
  useEffect(() => {
    // removeItems.map((mainIds) => {
    setAddingProduct(addingProduct.filter((newIds) => newIds !== removeItems));
    // });
    addingProduct.length == 0 && setRemoveItems(null);
  }, [removeItems]);
  const [selectAll, setSelectAll] = useState(false);

  const selectHandle = () => {
    setSelectAll(!selectAll);
  };

  // delet functionality
  const [deleteAll, setDeleteAll] = useState(false);
  const deleteHandle = () => {
    setDeleteAll(!deleteAll);
  };

  const cancelHandle = () => {
    setDeleteAll(false);
  };
  const [showDlt, setShowDlt] = useState(false);
  useEffect(() => {
    if (selectAll == false && deleteAll == true) {
      setShowDlt(true);
      setTimeout(() => {
        setShowDlt(false);
        setDeleteAll(false);
      }, 2000);
    }
  }, [deleteAll]);

  // remove all items
  const deleteAllCartItem = () => {
    setAddingProduct([]);
    setSelectAll(false);
  };

  // selected items store in array
  const [storeId, setStoreId] = useState([]);
  const storeHandle = (ids) => {
    setStoreId((prev) => [...prev, ids]);
  };

  console.log(storeId)
  return (
    <>
      <CategoryHeader />
      <div className="max-w-[1360px] gap-3  justify-between flex mx-auto mt-4 ">
        <div className="w-[65%] ">
          <div className="">
            <div className="px-3 py-4 bg-white flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4 rounded md:block hidden"
                checked={selectAll}
                id="selectAll"
                onChange={selectHandle}
              />
              <div className="flex items-center justify-between gap-3 w-full">
                <label
                  className="text-[13px] font-noto font-normal uppercase text-[#757575]"
                  for="selectAll"
                >
                  Select All ({addingProduct.length} Items(S))
                </label>
                <div className="flex items-center gap-1  relative">
                  <div
                    className={`absolute top-[50%] right-[35%] flex items-center gap-1 justify-center  transform -translate-x-[35%] shadow-sm -translte-y-[50%] transition-all duration-150  bg-red-400/20 border border-red-400 font-noto text-[13px] md:text-[14px] text-[#212121] w-48 h-11 ${
                      showDlt ? "scale-100" : "scale-0"
                    }`}
                  >
                    <FaExclamationTriangle className="text-red-400" />
                    <p>Please Select Item(s).</p>
                  </div>

                  <div
                    onClick={deleteHandle}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <PiTrash className="text-xl text-gray-400 font-noto " />

                    <p className="text-[13px] font-noto font-normal uppercase text-[#757575]">
                      delete
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {addingProduct.map((ids) => (
              <div className="mt-2">
                {/* {
                myData[ids].text
              } */}

                <div id={ids} ref={refId}>
                  <CartCard
                    storeHandle={storeHandle}
                    storeId = {storeId}
                    setStore={setStoreId}
                    img={myData[ids].img}
                    text={myData[ids].text}
                    codes={(codes += codes)}
                    cateImg={Math.floor(Math.random() * 2)}
                    price={myData[ids].price}
                    removehandle={removehandle}
                    trashRemove={trashRemove}
                    selectAll={selectAll}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`absolute bg-white z-50 h-32 w-[300px] top-[50%] left-[50%] ${
              selectAll == true && deleteAll == true
                ? "fullShadow"
                : "shadow-none"
            } transform -translate-x-[50%] -translate-y-[50%] ${
              selectAll == true && deleteAll == true ? "block" : "hidden"
            } shadow`}
          >
            {
              <div className="px-4 py-5 relative h-full">
                <p className="text-[15px] text-[#212121] font-noto font-normal">
                  Remove from cart
                </p>
                <p className="text-[13px] font-noto text-[#727272] font-light mt-3">
                  Are you sure you want to delete these item(s)
                </p>
                <div className="absolute flex items-center gap-5 bottom-2 right-3 ">
                  <button
                    className={`text-[12px] md:text-[13px] cursor-pointer font-normal font-noto text-[#9e9e9e] uppercase  `}
                    onClick={cancelHandle}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-[12px] md:text-[13px] cursor-pointer font-normal font-noto text-[#1a9cb7] uppercase"
                    onClick={deleteAllCartItem}
                  >
                    Remove
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
        <TotalPrice addingProduct={addingProduct} storeId = {storeId} selectAll = {selectAll}/>
      </div>
    </>
  );
};
