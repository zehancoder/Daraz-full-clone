import { Container } from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

export const Toggle = ({ toggle, setToggle, cartLegth, loginSuccess }) => {
  const haderItem = [
    { text: "SAVE MORE ON APP", link: "/savemore" },
    { text: "BECOME A SELLER", link: "/becomeseller" },
    { text: "HELP & SUPPORT", link: "/support" },
    { text: "LANGUAGE" },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const searchInputHandle = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div
        className={`absolute w-full top-full left-0 md:hidden block transition-all duration-300  transform ${
          toggle ? "translate-y-0 z-50" : "-translate-y-[100%] -z-20"
        }`}
      >
        <Container className={"bg-[#f85606] px-2 py-4"}>
          <div>
            <div
              className={`items-center mb-3 justify-around font-roboto gap-5 md:flex`}
            >
              {haderItem.map(({ text, link }, i) => (
                <div key={i} className="mt-3">
                  <NavLink to={link}>
                    <p className="text-white font-[400] text-[14px] hover:text-gray-200 transition uppercase">
                      {text}
                    </p>
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="w-full mt-2 flex items-center gap-3">
              <div className=" bg-white relative w-[87%] h-12 flex items-center justify-between">
                <input
                  onInput={searchInputHandle}
                  type="text"
                  className="px-2 w-full h-full outline-none"
                  placeholder="Search in Daraz"
                  value={searchInput}
                />
                <Link to={"/search"} className="h-[100%] bg-[#ffe1d2] text-[#f57224] w-16 flex items-center justify-center text-[26px] font-light cursor-pointer">
                  <IoSearchOutline />
                </Link>
                {/* show search items */}
                <div
                  className={`absolute top-[100%] left-0   w-full ${
                    searchItems.length <= 0 ? "block" : "block"
                  }`}
                >
                  <SearchFilter
                    searchItems={searchItems}
                    setSearchItems={setSearchItems}
                    searchInput={searchInput}
                  />
                </div>
              </div>
              <Link className="cursor-pointer relative" to="/cart">
                <CiShoppingCart className="text-4xl text-white" />
                {loginSuccess ? (
                  <p className="absolute -top-[0.4px] right-0.5 text-[#f85606] w-4 text-[12px] flex items-center justify-center rounded-full h-4 bg-white font-bold font-noto">
                    {cartLegth}
                  </p>
                ) : (
                  console.log("hello")
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
