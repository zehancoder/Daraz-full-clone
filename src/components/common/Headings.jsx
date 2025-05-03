import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Toggle } from "./ToggleNav";
import { IoCloseSharp } from "react-icons/io5";

export const Heading = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };
  const haderItem = [
    { text: "SAVE MORE ON APP", link: "/savemore" },
    { text: "BECOME A SELLER", link: "/becomeseller" },
    { text: "HELP & SUPPORT", link: "/support" },
    { text: "LOGIN"},
    { text: "SIGN UP" },
    { text: "LANGUAGE" },
  ];
  const LoginLink = (e) => {
    e.target.innerText == "LOGIN" ? props.setLoginStart(true) : props.setLoginStart(false)
  }
  return (
    <>
      <div className={`fixed w-full z-50`}>
        <div className="relative">
          <div className="w-full h-20 md:h-36 py-1 px-2 bg-[#f85606]">
            <Container className="relative h-full z-50">
              {/* Links */}
              <div className=" hidden items-center justify-end font-roboto md:gap-5 gap-3 lg:gap-8 md:flex">
                {haderItem.map(({ text, link }, i) => (
                  <div key={i}>
                    <NavLink to={link} onClick={LoginLink}>
                      <p className="text-white font-[400] text-[14px] hover:text-gray-200 transition uppercase">
                        {text}
                      </p>
                    </NavLink>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center gap-5 h-full md:h-28 max-w-5xl mx-auto font-roboto">
                <img
                  className="w-28 md:w-36"
                  src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
                  alt=""
                />
                <div className="w-[70%] md:w-[65%] hidden md:flex justify-between items-center">
                  <div className=" bg-white w-[87%] h-12 flex items-center justify-between">
                    <input
                      type="text"
                      className="px-2 w-full h-full outline-none"
                      placeholder="Search in Daraz"
                    />
                    <div className="h-[100%] bg-[#ffe1d2] text-[#f57224] w-16 flex items-center justify-center text-[26px] font-light cursor-pointer">
                      <IoSearchOutline />
                    </div>
                  </div>
                  <Link className="cursor-pointer" to="/cart">
                    <CiShoppingCart className="text-4xl text-white" />
                  </Link>
                </div>
                <div className="flex md:hidden items-center gap-3">
                  <p
                    className="px-3 py-1 bg-gray-200 rounded-full "
                  >
                    <p className="text-gray-600 font-[400] text-[14px] transition duration-300 hover:text-gray-500 uppercase" onClick={LoginLink}>
                      Login
                    </p>
                  </p>
                  <p>
                    <p className="text-white font-[400] text-[14px] hover:text-gray-200 transition uppercase" >
                      sign up
                    </p>
                  </p>
                  <div onClick={toggleNav}>
                    <IoMenu
                      className={`text-white font-bold  text-3xl cursor-pointer ${
                        toggle ? "hidden" : "block"
                      }`}
                    />
                    <IoCloseSharp
                      className={`text-white font-bold text-3xl cursor-pointer ${
                        toggle ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Toggle toggle={toggle} setToggle={setToggle} />
        </div>
        
      </div>
      <div className="h-20 md:h-36 w-full">

        </div>
    </>
  );
};
