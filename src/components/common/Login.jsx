import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { ButtonOne } from "./Buttons";
import { Form, Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { ForgotPass } from "./ForgotPass";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseApp/fireBase";

const auth = getAuth(app);

export const LoginPage = ({
  loginStart,
  setLoginStart,
  loginSuccess,
  setLoginSuccess,
  forgotPass,
  forgotPssHandler,
  signUpMassege,
  setSignUpMassege,
  massegeText,
  setMassegeText,
}) => {
  // setup login funcitonality
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const loginHandle = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPass)
      .then((value) => {
        setLoginStart(false);
        setTimeout(() => {
           setSignUpMassege(true)

          setMassegeText("Successfully Login");
          setTimeout(() => {
            setSignUpMassege(false)
          }, 2000)
        }, 2000);
        setLoginSuccess(true);
      })
      .catch(() => {
        setMassegeText("Wrong email or password");
      });

    setTimeout(() => {
      setSignUpMassege(false);
    }, 2500);
  };

  const [passInput, setPassInput] = useState([]);
  let password = "12345678";
  const inputpassTrack = (e) => {
    setPassInput([e.target.value]);
  };
  let str = parseInt(passInput.toString());
  let mainPass = parseInt(password);

  // console.log(passInput)
  const [eye, setEye] = useState(true);
  const eyeCntrl = () => {
    setEye(!eye);
  };
  const [loginSystem, setLoginSystem] = useState(false);
  const logincntrlTopass = () => {
    setLoginSystem(false);
  };
  const logincntrlToNum = () => {
    setLoginSystem(true);
  };

  const CloseLogin = () => {
    setLoginStart(!loginStart);
  };

  //   add login functionality

  const CheckLogin = () => {
    if (str == mainPass) {
      setLoginSuccess(true);
      setLoginStart(false);
    } else if (str != mainPass) {
      setLoginSuccess(false);
      setTimeout(() => {
        alert("password is 12345678");
      }, 500);
    }
  };

  // forgot password functionality
  const forgotPssHandler2 = () => {
    forgotPssHandler(true);
  };
  return (
    <>
      <div
        className={`bg-white fixed top-[80%] md:top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[80%] md:-translate-y-[40%] w-[300px] md:w-[430px] h-[420px] md:h-[470px] rounded-lg ${
          loginStart ? "block formShadow z-50" : "hidden"
        } overflow-hidden`}
      >
        <div
          className={`px-6 py-5 relative ${
            forgotPass
              ? "translate-y-full opacity-0"
              : "tranltey-100 opacity-100"
          }`}
        >
          <div className="grid grid-cols-12 items-center ">
            <div
              className=" h-6 border-r-[0] border-[#e3e7f1] col-span-6"
              onClick={logincntrlTopass}
            >
              <p
                className={`font-noto font-medium text-[14px] md:text-[16px] text-center  cursor-pointer ${
                  loginSystem ? " text-[#858b9c]" : "text-[#2e3346]"
                }`}
              >
                Password
              </p>
            </div>
            <div
              className=" h-6 border-l border-[#e3e7f1] col-span-6"
              onClick={logincntrlToNum}
            >
              <p
                className={`font-noto font-medium text-sm md:text-[16px] text-center  cursor-pointer ${
                  loginSystem ? " text-[#2e3346]" : "text-[#858b9c] "
                }`}
              >
                Phone Number
              </p>
            </div>
          </div>
          <div className="mt-10 ">
            <div>
              <div className={`${loginSystem ? "hidden" : "block"}`}>
                <input
                  className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[13px] tracking-tighter"
                  type="email"
                  placeholder="Please enter your Phone or Email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                  value={loginEmail}
                />
                <div
                  className={`flex justify-between items-center border-[#cbced5] border mt-2 md:mt-4 rounded-md w-full px-3 py-[13px] `}
                >
                  <input
                    className=" outline-none text-[13px] md:text-[15px] w-[80%] font-medium text-[#2e3346] font-noto  tracking-tighter"
                    type={`${eye ? "password" : "text"}`}
                    placeholder="Please enter your password"
                    onChange={(e) => setLoginPass(e.target.value)}
                    value={loginPass}
                  />
                  <div className="bg-white flex text-[17px] md:text-[20px] text-[#a7a6a6]">
                    <FaEye
                      className={`cursor-pointer  ${eye ? "hidden" : "block"}`}
                      onClick={eyeCntrl}
                    />
                    <RiEyeCloseFill
                      className={`cursor-pointer  ${eye ? "block" : "hidden"}`}
                      onClick={eyeCntrl}
                    />
                  </div>
                </div>
              </div>
              <div
                className={` ${
                  loginSystem ? "block mt-16 md:mt-20" : "mt-10 md:mt-12 hidden"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p className="border border-[#cbced5] rounded-md px-3 py-[11px] text-[#2e3346] font-noto text-[13px] md:text-[15px]">
                    <sub>BD+</sub>880
                  </p>
                  <input
                    className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                    type="text"
                    placeholder="Please enter your phone number"
                  />
                </div>
                <ButtonOne
                  className={` ${
                    loginSystem ? "mt-12 md:mt-16" : "mt-10 md:mt-12"
                  }`}
                  children={
                    <div className="flex  items-center relative">
                      <MdOutlinePhoneAndroid className="text-xl md:text-2xl text-gray-500 absolute left-2" />
                      <p className="text-center w-full text-[13px] md:text-[15px] capitalize text-white font-bold tracking-wide font-noto">
                        Send code via SMS
                      </p>
                    </div>
                  }
                />
              </div>

              {/* login onclick fake password error */}
              <p
                className={`text-red-500 font-noto text-[12px] md:text-sm font-medium w-32 absolute ${
                  loginSystem ? "hidden" : "block"
                }`}
              >
                {loginSuccess ? "" : "password incorrect"}
              </p>

              <p
                className={`float-end font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] mt-1 cursor-pointer ${
                  loginSystem ? "hidden" : "block"
                }`}
                onClick={forgotPssHandler2}
              >
                Forgot password?
              </p>
            </div>
          </div>
          <button
            className={` transition mt-14 opacity-95 w-full bg-[#ff6c23] py-2 text-white font-noto font-medium uppercase text-[14px] md:text-[16px]  px-2 text-center rounded-md hover:opacity-100 cursor-pointer ${
              loginSystem ? "hidden" : "block"
            }`}
            onClick={loginHandle}
          >
            Login
          </button>

          <div className="flex items-center mt-2 font-noto font-medium text-sm justify-center gap-1">
            <p className="text-[#a7a6a6]  ">Don't have an account?</p>
            <Link to={"/signup"} className="text-[#1e71ff] font-normal">
              Sign up
            </Link>
          </div>
          <p
            className={`font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] text-center ${
              loginSystem ? "mt-12 md:mt-16" : "mt-8 md:mt-11"
            }`}
          >
            Or, login with
          </p>
          <div>
            <div className="flex items-center gap-6 mt-5 md:mt-7 justify-center">
              <div className="flex items-center gap-2 cursor-pointer">
                <img className="w-5" src="/images/icons/google.svg" alt="" />
                <p className="font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] ">
                  Google
                </p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <img className="w-5" src="/images/icons/facebook.svg" alt="" />
                <p className="font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] ">
                  Facebook
                </p>
              </div>
            </div>
          </div>

          {/* close Icon */}
          <IoClose
            className="absolute top-2 md:top-3 right-2 md:right-3 text-xl md:text-3xl text-[#a7a6a6] opacity-80"
            onClick={CloseLogin}
          />
        </div>

        <div
          className={`absolute transition duration-200 ease-linear top-0 w-full h-full ${
            forgotPass
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <ForgotPass
            forgotPssHandler={forgotPssHandler}
            setLoginStart={setLoginStart}
          />
        </div>
      </div>
    </>
  );
};
