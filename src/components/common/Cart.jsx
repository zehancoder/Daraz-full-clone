import { useEffect, useRef, useState } from "react";
import myData from "../../data/products.json";
import { ProductCard } from "./ProductCard";
import { CategoryHeader } from "../CategoryHeader";
import { CartCard } from "./CartItemCard";
import { Container } from "./Container";
import { PiTrash } from "react-icons/pi";

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

  console.log("adding product length", addingProduct.length);
  console.log("removes items", removeItems);

  return (
    <>
      <CategoryHeader />
      <div className="max-w-[1360px] mx-auto mt-4">
        <div className="w-[65%]">
          <div className="px-3 py-3 bg-white flex items-center gap-3">
            <input
              type="checkbox"
              className="h-4 w-4 rounded md:block hidden"
              checked={true}
              id="selectAll"
            />
            <div className="flex items-center justify-between gap-3 w-full">
              <label
                className="text-[13px] font-noto font-normal uppercase text-[#757575]"
                for="selectAll"
              >
                Select All ({addingProduct.length} Items(S))
              </label>
              <div className="flex items-center gap-1 cursor-pointer">
                <PiTrash className="text-xl text-gray-400 font-noto " />
                <p className="text-[13px] font-noto font-normal uppercase text-[#757575]">
                  delete
                </p>
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
                  img={myData[ids].img}
                  text={myData[ids].text}
                  codes={(codes += codes)}
                  cateImg={Math.floor(Math.random() * 2)}
                  price={myData[ids].price}
                  removehandle={removehandle}
                  trashRemove={trashRemove}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
