import React, { useState } from "react";
import { ButtonOne } from "./Buttons";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { app } from "../../firebaseApp/fireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function SignUp({ signForm, setSignUpForm, userName, setUserName }) {
  // user name input handle
  const [userNameInput, setUserNameInput] = useState("");
  // signup chacker functionlity
  const signUpChackerHandle = () => {
    setSignUpForm(!signForm);
   
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signUp massege
  const [signUpMassege, setSignUpMassege] = useState(false);
  // email or pass wrong msg
  const [wrongEmailPass, setWrongEmailPass] = useState(false);
  // envalid email massege
  const [envalidEmail, setEnvalidEmail] = useState(false);
  // massege text
  const [massegeText, setMassegeText] = useState("");

  // set up auth form
  const signUpUser = (e) => {
    e.preventDefault();
     setUserName(userNameInput)
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setSignUpMassege(true);
        setMassegeText("Successfuly SignUp");
        setSignUpForm(false);
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.massege;
        if (errCode == "auth/invalid-email") {
          setEnvalidEmail(true);
          setMassegeText("You enter Invalid email!");
        } else {
          setSignUpMassege(true);
          setMassegeText("This user is Already exist");
        }
      });
    setTimeout(() => {
      setEnvalidEmail(false);

      setWrongEmailPass(false);
      setSignUpMassege(false);
    }, 2500);
  };

  return (
    <form typeof="submit">
      {/* login notification's */}
      <div className="fixed bottom-28">
        <div
          className={`transform transition duration-300 ${
            signUpMassege || wrongEmailPass || envalidEmail
              ? "-translate-x-[0px]"
              : "-translate-x-full"
          }`}
        >
          <p
            className={`text-[14px] font-noto rounded-tr-lg  rounded-br-lg transition font-medium border bg-white ${
              setSignUpMassege ? "text-blue-400" : "text-red-400"
            } px-3 py-4 customShadow z-[99]`}
          >
            {massegeText}
          </p>
        </div>
      </div>
      {/* make signUp form */}
      {signForm && (
        <div className="fixed z-50 top-[50%] left-[50%] bg-white formShadow h-[500px] rounded-lg max-w-[440px] transform -translate-x-[50%] -translate-y-[50%]">
          <div className="relative px-6 py-5 ">
            <div>
              <p className="font-noto font-medium text-sm md:text-[16px] text-center  cursor-pointer text-[#2e3346]">
                Sign Up
              </p>
            </div>

            <div className=" mt-3">
              <label
                className="text-[14px] font-medium font-noto text-gray-600"
                htmlFor=""
              >
                Name
              </label>
              <input
                onChange={(e) => setUserNameInput(e.target.value).toUpperCase()}
                value={userNameInput}
                className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                type="text"
                placeholder="Please enter your name"
                required
              />
            </div>
            <div className=" mt-2">
              <label
                className="text-[14px] font-medium font-noto text-gray-600"
                htmlFor=""
              >
                {" "}
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                type="text"
                placeholder="Please enter your email"
                required
              />
            </div>
            <div className=" mt-2">
              <label
                className="text-[14px] font-medium font-noto text-gray-600"
                htmlFor=""
              >
                {" "}
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[11px] tracking-tighter"
                type="text"
                placeholder="Please enter your password"
                required
              />
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" />
              <p className="text-gray-500 text-[11px] md:text-[12px] font-normal font-noto leading-snug">
                By creating and/or using your account, you agree to our{" "}
                <span className="text-[#1e71ff]">Terms of Use</span> and{" "}
                <span className="text-[#1e71ff]">Privacy Policy</span>.
              </p>
            </div>
            <ButtonOne
              className="mt-4 cursor-pointer"
              children={
                <div
                  className="flex  items-center relative"
                  onClick={signUpUser}
                >
                  <p className="text-center w-full text-[13px] md:text-[15px] capitalize text-white font-bold tracking-wide font-noto">
                    Confirm
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
              className={`font-noto text-[12px] md:text-[14px] font-medium text-[#a7a6a6] text-center  mt-2 md:mt-3 
            `}
            >
              Or, login with
            </p>
            <div>
              <div className="flex items-center gap-6 mt-3 md:mt-5 justify-center">
                <div className="flex items-center gap-2 cursor-pointer">
                  <img className="w-5" src="/images/icons/google.svg" alt="" />
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
      )}
      {/* end of sign form  */}
    </form>
  );
}

export default SignUp;
