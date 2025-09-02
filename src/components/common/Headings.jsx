import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Toggle } from "./ToggleNav";
import { IoCloseSharp } from "react-icons/io5";
import { AccountInfoDropDown } from "./AccountInfoNav";
import { ButtonOne } from "./Buttons";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoClose } from "react-icons/io5";
export const Heading = (props) => {
  const [toggle, setToggle] = useState(false);
  const [signForm, setSignUpForm] = useState(false);

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
  props.loginSuccess
    ? haderItem.splice(3, 2, { text: "JHZEHAN'S ACCOUNT" })
    : "";
  const [accountInfo, setAccountInfo] = useState(false);
  const LoginLink = (e) => {
    e.target.innerText == "LOGIN"
      ? props.setLoginStart(true)
      : props.setLoginStart(false);
    e.target.innerText == "SIGN UP"
      ? setSignUpForm(true)
      : setSignUpForm(false);

    e.target.innerText == "JHZEHAN'S ACCOUNT"
      ? setAccountInfo(!accountInfo)
      : setAccountInfo(false);
  };
  const LeaveTrack = () => {
    setAccountInfo(false);
  };

  // signup chacker functionlity
  const signUpChackerHandle = () => {
    setSignUpForm(!signForm);
  };

  return (
    <>
      <div className={`fixed w-full z-50 font-noto`}>
        {/* make signUp form */}
        {signForm ? (
          <div className="fixed z-50 top-[50%] left-[50%] bg-white formShadow h-[450px] rounded-lg w-[440px] transform -translate-x-[50%] -translate-y-[50%]">
            <div className="relative px-6 py-8 ">
              <div>
                <p className="font-noto font-medium text-sm md:text-[16px] text-center  cursor-pointer text-[#2e3346]">
                  Sign Up
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <p className="border border-[#cbced5] rounded-md px-3 py-[11px] text-[#2e3346] font-noto text-[13px] md:text-[15px]">
                  <sub>BD+</sub>880
                </p>
                <input
                  className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                  type="text"
                  placeholder="Please enter your phone number"
                />
              </div>
              <div className="mt-2">
                
                <input
                  className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                  type="text"
                  placeholder="Please enter your Name"
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" />
                <p className="text-gray-500 text-[13px] md:text-[14px] font-normal font-noto leading-snug">
                  By creating and/or using your account, you agree to our{" "}
                  <span className="text-[#1e71ff]">Terms of Use</span> and{" "}
                  <span className="text-[#1e71ff]">Privacy Policy</span>.
                </p>
              </div>
              <ButtonOne
                className="mt-4 cursor-pointer"
                children={
                  <div className="flex  items-center relative">
                    <MdOutlinePhoneAndroid className="text-xl md:text-2xl text-gray-500 absolute left-2" />
                    <p className="text-center w-full text-[13px] md:text-[15px] capitalize text-white font-bold tracking-wide font-noto">
                      Send code via SMS
                    </p>
                  </div>
                }
              />
              <div className="flex items-center mt-2 font-noto font-medium text-sm justify-center gap-1">
                <p className="text-[#a7a6a6]  ">Already have an account?</p>
                <Link to={"/signup"} className="text-[#1e71ff] font-normal">
                  Log in Now
                </Link>
              </div>
              <p
                className={`font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] text-center  mt-10 md:mt-12 
            `}
              >
                Or, login with
              </p>
              <div>
                <div className="flex items-center gap-6 mt-3 md:mt-5 justify-center">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img
                      className="w-5"
                      src="/images/icons/google.svg"
                      alt=""
                    />
                    <p className="font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] ">
                      Google
                    </p>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img
                      className="w-5"
                      src="/images/icons/facebook.svg"
                      alt=""
                    />
                    <p className="font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] ">
                      Facebook
                    </p>
                  </div>
                </div>
              </div>

              <IoClose
                onClick={signUpChackerHandle}
                className="absolute top-2 md:top-3 right-2 md:right-3 text-xl md:text-3xl text-[#a7a6a6] opacity-80"
              />
            </div>
          </div>
        ) : (
          console.log(Error)
        )}
        {/* end of sign form  */}

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
                      {text == "JHZEHAN'S ACCOUNT" ? (
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
                    className={`${props.loginSuccess ? "hidden" : "block"}`}
                    onClick={() => {
                      signUpChackerHandle()
                    }}
                  >
                    <p className="text-white font-[400] text-[14px] hover:text-gray-200 transition uppercase">
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
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
            cartLegth={props.addingItems.length}
            loginSuccess={props.loginSuccess}
          />
        </div>
      </div>
      <div className="h-20 md:h-36 w-full"></div>
    </>
  );
};
