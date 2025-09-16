import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Toggle } from "./ToggleNav";
import { IoCloseSharp } from "react-icons/io5";
import { AccountInfoDropDown } from "./AccountInfoNav";
import SearchFilter from "./SearchFilter";
import SignUp from "./SignUp";

export const Heading = (props) => {
  const [toggle, setToggle] = useState(false);
  const [signForm, setSignUpForm] = useState(false);


  // setting user name
  const [userName, setUserName] = useState("");

  const toggleNav = () => {
    setToggle(!toggle);
  };
  const haderItem = [
    { text: "SAVE MORE ON APP", link: "/savemore" },
    { text: "BECOME A SELLER", link: "/becomeseller" },
    { text: "HELP & SUPPORT", link: "/support" },
    { text: "LOGIN" },
    { text: "SIGN UP" },
    { text: "LANGUAGE" },
  ];
  props.loginSuccess || userName
    ? haderItem.splice(3, 2, { text: userName ? userName.toUpperCase() : setUserName(prompt("set new User name"))})
    : "";
  const [accountInfo, setAccountInfo] = useState(false);
  const LoginLink = (e) => {
    e.target.innerText == "LOGIN"
      ? props.setLoginStart(true)
      : props.setLoginStart(false);
    e.target.innerText == "SIGN UP"
      ? setSignUpForm(true)
      : setSignUpForm(false);

    e.target.innerText == userName.toUpperCase()
      ? setAccountInfo(!accountInfo)
      : setAccountInfo(false);

    console.log(userName);
  };
  const LeaveTrack = () => {
    setAccountInfo(false);
  };

  //get input text
  const [searchInput, setSearchInput] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const searchInputHandle = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className={`fixed w-full z-40 font-noto`}>
        {/* SIGN UP FORM STARTR */}
        <SignUp
          signForm={signForm}
          setSignUpForm={setSignUpForm}
          userName={userName}
          setUserName={setUserName}
          signUpMassege = {props.signUpMassege}
          setSignUpMassege = {props.setSignUpMassege}
          setMassegeText = {props.setMassegeText}
          massegeText = {props.massegeText}
        />

        <div className="relative">
          <div className="w-full h-20 md:h-36 py-1 px-2 bg-[#f85606]">
            <Container className="relative h-full z-40">
              {/* Links */}
              <div className=" hidden items-center justify-end font-roboto md:gap-5 gap-3 lg:gap-8 md:flex">
                {haderItem.map(({ text, link }, i) => (
                  <div key={i}>
                    <NavLink to={link} onClick={LoginLink} id={i}>
                      <p className="text-white font-[400] text-[12.7px] hover:text-gray-200 transition uppercase">
                        {text}
                      </p>
                      {text == userName.toUpperCase() ? (
                        <div
                          className={`${accountInfo ? "block" : "hidden"}`}
                          onMouseLeave={LeaveTrack}
                        >
                          <AccountInfoDropDown />
                        </div>
                      ) : (
                        ""
                      )}
                    </NavLink>
                    {/* make signUp form */}
                    {/* {text == "SIGN UP"
                      ? useEffect(() => signUpTextFunc(text), [])
                      : console.log(false)} */}
                    {/* finish signUp form design */}
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
                  {/* make search filtering in this input */}
                  <div className=" bg-white relative w-[87%] h-12 flex items-center justify-between">
                    <input
                      onInput={searchInputHandle}
                      type="text"
                      className="px-2 w-full h-full outline-none"
                      placeholder="Search in Daraz"
                      value={searchInput}
                    />
                    <Link
                      onClick={() => {
                        props.handleSearchItems(searchItems);
                        setSearchInput("");
                      }}
                      to={"/searchResult"}
                      className="h-[100%] bg-[#ffe1d2] text-[#f57224] w-16 flex items-center justify-center text-[26px] font-light cursor-pointer"
                    >
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
                    {props.loginSuccess ? (
                      <p className="absolute -top-[0.4px] right-0.5 text-[#f85606] w-4 text-[12px] flex items-center justify-center rounded-full h-4 bg-white font-bold font-noto">
                        {props.addingItems.length}
                      </p>
                    ) : (
                      console.log("hello")
                    )}
                  </Link>
                </div>
                <div className="flex md:hidden items-center gap-3">
                  <p
                    className={`px-3 py-1 bg-gray-200 rounded-full ${
                      props.loginSuccess ? "hidden" : "block"
                    }`}
                  >
                    <p
                      className={`text-gray-600 font-[400] text-[14px] transition duration-300 hover:text-gray-500 uppercase `}
                      onClick={LoginLink}
                    >
                      Login
                    </p>
                  </p>
                  {/* signup controler */}
                  <p
                    onClick={LoginLink}
                    className={`${
                      props.loginSuccess ? "hidden" : "block"
                    } text-white bg-red-500 font-[400] text-[14px] hover:text-gray-200 transition`}
                  >
                    SIGN UP
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
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
            cartLegth={props.addingItems.length}
            loginSuccess={props.loginSuccess}
          />
        </div>
      </div>
      <div className="h-20 md:h-36 w-full z-50"></div>
    </>
  );
};
