import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const ForgotPass = ({forgotPssHandler, setLoginStart}) => {
    const forgotPssHandler3 = () => {
        forgotPssHandler(false)
    }
    const [myEmail, setMyEmail] = useState()
    const email = "example123@gmail.com";

    const edit = email.split("");
    const emailComfirmation = () => {
      alert("Enter this Email example123@gmail.com")
    }
    const inputValTrack = (e) => {
      setMyEmail(e.target.value);
    }
    if(myEmail != null){
      
    }
    const closeForgotPass = () => {
      setLoginStart(false)
      forgotPssHandler(false)
    }
    
  return (
    <>
      <div className="px-5 py-5 bg-white h-full relative">
        <div className="flex items-center justify-between ">
          <p className="text-[#2e3346] font-noto font-bold text-[12px] md:text-[15px]">
            Forgot your password?
          </p>
          <IoClose className="text-xl md:text-2xl font-medium font-noto cursor-pointer text-[#a7a6a6]" onClick={closeForgotPass}/>
        </div>
        <div>
          <p className="font-noto font-normal text-[12px] md:text-[13.5px] mt-10 text-[#595f6d]">Please enter the account that you want to reset the password.</p>
          <p className="text-[#2e3346] font-noto font-bold text-[12px] mt-8 md:text-[14px]">Phone Number or Email</p>
          <input
                  className="border outline-none text-[13px] md:text-[15px]  font-medium text-[#2e3346] font-noto border-[#cbced5] rounded-md w-full px-3 py-[13px] tracking-tighter"
                  type="email"
                  placeholder="Please enter your Phone or Email"
                  onChange={inputValTrack}
                  value={myEmail}
                />
        </div>
        <div className="absolute bottom-3  right-3">
            <button className="border-[1px] rounded-lg border-[#ff6c23]  cursor-pointer text-[#ff6c23] px-5 text-[14px] md:text-[16px] font-medium font-noto py-1.5 mr-2 hover:bg-[#4e3f721f]" onClick={forgotPssHandler3}>Back</button>
            <button className="bg-[#ff6c23] font-noto font-medium text-[14px] md:text-[16px] border border-[#ff6c23] hover:opacity-95 rounded-lg cursor-pointer text-white px-5 py-1.5" onClick={emailComfirmation}>Confirm</button>
        </div>
      </div>
    </>
  );
};
