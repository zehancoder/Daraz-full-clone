import "./App.css";
import { Heading } from "./components/common/Headings";
import { HeroSec } from "./components/landingPage/HeroSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForYouItem } from "./components/landingPage/LinkingPages/ForyouItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { ViewItem } from "./components/common/ViewItem";
import { ForyouProduct } from "./components/landingPage/JustforYouProduct";
import { Massege } from "./components/common/Massege";
import { ShopAllItem } from "./components/landingPage/LinkingPages/ShopAll";
import { CommonFooter } from "./components/common/CommonFooter";
import { LoginPage } from "./components/common/Login";
function App() {
  const [productID, setProductID] = useState(null)

  const IdHandler = (mainId) => {
    setProductID(mainId)
  }

  const [loginStart, setLoginStart] = useState(false);

  const [loginSuccess, setLoginSuccess] = useState(null)

  // add forgot password functionality
  const [forgotPass, setForgotPass] = useState(false);
  const forgotPssHandler = (ans) => {
    setForgotPass(ans);
  };
  return (
    <>
      <BrowserRouter >
        <Heading setLoginStart = {setLoginStart} loginStart = {loginStart} loginSuccess={loginSuccess} />
        <Routes>
          <Route path="/" element={<HeroSec IdHandler = {IdHandler}></HeroSec>} />
          <Route path="/viewItem" element={<ViewItem productId ={productID}></ViewItem>}/>
          <Route path="/forYouItem" element= {<ForYouItem/>}/>
          <Route path="/shopAll" element = {<ShopAllItem IdHandler = {IdHandler}/>} />
        </Routes>
        <LoginPage loginStart = {loginStart} setLoginStart = {setLoginStart} loginSuccess={loginSuccess} setLoginSuccess={setLoginSuccess} forgotPass={forgotPass} forgotPssHandler={forgotPssHandler}/>
        <Massege/>
      </BrowserRouter>
    </>
  );
}

export default App;
 